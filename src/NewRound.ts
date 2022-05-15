

//import * as MODULE from "./callmodule";
import { blackjack, safewager, wager, DEALER, PLAYER, IPlayer, IDealer } from "./index";
import { showPlayerScore } from "./scoremodule";

//Button, welcher beim Klick die Funktion nextRound() ausführt.
const nextroundbutton = document.getElementById("NextRoundButton")as HTMLButtonElement;
  nextroundbutton.addEventListener("click", nextRound);
  
//Funktion um eine neue Runde zu starten.
export function nextRound(){
//Eine neue Runde kann nur gestartet werden, wenn die vorherige beendet ist.
  if(blackjack["isTurnsOver"] === true){
    //Überschreibt den Einsatz mit dem Standard Einsatz.
  wager.value = safewager;
//Ändert die Zugriffbarkeit des inputs Wager
  wager.readOnly = false;
  //Funktionen, welche die Seiten des Spielers und des Dealers zurücksetzten
  resetDealer(DEALER);
  resetPlayer(PLAYER);
  //Setzt den Winnings Span zurück.
  const Winningsspan = document.querySelector("#Winnings")as HTMLSpanElement;
  Winningsspan.innerHTML = "0";
  Winningsspan.style.color = "white";
  //setzt den winner span zurück.
  const winmessage = document.querySelector("#winner")as HTMLSpanElement;
  winmessage.innerHTML = "The Game";
  winmessage.style.color = "white";
  //setzt das Array mit den Karten zurück. Dadurch können in der nächsten Runde wieder alle Karten gezogen werden.
  blackjack.cards= ["HerzA", "Herz2", "Herz3", "Herz4", "Herz5", "Herz6", "Herz7", "Herz8", "Herz9", "Herz10", "HerzJ", "HerzQ", "HerzK", 
  "KreuzA","Kreuz2","Kreuz3","Kreuz4","Kreuz5","Kreuz6","Kreuz7","Kreuz8","Kreuz9","Kreuz10","KreuzJ","KreuzQ","KreuzK",
  "PikA","Pik2","Pik3","Pik4","Pik5","Pik6","Pik7","Pik8","Pik9","Pik10","PikJ","PikQ","PikK",
  "KaroA","Karo2","Karo3","Karo4","Karo5","Karo6","Karo7","Karo8","Karo9","Karo10","KaroJ","KaroQ","KaroK"];
//Booleans werden zurückgesetzt.
  blackjack["PlayerHit"] = false;
  blackjack["isTurnsOver"] = false;
  blackjack["isStand"] = false;
  blackjack["pressOnce"] = false;
  }
  }
//Funktion welche die Seite des Spielers zurücksetzt oder überschreibt.
  function resetPlayer(activeSide: IPlayer){
    //Kartenwert wird mit 0 überschireben
  activeSide["score"]= 0;
  //Wert von 0 wird der Funktion übergeben.
      showPlayerScore(PLAYER);
      //Überschreibt die Farbe des Kreises, in welchem der Kartenwert steht, mit der Farbe weiß.
      const Wertsurface = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
      Wertsurface.style.backgroundColor= "white";
//Zugriff auf die Div, in welchem die Img Elemente zu finden sind.
     const ImgDiv = document.querySelector(activeSide["div"])as HTMLDivElement;
     //while sorgt dafür, dass alle Img Elemente in der Img Div entfernt werden.
    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }
  
  //Funktion welche die Seite des Dealers zurücksetzt oder überschreibt.
  function resetDealer(activeSide: IDealer){
     //Kartenwert wird mit 0 überschireben
    activeSide["score"]= 0;
    //Wert von 0 wird der Funktion übergeben.
    showPlayerScore(DEALER);
  //Überschreibt die Farbe des Kreises, in welchem der Kartenwert steht, mit der Farbe weiß.
    const Wertsurface = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
    Wertsurface.style.backgroundColor= "white";
//Zugriff auf die Div, in welchem die Img Elemente zu finden sind.
    const ImgDiv = document.querySelector(activeSide["div"])as HTMLDivElement;
  //while sorgt dafür, dass alle Img Elemente in der Img Div entfernt werden.
    while(ImgDiv.firstChild){
     ImgDiv.removeChild(ImgDiv.firstChild);}
  }
