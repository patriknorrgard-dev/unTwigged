import type { Milestone } from "./Milestone.types";
import type { Project } from "./Project.types";
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

export interface SectionBase {
  id: number;
  title: string;
  description: string;
  __typename: string;
}

export interface Section extends SectionBase {
  milestoneItems: Milestone[];
  quoteItems: Quote[];
  projectItems: Project[];
}