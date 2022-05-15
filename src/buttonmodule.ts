import { blackjack, DEALER, IDealer, PLAYER, randomcard, wager } from "./callmodule";
import { showDealerScore, showPlayerScore, updateWertDealer, updateWertPlayer } from "./scoremodule";
import { showCardDealer, showCardPlayer } from "./showCards";
import { CalculateWinner, CalculateWinnings, showWinner } from "./winnermodul";

  //Aufrufe der Buttons
 const hitbutton = document.getElementById("HitButton")as HTMLButtonElement;
  hitbutton.addEventListener("click", blackjackHit);
  
 const standbutton = document.getElementById("StandButton")as HTMLButtonElement;
  standbutton.addEventListener("click",blackjackStand);
  
  const doubledownbutton = document.getElementById("DoubleDownButton")as HTMLButtonElement;
  doubledownbutton.addEventListener("click", doubledown);
  
function blackjackHit() {
  if(blackjack["isStand"] === false){
    let card: string = randomcard();
    blackjack["PlayerHit"] = true;
    wager.readOnly = true;
    blackjack["setwager"] = true;
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
  }
}


function doubledown(){
  if (blackjack["isStand"] === false && blackjack["PlayerHit"] === true) {
    let card: string = randomcard();
    blackjack["doubledown"] = true;
    wager.value = String(parseInt(wager.value) *2)
    showCardPlayer(card, PLAYER);
    updateWertPlayer(card, PLAYER);
    showPlayerScore(PLAYER);
    blackjackStand();
  }
}

export function blackjackStand(){

  if(blackjack.pressOnce === false && blackjack["PlayerHit"] === true){
  blackjack["isStand"] = true;
  DealerLogic(DEALER);
  blackjack.pressOnce = true;
  blackjack["isTurnsOver"] = true

  CalculateWinner();
  showWinner();
  CalculateWinnings();
  }

  }
    //Dealer handelt als letztes. Solange der Dealer weniger als 16 hat zieht er weiter.
    function DealerLogic(activePlayer: IDealer){
      do {
        
       let card: string = randomcard();
      
        showCardDealer(card, DEALER);
        updateWertDealer(card, DEALER);
        showDealerScore(DEALER);
      }
      while(activePlayer["score"] < 17)
        
      }