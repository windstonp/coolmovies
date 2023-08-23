import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { moviesActions, useAppDispatch, useAppSelector } from "../../redux";
import { useEffect } from "react";

const Movies: NextPage = () => {
  const dispatch = useAppDispatch();
  const { allMovies } = useAppSelector((state) => state.movies.allMovies);

  useEffect(() => {
    dispatch(moviesActions.fetchMovies());
  });

  return (
    <Grid container>
      <Grid sx={{ flexGrow: 1 }} container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <Grid container flexWrap="wrap" justifyContent="center" spacing={2}>
            {allMovies?.nodes.map((item: any) => (
              <Grid item xs={12} md={6} lg={4} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.imgUrl}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h1" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {new Date(item.releaseDate).toDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Movies;
