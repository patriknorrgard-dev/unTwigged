import type { Section } from "./Portfolio.types";

export interface Project {
  id: number;
  title: string;
  preamble?: string;
  image: {
    mediaImage: {
      url: string;
    }
  }
  sections: Section[];
}