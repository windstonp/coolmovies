import { gql } from "@apollo/client";

export const MUTATION_CREATE_MOVIE_REVIEW = gql`
  mutation CreateMovieReview($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      movieReview {
        id
        title
        body
        rating
        userByUserReviewerId {
          name
          id
        }
      }
    }
  }
`;

export const MUTATION_EDIT_MOVIE_REVIEW_BY_ID = gql`
  mutation UpdateReviewById($input: UpdateMovieReviewByIdInput!) {
    updateMovieReviewById(input: $input) {
      movieReview {
        id
        title
        body
        rating
        userByUserReviewerId {
          name
          id
        }
      }
    }
  }
`;
