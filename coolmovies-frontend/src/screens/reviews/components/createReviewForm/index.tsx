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
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewCreateSchema } from "../../../../validators";

export function CreateReviewForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(reviewCreateSchema) });

  function SubmitCreateForm(data: any) {
    console.log(data);
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
                  <Typography color="red" component="span" variant="caption">
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
            <Typography color="red" variant="caption">
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
            <Typography color="red" variant="caption">
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
