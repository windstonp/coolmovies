import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewSchema } from "../../../../validators";
import { useDispatch } from "react-redux";
import { moviesActions, useAppSelector } from "../../../../redux";
import { MovieFormDataType } from "../../../../types";

type Props = {
  movieId: string;
};
export function CreateReviewForm({ movieId }: Props) {
  const { currentUser } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(reviewSchema) });

  function SubmitCreateForm(data: MovieFormDataType) {
    dispatch(
      moviesActions.fetchCreateMovieReview({
        data: {
          ...data,
          movieId,
          userReviewerId: currentUser!.id,
        },
      })
    );
    reset();
  }
  return (
    <Paper elevation={4} sx={{ padding: 2 }}>
      <form onSubmit={handleSubmit(SubmitCreateForm)}>
        <Grid container justifyContent="center">
          <Typography component="span" variant="caption" m={0} mb={1}>
            Rate this Movie!
          </Typography>

          <Grid container justifyContent="center" alignItems="center">
            <Controller
              control={control}
              name={"rating"}
              defaultValue={5}
              render={({ field: { onChange, value } }) => (
                <div>
                  <Rating
                    name={"rating"}
                    onChange={onChange}
                    value={Number(value)}
                  />
                  <Typography color="error" component="span" variant="caption">
                    {errors?.rating?.message ? errors?.rating?.message : ""}
                  </Typography>
                </div>
              )}
            />
          </Grid>
          <FormControl fullWidth>
            <InputLabel htmlFor="title">Title</InputLabel>
            <OutlinedInput
              fullWidth
              style={{ maxWidth: "100%" }}
              id="title"
              {...register("title")}
              label="Title"
            />
            <Typography color="error" variant="caption">
              {errors?.title?.message ? errors?.title?.message : ""}
            </Typography>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="body">Review this movie!</InputLabel>
            <OutlinedInput
              fullWidth
              style={{ maxWidth: "100%" }}
              id="body"
              {...register("body")}
              label="Review this movie!"
            />
            <Typography color="error" variant="caption">
              {errors?.body?.message ? errors?.body?.message : ""}
            </Typography>
          </FormControl>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button variant="contained" type="submit">
              Create Review!
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
