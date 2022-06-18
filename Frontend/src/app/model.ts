import { Deck } from './deck';

export type Suit = '♠' | '♥' | '♦' | '♣';

export type Rank =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A';

export interface Card {
  suit: Suit;
  rank: Rank;
}

export interface Player {
  name: string;
  main: Deck;
  discard: Deck;
  tracker?: Card;
}

export type Face =
  | '🂡'
  | '🂱'
  | '🃁'
  | '🃑'
  | '🂢'
  | '🂲'
  | '🃂'
  | '🃒'
  | '🂣'
  | '🂳'
  | '🃃'
  | '🃓'
  | '🂤'
  | '🂴'
  | '🃄'
  | '🃔'
  | '🂥'
  | '🂵'
  | '🃅'
  | '🃕'
  | '🂦'
  | '🂶'
  | '🃆'
  | '🃖'
  | '🂧'
  | '🂷'
  | '🃇'
  | '🃗'
  | '🂨'
  | '🂸'
  | '🃈'
  | '🃘'
  | '🂩'
  | '🂹'
  | '🃉'
  | '🃙'
  | '🂪'
  | '🂺'
  | '🃊'
  | '🃚'
  | '🂫'
  | '🂻'
  | '🃋'
  | '🃛'
  | '🂬'
  | '🂼'
  | '🃌'
  | '🃜'
  | '🂭'
  | '🂽'
  | '🃍'
  | '🃝'
  | '🂮'
  | '🂾'
  | '🃎'
  | '🃞';
