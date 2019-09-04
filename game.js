let offsetY = (maxHeight, rectangle) => maxHeight - rectangle.height - rectangle.y;

const radius = 10;

function renderRoundedRectangle(context, x, y, width, height) {
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
}

let PlayerState = {
    Air: "air",
    Ground: "ground",
    Wall : "wall",
    Dead: "dead"
};

let player = {
    x: 100,
    y: window.innerHeight - 1,
    dx: 0,
    dy: 0,
    width: 75,
    height: 75,
    state: PlayerState.Air
};

function renderPlayer(context, player, level) {
    context.beginPath();
    let y = offsetY(context.canvas.height, player);
    context.shadowBlur = 10;
    renderRoundedRectangle(context, player.x, y, player.width, player.height);
    context.fillStyle = level.color3;
    context.fill();
    context.beginPath()
    let x2 = player.dx > 0 ? player.x + 4 / 5 * player.width : player.x + 1 / 5 * player.width;
    if (player.state == PlayerState.Dead) {
        context.fillStyle = "crimson";
        context.shadowColor = "crimson";
        renderRoundedRectangle(context, player.x + 0.5 * player.width - 7.5, y + 12.5, 15, 50);
        context.fill();
        renderRoundedRectangle(context, player.x + 12.5, y + 0.5 * player.height - 7.5, 50, 15);
    } else {
        context.fillStyle = level.color5;
        context.shadowColor = level.color5;
        context.ellipse(player.x + player.width / 2, context.canvas.height - 2 / 5 * player.height - player.y, 5, 15, 0, 0, 2 * Math.PI);
        context.ellipse(x2, y + 3 / 5 * player.height, 5, 15, 0, 0, 2 * Math.PI);
    }
    context.fill();
    context.shadowColor = "black";
    context.shadowBlur = 10;
}

function playNote(context, value) {
    if (!value) return;
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

function renderAudio(context, platforms) {
    for (let platform of platforms)
        if (platform.firstTrigger) playNote(context, platform.note);
}

function renderFx(context, game) {
    for (i = 0; i < game.platforms.length; i++) {
        let platform = game.platforms[i];
        let color = game.level[`color${i % 3 + 3}`];
        if (platform.firstTrigger) {
            platform.wave = 0;
        }
        if (platform.wave !== undefined) {
            platform.wave += game.delta * 0.2;
            context.save();
            context.globalAlpha = 1 - platform.wave / 100;
            if (platform.wave >= 100) platform.wave = undefined; 
            renderRoundedRectangle(context,
                platform.x - platform.wave,
                offsetY(context.canvas.height, platform) - platform.wave,
                platform.width + 2 * platform.wave,
                platform.height + 2 * platform.wave);
            context.strokeStyle = color;
            context.lineWidth = 10;
            context.stroke();
            context.restore();
        }
        if (platform.triggering) {
            renderRoundedRectangle(context,
                platform.x,
                offsetY(context.canvas.height, platform),
                platform.width,
                platform.height);
            context.fillStyle = color;
            context.fill();
        }
    }
}

function renderPlatform(context, platform, level) {
    renderRoundedRectangle(context,
        platform.x,
        offsetY(context.canvas.height, platform),
        platform.width,
        platform.height);
    context.fillStyle = level.color2;
    context.fill();
}

function renderStar(context, x, y, level) {
    context.beginPath();
    context.fillStyle = level.color5;
    context.moveTo(x + 25, y + 25);
    context.quadraticCurveTo(x + 50, y - 50, x + 75, y + 25);
    context.quadraticCurveTo(x + 150, y + 50, x + 75, y + 75);
    context.quadraticCurveTo(x + 50, y + 150, x + 25, y + 75);
    context.quadraticCurveTo(x - 50, y + 50, x + 25, y + 25);
    context.fill();
}

function renderMoon(context, level) {
    context.beginPath();
    context.fillStyle = level.color3;
    context.moveTo(context.canvas.width / 2 + 200, 300);
    context.arc(context.canvas.width / 2, 300, 200, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle = level.color4;
    context.moveTo(context.canvas.width / 2 + 150, 300);
    context.arc(context.canvas.width / 2, 300, 150, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle = level.color5;
    context.moveTo(context.canvas.width / 2 + 100, 300);
    context.arc(context.canvas.width / 2, 300, 100, 0, 2 * Math.PI);
    context.fill();
}

function renderTree(context, x, y) {
    let scale = 1;
    context.beginPath();
    context.fillStyle = "#9e579d";
    context.moveTo(x, y);
    context.quadraticCurveTo(x + 50 * scale, y + 25 * scale, x + 100 * scale, y);
    context.quadraticCurveTo(x + 75 * scale, y - 75 * scale, x + 50 * scale, y - 100 * scale);
    context.quadraticCurveTo(x + 25 * scale, y - 75 * scale, x, y);
    context.fill();
}

function renderStaticBackground(context, level) {
    context.beginPath()
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = level.color1;
    context.fill();
}

function renderBackground(context, level) {
    context.beginPath()
    renderMoon(context, level);
    renderStar(context, 200, 150, level);
    let scale = 0.5;
    context.scale(scale, scale);
    renderStar(context, 1600 / scale, 200 / scale, level);
    context.scale(1 / scale, 1 / scale);
    scale = 0.2;
    context.scale(scale, scale);
    renderStar(context, 600 / scale, 400 / scale, level);
    context.scale(1 / scale, 1 / scale);
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

function walkthrough(game) {
    if (game.player.y <= game.height) {
        game.player.y = game.height + 8;
        update(game);
    }
    let current = null;
    let currentPlatform = null;
    let nextPlatform = null;
    let acc = 0;
    for (i = 0; i < game.sequence.length; i++) {
        let platform = game.sequence[i];
        acc += platform.time;
        if (game.stateTime / 500 >= acc) {
            if (currentPlatform != null) {
                nextPlatform = platform;
            }
            if (platform.triggering) {
                currentPlatform = platform;
                nextPlatform = null;
                current = i;
            }
        }
    }
    if (currentPlatform == null && nextPlatform == null) {
        if (game.sequence[0].triggering) {
            game.sequence[0].firstTrigger = false;
        } else {
            game.sequence[0].triggering = true;
            game.sequence[0].firstTrigger = true;
        }
    }
    if (currentPlatform != null && nextPlatform == null) {
        currentPlatform.firstTrigger = false;
    }
    if (currentPlatform != null && nextPlatform != null) {
        currentPlatform.triggering = false;
        nextPlatform.triggering = true;
        nextPlatform.firstTrigger = true;
    }
    if ((current == game.sequence.length - 1) && game.stateTime / 500 >= acc + 2) {
        currentPlatform.triggering = false;
        game.next = 0;
        game.state = GameState.Playing;
        game.player.x = 100;
    }
}

function credits() {
    document.getElementById("credits").classList.add("changing");
    document.getElementById("home").style.display = "none";
}

function dead(game) {
    if (game.stateTime == 0) {
        update(game);
    }
    if (game.stateTime > 1000) {
        lose(game);
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
        case "KeyA":
            if (value) playNote(audioContext, 1108.73);
            break;
        case "KeyS":
            if (value) playNote(audioContext,  1174.66);
            break;
        case "KeyZ":
            if (!value) {
                if (game.state == GameState.Playing) {
                    game.state = GameState.Walkthrough;
                    game.stateTime = 0;
                }
            }
            break;
        case "Escape":
            if (!value) {
                escape();
            }
    }
}

let GameState = {
    Walkthrough: "Walkthrough",
    Playing: "Playing",
    FreePlaying: "FreePlaying",
    NextLevel: "NextLevel",
    Dead: "Dead",
    Idle: "Idle"
}

let game = {
    player: player,
    currentLevel: 0,
    level: null,
    platforms: null,
    sequence: null,
    next: 0,
    input: input,
    width: window.innerWidth,
    height: window.innerHeight,
    lastStep: 0,
    delta: 0,
    state: GameState.Idle,
    stateTime: 0
};

function getCollision(player, platform) {
    let dx1 = platform.x + platform.width - player.x;
    let dx2 = player.x + player.width - platform.x;
    let dy1 = platform.y + platform.height - player.y;
    let dy2 = player.y + player.height - platform.y;
    let collide = dx1 > 0 && dx2 > 0 && dy1 > 0 && dy2 > 0;
    return {
        collide: collide,
        width: dx1 < dx2 ? dx1 : -dx2,
        height: dy1 < dy2 ? dy1 : -dy2
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
                platformMatch.firstTrigger = false;
                collisionMatch = collisionInfo;
                platformMatch = platform;
            } else {
                platform.triggering = false;
                platform.firstTrigger = false;
            }
        } else {
            platform.triggering = false;
            platform.firstTrigger = false;
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
        if (input.left) player.dx += -0.005 * delta;
        if (input.right) player.dx += 0.005 * delta;
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

    if (player.x + player.width + 10 <= 0 || player.x - 10 >= game.width
        || player.y + player.height + 10 <= 0 || player.y - 10 >= game.height) {
        game.state = GameState.Dead;
        player.state = PlayerState.Dead;
        game.stateTime = 0;
    }

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
        if (!bestPlatformMatch.triggering) {
            bestPlatformMatch.firstTrigger = true;
            if (game.state == GameState.Playing) {
                if (bestPlatformMatch != game.sequence[game.next]) {
                    game.state = GameState.Dead;
                    player.state = PlayerState.Dead;
                    game.stateTime = 0;
                }
                else {
                    if (game.next == game.sequence.length - 1) {
                        game.state = GameState.NextLevel;
                        game.stateTime = 0;
                    } else {
                        game.next++;
                    }
                }
            }
        }
        if (bestPlatformMatch.triggering && bestPlatformMatch.firstTrigger) bestPlatformMatch.firstTrigger = false;
        bestPlatformMatch.triggering = true;
    } else {
        player.state = PlayerState.Air;
    }
}

function bounceAnimation(t) {
    return 1 - Math.exp(-8 * t) * Math.cos(8 * t);
}

function nextLevelUpdate(game) {
    if (game.stateTime == 0) {
        update(game);
        levelContext.save();
        backgroundContext.save();
        playerContext.save();
        fxContext.save();
    }
    if (game.stateTime >= 1000 && game.stateTime <= 2000) {
        let currentAnimation = bounceAnimation(2 - game.stateTime / 1000);
        let widthAnimation = game.width * (1 - currentAnimation);
        let heightAnimation = game.height * (1 - currentAnimation);
        playerContext.setTransform(1, 0, 0, 1, widthAnimation, 0);
        fxContext.setTransform(1, 0, 0, 1, 0, heightAnimation);
        backgroundContext.setTransform(1, 0, 0, 1, 0, -heightAnimation);
        levelContext.setTransform(1, 0, 0, 1, 0, heightAnimation);
    }
    if (game.stateTime > 2000 && game.stateTime <= 2500) {
        if (game.next != 0) {
            nextLevel(game);
            game.animFunc = bounceAnimation(game.height, 0);
        }
    }
    if (game.stateTime > 2500 && game.stateTime <= 3500) {
        let currentAnimation = bounceAnimation(game.stateTime / 1000 - 2.5);
        let widthAnimation = game.width * (1 - currentAnimation);
        let heightAnimation = game.height * (1 - currentAnimation);
        playerContext.setTransform(1, 0, 0, 1, widthAnimation, 0);
        fxContext.setTransform(1, 0, 0, 1, 0, heightAnimation);
        backgroundContext.setTransform(1, 0, 0, 1, 0, -heightAnimation);
        levelContext.setTransform(1, 0, 0, 1, 0, heightAnimation);
    }
    if (game.stateTime > 3500) {
        levelContext.restore();
        playerContext.restore();
        backgroundContext.restore();
        fxContext.restore();
    }
    if (game.stateTime >= 4000) {
        game.state = GameState.Playing;
    }
}

function play() {
    game.player.x = 100;
    game.player.y = game.height + 8;
    game.player.dx = 0;
    game.player.dy = 0;
    game.state = GameState.Playing;
    game.next = 0;
    if (!game.level || game.level == freePlayLevel) {
        game.currentLevel = 0;
        game.level = levels[0];
        game.platforms = levels[0].platforms;
        game.sequence = levels[0].sequence;
        for (let platform of game.platforms) renderPlatform(levelContext, platform, game.level);
    }
    homeMenu.style.display = "none";
}

function escape() {
    if (game.state == GameState.FreePlaying) {
        game.state = GameState.Idle;
        document.getElementById("home").style.display = "block";
        levelContext.clearRect(0, 0, game.width, game.height);
        playerContext.clearRect(0, 0, game.width, game.height);
    }
    if (game.state == GameState.Playing) {
        game.state = GameState.Idle;
        document.getElementById("home").style.display = "block";
    }
}

function freePlay() {
    game.player.x = 100;
    game.player.y = game.height + 8;
    game.player.dx = 0;
    game.player.dy = 0;
    game.level = freePlayLevel;
    game.sequence = freePlayLevel.sequence;
    game.platforms = freePlayLevel.platforms;
    game.state = GameState.FreePlaying;
    if (game.level) {
        levelContext.clearRect(0, 0, game.width, game.height);
    }
    for (let platform of game.platforms) renderPlatform(levelContext, platform, game.level);
    document.getElementById("home").style.display = "none";
}

function lose(game) {
    game.player.x = 100;
    game.player.y = game.height + 8;
    game.player.dx = 0;
    game.player.dy = 0;
    game.player.state = PlayerState.Air;
    game.next = 0;
    game.state = game.level == freePlayLevel ? GameState.FreePlaying : GameState.Playing;
}

function nextLevel(game) {
    game.player.x = 100;
    game.player.y = game.height + 8;
    game.player.dx = 0;
    game.player.dy = 0;
    if (game.currentLevel == levels.length - 1) { 
        credits();
    }
    else game.currentLevel++;
    game.level = levels[game.currentLevel];
    game.platforms = game.level.platforms;
    game.sequence = game.level.sequence;
    game.next = 0;
}

let staticBackgroundCanvas = document.getElementById("static-background");
staticBackgroundCanvas.width = game.width;
staticBackgroundCanvas.height = game.height;
let staticBackgroundContext = staticBackgroundCanvas.getContext("2d");
let backgroundCanvas = document.getElementById("background");
backgroundCanvas.width = game.width;
backgroundCanvas.height = game.height;
let backgroundContext = backgroundCanvas.getContext("2d");
backgroundContext.shadowColor = "black";
backgroundContext.shadowBlur = 10;
let levelCanvas = document.getElementById("level");
levelCanvas.width = game.width;
levelCanvas.height = game.height;
let levelContext = levelCanvas.getContext("2d");
levelContext.shadowColor = "black";
levelContext.shadowBlur = 10;
let fxCanvas = document.getElementById("fx");
fxCanvas.width = game.width;
fxCanvas.height = game.height;
let fxContext = fxCanvas.getContext("2d");
let playerCanvas = document.getElementById("player");
playerCanvas.width = game.width;
playerCanvas.height = game.height;
let playerContext = playerCanvas.getContext("2d");
playerContext.shadowColor = "black";
playerContext.shadowBlur = 10;
let audioContext = new AudioContext();
renderStaticBackground(staticBackgroundContext, levels[0]);
renderBackground(backgroundContext, levels[0]);
// renderTree(backgroundContext, 0, 0);
let homeMenu = document.getElementById("home");

function step(timestamp) {
    game.delta = timestamp - game.lastStep;
    fxContext.clearRect(0, 0, game.width, game.height);
    if (game.state == GameState.Playing || game.state == GameState.FreePlaying) {
        playerContext.clearRect(0, 0, game.width, game.height);
        update(game);
        updateGamepadInput(input);
        renderPlayer(playerContext, game.player, game.level);
        renderFx(fxContext, game);
        renderAudio(audioContext, game.platforms);
    }
    if (game.state == GameState.Walkthrough) {
        playerContext.clearRect(0, 0, game.width, game.height);
        game.stateTime += game.delta;
        walkthrough(game);
        renderPlayer(playerContext, game.player, game.level);
        renderFx(fxContext, game);
        renderAudio(audioContext, game.platforms);
    }
    if (game.state == GameState.Dead) {
        dead(game);
        game.stateTime += game.delta;
        renderFx(fxContext, game);
        renderAudio(audioContext, game.platforms);
    }
    if (game.state == GameState.Idle) {
        
    }
    if (game.state == GameState.NextLevel) {
        playerContext.clearRect(0, 0, game.width, game.height);
        backgroundContext.clearRect(0, 0, game.width, game.height);
        levelContext.clearRect(0, 0, game.width, game.height);
        nextLevelUpdate(game);
        game.stateTime += game.delta;
        renderBackground(backgroundContext, game.level);
        for (let platform of game.platforms) renderPlatform(levelContext, platform, game.level);
        renderPlayer(playerContext, game.player, game.level);
        renderFx(fxContext, game);
        renderAudio(audioContext, game.platforms);
    }
    game.lastStep = timestamp;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);