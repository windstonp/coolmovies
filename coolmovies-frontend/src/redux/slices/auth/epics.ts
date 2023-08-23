import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import { allUsersQuery } from "../../../graphql/queries/auth";

export const authAsyncEpic: Epic = (
  action$: Observable<SliceAction["fetchAllUser"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetchAllUser.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: allUsersQuery,
        });
        return actions.getAllUsers({ data: result.data });
      } catch (err) {
        return actions.getAllUsersError();
      }
    })
  );
