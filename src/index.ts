import { blackjackdoubledown, blackjackHit, blackjackStand } from "./buttonmodule";
import { nextRound } from "./NewRound";

//blackjack als objekt
export let blackjack = {

  //Objekt Dealer und Player um übersichtlich auf die Elemente beider Seiten zuzugreifen.
  player: {
    Wertdiv: "#PlayerWertBJ",
    div: "#Playercardsurface",
    Titel: "PlayerTitel",
    score: 0,
  },

  dealer: {
    Wertdiv: "#CroupierWertBJ",
    div: "#Croupiercardsurface",
    Titel: "#CroupierTitel",
    score: 0,
  },

//Array mit allen Karten, welche im Playingcards Ordner zu finden sind.
  cards: ["HerzA", "Herz2", "Herz3", "Herz4", "Herz5", "Herz6", "Herz7", "Herz8", "Herz9", "Herz10", "HerzJ", "HerzQ", "HerzK", 
          "KreuzA","Kreuz2","Kreuz3","Kreuz4","Kreuz5","Kreuz6","Kreuz7","Kreuz8","Kreuz9","Kreuz10","KreuzJ","KreuzQ","KreuzK",
          "PikA","Pik2","Pik3","Pik4","Pik5","Pik6","Pik7","Pik8","Pik9","Pik10","PikJ","PikQ","PikK",
          "KaroA","Karo2","Karo3","Karo4","Karo5","Karo6","Karo7","Karo8","Karo9","Karo10","KaroJ","KaroQ","KaroK"
],

//Booleans
  isStand: false,
  isTurnsOver: false,
  pressOnce: false,
  PlayerHit: false,
  doubledown: false,
 

};
//Objekt in welchem jede Karte ein Array ist. 
export let cardsMap: {[key:string]:number[]} = { "HerzA": [1, 11], "Herz2": [2], "Herz3": [3], "Herz4": [4], "Herz5": [5], "Herz6": [6], "Herz7": [7], "Herz8": [8], "Herz9": [9], "Herz10": [10], "HerzJ": [10], "HerzQ": [10], "HerzK": [10],
"KaroA": [1, 11], "Karo2": [2], "Karo3": [3], "Karo4": [4], "Karo5": [5], "Karo6": [6], "Karo7": [7], "Karo8": [8], "Karo9": [9], "Karo10": [10], "KaroJ": [10], "KaroQ": [10], "KaroK": [10],
"PikA": [1, 11], "Pik2": [2], "Pik3": [3], "Pik4": [4], "Pik5": [5], "Pik6": [6], "Pik7": [7], "Pik8": [8], "Pik9": [9], "Pik10": [10], "PikJ": [10], "PikQ": [10], "PikK": [10],
"KreuzA": [1, 11], "Kreuz2": [2], "Kreuz3": [3], "Kreuz4": [4], "Kreuz5": [5], "Kreuz6": [6], "Kreuz7": [7], "Kreuz8": [8], "Kreuz9": [9], "Kreuz10": [10], "KreuzJ": [10], "KreuzQ": [10], "KreuzK": [10] };


export interface IPlayer { Wertdiv: string, div: string, score: number };
export interface IDealer { Wertdiv: string, div: string, score: number };
export const PLAYER: IPlayer = blackjack["player"];
export const DEALER: IDealer = blackjack["dealer"];
export let winner: object;

  //Aufrufe der Buttons
const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
  hitbutton.addEventListener("click", blackjackHit);
  
const standbutton = document.getElementById("StandButton")as HTMLButtonElement;
  standbutton.addEventListener("click",blackjackStand);
  
const doubledownbutton = document.getElementById("DoubleDownButton")as HTMLButtonElement;
  doubledownbutton.addEventListener("click", blackjackdoubledown);
 
const nextroundbutton = document.getElementById("NextRoundButton")as HTMLButtonElement;
nextroundbutton.addEventListener("click", nextRound);

//Aufrufen eines Buttons
export const wager = document.getElementById("Wager")as HTMLInputElement
export let safewager = wager.value

//Funktion, welche eine zufällige Karte aus dem Array ausgibt.
export function randomcard() {
  //Ausgeben einer Zufälligen Zahl zwischen 0 und die Länge des Arrays
let randomNumr: number = Math.floor(Math.random() * blackjack.cards.length);
return blackjack["cards"][randomNumr];
}