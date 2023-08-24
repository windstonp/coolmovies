import {
  Avatar,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { stringAvatar } from "../../utils";
import { CreateReviewForm } from "./components/createReviewForm";
import StarIcon from "@mui/icons-material/Star";

export function ReviewScreen({
  selectedMovie,
  reviews: { allMovieReviews },
}: any) {
  let averageRating = 0;

  if (allMovieReviews?.nodes.length > 0) {
    const totalRatings = allMovieReviews?.nodes.reduce(
      (sum: number, item: any) => sum + item.rating,
      0
    );

    averageRating = totalRatings / allMovieReviews?.nodes.length;
  }
  return (
    <Container>
      <Grid item xs={10}>
        <Grid item xs={12} textAlign="center">
          <Rating
            readOnly
            value={averageRating}
            size="large"
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Grid>

        <Typography textAlign="center" variant="h1" mb={4}>
          {selectedMovie.title} (
          {new Date(selectedMovie.releaseDate).toLocaleDateString()})
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sx={{
              xs: {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <img
              style={{ width: "100%" }}
              alt={selectedMovie.name}
              src={selectedMovie.imgUrl}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Paper elevation={4}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                {allMovieReviews?.nodes.map((item: any) => (
                  <div key={item.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={item.title}
                        secondary={<>{item.body}</>}
                      />
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
                        <Rating
                          readOnly
                          value={item.rating}
                          size="small"
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Avatar
                            {...stringAvatar(
                              item.userByUserReviewerId.name,
                              30
                            )}
                          />

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
                  </div>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} mb={2}>
            <CreateReviewForm />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
