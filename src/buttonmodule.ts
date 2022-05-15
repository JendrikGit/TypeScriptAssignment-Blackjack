import { blackjack, DEALER, IDealer, PLAYER, randomcard, wager } from "./index";
import { showDealerScore, showPlayerScore, updateWertDealer, updateWertPlayer } from "./scoremodule";
import { showCardDealer, showCardPlayer } from "./showCards";
import { CalculateWinner, CalculateWinnings, showWinner } from "./winnermodul";

  //Aufrufe der Buttons
 const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
  hitbutton.addEventListener("click", blackjackHit);
  
 const standbutton = document.getElementById("StandButton")as HTMLButtonElement;
  standbutton.addEventListener("click",blackjackStand);
  
  const doubledownbutton = document.getElementById("DoubleDownButton")as HTMLButtonElement;
  doubledownbutton.addEventListener("click", blackjackdoubledown);
  
  //Funktion für den Hit Button, welche beim Klick ausgeführt wird.
function blackjackHit() {
  console.log("hallo")
  //Kann nur ausgeführt werden, wenn der boolean isStand false ist. Also somit die Funtkion blackjackStand noch nocht ausgeführt wurde.
  if(blackjack["isStand"] === false){
    //Gibt eine zufällige Position aus dem Array wieder.
    let card: string = randomcard();
    //Ändert die Aufrufbarkeit des Input Elements Wager, damit nach dem ziehen einer Karte der Einsatz nicht mehr über das Input Element verändert werden kann. 
    wager.readOnly = true;
    //Boolean welche auf true gesetzt werden um einen reiblungslosen Ablauf gewährleisten zu können.
    blackjack["PlayerHit"] = true;
    blackjack["setwager"] = true;
    //Funktion die die Karten des Spielers anzeigt
    showCardPlayer(card, PLAYER);
    //Funktion, welche den Wert der Karten des Spielers berechnet.
    updateWertPlayer(card, PLAYER);
    //Funktion die für das Anzeigen der Kartenwerte des Spielers verantwortlich ist.
    showPlayerScore(PLAYER);
  }
}

//Funktion, die beim Klick auf den doubledown Button ausgeführt wird. 
function blackjackdoubledown(){
  //Kann nur ausgeführt werden, wenn die blackjackstand Funktion noch nicht und die blackHit schon ausgeführt wurden.
  if (blackjack["isStand"] === false && blackjack["PlayerHit"] === true) {
    //Gibt eine zufällige Position aus dem Array wieder.
    let card: string = randomcard();
    //Boolean der auf true gestetzt wird.
    blackjack["doubledown"] = true;
    //Bei double down wird der Einsatz verdoppelt. Hier wird er somit mit 2 multipliziert.
    wager.value = String(parseInt(wager.value) *2)
    //Weitere Funktionen die für den Dealer ausgefühtr werden.
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
    //Nach dem Spielen eines doubledowns wird nur noch eine Karte gezogen und danach ist der Dealer dran.
    blackjackStand();
  }
}


export function blackjackStand(){
//Wird ausgeführt, wenn bestimmte booleans geändert wurden.
  if(blackjack.pressOnce === false && blackjack["PlayerHit"] === true){
    //Booleans werden geändert für den späteren Spielverlauf.
  blackjack["isStand"] = true;
  blackjack.pressOnce = true;
  blackjack["isTurnsOver"] = true
//Innerhalb der DealerLogic wird entschieden, wann der Dealer eine weitere Karte zieht und wann nicht.
  DealerLogic(DEALER);
  //Nachdem der Dealer mit seinem Zug durch ist, wird überprüft wer gewonnen hat sowie die Gewinne werden berechnet.
  CalculateWinner();
  showWinner();
  CalculateWinnings();
  }

  }
    //Dealer handelt als letztes. Solange der Dealer weniger als 16 hat zieht er weiter.

    function DealerLogic(activePlayer: IDealer){
      //Schleife, welche solange läuft bis der Kartenwert nicht mehr unter 17 ist.
      do {
        //Gibt eine zufällige Position aus dem Array wieder.
       let card: string = randomcard();
       //Funktion, welche die Karte des Dealers anzeigt.
        showCardDealer(card, DEALER);
        //Berechnet den Wert der Karten des Dealers.
        updateWertDealer(card, DEALER);
        //Zeigt den Wert der Dealer Karten.
        showDealerScore(DEALER);
      }
      //Abbruchbedingung der Schleife. 
      while(activePlayer["score"] < 17)
        
      }