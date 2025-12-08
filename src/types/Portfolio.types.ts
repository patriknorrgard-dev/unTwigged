import type { Milestone } from "./Milestone.types";
import type { Quote } from "./Quote.types";

export interface PortfolioData {
  usercontentbyidGraphql1: {
    results: Portfolio[];
  }
}

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
  created: {
    time: string;
  }
  changed: {
    time: string;
  }
  sections: Section[];
}

export interface SectionType {
  id: number;
  __typename: string;
}

export interface Section extends SectionType {
  milestoneItems: Milestone[];
  quoteItems: Quote[];
}