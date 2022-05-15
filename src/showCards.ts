import { blackjack, IDealer, IPlayer } from "./index";



//Funktionen zum Anzeigen der Karten auf der Spieler Seite
export function showCardPlayer(card: string, activeSide: IPlayer){
  //Karten werden nur angezeigt, wenn der Kartenwert unter 22 ist.
  if(activeSide["score"] <= 21){
    //Erstellen eines HTML Img Elements 
    const cardImage = document.createElement("img")as HTMLImageElement;
    //Dem Img Element ein Bild aus dem Ordner Playingcards zuordnen. 
    cardImage.src = `Playingcards/${card}.png`;
    //Mit filtercard ändert man, dass Karten nicht mehrfach innerhalb einer Runde ausgespielt werden können.
    let filtercards = blackjack.cards.filter((item)=>{return item !== card});
    //Aufrufen eines HTML Elements
    const Cardplace = document.querySelector(activeSide["div"])as HTMLDivElement;
    //Hier wird dem HTMLDivElement das erstellen Img Element als Child zugeordnet.
    Cardplace.appendChild(cardImage);
    //Hier wird dem Array die gespielte card entfernt.
    blackjack.cards = filtercards;
  }
}

//Funktionen zum Anzeigen der Karten auf der Spieler Seite
export function showCardDealer(card: string, activeSide: IDealer){
//Karten werden nur angezeigt, wenn der Kartenwert unter 22 ist.
  if(activeSide["score"] <= 21){
     //Erstellen eines HTML Img Elements 
    const cardImage = document.createElement("img")as HTMLImageElement;
 //Dem Img Element ein Bild aus dem Ordner Playingcards zuordnen.
    cardImage.src = `Playingcards/${card}.png`;
  //Mit filtercard ändert man, dass Karten nicht mehrfach innerhalb einer Runde ausgespielt werden können.
    let filtercards = blackjack.cards.filter((item)=>{return item !== card});
 //Aufrufen eines HTML Elements
    const Cardplace = document.querySelector(activeSide["div"])as HTMLDivElement;
 //Hier wird dem HTMLDivElement das erstellen Img Element als Child zugeordnet.
    Cardplace.appendChild(cardImage);
   //Hier wird dem Array die gespielte Karte entfernt.
    blackjack.cards = filtercards;
  }
}