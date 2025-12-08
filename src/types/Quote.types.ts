export interface Quote {
  id: number;
  title: string;
  quote: string;
  source: string;
  image: {
    mediaImage: {
      url: string;
    }
  }
}