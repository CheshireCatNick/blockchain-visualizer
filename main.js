'use strict';
const canvas = document.getElementById('display');
const ctx = canvas.getContext('2d');

const data = [
    {
        name: 'BTC',
        tps: 7,
        latency: 3600,
        txColor: '#2ecc71',
        channelColor: '#2c3e50',
        width: 50,
        colNum: 1
    },
    {
        name: 'ETH',
        tps: 20,
        latency: 360,
        txColor: '#3498db',
        channelColor: '#2c3e50',
        width: 50,
        colNum: 1
    },
    {
        name: 'DEXON',
        tps: 1000000,
        latency: 20,
        txColor: '#954a97',
        channelColor: '#ffffff',
        width: 1500,
        colNum: 100
    }
];
const channels = [];
let x = 0
for (let chainData of data) {
    channels.push(new Channel(chainData, { x: x, y: 0 }, ctx));
    x += chainData.width + 10;
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let channel of channels) {
        channel.draw();
    }
    window.requestAnimationFrame(render);
}

render();