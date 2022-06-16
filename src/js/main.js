let canvas = document.createElement("canvas");
canvas.width = 480;
canvas.height = 320;
let ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

ctx.fillStyle = "rgb(127, 127, 255)";
ctx.fillRect(32, 32, 32, 32);

let last_ts;
function tick(ts) {
    let dt = ts - (last_ts || ts);
    last_ts = ts;
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick)
