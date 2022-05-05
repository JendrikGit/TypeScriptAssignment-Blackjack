// THIS IS A MODULE!

export const helloWorld: string = "Hello world";

export class Beispiel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  }
}

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

  cardsMap: { "A": [1, 11], "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10 },

  isStand: false,
  isTurnsOver: false,
  pressOnce: false,

};



interface IPlayer { Wertdiv: string, div: string, boxSize: string, score: number };
interface IDealer { Wertdiv: string, div: string, boxSize: string, score: number };
const PLAYER: IPlayer = blackjackgame["player"];
const DEALER: object = blackjackgame["dealer"];

//const hitSound = new Audio(".../...");
//const winSound = new Audio(".../...");
//const loseSound = new Audio(".../...");

let WindowsWidth: number = window.screen.width;
let windowHeight: number = window.screen.height;
let winner: string;

const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
hitbutton.addEventListener("click", blackjackHit);
//document.querySelector("#HitButton")?.addEventListener("click", blackjackHit);

function blackjackHit() {
  console.log("Hallo")
  if (blackjackgame["isStand"] === false) {
    let card: string = randomcard();
    //showCard(card, PLAYER);
    console.log(card)
    updateWert(card, PLAYER)
    showScore(PLAYER)
  }
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

function updateWert(card: string, activePlayer: IPlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackgame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackgame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackgame["cardsMap"][card][0];

    }
  }
  else {
    console.log(blackjackgame["cardsMap"])
    
    activePlayer["score"] += blackjackgame["cardsMap"][card];
  }
}

function showScore(activePlayer: IPlayer) {
  console.log(activePlayer["Wertdiv"]);
  const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const testquer = document.querySelector(activePlayer["Wertdiv"])as HTMLDivElement;
  console.log(testquer);
  if (activePlayer["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
   testquer.innerHTML = "BUST!";
   // let text = document.querySelector["Wertdiv"]);

   

  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    testquer.innerHTML = activePlayer["score"].toString();
    console.log(activePlayer["score"]);
    
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }

}
/*
let Hit = function () {
  console.log("Hello World");

}
*/


