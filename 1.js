let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector("#reset-btn");
let turn0=true;
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatterns=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];
const resetGame=()=>{
  turn0=false;
  enableBoxes();
  msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
          console.log("clcike hai bhaya");
          if(turn0){ // 0 turn 
                box.innerText="0";
                turn0=false;
          }
          else{ // 1 turn
                box.innerText="X";
                box.style.color="black";
                turn0=true;
          }
          box.disabled=true;
          checkWinner();
        });
});
const disableBoxes=()=>{
        for(let box of boxes){
                box.disabled=true;
        }
}
const enableBoxes=()=>{
        for(let box of boxes){
                box.disabled=false;
                box.innerText="";
        }
}
const showWinner=(winner)=>{
msg.innerText=`congrats,winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
        for(let pattern of winPatterns){
 let pos1val=boxes[pattern[0]].innerText;
 let pos2val= boxes[pattern[1]].innerText;
 let pos3val= boxes[pattern[2]].innerText;
if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val==pos2val && pos2val==pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);
    }    
}
}
};


newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);