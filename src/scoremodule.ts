import { blackjackStand } from "./buttonmodule";
import { cardsMap, IDealer, IPlayer } from "./index";

//Funktion welche die Karten Werte beim Spieler ausgibt.
export function updateWertPlayer(card: string, activeSide: IPlayer) {
  //Wenn dass Ass mit dem Wert 11 plus dem aktuellen Kartenwert unter 21 ist, dann ist das Ass 11 Wert.
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
    if (activeSide["score"] + cardsMap[card][1] <= 21) {
      activeSide["score"] += cardsMap[card][1];
       //Wenn das Ass plus den aktuellen Kartenwert mehr als 21 ist, dann ist das Ass 1 Wert.
    } else {
      activeSide["score"] += cardsMap[card][0];
    }
  }
  else {
//Wird immer ausgeführt, wenn die Karte kein Ass ist. CardMap ordnet jeder Karte einen Zahlen Wert zu.
   activeSide["score"] += cardsMap[card][0];
  }
}

//Funktion welche die Karten Werte beim Dealer ausgibt.
export function updateWertDealer(card: string, activeSide: IDealer) {
  //Für das Ass -> Sonderfall, wenn über 21 ist das Ass nur 1 Wert.
  if (card === "HerzA" || card === "KaroA"  || card === "PikA" || card === "KreuzA" ) {
   //Wenn dass Ass mit dem Wert 11 plus dem aktuellen Kartenwert unter 21 ist, dann ist das Ass 11 Wert.
    if (activeSide["score"] + cardsMap[card][1] <= 21) {
      activeSide["score"] += cardsMap[card][1];
      //Wenn das Ass plus den aktuellen Kartenwert mehr als 21 ist, dann ist das Ass 1 Wert.
    } else {
      activeSide["score"] += cardsMap[card][0];
    }
  }
  else {
//Wird immer ausgeführt, wenn die Karte kein Ass ist. CardMap ordnet jeder Karte einen Zahlen Wert zu.
   activeSide["score"] += cardsMap[card][0];
  }
}

//Funktion, welche den Spieler Kartenwert anzeigt.
export function showPlayerScore(activeSide: IPlayer) {
  //Zum auswählen der WertDiv.
  const wertplace = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
  //Wird ausgeführt, wenn der Kartenwert über 21 ist.
  if (activeSide["score"] > 21) {
    //Da der Spieler verloren hat, wenn sein Kartenwert über 21 ist, wird aus der Zahl ein x und der Kreis wird rot eingefärbt.
   wertplace.innerHTML = "x";
   wertplace.style.backgroundColor= "#f70000";
   //Da der Spieler nicht nochmal ziehen kann, wenn er über 21 ist wird die Funktion blackajckStand sofort ausgeführt.
   blackjackStand();
  }
  //Wenn der Kartenwert unter 21 ist, dann steht in der Wertdiv der Kartenwert drin.
  else {
    wertplace.innerHTML = activeSide["score"].toString();
  }
}
//Funktion, welche den Dealer Kartenwert anzeigt.
export function showDealerScore(activeSide: IDealer) {
  //Zum auswählen der WertDiv.
  const wertplace = document.querySelector(activeSide["Wertdiv"])as HTMLDivElement;
   //Wird ausgeführt, wenn der Kartenwert über 21 ist.
  if (activeSide["score"] > 21) {
      //Da Dealer verloren hat, wenn sein Kartenwert über 21 ist, wird aus der Zahl ein x und der Kreis wird rot eingefärbt.
   wertplace.innerHTML = "x";
   wertplace.style.backgroundColor= "#f70000";
  }
   //Wenn der Kartenwert unter 21 ist, dann steht in der Wertdiv der Kartenwert drin.
  else {
    wertplace.innerHTML = activeSide["score"].toString();
  }
}
