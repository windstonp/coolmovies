import {
  Avatar,
  ButtonBase,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  ListItemText,
  OutlinedInput,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import IconEdit from "public/edit.svg";
import StarIcon from "@mui/icons-material/Star";
import Close from "@mui/icons-material/Close";
import Check from "@mui/icons-material/Check";

import { stringAvatar } from "../../../../utils";
import { useState } from "react";
import { useAppSelector } from "../../../../redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewSchema } from "../../../../validators";

type Props = {
  item: {
    id: string;
    title: string;
    body: string;
    rating: number;
    userByUserReviewerId: {
      name: string;
      id: string;
    };
  };
};

export function ReviewItem({ item }: Props) {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(reviewSchema),
  });

  function submitEdit(data: any) {
    setIsEditing(false);
  }

  const ActiveEdit = isEditing ? (
    <Grid item>
      <Grid container>
        <Grid item textAlign="center">
          <ButtonBase sx={{ padding: 2 }} onClick={handleSubmit(submitEdit)}>
            <Check />
          </ButtonBase>
        </Grid>

        <Grid item textAlign="center">
          <ButtonBase
            sx={{ padding: 2 }}
            onClick={() => {
              setIsEditing(!isEditing);
              reset();
            }}
          >
            <Close />
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <ButtonBase sx={{ padding: 2 }} onClick={() => setIsEditing(!isEditing)}>
      <Image width={25} height={25} alt="Edit Review" src={IconEdit} />
    </ButtonBase>
  );
  return (
    <>
      <Grid container justifyContent="flex-end">
        {item.userByUserReviewerId.id === currentUser?.id ? ActiveEdit : ""}
      </Grid>

      <ListItem alignItems="flex-start">
        {isEditing ? (
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="title">Title</InputLabel>
                <OutlinedInput
                  fullWidth
                  style={{ maxWidth: "100%" }}
                  id="title"
                  {...register("title")}
                  label="Title"
                  defaultValue={item.title}
                />
                <Typography color="error" variant="caption">
                  {errors?.title?.message ? errors?.title?.message : ""}
                </Typography>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="body">Review this movie!</InputLabel>
                <OutlinedInput
                  fullWidth
                  style={{ maxWidth: "100%" }}
                  id="body"
                  {...register("body")}
                  label="Review this movie!"
                  defaultValue={item.body}
                />
                <Typography color="error" variant="caption">
                  {errors?.body?.message ? errors?.body?.message : ""}
                </Typography>
              </FormControl>
            </Grid>
          </Grid>
        ) : (
          <ListItemText primary={item.title} secondary={<>{item.body}</>} />
        )}
      </ListItem>
      <Grid
        container
        my={2}
        px={2}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          {isEditing ? (
            <Controller
              control={control}
              name={"rating"}
              defaultValue={5}
              render={({ field: { onChange, value } }) => (
                <div>
                  <Rating
                    name={"rating"}
                    onChange={onChange}
                    defaultValue={item.rating}
                  />
                </div>
              )}
            />
          ) : (
            <Rating
              readOnly
              value={item.rating}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          )}
        </Grid>
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Avatar {...stringAvatar(item.userByUserReviewerId.name, 30)} />

            <Typography
              sx={{ display: "inline", marginLeft: 2 }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.userByUserReviewerId.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="inset" component="li" />
    </>
  );
}
