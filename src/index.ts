import { Movies } from "./resources/movies";
import { Quotes } from "./resources/quotes";

export class Library {
  movies: Movies;
  quotes: Quotes;

  constructor(config: { authToken: string; baseUrl?: string }) {
    this.movies = new Movies(config);
    this.quotes = new Quotes(config);
  }
}
