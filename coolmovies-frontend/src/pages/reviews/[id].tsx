import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions, useAppSelector } from "../../redux";
import { ReviewScreen } from "../../screens/reviews";

function MovieReviews() {
  const { reviews, selectedMovie } = useAppSelector((state) => state.movies);
  const { currentUser } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const router = useRouter();

  if (!currentUser?.id) {
    router.push("/");
  }

  if (!selectedMovie?.id) {
    router.push("/movies");
  }

  useEffect(() => {
    if (router.query.id) {
      dispatch(moviesActions.fetchReviewsByMovieId({ id: router.query.id }));
    }
  }, [router.query.id]);

  return <ReviewScreen reviews={reviews} selectedMovie={selectedMovie} />;
}

export default MovieReviews;
