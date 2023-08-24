import {
  Avatar,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { stringAvatar } from "../../utils";
import { CreateReviewForm } from "./components/createReviewForm";

export function ReviewScreen({ selectedMovie, reviews }: any) {
  return (
    <Container>
      <Grid item xs={10}>
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
                {reviews.allMovieReviews?.nodes.map((item: any) => (
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
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar
                          {...stringAvatar(item.userByUserReviewerId.name, 30)}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.userByUserReviewerId.name}
                        </Typography>
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
