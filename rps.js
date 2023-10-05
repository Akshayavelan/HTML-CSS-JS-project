const ptext=document.querySelector("#ptext");
const ctext=document.querySelector("#ctext");
const rtext=document.querySelector("#rtext");
const clickme=document.querySelectorAll("#clickme");
let player;
let computer;
let result;
clickme.forEach(button => button.addEventListener("click", ()=>{
    player=button.textContent;
    compturn();
    ptext.textContent=`Player:${player}`
    ctext.textContent=`Computer:${computer}`
    rtext.textContent=checkwinner();
}));
function compturn(){
      let rand = Math.floor((Math.random()*3)+1);
      switch(rand){
                case 1:computer="ROCK";
                break;
                case 2:computer="PAPER";
                break;
                case 3:computer="SCISSORS";
                break;
      }
}
function checkwinner(){
        if(computer == player){
            return "DRAW!"
        }
        else if(computer == "ROCK"){
            return (player == "SCISSORS")? "YOU WIN! ;)":"YOU LOSE :("
        }
        else if(computer == "SCISSORS"){
            return (player == "PAPER")? "YOU WIN! ;)":"YOU LOSE :("
        }
        else if(computer == "PAPER"){
            return (player == "ROCK")? "YOU WIN! ;)":"YOU LOSE :("
        }
}