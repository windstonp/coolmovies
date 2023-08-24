import { Avatar, ButtonBase, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { authActions, useAppDispatch, useAppSelector } from "../redux";
import { useEffect } from "react";
import { stringAvatar } from "../utils";
import { User } from "../redux/slices/auth/slice";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { allUsers, currentUser } = useAppSelector((state) => state.auth);

  function setCurrentUser(user: User) {
    dispatch(authActions.setCurrentUser({ data: user }));
  }

  useEffect(() => {
    dispatch(authActions.fetchAllUser());
  });

  useEffect(() => {
    if (currentUser?.id) {
      router.push("/movies");
    }
  }, [currentUser]);

  return (
    <Container>
      <Typography textAlign="center" variant="h2">
        Choose your user!
      </Typography>
      <Grid container justifyContent="center" mt={4}>
        <Grid container>
          {allUsers?.nodes.map((user) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={user.id}>
                <Grid container justifyContent="center" alignItems="center">
                  <ButtonBase
                    sx={{ width: "100%", paddingTop: 4, paddingBottom: 4 }}
                    onClick={() => setCurrentUser(user)}
                  >
                    <div>
                      <Avatar {...stringAvatar(user.name, 76)} />
                      <Typography
                        mt={2}
                        fontSize={24}
                        textAlign="center"
                        variant="h4"
                        color="black"
                      >
                        {user.name}
                      </Typography>
                    </div>
                  </ButtonBase>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
