import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import { moviesQuery } from "../../../graphql/queries/movies";

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
          query: moviesQuery,
        });
        return actions.getMovies({ data: result.data });
      } catch (err) {
        return actions.getMoviesError();
      }
    })
  );
