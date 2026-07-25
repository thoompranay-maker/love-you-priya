const text="I Love You... ❤️ I Miss You So Much...";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

document.getElementById("loveBtn").onclick=()=>{

document.getElementById("messageBox").style.display="block";

};

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},250);

const start=new Date("2026-07-22T22:00:00");

function update(){

const now=new Date();

const diff=now-start;

const d=Math.floor(diff/86400000);

const h=Math.floor(diff%86400000/3600000);

const m=Math.floor(diff%3600000/60000);

const s=Math.floor(diff%60000/1000);

document.getElementById("timer").innerHTML=

`${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;

}

setInterval(update,1000);

update();

document.addEventListener("mousemove",e=>{

const spark=document.createElement("div");

spark.className="spark";

spark.style.left=e.pageX+"px";

spark.style.top=e.pageY+"px";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},800);

});
