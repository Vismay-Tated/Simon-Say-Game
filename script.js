let gameseq=[];
let userseq=[];

let button = ["box1","box2","box3","box4"]

let started=false;
let level=0;

let btn=2

let h2=document.getElementById("l");
// console.log(h2);

document.addEventListener("keypress",function(){
    if (started==false){
        started=true;
        console.log("Game Started");
        levelup();
        h2.innerHTML=`level ${level}`;
    }
})

function levelup(){
    userseq=[];
    level++;
    h2.innerHTML=`level ${level}`;
    let randidx = Math.floor(Math.random()*4);
    let randcolor = button[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
    
}

function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },200);
}

function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },200);
}

function checkans(idx){
    if (userseq[idx]===gameseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        h2.innerHTML=`GAME OVER!<b> YOUR SCORE-${level-1} </b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    // btnflash(btn);
    userbtnflash(btn);
    let userbtn=btn.getAttribute("id");
    userseq.push(userbtn);
    console.log(userseq);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".box");

for (btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}












// let gameseq = [];
// let userseq = [];

// let started = false;
// let level = 0;

// const levelElement = document.getElementById("l");
// console.log(levelElement);

// document.addEventListener("keypress", function() {
//     console.log("Game Started");
//     started = true;
//     generateSequence();
// });

// function generateSequence() {
//     if (started) {
//         const randomNumber = Math.floor(Math.random() * 4);
//         gameseq.push(randomNumber);
//         console.log(gameseq);
//         level++;
//         levelElement.textContent = `Level: ${level}`;
//     }
// }
