import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import {
  QUERY_ALL_MOVIE_REVIEWS_BY_MOVIE_ID,
  QUERY_GET_ALL_MOVIES,
} from "../../../graphql/queries/movies";

export const moviesAsyncEpic: Epic = (
  action$: Observable<SliceAction["fetchMovies"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetchMovies.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: QUERY_GET_ALL_MOVIES,
        });
        return actions.getMovies({ data: result.data });
      } catch (err) {
        return actions.getMoviesError();
      }
    })
  );

export const fetchReviewsAsyncEpic: Epic = (
  action$: Observable<SliceAction["fetchReviewsByMovieId"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetchReviewsByMovieId.match),
    switchMap(async ({ payload }: any) => {
      try {
        const result = await client.query({
          query: QUERY_ALL_MOVIE_REVIEWS_BY_MOVIE_ID,
          variables: {
            movieId: payload.id,
          },
        });
        return actions.getReviews({ data: result.data });
      } catch (err) {
        console.log(err);
        return actions.getReviewsError();
      }
    })
  );
