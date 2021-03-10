import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
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
        <Grid item xs={9}>
          <h1>Task Manager </h1>
        </Grid>
        <Grid item container xs={3} alignItems="flex-end" justify="flex-end">
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                sessionStorage.clear();
                props.setLogin(false);
              }}
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
