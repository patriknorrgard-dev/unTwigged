export interface Portfolio {
  id: number;
  title: string;
  description: string;
  author: {
    name: string;
  }
  image: {
    mediaImage: {
      url: string;
    }
  }
}