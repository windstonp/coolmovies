import {
  Container,
  Grid,
  List,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { CreateReviewForm } from "./components/createReviewForm";
import StarIcon from "@mui/icons-material/Star";
import { ReviewItem } from "./components/reviewItem";
import { MovieReviewType, ReviewsType, SelectedMovieType } from "../../types";

type Props = {
  selectedMovie: SelectedMovieType | {};
  reviews: ReviewsType;
};

export function ReviewScreen({
  selectedMovie,
  reviews: { allMovieReviews },
}: Props) {
  let averageRating = 0;

  if (allMovieReviews?.nodes.length > 0) {
    const totalRatings = allMovieReviews?.nodes.reduce(
      (sum: number, item: MovieReviewType) => sum + item.rating,
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
              alt={selectedMovie.title}
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
                {allMovieReviews?.nodes.map((item: MovieReview) => (
                  <ReviewItem item={item} key={item.id} />
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} mb={2}>
            <CreateReviewForm movieId={selectedMovie.id} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
