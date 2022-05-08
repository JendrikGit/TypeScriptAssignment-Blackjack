// THIS IS A MODULE!

export const helloWorld: string = "Hello world";

export class Beispiel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  }
}

//let cardsMap: ;
let blackjackgame = {
  player: {
    Wertdiv: "#PlayerWertBJ",
    div: "#Playercardsurface",
    boxSize: "Sides div",
    score: 0,
  },

  dealer: /*{Wertdiv: string; div:string; boxSize:string; score: number }: */{
    Wertdiv: "#CroupierWertBJ",
    div: "#Croupiercardsurface",
    boxSize: "Sides div",
    score: 0,
  },


  cards: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

 // cardsMap: { "A": [1, 11], "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10},

  isStand: false,
  isTurnsOver: false,
  pressOnce: false,

};
let cardsMap: {[key:string]:number[]} = { "A": [1, 11], "2": [2], "3": [3], "4": [4], "5": [5], "6": [6], "7": [7], "8": [8], "9": [9], "10": [10], "J": [10], "Q": [10], "K": [10]};


interface IPlayer { Wertdiv: string, div: string, boxSize: string, score: number };
interface IDealer { Wertdiv: string, div: string, boxSize: string, score: number };
const PLAYER: IPlayer = blackjackgame["player"];
const DEALER: IDealer = blackjackgame["dealer"];

//const hitSound = new Audio(".../...");
//const winSound = new Audio(".../...");
//const loseSound = new Audio(".../...");

let WindowsWidth: number = window.screen.width;
let windowHeight: number = window.screen.height;
let winner: object;

//Funktionen für die Skalierung des Bildschirmes
/*
function widthSize() {
  if (WindowsWidth > 1000) {
    let newWidthSize: number = window.screen.width * 0.1;
    return newWidthSize;
  }
  else
    return window.screen.width * 0.18;
}

function heightSize() {
  if (windowHeight > 700) {
    let newheightSize: number = window.screen.height * 0.18;
    return newheightSize;
  }
  else
    return window.screen.height * 0.15;
}
*/


//Aufrufe der Buttons
const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
hitbutton.addEventListener("click", blackjackHit);

const standbutton = document.getElementById("StandButton")as HTMLButtonElement;
standbutton.addEventListener("click",blackjackStand);

const doubledownbutton = document.getElementById("DoubleDownButton")as HTMLButtonElement;
//doubledownbutton.addEventListener("click", blackjackHit);

const splitbutton = document.getElementById("SplitButton")as HTMLButtonElement;
//splitbutton.addEventListener("click", blackjackHit);

const surrendertbutton = document.getElementById("SurrenderButton")as HTMLButtonElement;
//surrendertbutton.addEventListener("click", blackjackHit);

//Anfang der Funktionen
function blackjackHit() {

  if (blackjackgame["isStand"] === false) {
    let card: string = randomcard();
    //showCard(card, PLAYER);
    //console.log(card);
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showScore(PLAYER);
  }
}




function blackjackStand(){
  let card: string = randomcard();
  //console.log("Standausge")
  if(blackjackgame.pressOnce === false){
  blackjackgame["isStand"] = true;
  DealerLogic(DEALER);
  //console.log(blackjackgame["isStand"] = true);
  

  //let yourImages = document.getElementById("#PlayerSide").querySelectorAll("img");
  
  }
  
  //for(let i: number = 0; i < yourImages.length; i++){

blackjackgame["isTurnsOver"] = true;
  blackjackgame.pressOnce = true;
  
  }


  //Dealer handelt als letztes. Hat am Anfang zwei Karten, wenn diese weniger als 16 Wert sind, dann zieht er weitere.
  //
  function DealerLogic(activePlayer: IDealer){
console.log("DealerLogic wird ausgeführt")
do {
  console.log("start der Schleife");
  let card: string = randomcard();
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER);
  showCardDealer(card, DEALER);
  
}
while(activePlayer["score"] < 17)



  }








// Funktion für eine Zufällige Karte
function randomcard() {
  let randomIndex: number = Math.floor(Math.random() * 13);
  return blackjackgame["cards"][randomIndex];
}

function showCardPlayer(card: string, activePlayer: IPlayer){
  if(activePlayer["score"] <= 21){
    let cardImage = document.createElement("img");
   // console.log(cardImage)
    cardImage.src = `TestCards/${card}.png`;
   // cardImage.style = `width: ${widthSize()}; height:${heightSize()};`;
    const Picsurface = document.querySelector(activePlayer["div"])as HTMLDivElement;
    Picsurface.appendChild(cardImage);

  }
}
function showCardDealer(card: string, activePlayer: IDealer){
  if(activePlayer["score"] <= 21){
    let cardImage = document.createElement("img");
   // console.log(cardImage)
    cardImage.src = `TestCards/${card}.png`;
   // cardImage.style = `width: ${widthSize()}; height:${heightSize()};`;
    const Picsurface = document.querySelector(activePlayer["div"])as HTMLDivElement;
    Picsurface.appendChild(cardImage);

  }
}



/*
function Hit(){
document.getElementsByClassName("PlayerWertBJ")

}*/

function updateWertPlayer(card: string, activePlayer: IPlayer) {
  if (card === "A") {
    if (activePlayer["score"] + cardsMap[card][1] <= 21) {
      activePlayer["score"] += cardsMap[card][1];
    } else {
      activePlayer["score"] += cardsMap[card][0];

    }
  }

  else {
  // let currentcard = card.toString();
   // console.log(blackjackgame["cardsMap"]);
    
   // console.log(blackjackgame.cardsMap["card"]);
   // console.log(typeof(card));
    //console.log(typeof(blackjackgame.cardsMap));
   activePlayer["score"] += cardsMap[card][0];
   // activePlayer["score"] += blackjackgame["cardsMap"][card];
  }
}



function updateWertDealer(card: string, activePlayer: IDealer) {
  if (card === "A") {
    if (activePlayer["score"] + cardsMap[card][1] <= 21) {
      activePlayer["score"] += cardsMap[card][1];
    } else {
      activePlayer["score"] += cardsMap[card][0];

    }
  }

  else {
  // let currentcard = card.toString();
   // console.log(blackjackgame["cardsMap"]);
    
   // console.log(blackjackgame.cardsMap["card"]);
    console.log(typeof(card));
    //console.log(typeof(blackjackgame.cardsMap));
   activePlayer["score"] += cardsMap[card][0];
   // activePlayer["score"] += blackjackgame["cardsMap"][card];
  }
}

function showScore(activePlayer: IPlayer) {
  
  const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
  
  if (activePlayer["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
   testquer.innerHTML = "BUST!";
   // let text = document.querySelector["Wertdiv"]);
  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    testquer.innerHTML = activePlayer["score"].toString();
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }
}

function showDealerScore(activePlayer: IDealer) {
  
  const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
  
  if (activePlayer["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
   testquer.innerHTML = "BUST!";
   // let text = document.querySelector["Wertdiv"]);
  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    testquer.innerHTML = activePlayer["score"].toString();
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }
}
















/*
let Hit = function () {
  console.log("Hello World");

}
*/


/*
function CalculateWinner(){
if (PLAYER["score"] <= 21){
if(PLAYER["score"] > DEALER["score"] || DEALER["score"] > 21){
  winner = PLAYER;
  console.log("Spieler hat gewonnen")
}


else if(PLAYER["score"] < DEALER["score"]){
  winner = DEALER;
  console.log("Dealer hat gewonnen");
}
else if(PLAYER["score"] === DEALER["score"]){
  //Platzhalter eigentlich unentschieden
  winner = DEALER;
  console.log("Unentschieden");
}
}

else if(PLAYER["score"] > 21 && DEALER["score"] <= 21){
winner = DEALER;
console.log("None");

}
else if(PLAYER["score"] > 21 && DEALER["score"] > 21){
  // Eigentlich none (gibt es nicht, weil Player zuerst zieht.)
  winner = DEALER;
  console.log("Spieler hat gewonnen");
}
return winner;
}



function showWinner(){
let message!: string

if(winner === PLAYER){
message = "PLAYER WONS!";
//document.querySelector("#losses")?.innerHTML

}
if(winner === DEALER){
message = "DEALER WONS"

}

//if(winner === draw){}

//if(winner === NONE){}

let winmessage = document.getElementById("#PlayerTitel")as HTMLDivElement;
winmessage.innerHTML = message;
}

/*function renderCard(card: string, activePlayer: object){


}






function DealerLogicf(){

do{ neue Karte }

while( Kartenwert des Spielers > Kartenwert des Dealers )

}
*/