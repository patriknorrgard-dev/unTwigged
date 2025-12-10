export interface HeroData {
  usercontentGraphql1: {
    results: Hero[];
  };
}

export interface Hero {
  id: number;
  sections: HeroSection[];
}

export interface HeroSection {
  id: number;
  title: string;
  description: string;
  image: {
    mediaImage: {
      url: string;
    };
  };
}
