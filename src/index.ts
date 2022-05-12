// THIS IS A MODULE!

export const helloWorld: string = "Hello world";
import { alertMe } from "./myOtherModule";

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
  PlayerHit: false,

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
surrendertbutton.addEventListener("click", nextRound);

const wager = document.getElementById("Wager")as HTMLInputElement
//Anfang der Funktionen
wager.addEventListener("change",choosewager)
function restartgame(){
  if(blackjackgame.pressOnce === false){
 //Spieler wählt einsatz

  //Spieler bekommt zwei Karten und der Dealer bekommt eine Karte

  // Spiel beginnt dann

  }
}
function choosewager(){}

function blackjackHit() {

  if (blackjackgame["isStand"] === false) {
    let card: string = randomcard();
    //showCard(card, PLAYER);
    //console.log(card);
    blackjackgame["PlayerHit"] = true;
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
    //blackjackgame["PlayerHit"] = true;
  }
}

function blackjackStand(){
  //let card: string = randomcard();
 // console.log()
  if(blackjackgame.pressOnce === false && blackjackgame["PlayerHit"] === true){
  blackjackgame["isStand"] = true;
  DealerLogic(DEALER);
  //console.log(blackjackgame["isStand"] = true);
  

  //let yourImages = document.getElementById("#PlayerSide").querySelectorAll("img");
  blackjackgame.pressOnce = true;
  blackjackgame["isTurnsOver"] = true
  }
  
  //for(let i: number = 0; i < yourImages.length; i++){

/*blackjackgame["isTurnsOver"] = true;
  blackjackgame.pressOnce = true;*/
  CalculateWinner();
  showWinner();
  }


  //Dealer handelt als letztes. Hat am Anfang zwei Karten, wenn diese weniger als 16 Wert sind, dann zieht er weitere.
  //
  function DealerLogic(activePlayer: IDealer){
  
//console.log("DealerLogic wird ausgeführt")

do {
  
  //console.log("start der Schleife");
 let card: string = randomcard();
  console.log("card2" + card)
  showCardDealer(card, DEALER);
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER);
}
while(activePlayer["score"] < 17)
  }

/*
function Timeout(){
  console.log("viki")
  setTimeout(() => {
    console.log("viki2")
    let card: string = randomcard();
  console.log("card2" + card)
  showCardDealer(card, DEALER);
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER)}
  , 3000);

  let card: string = randomcard();
  console.log("card2" + card)
  showCardDealer(card, DEALER);
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER);*/




// Funktion für eine Zufällige Karte
function randomcard() {
  let randomIndex: number = Math.floor(Math.random() * blackjackgame.cards.length);
  return blackjackgame["cards"][randomIndex];
}

function showCardPlayer(card: string, activePlayer: IPlayer){
  if(activePlayer["score"] <= 21){
    let cardImage = document.createElement("img")as HTMLImageElement;
   // console.log(cardImage)
    cardImage.src = `TestCards/${card}.png`;
    let filtercards = blackjackgame.cards.filter((item)=>{return item !== card});
   // cardImage.style = `width: ${widthSize()}; height:${heightSize()};`;
    const Cardplace = document.querySelector(activePlayer["div"])as HTMLDivElement;
    Cardplace.appendChild(cardImage);
    blackjackgame.cards = filtercards;

  }
}
function showCardDealer(card: string, activePlayer: IDealer){
  if(activePlayer["score"] <= 21){
    let cardImage = document.createElement("img")as HTMLImageElement;
   // console.log(cardImage)
    cardImage.src = `TestCards/${card}.png`;
    let filtercards = blackjackgame.cards.filter((item)=>{return item !== card});
   // cardImage.style = `width: ${widthSize()}; height:${heightSize()};`;
    const Cardplace = document.querySelector(activePlayer["div"])as HTMLDivElement;
    Cardplace.appendChild(cardImage);
    blackjackgame.cards = filtercards;
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

function showPlayerScore(activePlayer: IPlayer) {
  
 // const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
  
  if (activePlayer["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
   testquer.innerHTML = "x";
   //testquer.style.fontSize = "35px";
   testquer.style.backgroundColor= "#f70000";
   blackjackStand();
   // let text = document.querySelector["Wertdiv"]);
  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    testquer.innerHTML = activePlayer["score"].toString();
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }
}

function showDealerScore(activePlayer: IDealer) {
  
  //const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
  
  if (activePlayer["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
  // testquer.innerHTML = "BUST!";
   testquer.innerHTML = "x";
   testquer.style.backgroundColor= "#f70000";
   // let text = document.querySelector["Wertdiv"]);
  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    testquer.innerHTML = activePlayer["score"].toString();
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }
}




function CalculateWinner(){
  console.log("Hallo")
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

/*CalculateMoney(){



}
*/

function showWinner(){
let message!: string
let WinColor!: string

if(winner === PLAYER){
message = "PLAYER WONS!";
WinColor = "blue"
//document.querySelector("#losses")?.innerHTML

}
if(winner === DEALER){
message = "DEALER WONS"
WinColor= "red"

}

//if(winner === draw){}

//if(winner === NONE){}

let winmessage = document.querySelector("#winner")as HTMLSpanElement;
winmessage.innerHTML = message;
winmessage.style.color= WinColor;
}

//Next Round ->
function nextRound(){
  if(blackjackgame["isTurnsOver"] === true){
    console.log("nextRound()")
  resetDealer(DEALER);
  resetPlayer(PLAYER);
  let winmessage = document.querySelector("#winner")as HTMLSpanElement;
  winmessage.innerHTML = "The Game";
  winmessage.style.color = "white";
  blackjackgame.cards= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  blackjackgame["PlayerHit"] = false;
  blackjackgame["isTurnsOver"] = false;
  blackjackgame["isStand"] = false;
  blackjackgame["pressOnce"] = false;
  }
  }
  function resetPlayer(activePlayer: IPlayer){
    console.log("resetPlayer");
  activePlayer["score"]= 0;
  //let cardImage = document.createElement("img");
  //updateWertPlayer(card, PLAYER);
      showPlayerScore(PLAYER);
      const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
      testquer.style.backgroundColor= "white";
     // const ImgPlace = document.getElementById(activePlayer["div"]);
     const ImgDiv = document.querySelector(activePlayer["div"])as HTMLDivElement;
    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }
  
  
  function resetDealer(activePlayer: IDealer){
    console.log("resetDealer");
    activePlayer["score"]= 0;
   // let cardImage = document.createElement("img");
    //updateWertPlayer(card, PLAYER);
    showPlayerScore(DEALER);
    const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
    testquer.style.backgroundColor= "white";
    //const Cardplace = document.querySelectorAll("img");
    const ImgDiv = document.querySelector(activePlayer["div"])as HTMLDivElement;
    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }