'use strict';
class TX {


    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, TX.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.pos.y += Channel.height / this.latency * TX.speedAdjust;
    }

    constructor(color, latency, pos, ctx) {
        this.ctx = ctx;
        this.pos = pos;
        this.color = color;
        this.latency = latency;



    }
}
TX.radius = 2;
TX.speedAdjust = 1;