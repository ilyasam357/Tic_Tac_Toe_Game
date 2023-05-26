let btn = document.querySelectorAll(".button-opt");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let message = document.getElementById("message");

let winning =[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

let xTurn = true;
let count = 0;

const disableButton = () =>{
    btn.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide")
};

const enableButton = () => {
    btn.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popup.classList.add("hide");
};

const winFun = (letter) =>{
    disableButton();
    if(letter == "X"){
        message.innerHTML = "'X' Wins";
        message.style.color = '#ED3E3E'
    }
    else{
        message.innerHTML = "'0' Wins";
        message.style.color = '#3F66Da'
    }
};

const drawFun = () => {
    disableButton();
    message.innerHTML = "Draw"
};

newgameBtn.addEventListener("click", ()=>{
    count = 0;
    enableButton();
});

restartBtn.addEventListener("click", ()=>{
    count = 0;
    enableButton();
});

const winnerCheck = () =>{
    for(let i of winning){
        let [element1, element2, element3] = [
            btn[i[0]].innerText,  
            btn[i[1]].innerText,
            btn[i[2]].innerText, 
        ];

        if(element1 != "" && (element2 != "") & (element3 != "")){
            if(element1 == element2 && element2 == element3){
                winFun(element1);
            }
        }
    }
};

btn.forEach((element) =>{
    element.addEventListener("click", ()=>{
        if(xTurn){
            xTurn =false;
            // display X
            element.innerText = "X";
            element.disabled = true;
            element.style.color= '#ED3E3E'
        }
        else{
            xTurn = true;
            // display O
            element.innerText = "0";
            element.disabled = true;
            element.style.color= '#3F66Da';
        }

        count += 1 ;
        if(count == 9){
            drawFun();
        } 
        winnerCheck();

    });
})
window.onload = enableButton;