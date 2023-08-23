import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { authActions, useAppDispatch, useAppSelector } from "../redux";
import { useEffect } from "react";
import { stringAvatar } from "../utils";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { allUsers } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authActions.fetchAllUser());
  });

  return (
    <Grid container justifyContent="center">
      <Typography textAlign="center" variant="h2">
        Choose your user!
      </Typography>
      <Grid container justifyContent="center">
        <Grid container xs={8} mt={12}>
          {allUsers?.nodes.map((user) => {
            return (
              <Grid item xs={5} md={6} lg={4} key={user.id}>
                <div>
                  <Avatar {...stringAvatar(user.name)} />
                  <Typography mt={2} mb={4} textAlign="center" variant="h5">
                    {user.name}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
