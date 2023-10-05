const time = document.querySelector("#time");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let start=0;
let realtime=0;
let current=0;
let pause=true;
let interval;
let hrs=0;
let mins=0;
let secs=0;

startbtn.addEventListener("click", () =>{
    if(pause){
        pause=false;
        start=Date.now()-realtime;
        interval=setInterval(update,1000);
    }
});
pausebtn.addEventListener("click", () =>{
    if(!pause){
        pause=true;
        realtime=Date.now()-start;
        clearInterval(interval);
    }
});
resetbtn.addEventListener("click", () =>{
    pause=true;
    clearInterval(interval);
    start=0;
    realtime=0;
    current=0;
    hrs=0;
    mins=0;
    secs=0;
    time.textContent="00:00:00";
});

function update(){
    realtime=Date.now()-start;
    secs = Math.floor((realtime/1000)%60);
    mins = Math.floor((realtime/(1000*60))%60);
    hrs = Math.floor((realtime/(1000*60*60))%60);
    
    secs=add(secs);
    mins=add(mins);
    hrs=add(hrs);

    time.textContent=`${hrs}:${mins}:${secs}`;
    function add(unit){
        return (("0")+unit).length>2?unit:"0"+unit;
    }
}
