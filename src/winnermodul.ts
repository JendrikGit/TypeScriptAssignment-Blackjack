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
}

//Berechnung des Geldes
export function CalculateWinnings(){
  //Zugriff auf die Spans, in welchem Cash und Winnings stehen.
  const Winningsspan = document.querySelector("#Winnings")as HTMLSpanElement;
  const CashSpan = document.querySelector("#Cash")as HTMLSpanElement;
  //Variablen wo der Typ zu einem Int umgewandelt wird.
let WagertoInt: number = parseInt(wager.value);
let Cash: number = parseInt(CashSpan.innerHTML);
//Minimaleinsatz von 100
if(Cash < 99 ){
  //Wenn Cash unter 100 ist, dann ist der Spieler Pleite und kann nicht mehr weiter spielen.
  const winmessage = document.querySelector("#winner")as HTMLSpanElement;
winmessage.innerHTML = "BROKE reload to stark a new Match."
}
//Wird ausgeführt, wenn der Spieler gewinnt.
  if(winner === PLAYER){
    //Einsatz in Winnings gespeichert, da der Einsatz 1:1 ausgezahlt wird.
    let Winnings: number  = WagertoInt;
    //Design, wenn der Spieler plus macht.
    Winningsspan.innerHTML = "+" + String(Winnings);
    Winningsspan.style.color= "blue";
  //Die Winnigs werden auf dein aktuelles Geld addiert.
    CashSpan.innerHTML = String(Cash + Winnings);

      }
  //Wird ausgeführt, wenn der Dealer gewinnt.
      if(winner === DEALER){
//Einsatz wird in Loosing gespeichert, da man nur den Einsatz bei der Niederlage verliert.
       let Loosings: number =  WagertoInt;
       //Design, wenn der Dealer minus macht.
       Winningsspan.innerHTML= "-" + Loosings;
       Winningsspan.style.color= "red";
  //Die Loosing werden von deinem aktullen Geld subtrahiert.
       CashSpan.innerHTML = String(Cash - Loosings);
      }
    //Ein Unentschieden hat keine Auswirkung auf dein Geld.
      if(winner === DRAW){
}
}

//Funktion die dazu dient den Siege anzuzeigen.
export function showWinner(){
  //Variablen in welchem die Design Aspekte des Siegers gespeichert werden.
let message!: string
let WinColor!: string
//Desgin Variablen, wenn der Spieler gewinnt.
if(winner === PLAYER){
message = "PLAYER WINS!";
WinColor = "blue"
}
//Desgin Variablen, wenn der Dealer gewinnt.
if(winner === DEALER){
message = "DEALER WINS"
WinColor= "red"
}
//Desgin Variablen, wenn es ein Unentschieden gibt.
if(winner === DRAW){
  message = "DRAW"

}
//Zugriff auf die Winner div.
const winmessage = document.querySelector("#winner")as HTMLSpanElement;
//Zuordnen des Designs.
winmessage.innerHTML = message;
winmessage.style.color= WinColor;
}