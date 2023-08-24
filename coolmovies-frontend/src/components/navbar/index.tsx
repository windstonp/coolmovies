import { Box, Grid, Typography } from "@mui/material";

export function NavBar() {
  return (
    <Grid
      container
      mb={4}
      justifyContent="center"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Box textAlign="center" p={4} sx={{ color: "white" }}>
        <Typography variant="h4" component="div">
          EcoPortal Coolmovies Test
        </Typography>
      </Box>
    </Grid>
  );
}
