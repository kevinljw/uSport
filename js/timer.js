var c = 0;
var t;
var timer_is_on = 0;
var money=0;
var dist=0;

function timedCount() {

    c = c+5;
    t = setTimeout("timedCount()", 500);
//    console.log("c:"+c);
    document.getElementById('showtime').setAttribute("style", "width:"+c+"%");
    dist+=c/10000;
     document.getElementById('runDist').innerHTML=dist.toFixed(5) +" km";
    
    if(c>101){
        c=0;
        money+=0.5;
        document.getElementById('wallet').innerHTML="$  "+money;
    }
}
function doPause(){
    timer_is_on = 0;
    clearTimeout(t);
}
//function doStop(){
//    timer_is_on = 0;
//    clearTimeout(t);
//    c=0;
//    document.getElementById('showtime').setAttribute("style", "width:"+c+"%");
//}
function doTimer() {
//    console.log("s");
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}