let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0=true;

const winpatterns=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,4,6],
     [2,5,8],
     [3,4,5],
     [6,7,8],
];

const resetGame = () =>{
     turn0 = true;
     enableboxes();
     msgcontainer.classList.add("hide"); 

};

boxes.forEach((box)=>{
    box.addEventListener("click" ,() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            box.style.color="green";
            turn0=false;
        }else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};   

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes(); 
};


const checkwinner= () =>{
    for(let pattern of winpatterns){
      let pas1val = boxes[pattern[0]].innerText;
      let pas2val = boxes[pattern[1]].innerText;
      let pas3val = boxes[pattern[2]].innerText;  

      if(pas1val != "" && pas2val !="" && pas3val !="" ){
          if(pas1val ===pas2val && pas2val === pas3val){
            console.log("winner", pas1val);
            showWinner(pas1val);
            
          }
      }
    }
};

newbtn.addEventListener("click", resetGame  );
  
resetbtn.addEventListener("click", resetGame );