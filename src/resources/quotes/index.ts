import { Base } from "../base";
import { Quote } from "./types";

const resourceName = "quote";

export class Quotes extends Base {
  getQuoteById(id: number): Promise<Quote> {
    return this.request(`/${resourceName}/${id}`);
  }

  getQuotes(): Promise<Quote[]> {
    return this.request(`/${resourceName}`);
  }
}
