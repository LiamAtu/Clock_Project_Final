var second = 0;
var minute=0;
var hour = 0;
var d = new Date();

setInterval(

    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.floor(minute / 12);
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    }, 1000
);

const dial = document.querySelector('.clock-dial');

for (let i = 0; i < 60; i++) {
    const tick = document.createElement('div');
    tick.style.position = 'absolute';
    tick.style.width = i % 5 === 0 ? '4px' : '2px';
    tick.style.height = i % 5 === 0 ? '20px' : '10px';
    tick.style.background = i % 5 === 0 ? '#2a5a8c' : '#1e3a5f';
    tick.style.top = '10px';
    tick.style.left = '50%';
    tick.style.transformOrigin = '50% 240px';
    tick.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
    dial.appendChild(tick);
}