let offsetY = (maxHeight, rectangle) => maxHeight - rectangle.height - rectangle.y;

const radius = 10;

function renderRoundedRectangle(context, x, y, width, height, fillStyle) {
    context.beginPath();
    context.moveTo(x, y + radius);
    context.lineTo(x, y + height - radius);
    context.arcTo(x, y + height, x + radius, y + height, radius);
    context.lineTo(x + width - radius, y + height);
    context.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    context.lineTo(x + width, y + radius);
    context.arcTo(x + width, y, x + width - radius, y, radius);
    context.lineTo(x + radius, y);
    context.arcTo(x, y, x, y + radius, radius);
    context.fillStyle = fillStyle;
    context.fill();
}

let PlayerState = {
    Air: "air",
    Ground: "ground",
    Wall : "wall"
};

let player = {
    x: 100,
    y: 1080,
    dx: 0,
    dy: 0,
    width: 75,
    height: 75,
    state: PlayerState.Air
};

function renderPlayer(context, player) {
    context.beginPath();
    let y = offsetY(context.canvas.height, player);
    renderRoundedRectangle(context, player.x, y, player.width, player.height, "#9e579d");
    context.beginPath()
    context.fillStyle = "white"
    let x2 = player.dx > 0 ? player.x + 4 / 5 * player.width : player.x + 1 / 5 * player.width;
    context.ellipse(player.x + player.width / 2, context.canvas.height - 2 / 5 * player.height - player.y, 5, 15, 0, 0, 2 * Math.PI);
    context.ellipse(x2, y + 3 / 5 * player.height, 5, 15, 0, 0, 2 * Math.PI);
    context.fill();
}

function playNote(context, value) {
    let oscillator = context.createOscillator();
    let gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = value;
    gainNode.gain.setValueAtTime(0, context.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
    oscillator.start(context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 1);
    oscillator.stop(context.currentTime + 1);
}

function renderPlatform(context, platform) {
    renderRoundedRectangle(context,
        platform.x,
        offsetY(context.canvas.height, platform),
        platform.width,
        platform.height,
        platform.triggering ? platform.color : "#303a52");
    if (platform.playNote) playNote(audioContext, platform.note);
}

function renderStar(context, x, y) {
    context.beginPath()
    context.fillStyle = "white";
    context.moveTo(x + 25, y + 25);
    context.quadraticCurveTo(x + 50, y - 50, x + 75, y + 25);
    context.quadraticCurveTo(x + 150, y + 50, x + 75, y + 75);
    context.quadraticCurveTo(x + 50, y + 150, x + 25, y + 75);
    context.quadraticCurveTo(x - 50, y + 50, x + 25, y + 25);
    context.fill();
}

function renderMoon(context) {
    context.beginPath();
    context.fillStyle = "#9e579d";
    context.moveTo(context.canvas.width / 2 + 200, 300);
    context.arc(context.canvas.width / 2, 300, 200, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle = "#fc85ae";
    context.moveTo(context.canvas.width / 2 + 150, 300);
    context.arc(context.canvas.width / 2, 300, 150, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle = "white";
    context.moveTo(context.canvas.width / 2 + 100, 300);
    context.arc(context.canvas.width / 2, 300, 100, 0, 2 * Math.PI);
    context.fill();
}

function renderBackground(context) {
    context.beginPath()
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#574b90";
    context.fill();
    renderMoon(context);
    renderStar(context, 200, 150);
    let scale = 0.5;
    context.scale(scale, scale);
    renderStar(context, 1600 / scale, 200 / scale);
    context.scale(1 / scale, 1 / scale);
    scale = 0.2;
    context.scale(scale, scale);
    renderStar(context, 600 / scale, 400 / scale);
}

let input = {
    left: false,
    up: false,
    right: false,
    down: false,
    xAxis: null
};
document.addEventListener("keydown", event => onKey(event.code, true), false);
document.addEventListener("keyup", event => onKey(event.code, false), false);

function updateGamepadInput(input) {
    let gamepad = navigator.getGamepads()[0];
    if (gamepad) {
        if (gamepad.buttons[0].pressed) input.up = true;
        if (!gamepad.buttons[0].pressed) input.up = false;
        if (gamepad.buttons[13].pressed) input.down = true;
        if (!gamepad.buttons[13].pressed) input.down = false;
        if (gamepad.buttons[14].pressed) input.left = true;
        if (!gamepad.buttons[14].pressed) input.left = false;
        if (gamepad.buttons[15].pressed) input.right = true;
        if (!gamepad.buttons[15].pressed) input.right = false;
        input.xAxis = gamepad.axes[0];
    }
}

function onKey(code, value) {
    switch (code) {
        case "ArrowLeft":
            input.left = value;
            break;
        case "ArrowUp":
            input.up = value;
            break;
        case "ArrowRight":
            input.right = value;
            break;
        case "ArrowDown":
            input.down = value;
            break;
        case "KeyQ":
            if (value) playNote(audioContext, 523.25);
            break;
        case "KeyW":
            if (value) playNote(audioContext, 554.37);
            break;
        case "KeyE":
            if (value) playNote(audioContext, 587.33);
            break;
        case "KeyR":
            if (value) playNote(audioContext, 622.25);
            break;
        case "KeyT":
            if (value) playNote(audioContext, 659.25);
            break;
        case "KeyY":
            if (value) playNote(audioContext, 698.46);
            break;
        case "KeyU":
            if (value) playNote(audioContext, 739.99);
            break;
        case "KeyI":
            if (value) playNote(audioContext, 783.99);
            break;
        case "KeyO":
            if (value) playNote(audioContext, 830.61);
            break;
        case "KeyP":
            if (value) playNote(audioContext, 880);
            break;
        case "KeyP":
            if (value) playNote(audioContext, 932.33);
            break;
        case "BracketLeft":
            if (value) playNote(audioContext, 987.77);
            break;
        case "BracketRight":
            if (value) playNote(audioContext, 1046.50);
            break;
    }
}

let game = {
    player: player,
    platforms: level2,
    input: input,
    width: window.innerWidth,
    height: window.innerHeight,
    currentStep: 0,
    lastStep: 0,
    delta: 0
};

function getCollision(player, platform) {
    let dx1 = platform.x + platform.width - player.x;
    let dx2 = player.x + player.width - platform.x;
    let dy1 = platform.y + platform.height - player.y;
    let dy2 = player.y + player.height - platform.y;
    let collide = dx1 > 0 && dx2 > 0 && dy1 > 0 && dy2 > 0;
    return {
        collide: collide,
        width: Math.min(dx1, dx2),
        height: Math.min(dy1, dy2)
    };
}

function collide(player, platforms) {
    let collisionMatch = null;
    let platformMatch = null;
    for (let platform of platforms) {
        let collisionInfo = getCollision(player, platform);
        if (collisionInfo.collide) {
            if (platformMatch == null) {
                collisionMatch = collisionInfo;
                platformMatch = platform;
            } else if (Math.abs(collisionInfo.width * collisionInfo.height) > Math.abs(collisionMatch.width * collisionMatch.height)) {
                platformMatch.triggering = false;
                platformMatch.playNote = false;
                collisionMatch = collisionInfo;
                platformMatch = platform;
            } else {
                platform.triggering = false;
                platform.playNote = false;
            }
        } else {
            platform.triggering = false;
            platform.playNote = false;
        }
    }
    return {
        bestCollisionMatch: collisionMatch,
        bestPlatformMatch: platformMatch
    }
}

function update(game) {
    let player = game.player;
    let delta = game.delta;
    let input = game.input;
    let platforms = game.platforms;

    if (input.xAxis != null) {
        if (input.xAxis < 0) player.dx += input.xAxis / 100 * delta;
        if (input.xAxis > 0) player.dx += input.xAxis / 100 * delta;
    } else {
        if (input.left) player.dx += -0.01 * delta;
        if (input.right) player.dx += 0.01 * delta;
    }
    if (!input.up && !input.down && !input.left && !input.right) player.dx *= 0.50;
    if (player.state == PlayerState.Ground && input.up) player.dy = 2;
    if (player.state == PlayerState.Wall && input.up) {
        if (input.left) player.dx = 1;
        if (input.right) player.dx = -1;
        player.dy = 2;
    }
    player.dy += -0.01 * delta;
    player.x += player.dx * delta;
    player.y += player.dy * delta;

    let { bestCollisionMatch, bestPlatformMatch } = collide(player, platforms);

    if (bestPlatformMatch != null) {
        if (Math.abs(bestCollisionMatch.width) < Math.abs(bestCollisionMatch.height)) {
            player.dx = 0;
            player.x += bestCollisionMatch.width;
            player.dy = -0.1;
            player.state = PlayerState.Wall;
        }
        if (Math.abs(bestCollisionMatch.height) < Math.abs(bestCollisionMatch.width)) {
            player.dy = 0;
            player.y += bestCollisionMatch.height;
            if (bestCollisionMatch.height > 0) player.state = PlayerState.Ground;
            if (bestCollisionMatch.height < 0) player.state = PlayerState.Air;
        }
        if (!bestPlatformMatch.triggering) bestPlatformMatch.playNote = true;
        if (bestPlatformMatch.triggering && bestPlatformMatch.playNote) bestPlatformMatch.playNote = false;
        bestPlatformMatch.triggering = true;
    } else {
        player.state = PlayerState.Air;
    }
}


let backgroundCanvas = document.getElementById("background");
backgroundCanvas.width = game.width;
backgroundCanvas.height = game.height;
let backgroundContext = backgroundCanvas.getContext("2d");
let playerCanvas = document.getElementById("player");
playerCanvas.width = game.width;
playerCanvas.height = game.height;
let playerContext = playerCanvas.getContext("2d");
let audioContext = new AudioContext();
renderBackground(backgroundContext);

function step(timestamp) {
    game.delta = timestamp - game.lastStep;
    playerContext.clearRect(0, 0, game.width, game.height);
    update(game);
    updateGamepadInput(input);
    renderPlayer(playerContext, game.player);
    for (let platform of game.platforms) renderPlatform(playerContext, platform);
    game.lastStep = timestamp;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);