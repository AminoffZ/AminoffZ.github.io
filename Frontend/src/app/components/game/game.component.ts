import { Component, OnInit } from '@angular/core';
import { Deck, faces, ranks, suits } from 'src/app/deck';
import { Card, Player } from 'src/app/model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
})
export class GameComponent implements OnInit {
  playerOne: Player = {
    name: 'Green',
    main: new Deck(),
    discard: new Deck(),
  };
  playerTwo: Player = {
    name: 'Blue',
    main: new Deck(),
    discard: new Deck(),
  };
  boardDeck: Deck = new Deck();
  atWar = false;
  winner;
  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  logWinner(event: any) {
    console.log(event);
  }

  public newGame() {
    this.atWar = false;
    this.playerOne.tracker = this.playerTwo.tracker = {
      rank: 'A',
      suit: '♠',
    };
    this.playerOne.discard.discard();
    this.playerTwo.discard.discard();
    const mainDeck = new Deck();
    mainDeck.build();
    mainDeck.shuffle();
    this.playerOne.main.addCards(mainDeck.takeCards(26));
    this.playerTwo.main.addCards(mainDeck.takeCards(26));
  }

  getFace(card: Card) {
    return faces[card.rank + card.suit];
  }

  draw() {
    this.atWar = false;
    this.playerOne.tracker = this.playerOne.main.cards.at(-1);
    this.playerTwo.tracker = this.playerTwo.main.cards.at(-1);
    const drawnCards = this.playerOne.main
      .takeCards(1)
      .concat(this.playerTwo.main.takeCards(1));
    this.boardDeck.addCards(drawnCards);
    const winner = this.compare(this.playerOne.tracker, this.playerTwo.tracker);
    this.judge(winner);
  }

  gameResult() {
    if (
      this.playerOne.discard.cards.length > this.playerTwo.discard.cards.length
    )
      return 'Green Wins! 🏆';
    if (
      this.playerOne.discard.cards.length < this.playerTwo.discard.cards.length
    )
      return 'Blue Wins! 🏆';
    return 'Draw 😪';
  }

  private judge(winner: 'FIRST' | 'SECOND' | 'DRAW') {
    if (winner === 'FIRST') {
      this.playerOne.discard.addCards(this.boardDeck.takeCards());
      this.winner = 'Green';
      setTimeout(() => (this.winner = null), 250);
      return;
    }
    if (winner === 'SECOND') {
      this.playerTwo.discard.addCards(this.boardDeck.takeCards());
      this.winner = 'Blue';
      setTimeout(() => (this.winner = null), 250);
      return;
    }
    this.atWar = true;
    this.war();
  }

  war(): void {
    this.boardDeck.addCards(this.playerOne.main.takeCards(3));
    this.boardDeck.addCards(this.playerTwo.main.takeCards(3));
  }

  compare(first: Card, second: Card): 'FIRST' | 'SECOND' | 'DRAW' {
    if (ranks.indexOf(first.rank) > ranks.indexOf(second.rank)) return 'FIRST';
    if (ranks.indexOf(first.rank) < ranks.indexOf(second.rank)) return 'SECOND';
    return 'DRAW';
  }

  shuffle() {}

  isRed(card: Card) {
    return suits.indexOf(card.suit) === 1 || suits.indexOf(card.suit) === 2;
  }
}
