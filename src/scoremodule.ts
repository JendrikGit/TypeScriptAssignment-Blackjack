import { blackjackStand } from "./buttonmodule";
import { cardsMap, IDealer, IPlayer } from "./callmodule";

export function updateWertPlayer(card: string, activeSide: IPlayer) {

  // als schleife Solange unter 21
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
    if (activeSide["score"] + cardsMap[card][1] <= 21) {
      activeSide["score"] += cardsMap[card][1];
    } else {
      activeSide["score"] += cardsMap[card][0];

    }
  }

  else {
//Wird immer ausgeführt, wenn die Karte kein Ass ist.
   activeSide["score"] += cardsMap[card][0];

  }
}



export function updateWertDealer(card: string, activeSide: IDealer) {
  
  //Für das Ass -> Sonderfall, wenn über 21 ist das Ass nur 1 Wert.
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
    if (activeSide["score"] + cardsMap[card][1] <= 21) {
      activeSide["score"] += cardsMap[card][1];
    } else {
      activeSide["score"] += cardsMap[card][0];

    }
  }

  else {

   activeSide["score"] += cardsMap[card][0];

  }
}

export function showPlayerScore(activeSide: IPlayer) {
  
  const wertplace = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
  
  if (activeSide["score"] > 21) {
    
   wertplace.innerHTML = "x";
   wertplace.style.backgroundColor= "#f70000";
   blackjackStand();

  }
  else {

    wertplace.innerHTML = activeSide["score"].toString();
    
  }
}

export function showDealerScore(activeSide: IDealer) {
  
  //const test1 = document.getElementById(activePlayer["Wertdiv"])as HTMLDivElement;
  const wertplace = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
  
  if (activeSide["score"] > 21) {
   // document.querySelector("Wertdiv").innerHTML = "BUST!";
    
  // testquer.innerHTML = "BUST!";
   wertplace.innerHTML = "x";
   wertplace.style.backgroundColor= "#f70000";
   // let text = document.querySelector["Wertdiv"]);
  }
  else {
    //const test2 = document.getElementById(activePlayer["Wertdiv"]) as HTMLDivElement;
    wertplace.innerHTML = activeSide["score"].toString();
   // document.querySelector(activePlayer["Wertdiv"]).textContent = activePlayer["score"]
  }
}
