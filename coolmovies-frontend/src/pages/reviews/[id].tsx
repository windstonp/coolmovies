import {
  Avatar,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions, useAppSelector } from "../../redux";
import { stringAvatar } from "../../utils";

function MovieReviews() {
  const { reviews, selectedMovie } = useAppSelector((state) => state.movies);
  const dispatch = useDispatch();

  const router = useRouter();

  if (!selectedMovie.id) {
    router.push("/movies");
  }

  useEffect(() => {
    if (router.query.id) {
      dispatch(moviesActions.fetchReviewsByMovieId({ id: router.query.id }));
    }
  }, []);

  return (
    <Container>
      <Grid item xs={10}>
        <Typography textAlign="center" variant="h1" mb={4}>
          {selectedMovie.title} (
          {new Date(selectedMovie.releaseDate).toLocaleDateString()})
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <img
              style={{ width: 300 }}
              alt={selectedMovie.name}
              src={selectedMovie.imgUrl}
            />
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={3}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                {reviews.allMovieReviews?.nodes.map((item: any) => (
                  <div key={item.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          {...stringAvatar(item.userByUserReviewerId.name, 30)}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.title}
                        secondary={
                          <>
                            {item.body}
                            <Grid container mt={2} justifyContent="flex-end">
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {item.userByUserReviewerId.name}
                              </Typography>
                            </Grid>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid container></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieReviews;
