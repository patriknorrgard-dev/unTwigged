export interface Project {
  id: number;
  title: string;
  preamble: string;
  image: {
    mediaImage: {
      url: string;
    }
  }
}