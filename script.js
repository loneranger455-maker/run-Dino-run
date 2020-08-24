let score=0 ;count=0;
function pujan(event){
    console.log("pressed key"+event.which);
    if(event.which==32){
       const a=document.querySelector("#dino");
       a.style.animation="pujan 1.5s";
       a.addEventListener("animationend",function(){
           a.style.animation="none";
       })
    }
}
function gameover(){
    let a=document.createElement("h1");
    a.setAttribute("class","gameover");
    a.innerHTML="Game over<br><small>Your score:</small>"+score;
    document.getElementById("box").appendChild(a);
   document.getElementById("header").innerHTML="";
   a=document.createElement("button");
   a.setAttribute("id","button");
   a.innerHTML="play again";
   a.onclick=function(){
       location.href="index.html";
   }
   document.getElementById("box").appendChild(a);
   //document.getElementById("score").remove();
}
function end(){

    count+=1;
    console.log(getComputedStyle(document.getElementById("obstacle")).animationDuration);    
    if(count%2==0){
      document.getElementById("obstacle").style.animationDuration= ((parseFloat(getComputedStyle(document.getElementById("obstacle")).animationDuration))-0.1)+"s";
    }
}
var a=setInterval(function(){
   try{
   dinotop= parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
   obsleft= parseInt(window.getComputedStyle(document.getElementById("obstacle")).getPropertyValue("left"));
   score+=1;
  
    document.getElementById("score").innerHTML=score;
   if(obsleft<260 && dinotop>315){
    let all=  document.getElementById("box").querySelectorAll("div");
    for(i=0;i<all.length;i++){
        all[i].style.animationPlayState="paused";
    }
       gameover();
   }
   if(obsleft<50)end();
   
}
catch(er){

}
},100);
