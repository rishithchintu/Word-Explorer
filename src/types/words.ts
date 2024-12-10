export interface Word {
  word: string;
  synonyms: string[];
}

export interface WordList {
  words: Word[];
  categories: string[];
}