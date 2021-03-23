import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import TaskTable from "../tableLayout/taskTable";
import { db } from "../../base";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

var taskData = [];
const fetchData = () => {
  db.collection("taskdata")
    .doc("taskData")
    .get()
    .then((snapshot) => {
      taskData = snapshot.data().taskData;
    });
  console.log(taskData);
};

const AddNewTask = (props) => {
  const classes = useStyles();

  const [name, setName] = useState();
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();
  const [date, setDate] = useState(new Date());

  React.useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    let dateTime = date.toLocaleTimeString().concat(date.toLocaleDateString());
    dateTime = dateTime.split(" ").join("");
    dateTime = dateTime.split(":").join("");
    dateTime = dateTime.split("/").join("");
    if (name !== "" && description !== "" && deadline !== "") {
      taskData.push({
        id: dateTime,
        username: sessionStorage.getItem("userName"),
        name: name,
        description: description,
        deadline: deadline,
        taskStatus: "",
        taskDate: props.dateState,
        tag: tag.split(" "),
      });
      db.collection("taskdata").doc("taskData").set({ taskData });
    }

    if (taskData.length !== 0) {
      props.setOpen(false);
      alert("Task Added Successfully!");
    }
    setName("");
    setDescription("");
  };
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={props.open}
        onClose={props.handleClose}
        onClick={() => setDate(new Date())}
        aria-labelledby="form-dialog-title"
      >
        {`Current Date :${date}`}
        <Grid container item direction="row">
          <Grid
            item
            xs={
              sessionStorage.getItem("userName") === "admin@gmail.com" ? 8 : 12
            }
          >
            <TaskTable
              taskData={taskData.filter((val) => {
                for (let i = 0; i < val.tag.length; i++) {
                  if (val.taskDate === props.dateState) {
                    if (
                      val.tag[i] === sessionStorage.getItem("userName") ||
                      sessionStorage.getItem("userName") === "admin@gmail.com"
                    ) {
                      return val;
                    }
                  }
                }
                return false;
              })}
            />
          </Grid>
          <Grid item xs={4}>
            {sessionStorage.getItem("userName") === "admin@gmail.com" ? (
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
                        value={name}
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        // error={name === ""}
                        // helperText={name === "" ? "Please enter name" : " "}
                        required
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
                        value={description}
                        rows={4}
                        onChange={(e) => setDescription(e.target.value)}
                        // error={description === ""}
                        // helperText={
                        //   description === "" ? "Please enter description" : " "
                        // }
                        required
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="tag"
                        label="Assigned to"
                        type="tag"
                        value={tag}
                        variant="outlined"
                        onChange={(e) => setTag(e.target.value)}
                        // error={name === ""}
                        // helperText={name === "" ? "Please enter name" : " "}
                        required
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
                      />
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
            ) : null}
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default AddNewTask;
export { taskData };
