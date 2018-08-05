'use strict';
class Channel {
    draw() {
        // draw channel
        this.ctx.fillStyle = this.channelColor;
        this.ctx.fillRect(
            this.pos.x, 
            this.pos.y, 
            this.width, 
            this.height
        );
        // draw tx
        for (let tx of this.txs) {
            tx.draw();
        }
        // remove tx
        this.txs = this.txs.filter(tx => tx.pos.y < this.pos.y + this.height);
    }

    constructor(setting, pos, ctx) {
        this.ctx = ctx;
        this.pos = pos;
        this.width = setting.width;
        this.height = Channel.height;
        this.tps = setting.tps;
        this.latency = setting.latency;
        this.txColor = setting.txColor;
        this.channelColor = setting.channelColor;
        this.colNum = setting.colNum;
        this.txs = [];
        // generate TX
        setInterval(() => {
            for (let i = 0; i < this.colNum; i++) {
                let x = this.pos.x + Math.random() * (this.width - 2 * TX.radius) + TX.radius;
                let y = this.pos.y + Math.random() * Channel.yRandom;
                this.txs.push(new TX(this.txColor, this.latency, { x: x, y: y}, this.ctx));
            } 
        }, 1 / (this.tps / this.colNum) * 1000);
    }
}
// static
Channel.height = 500;
Channel.yRandom = 20;