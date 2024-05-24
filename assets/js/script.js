const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 340;
canvas.height = 600;

function gameLoop() {}
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

setInterval(gameLoop, 1000/60);