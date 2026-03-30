var second = 0;
var minute=0;
var hour = 0;
var d = new Date();

setInterval(

    function(){
        d = Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes();
        hour = d.getHours();
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    }, 1000
);