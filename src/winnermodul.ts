import { DEALER, PLAYER, wager } from "./callmodule";

let winner: object;
let DRAW: object = {}
export function CalculateWinner(){

if (PLAYER["score"] <= 21){
if(PLAYER["score"] > DEALER["score"] || DEALER["score"] > 21){
  winner = PLAYER;

}


else if(PLAYER["score"] < DEALER["score"]){
  winner = DEALER;

}
else if(PLAYER["score"] === DEALER["score"]){
  //Platzhalter eigentlich unentschieden
  winner = DRAW;

}
}

else if(PLAYER["score"] > 21 && DEALER["score"] <= 21){
winner = DEALER;
console.log("None");

}
else if(PLAYER["score"] > 21 && DEALER["score"] > 21){
  // Eigentlich none (gibt es nicht, weil Player zuerst zieht.)
  winner = DRAW;

}
return winner;

}

const CashSpan = document.querySelector("#Cash")as HTMLSpanElement;
// CashSpan.innerHTML = "10000";
 const Winningsspan = document.querySelector("#Winnings")as HTMLSpanElement;

export function CalculateWinnings(){


let WagertoInt = parseInt(wager.value);
let Cash: number = parseInt(CashSpan.innerHTML);


if(Cash < 99 ){
  const winmessage = document.querySelector("#winner")as HTMLSpanElement;
winmessage.innerHTML = "BROKE"
}
  if(winner === PLAYER){
    let Winnings: number  = WagertoInt;
  
    Winningsspan.innerHTML = "+" + String(Winnings);
    Winningsspan.style.color= "blue";
  
    CashSpan.innerHTML = String(Cash + Winnings);
  
  
      }
      if(winner === DEALER){
       let Loosings: number =  WagertoInt ;
        
       Winningsspan.innerHTML= "-" + Loosings;
       Winningsspan.style.color= "red";
  
       CashSpan.innerHTML = String(Cash - Loosings);
      }
      
  
  
  
      if(winner === DRAW){

    
    

}

}


export function showWinner(){
let message!: string
let WinColor!: string

if(winner === PLAYER){
message = "PLAYER WINS!";
WinColor = "blue"
//document.querySelector("#losses")?.innerHTML

}
if(winner === DEALER){
message = "DEALER WINS"
WinColor= "red"

}

if(winner === DRAW){
  message = "DRAW"

}

const winmessage = document.querySelector("#winner")as HTMLSpanElement;
winmessage.innerHTML = message;
winmessage.style.color= WinColor;
}