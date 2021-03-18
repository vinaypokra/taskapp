import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import app from "../../base";
import { Link } from "react-router-dom";

const Heading = (props) => {
  return (
    <>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={4}
        xs={9}
        style={{ margin: "auto" }}
      >
        <Grid item xs={6}>
          <h1>Task Manager </h1>
        </Grid>
        <Grid item xs={3}>
          <h3>{sessionStorage.getItem("userName")}</h3>
          <Link to="/DashBoard">{"DashBoard"}</Link>
          <Link to="/">{"Home"}</Link>
        </Grid>
        <Grid item container xs={3} alignItems="flex-end" justify="flex-end">
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => app.auth().signOut()}
            >
              LogOut
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Heading;
