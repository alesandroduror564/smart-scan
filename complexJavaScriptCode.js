/*
 * Filename: complexJavaScriptCode.js
 * Content: This code implements a web-based game where players can control a character
 *          and interact with objects in a virtual world.
 */

// Game Configuration
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SIZE = 50;

// Game Objects
const player = {
  x: GAME_WIDTH / 2 - PLAYER_SIZE / 2,
  y: GAME_HEIGHT / 2 - PLAYER_SIZE / 2,
  width: PLAYER_SIZE,
  height: PLAYER_SIZE,
  color: "red",
};

const objects = [
  { x: 100, y: 100, width: 20, height: 20, color: "blue" },
  { x: 200, y: 200, width: 30, height: 30, color: "green" },
  { x: 300, y: 300, width: 40, height: 40, color: "yellow" },
];

// Canvas and Context
const canvas = document.createElement("canvas");
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");

// Game Loop
function gameLoop() {
  update();
  render();

  requestAnimationFrame(gameLoop);
}
gameLoop();

// Update Game State
function update() {
  // Handle Player Movement
  if (Key.isDown(Key.UP) || Key.isDown(Key.W)) {
    player.y -= 5;
  }
  if (Key.isDown(Key.DOWN) || Key.isDown(Key.S)) {
    player.y += 5;
  }
  if (Key.isDown(Key.LEFT) || Key.isDown(Key.A)) {
    player.x -= 5;
  }
  if (Key.isDown(Key.RIGHT) || Key.isDown(Key.D)) {
    player.x += 5;
  }

  // Check Object Collisions
  for (let object of objects) {
    if (
      player.x < object.x + object.width &&
      player.x + player.width > object.x &&
      player.y < object.y + object.height &&
      player.y + player.height > object.y
    ) {
      // Handle collision logic here
      console.log("Player collided with an object!");
    }
  }
}

// Render Game Objects
function render() {
  // Clear Canvas
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Render Player
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.width, player.height);

  // Render Objects
  for (let object of objects) {
    context.fillStyle = object.color;
    context.fillRect(object.x, object.y, object.width, object.height);
  }
}

// Keyboard Input Handling
const Key = {
  _pressedKeys: {},
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  W: 87,
  A: 65,
  S: 83,
  D: 68,

  isDown: function (keyCode) {
    return this._pressedKeys[keyCode];
  },

  onKeydown: function (event) {
    this._pressedKeys[event.keyCode] = true;
  },

  onKeyup: function (event) {
    delete this._pressedKeys[event.keyCode];
  },
};

window.addEventListener("keydown", function (event) {
  Key.onKeydown(event);
});
window.addEventListener("keyup", function (event) {
  Key.onKeyup(event);
});
