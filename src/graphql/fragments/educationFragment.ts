import { gql } from "graphql-request";

export const EDUCATION_SECTION_FRAGMENT = gql`
  fragment EducationSectionFragment on ParagraphEducationSection {
    id
    milestoneItems {
      ... on ParagraphMilestoneItem {
        id
        title
        subtitle
        dateFrom {
          time
        }
        dateTo {
          time
        }
      }
    }
  }
`;
