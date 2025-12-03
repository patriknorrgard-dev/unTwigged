import { gql } from "graphql-request";

export const WORK_SECTION_FRAGMENT = gql`
  fragment WorkSectionFragment on ParagraphWorkSection {
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
