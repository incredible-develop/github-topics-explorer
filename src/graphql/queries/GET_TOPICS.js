import { gql } from '@apollo/client';

// Passing our topic variable to the query
export const GET_TOPICS = gql`
  query GetTopic($topic: String!) {
    topic(name: $topic) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;
