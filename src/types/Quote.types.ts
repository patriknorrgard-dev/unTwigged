export interface Quote {
  id: number;
  quote: string;
  source: string;
  image: {
    mediaImage: {
      url: string;
    }
  }
}