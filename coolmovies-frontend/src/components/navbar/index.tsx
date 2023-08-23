import { Grid, Typography } from "@mui/material";

export function NavBar() {
  return (
    <Grid
      justifyContent="space-evenly"
      container
      p={4}
      mb={4}
      className="navbar"
    >
      <Grid item>
        <Typography variant="h4" component="div">
          EcoPortal Coolmovies Test
        </Typography>
      </Grid>
    </Grid>
  );
}
