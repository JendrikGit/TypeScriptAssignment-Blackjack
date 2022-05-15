import { DEALER, PLAYER, wager } from "./index";

//Winner, als Variable wo der Sieger der Runde gespeichert wird (oder das unentschieden).
let winner: object;
//Draw als Objekt, weil Player und Dealer auch Objekte sind.
let DRAW: object = {}

//Funktion um den Sieger zu berechnen.
export function CalculateWinner(){
//Wenn der Spieler unter oder gleich den Kartenwert 21 hat.
if (PLAYER["score"] <= 21){
  //Spieler hat gewonnen, wenn er  dann auch einen höheren Kartenwert als der Dealer hat 
  //oder, wenn der Dealer einen Kartenwert über 21 hat.
if(PLAYER["score"] > DEALER["score"] || DEALER["score"] > 21){
  winner = PLAYER;
}
//Wenn der Dealer einen höheren Kartenwert hat als der Spieler, dann hat der Dealer gewonnen.
else if(PLAYER["score"] < DEALER["score"]){
  winner = DEALER;
}
//Wenn Spieler und Dealer den gleichen Kartenwert haben, dann ist es unentschieden.
else if(PLAYER["score"] === DEALER["score"]){
  winner = DRAW;
}
}
//Wenn der Spieler einen Kartenwert über 21 hat und der Dealer einen Kartenwert kleiner gleich 21 hat
//dann hat der Dealer gewonnen.
else if(PLAYER["score"] > 21 && DEALER["score"] <= 21){
winner = DEALER;
}
//Wenn beide einen Kartenwert über 21 haben, dann ist es unentschieden.
else if(PLAYER["score"] > 21 && DEALER["score"] > 21){
  winner = DRAW;
}
//Funktion gibt den Winner zurück.
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