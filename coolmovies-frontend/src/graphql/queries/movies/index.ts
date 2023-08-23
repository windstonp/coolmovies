import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query AllMovies {
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

export const allMovieReviewsById = gql`
  {
    allMovieReviews(filter: { movieId: $movieId }) {
      nodes {
        title
        body
        rating
        movieByMovieId {
          title
        }
      }
    }
  }
`;
