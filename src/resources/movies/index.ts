import { Base } from "../base";
import { Movie } from "./types";

const resourceName = "movie";

export class Movies extends Base {
  getMovieById(id: number): Promise<Movie> {
    return this.request(`/${resourceName}/${id}`);
  }

  getMovies(): Promise<Movie[]> {
    return this.request(`/${resourceName}`);
  }

  getQuotesByMovieId(id: number): Promise<Movie> {
    return this.request(`/${resourceName}/${id}/quote`);
  }
}
