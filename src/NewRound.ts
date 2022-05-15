

//import * as MODULE from "./callmodule";
import { blackjack, safewager, wager, DEALER, PLAYER, IPlayer, IDealer } from "./callmodule";
import { showPlayerScore } from "./scoremodule";


const nextroundbutton = document.getElementById("NextRoundButton")as HTMLButtonElement;
  nextroundbutton.addEventListener("click", nextRound);
  
//Next Round Funktionen ->
function nextRound(){

  if(blackjack["isTurnsOver"] === true){
    console.log("nextRound()");

  wager.value = safewager;
  resetDealer(DEALER);
  resetPlayer(PLAYER);
  
  const Winningsspan = document.querySelector("#Winnings")as HTMLSpanElement;
  Winningsspan.innerHTML = "0";
  Winningsspan.style.color = "white";
  
  wager.readOnly = false;


  const winmessage = document.querySelector("#winner")as HTMLSpanElement;
  winmessage.innerHTML = "The Game";
  winmessage.style.color = "white";

  blackjack.cards= ["HerzA", "Herz2", "Herz3", "Herz4", "Herz5", "Herz6", "Herz7", "Herz8", "Herz9", "Herz10", "HerzJ", "HerzQ", "HerzK", 
  "KreuzA","Kreuz2","Kreuz3","Kreuz4","Kreuz5","Kreuz6","Kreuz7","Kreuz8","Kreuz9","Kreuz10","KreuzJ","KreuzQ","KreuzK",
  "PikA","Pik2","Pik3","Pik4","Pik5","Pik6","Pik7","Pik8","Pik9","Pik10","PikJ","PikQ","PikK",
  "KaroA","Karo2","Karo3","Karo4","Karo5","Karo6","Karo7","Karo8","Karo9","Karo10","KaroJ","KaroQ","KaroK"];

  blackjack["PlayerHit"] = false;
  blackjack["isTurnsOver"] = false;
  blackjack["isStand"] = false;
  blackjack["pressOnce"] = false;
  }
  }
  function resetPlayer(activeSide: IPlayer){
  activeSide["score"]= 0;
      showPlayerScore(PLAYER);
      const testquer = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
      testquer.style.backgroundColor= "white";
     const ImgDiv = document.querySelector(activeSide["div"])as HTMLDivElement;

    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }
  
  
  function resetDealer(activeSide: IDealer){
    activeSide["score"]= 0;
    showPlayerScore(DEALER);
    const testquer = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
    testquer.style.backgroundColor= "white";
    const ImgDiv = document.querySelector(activeSide["div"])as HTMLDivElement;

    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }
