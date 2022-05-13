// THIS IS A MODULE!

export const helloWorld: string = "Hello world";
import { createExpressionWithTypeArguments } from "typescript";
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


  cards: ["HerzA", "Herz2", "Herz3", "Herz4", "Herz5", "Herz6", "Herz7", "Herz8", "Herz9", "Herz10", "HerzJ", "HerzQ", "HerzK", 
          "KreuzA","Kreuz2","Kreuz3","Kreuz4","Kreuz5","Kreuz6","Kreuz7","Kreuz8","Kreuz9","Kreuz10","KreuzJ","KreuzQ","KreuzK",
          "PikA","Pik2","Pik3","Pik4","Pik5","Pik6","Pik7","Pik8","Pik9","Pik10","PikJ","PikQ","PikK",
          "KaroA","Karo2","Karo3","Karo4","Karo5","Karo6","Karo7","Karo8","Karo9","Karo10","KaroJ","KaroQ","KaroK"
],

 // cardsMap: { "A": [1, 11], "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10},

  isStand: false,
  isTurnsOver: false,
  pressOnce: false,
  PlayerHit: false,
  doubledown: false,
  setwager: false

};
let cardsMap: {[key:string]:number[]} = { "HerzA": [1, 11], "Herz2": [2], "Herz3": [3], "Herz4": [4], "Herz5": [5], "Herz6": [6], "Herz7": [7], "Herz8": [8], "Herz9": [9], "Herz10": [10], "HerzJ": [10], "HerzQ": [10], "HerzK": [10],
"KaroA": [1, 11], "Karo2": [2], "Karo3": [3], "Karo4": [4], "Karo5": [5], "Karo6": [6], "Karo7": [7], "Karo8": [8], "Karo9": [9], "Karo10": [10], "KaroJ": [10], "KaroQ": [10], "KaroK": [10],
"PikA": [1, 11], "Pik2": [2], "Pik3": [3], "Pik4": [4], "Pik5": [5], "Pik6": [6], "Pik7": [7], "Pik8": [8], "Pik9": [9], "Pik10": [10], "PikJ": [10], "PikQ": [10], "PikK": [10],
"KreuzA": [1, 11], "Kreuz2": [2], "Kreuz3": [3], "Kreuz4": [4], "Kreuz5": [5], "Kreuz6": [6], "Kreuz7": [7], "Kreuz8": [8], "Kreuz9": [9], "Kreuz10": [10], "KreuzJ": [10], "KreuzQ": [10], "KreuzK": [10] };

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
doubledownbutton.addEventListener("click", doubledown);

const splitbutton = document.getElementById("SplitButton")as HTMLButtonElement;
//splitbutton.addEventListener("click", blackjackHit);

const surrendertbutton = document.getElementById("SurrenderButton")as HTMLButtonElement;
surrendertbutton.addEventListener("click", nextRound);

const wager = document.getElementById("Wager")as HTMLInputElement
//Anfang der Funktionen
wager.addEventListener("change",choosewager)
let safewager = wager.value



function restartgame(){
  if(blackjackgame.pressOnce === false){
 //Spieler wählt einsatz

  //Spieler bekommt zwei Karten und der Dealer bekommt eine Karte

  // Spiel beginnt dann

  }
}
function choosewager(){
let wagerchange = wager.value;
return wagerchange;
}


function blackjackHit() {
 

  if(blackjackgame["isStand"] === false /*&& blackjackgame["setwager"] === false*/){
    let card: string = randomcard();
    blackjackgame["PlayerHit"] = true;
    wager.readOnly = true;
    
    blackjackgame["setwager"] = true;
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
  }
/* else if (blackjackgame["isStand"] === false && blackjackgame["setwager"] === true) {
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
  }*/


}


function doubledown(){
  if (blackjackgame["isStand"] === false && blackjackgame["PlayerHit"] === true) {
    let card: string = randomcard();
    blackjackgame["doubledown"] = true;
    wager.value = String(parseInt(wager.value) *2)
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
    blackjackStand();
  }
}

function blackjackStand(){
  //let card: string = randomcard();

  if(blackjackgame.pressOnce === false && blackjackgame["PlayerHit"] === true){
  blackjackgame["isStand"] = true;
  DealerLogic(DEALER);

  

  //let yourImages = document.getElementById("#PlayerSide").querySelectorAll("img");
  blackjackgame.pressOnce = true;
  blackjackgame["isTurnsOver"] = true

  CalculateWinner();
  showWinner();
  CalculateWinnings();
  }
  
  //for(let i: number = 0; i < yourImages.length; i++){

/*blackjackgame["isTurnsOver"] = true;
  blackjackgame.pressOnce = true;*/

  }


  //Dealer handelt als letztes. Hat am Anfang zwei Karten, wenn diese weniger als 16 Wert sind, dann zieht er weitere.
  //
  function DealerLogic(activePlayer: IDealer){
  


do {
  

 let card: string = randomcard();

  showCardDealer(card, DEALER);
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER);
}
while(activePlayer["score"] < 17)
  }

/*
function Timeout(){

  setTimeout(() => {

    let card: string = randomcard();

  showCardDealer(card, DEALER);
  updateWertDealer(card, DEALER);
  showDealerScore(DEALER)}
  , 3000);

  let card: string = randomcard();

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
    const cardImage = document.createElement("img")as HTMLImageElement;
 
    cardImage.src = `Playingcards/${card}.png`;
    let filtercards = blackjackgame.cards.filter((item)=>{return item !== card});
   // cardImage.style = `width: ${widthSize()}; height:${heightSize()};`;
    const Cardplace = document.querySelector(activePlayer["div"])as HTMLDivElement;
    Cardplace.appendChild(cardImage);
    blackjackgame.cards = filtercards;

  }
}
function showCardDealer(card: string, activePlayer: IDealer){
  if(activePlayer["score"] <= 21){
    const cardImage = document.createElement("img")as HTMLImageElement;
    cardImage.src = `Playingcards/${card}.png`;
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

  // als schleife Solange unter 21
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
    if (activePlayer["score"] + cardsMap[card][1] <= 21) {
      activePlayer["score"] += cardsMap[card][1];
    } else {
      activePlayer["score"] += cardsMap[card][0];

    }
  }

  else {
  // let currentcard = card.toString();
   activePlayer["score"] += cardsMap[card][0];
   // activePlayer["score"] += blackjackgame["cardsMap"][card];
  }
}



function updateWertDealer(card: string, activePlayer: IDealer) {
  
  // als schleife Solange unter 21
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
    if (activePlayer["score"] + cardsMap[card][1] <= 21) {
      activePlayer["score"] += cardsMap[card][1];
    } else {
      activePlayer["score"] += cardsMap[card][0];

    }
  }

  else {
  // let currentcard = card.toString();

    

    console.log(typeof(card));

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



let DRAW: object = {}
function CalculateWinner(){

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

function CalculateWinnings(){


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


function showWinner(){
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

//if(winner === NONE){}

const winmessage = document.querySelector("#winner")as HTMLSpanElement;
winmessage.innerHTML = message;
winmessage.style.color= WinColor;
}








//Next Round Funktionen ->
function nextRound(){
  if(blackjackgame["isTurnsOver"] === true){
    console.log("nextRound()");

  wager.value = safewager;
  resetDealer(DEALER);
  resetPlayer(PLAYER);

  Winningsspan.innerHTML = "0";
  Winningsspan.style.color = "white";
  
  wager.readOnly = false;


  const winmessage = document.querySelector("#winner")as HTMLSpanElement;
  winmessage.innerHTML = "The Game";
  winmessage.style.color = "white";

  blackjackgame.cards= ["HerzA", "Herz2", "Herz3", "Herz4", "Herz5", "Herz6", "Herz7", "Herz8", "Herz9", "Herz10", "HerzJ", "HerzQ", "HerzK", 
  "KreuzA","Kreuz2","Kreuz3","Kreuz4","Kreuz5","Kreuz6","Kreuz7","Kreuz8","Kreuz9","Kreuz10","KreuzJ","KreuzQ","KreuzK",
  "PikA","Pik2","Pik3","Pik4","Pik5","Pik6","Pik7","Pik8","Pik9","Pik10","PikJ","PikQ","PikK",
  "KaroA","Karo2","Karo3","Karo4","Karo5","Karo6","Karo7","Karo8","Karo9","Karo10","KaroJ","KaroQ","KaroK"];

  blackjackgame["PlayerHit"] = false;
  blackjackgame["isTurnsOver"] = false;
  blackjackgame["isStand"] = false;
  blackjackgame["pressOnce"] = false;
  }
  }
  function resetPlayer(activePlayer: IPlayer){
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