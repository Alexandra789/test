let startButton = document.querySelector('.start-button');
let stopButton = document.querySelector('.stop-button');

let canvas = document.getElementById("myObject");
let ctx = canvas.getContext("2d");
// let fromX = 0;
// let fromY = canvas.height;
// let dx = 2;
// let dy = -1;
//

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.speed = speed;
        this.radius = 10;
        this.color = 'red';
        // this.drawBall();
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    moveTo() {
        ctx.closePath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBall();
        this.x += dx;
        this.y += -dy;
    };

    // setInterval(moveTo, this.speed);
}

let fromX = document.querySelector('#fromX').value || 0;
let fromY = document.querySelector('#fromY').value || canvas.height - 30;
let speed = document.querySelector('#speed').value || 10;
startButton.addEventListener('click', () => {
    clearInterval()
    let ball = new Ball(fromX, fromY);
    setInterval(function () {
        ball.moveTo(fromX, fromY)
    }, speed);
    console.log(fromY);
    console.log(fromX);
})

let ball = new Ball(fromX, fromY);
setInterval(function () {
    ball.moveTo(fromX, fromY)
}, 10);

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(fromX, fromY, 2, 5, Math.PI * 2);
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.closePath();
// }
//
// function draw() {
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     fromX += dx;
//     fromY += dy;
// }

// setInterval(draw, 1000);

