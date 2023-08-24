import { gql } from "@apollo/client";

export const QUERY_GET_ALL_MOVIES = gql`
  query getAllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        movieDirectorId
        userCreatorId
        title
        releaseDate
        nodeId
        userByUserCreatorId {
          id
          name
          nodeId
        }
      }
    }
  }
`;

export const QUERY_ALL_MOVIE_REVIEWS_BY_MOVIE_ID = gql`
  query getAllReviewsFromMovie($movieId: UUID) {
    allMovieReviews(filter: { movieId: { equalTo: $movieId } }) {
      nodes {
        id
        title
        body
        rating
        movieByMovieId {
          title
        }
        userByUserReviewerId {
          name
          id
        }
      }
    }
  }
`;
