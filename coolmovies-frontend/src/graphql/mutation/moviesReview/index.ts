import { gql } from "@apollo/client";

export const MUTATION_CREATE_MOVIE_REVIEW = gql`
  mutation CreateMovieReviewMutation($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      movieReview {
        id
        title
        body
        rating
        userByUserReviewerId {
          name
        }
      }
    }
  }
`;
