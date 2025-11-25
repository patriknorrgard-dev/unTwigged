import { gql } from "graphql-request";

export const HERO_SECTION_FRAGMENT = gql`
  fragment HeroSectionFragment on ParagraphHeroSection {
    id
    title
    description
    image {
      ... on MediaImage {
        mediaImage { url }
      }
    }
  }
`;