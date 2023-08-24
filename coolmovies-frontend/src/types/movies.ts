export type SelectedMovieType = {
  __typename: string;
  id: string;
  imgUrl: string;
  movieDirectorId: string;
  userCreatorId: string;
  title: string;
  releaseDate: Date;
  nodeId: string;
  userByUserCreatorId: {
    __typename: string;
    id: string;
    name: string;
    nodeId: string;
  };
};

export type MovieReviewType = {
  id: string;
  title: string;
  body: string;
  rating: number;
  movieByMovieId: {
    title: string;
    __typename: string;
  };
  userByUserReviewerId: {
    name: string;
    id: string;
    __typename: string;
  };
  __typename: string;
};

export type CreateMovieReviewType = {
  movieReview: MovieReviewType;
};

export type ReviewsType = {
  allMovieReviews: {
    nodes: MovieReviewType[];
  };
};

export type FetchMovieReviewType = {
  movieId: string;
  userReviewerId: string;
} & MovieFormDataType;

export type MovieType = {
  id: string;
  imgUrl: string;
  movieDirectorId: string;
  nodeId: string;
  releaseDate: Date;
  title: string;
  userByUserCreatorId: {
    __typename: string;
    id: string;
    name: string;
    nodeId: string;
  };
  userCreatorId: string;
  __typename: string;
};

export type AllMoviesType = {
  allMovies: {
    nodes: MovieType[];
  };
};

export type MovieFormDataType = {
  rating: number;
  body: string;
  title: string;
};

export type FetchMovieEditReviewType = {
  id: string;
  userReviewerId: string;
} & MovieFormDataType;
