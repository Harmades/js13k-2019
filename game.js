let PlayerState = {
    Air: "air",
    Ground: "ground"
};

let player = {
    position: { x: 100, y: 800 },
    speed: { x: 0, y: 0 },
    width: 75,
    height: 75,
    state: PlayerState.Air
};

function renderPlayer(context, player) {
    context.beginPath();
    context.rect(player.position.x, context.canvas.height - player.height - player.position.y, player.width, player.height);
    context.fillStyle = "black"
    context.fill();
}

let platform = {
    position: { x: 100, y: 300 },
    width: 500,
    height: 75,
    checkpoint: { color: "red", triggering: false, triggered: false }
};

let platform2 = {
    position: { x: 600, y: 200 },
    width: 400,
    height: 75,
    checkpoint: { color: "blue", triggering: false, triggered: false }
};

let platform3 = {
    position: { x: 1000, y: 300 },
    width: 500,
    height: 75,
    checkpoint: { color: "green", triggering: false, triggered: false }
};

function renderPlatform(context, platform) {
    context.beginPath();
    context.rect(platform.position.x, context.canvas.height - platform.height - platform.position.y, platform.width, platform.height);
    context.fillStyle = platform.checkpoint.triggering ? platform.checkpoint.color : "grey";
    context.fill();
}

let input = {
    left: false,
    up: false,
    right: false,
    down: false
};
document.addEventListener("keydown", event => onKey(event.keyCode, true), false);
document.addEventListener("keyup", event => onKey(event.keyCode, false), false);

function onKey(keyCode, value) {
    switch (keyCode) {
        case 37:
            input.left = value;
            break;
        case 38:
            input.up = value;
            break;
        case 39:
            input.right = value;
            break;
        case 40:
            input.down = value;
            break;
    }
}

let game = {
    player: player,
    platforms: [platform, platform2, platform3],
    input: input,
    width: window.innerWidth,
    height: window.innerHeight,
    currentStep: 0,
    lastStep: 0,
    delta: 0
};

function isAbove(player, platform) {
    return player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width
        && player.position.y == platform.position.y + platform.height; 
}

function getCollision(player, platform) {
    let dx1 = platform.position.x + platform.width - player.position.x;
    let dx2 = player.position.x + player.width - platform.position.x;
    let dy1 = platform.position.y + platform.height - player.position.y;
    let dy2 = player.position.y + player.height - platform.position.y;
    let collide = dx1 > 0 && dx2 > 0 && dy1 > 0 && dy2 > 0;
    return {
        collide: collide,
        width: player.speed.x <= 0 ? dx1 : -dx2,
        height: player.speed.y <= 0 ? dy1 : -dy2
    };
}

function update(game) {
    let player = game.player;
    let delta = game.delta;
    let input = game.input;
    let platforms = game.platforms;

    if (input.left) player.speed.x += -0.01 * delta;
    else if (input.right) player.speed.x += 0.01 * delta;
    else player.speed.x *= 0.50;
    if (player.state == PlayerState.Air) player.speed.y += -0.01 * delta;
    if (player.state == PlayerState.Ground && input.up) {
        player.speed.y = 2;
        player.state = PlayerState.Air;
    }
    player.position.x += player.speed.x * delta;
    player.position.y += player.speed.y * delta;
    let noCollision = true;
    for (let platform of platforms) {
        let collision = getCollision(player, platform);
        if (collision.collide) {
            if (Math.abs(collision.width) < Math.abs(collision.height)) {
                player.speed.x = 0;
                player.position.x += collision.width;
            }
            if (Math.abs(collision.height) < Math.abs(collision.width)) {
                player.speed.y = 0;
                player.position.y += collision.height;
                if (collision.height > 0) {
                    player.state = PlayerState.Ground;
                }
                if (collision.height < 0) player.state = PlayerState.Air;
            }
            noCollision = false;
        }
        if (isAbove(player, platform)) {
            platform.checkpoint.triggering = true;
            platform.checkpoint.triggered = false;
        } else {
            platform.checkpoint.triggering = false;
        }
    }
    if (noCollision) {
        player.state = PlayerState.Air;
    }
}


let canvas = document.getElementById("world");
canvas.width = game.width;
canvas.height = game.height;
let context = canvas.getContext("2d");

function step(timestamp) {
    game.delta = timestamp - game.lastStep;
    context.clearRect(0, 0, game.width, game.height);
    update(game);
    renderPlayer(context, game.player);
    for (let platform of game.platforms) renderPlatform(context, platform);
    game.lastStep = timestamp;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);