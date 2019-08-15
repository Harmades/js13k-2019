let PlayerState = {
    Air: "air",
    Ground: "ground"
};

let player = {
    position: { x: 0, y: 800 },
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
    position: { x: 0, y: 300 },
    width: 600,
    height: 75
};


let platform2 = {
    position: { x: 600, y: 200 },
    width: 400,
    height: 75
};

function renderPlatform(context, platform) {
    context.beginPath();
    context.rect(platform.position.x, context.canvas.height - platform.height - platform.position.y, platform.width, platform.height);
    context.fillStyle = "red"
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
    platforms: [platform, platform2],
    playerPlatform: null,
    input: input,
    width: window.innerWidth,
    height: window.innerHeight,
    currentStep: 0,
    lastStep: 0,
    delta: 0
};

function update(game) {
    let player = game.player;
    let delta = game.delta;
    let input = game.input;

    switch (player.state) {
        case PlayerState.Air:
            player.speed.y -= 0.01 * delta;
            player.position.y += player.speed.y * delta;
            for (let platform of game.platforms) {
                if (player.position.y <= platform.position.y + platform.height
                    && platform.position.x <= player.position.x
                    && player.position.x <= platform.position.x + platform.width) {
                        player.state = PlayerState.Ground;
                        player.position.y = platform.position.y + platform.height;
                        game.playerPlatform = platform;
                }
            }
            break;
        case PlayerState.Ground:
            player.speed.y = 0;
            if (player.position.x < platform.position.x
                || player.position.x > platform.position.x + platform.width) {
                    game.playerPlatform = null;
                    player.state = PlayerState.Air;
            }
            break;
    }
    if (input.left) player.speed.x += -0.01 * delta;
    else if (input.right) player.speed.x += 0.01 * delta;
    else player.speed.x *= 0.50;
    player.position.x += player.speed.x * delta;
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