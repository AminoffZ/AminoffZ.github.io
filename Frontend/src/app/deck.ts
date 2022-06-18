import { Card, Face, Rank, Suit } from './model';

export const suits: Suit[] = ['♠', '♥', '♦', '♣'];

export const ranks: Rank[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

export const faces: { [key: string]: Face } = {
  '2♠': '🂢',
  '2♥': '🂲',
  '2♦': '🃂',
  '2♣': '🃒',
  '3♠': '🂣',
  '3♥': '🂳',
  '3♦': '🃃',
  '3♣': '🃓',
  '4♠': '🂤',
  '4♥': '🂴',
  '4♦': '🃄',
  '4♣': '🃔',
  '5♠': '🂥',
  '5♥': '🂵',
  '5♦': '🃅',
  '5♣': '🃕',
  '6♠': '🂦',
  '6♥': '🂶',
  '6♦': '🃆',
  '6♣': '🃖',
  '7♠': '🂧',
  '7♥': '🂷',
  '7♦': '🃇',
  '7♣': '🃗',
  '8♠': '🂨',
  '8♥': '🂸',
  '8♦': '🃈',
  '8♣': '🃘',
  '9♠': '🂩',
  '9♥': '🂹',
  '9♦': '🃉',
  '9♣': '🃙',
  '10♠': '🂪',
  '10♥': '🂺',
  '10♦': '🃊',
  '10♣': '🃚',
  'J♠': '🂫',
  'J♥': '🂻',
  'J♦': '🃋',
  'J♣': '🃛',
  'Q♠': '🂭',
  'Q♥': '🂽',
  'Q♦': '🃍',
  'Q♣': '🃝',
  'K♠': '🂮',
  'K♥': '🂾',
  'K♦': '🃎',
  'K♣': '🃞',
  'A♠': '🂡',
  'A♥': '🂱',
  'A♦': '🃁',
  'A♣': '🃑',
};

export class Deck {
  cards: Card[];

  constructor(cards?: Card[]) {
    this.cards = cards ?? [];
  }

  public addCards(cards: Card[]) {
    this.cards = this.cards.concat(cards);
  }

  public hasCards() {
    return this.cards.length > 0;
  }

  public build() {
    this.cards = ranks.flatMap((rank) => {
      return suits.map((suit): Card => {
        return {
          suit: suit,
          rank: rank,
        };
      });
    });
  }

  takeCards(amount?: number): Card[] {
    if (!amount) return this.cards.splice(0, this.cards.length);
    return this.cards.splice(-amount, amount);
  }

  discard(): void {
    this.cards = [];
  }

  // Fisher–Yates shuffle
  public shuffle() {
    let currentIndex = this.cards.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }
  }
}
