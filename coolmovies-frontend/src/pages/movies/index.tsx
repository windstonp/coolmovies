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
import { useRouter } from "next/router";

const Movies: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    allMovies: { allMovies },
    selectedMovie,
  } = useAppSelector((state) => state.movies);

  function goToSelectedMovie(item: any) {
    dispatch(moviesActions.setSelectedMovie({ selected: item }));
    router.push(`/reviews/${item.id}`);
  }
  useEffect(() => {
    dispatch(moviesActions.fetchMovies());
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid container flexWrap="wrap" justifyContent="center" spacing={2}>
          {allMovies?.nodes.map((item: any) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <CardActionArea onClick={() => goToSelectedMovie(item)}>
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
  );
};

export default Movies;
