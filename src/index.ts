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
    div: "PlayerSide",
    boxSize: "Sides div",
    score: 0,
  },

  dealer: /*{Wertdiv: string; div:string; boxSize:string; score: number }: */{
    Wertdiv: "CroupierWertBJ",
    div: "CroupierSide",
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
let winner: string;

const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
hitbutton.addEventListener("click", blackjackHit);
//document.querySelector("#HitButton")?.addEventListener("click", blackjackHit);
const standbutton = document.getElementById("StandButton")as HTMLButtonElement;
standbutton.addEventListener("click",blackjackStand)

function blackjackHit() {

  if (blackjackgame["isStand"] === false) {
    let card: string = randomcard();
    //showCard(card, PLAYER);
    console.log(card)
    updateWertPlayer(card, PLAYER)
    showScore(PLAYER)
  }
}

function blackjackStand(){
  console.log("Standausge")
  if(blackjackgame.pressOnce === false){
  blackjackgame["isStand"] = true;
  let yourImage = document.querySelector("#PlayerSide")?.querySelectorAll("img");
  
  
  }
  
  /*for(let i = 0; i < yourImages.length; i++){
    let card: string = randomcard();
  //  showCard(card, Dealer);
    updateWertDealer(card, DEALER);
    showScore(DEALER);



blackjackgame["isTurnsOver"] = true;}*/

  
  blackjackgame.pressOnce = true;
  
  }
  


function randomcard() {
  let randomIndex: number = Math.floor(Math.random() * 13);
  return blackjackgame["cards"][randomIndex];


}

/*function showCard(card, activePlayer){
  if(activePlayer["score"] <= 21){
    let cardImage = document.createElement("img");
    cardImage.src = 'images/${card}.png';
    cardImage.style = 'width:' ${widthSize()}; 'height:'${heightSize()};
    document.querySelector(activePlayer["div"]).appendChild(cardImage);

  }
}
*/
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
    console.log(typeof(card));
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
/*
let Hit = function () {
  console.log("Hello World");

}
*/

