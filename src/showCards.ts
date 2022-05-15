import { blackjack, IDealer, IPlayer } from "./callmodule";



//Funktionen zum Anzeigen der Karten
export function showCardPlayer(card: string, activeSide: IPlayer){
  if(activeSide["score"] <= 21){
    const cardImage = document.createElement("img")as HTMLImageElement;
 
    cardImage.src = `Playingcards/${card}.png`;
    let filtercards = blackjack.cards.filter((item)=>{return item !== card});
    const Cardplace = document.querySelector(activeSide["div"])as HTMLDivElement;
    Cardplace.appendChild(cardImage);
    blackjack.cards = filtercards;

  }
}
export function showCardDealer(card: string, activeSide: IDealer){
  if(activeSide["score"] <= 21){
    const cardImage = document.createElement("img")as HTMLImageElement;
    cardImage.src = `Playingcards/${card}.png`;
    let filtercards = blackjack.cards.filter((item)=>{return item !== card});
    const Cardplace = document.querySelector(activeSide["div"])as HTMLDivElement;
    Cardplace.appendChild(cardImage);
    blackjack.cards = filtercards;
  }
}