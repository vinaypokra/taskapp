import React, { useState } from "react";
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
      width: "25ch",
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

export default function AddNewTask() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [s];
  console.log(data);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(name);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add New Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a task for today</DialogContentText>

          <form className={classes.root} noValidate autoComplete="off">
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
                />
              </Grid>
              <Grid item>
                <TextField
                  id="status"
                  select
                  label="Select"
                  value={status}
                  onChange={handleChange}
                  helperText="Please select your status"
                  variant="outlined"
                >
                  {states.map((data) => (
                    <MenuItem key={data.value} value={data.value}>
                      {data.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button color="secondary" onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
