class PlayingField {
    constructor() {
        this.fieldWidth = 100;
        this.fieldHeight = 100;
    }
}

class Object1 {
    constructor(x, y, dx, dy, duration, maxSpeed, startSpeed, step, rotation) {
        this.x = x;
        this.y = y;
        this.from = {
            'x': this.x,
            'y': this.y,
        }
        this.dx = dx;
        this.dy = dy;
        this.to = {
            'dx': this.dx,
            'dy': this.dy,
        }
        this.duration = duration;
        this.maxSpeed = maxSpeed;
        this.startSpeed = startSpeed;
        this.currentSpeed = {
            'startSpeed': this.startSpeed,
            'maxSpeed': this.maxSpeed,
        }
        this.height = 1;
        this.width = 1;
        this.rotation = rotation;
        this.step = step;
    }

    moveTo() {
        let playingField = new PlayingField();
        console.log(this.duration);
        while (this.duration) {
            if (this.from['x'] + this.to['dx'] > 0 && this.from['x'] + this.to['dx'] + this.width < playingField.fieldWidth && this.from['x'] + this.currentSpeed['startSpeed'] <= this.to['dx']) {
                this.from['x'] += this.currentSpeed['startSpeed'];
                console.log(`Объект находится по х на - ${this.from['x']}`);
            }
            if (this.from['y'] + this.to['dy'] > 0 && this.from['y'] + this.to['dy'] + this.height < playingField.fieldHeight && this.from['y'] + this.currentSpeed['startSpeed'] <= this.to['dy']) {
                // if(){
                this.from['y'] += this.currentSpeed['startSpeed'];
                // }
                console.log(`Объект находится по у на - ${this.from['y']}`);
            }
            this.duration--;
        }

        let up = this.from['y'] -= this.currentSpeed['startSpeed'] * this.duration;
        let down = this.from['y'] += this.currentSpeed['startSpeed'] * this.duration;
        let left = this.from['x'] -= this.currentSpeed['startSpeed'] * this.duration;
        let right = this.from['x'] += this.currentSpeed['startSpeed'] * this.duration;
    }

    stopMove() {

    }


}

let object = new Object1(0, 0, 15, 33, 2, 0, 3, 0, 0);
object.moveTo();

