//?//
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const states = [
  {
    value: "Planned",
    label: "Planned",
  },
  {
    value: "In progress",
    label: "In progress",
  },
  {
    value: "Completed",
    label: "Completed",
  },
];
const taskData = [];
const AddNewTask = (props) => {
  const classes = useStyles();

  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    let dateTime = date.toLocaleTimeString().concat(date.toLocaleDateString());
    dateTime = dateTime.split(" ").join("");
    dateTime = dateTime.split(":").join("");
    dateTime = dateTime.split("/").join("");
    if (name !== "" && description !== "" && deadline !== "" && status !== "") {
      taskData.push({
        name: name,
        description: description,
        deadline: deadline,
        taskStatus: status,
        id: dateTime,
      });
    }
    console.log(taskData);

    if (taskData.length !== 0) {
      props.setOpen(false);
    }
    setName();
    setDescription();
    setDeadline();
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a task for {props.dateState}
            </DialogContentText>

            <Grid container direction="column">
              <Grid item>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  // error={name === ""}
                  // helperText={name === "" ? "Please enter name" : " "}
                  required
                  value={name}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  multiline
                  label="Description"
                  type="description"
                  variant="outlined"
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                  // error={description === ""}
                  // helperText={
                  //   description === "" ? "Please enter description" : " "
                  // }
                  required
                  value={description}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  margin="dense"
                  id="estimate"
                  label="Estimated date of completion"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e) => setDeadline(e.target.value)}
                  // error={deadline === ""}
                  // helperText={
                  //   deadline === "" ? "Please enter estimated date" : " "
                  // }
                  required
                  value={deadline}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="status"
                  select
                  label="Select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  // helperText={status === "" ? "Please select your status" : " "}
                  variant="outlined"
                  required
                  // error={status === ""}
                >
                  <MenuItem Selected value="">
                    Select
                  </MenuItem>
                  {states.map((data, key) => (
                    <MenuItem key={key} value={data.value}>
                      {data.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="secondary">
              Cancel
            </Button>
            <Button color="secondary" type="submit">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddNewTask;
