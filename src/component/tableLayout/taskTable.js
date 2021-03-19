import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { taskData } from "../AddNewTask/addNewTask";
import { db } from "../../base";
const useStyles = makeStyles({
  root: {
    "& .MuiTable-root": {
      minWidth: 650,
    },
    "& .MuiTableCell-head": {
      background: "aliceblue",
      fontWeight: "700",
    },
  },
});
const states = [
  {
    value: "",
    label: "Update Status",
  },
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

const TaskTable = ({ handleClose, ...props }) => {
  const [status, setStatus] = useState("");
  const classes = useStyles();
  const handleSubmit = (event, key) => {
    event.preventDefault();
    alert("yes");
    taskData[key].taskStatus = status;
    db.collection("taskdata").doc("taskData").set({ taskData });

    handleClose();
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Task Date</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Deadline</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Status</TableCell>
            {sessionStorage.getItem("userName") !== "admin@gmail.com" ? (
              <TableCell align="left">Update</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.taskData.map((row, key) => (
            <TableRow key={key}>
              <TableCell align="left">{row.taskDate}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.deadline}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.taskStatus}</TableCell>
              {sessionStorage.getItem("userName") !== "admin@gmail.com" ? (
                <TableCell style={{ width: "50px" }} align="left">
                  <select
                    onChange={(e) => {
                      setStatus(e.target.value);
                      console.log(status);
                    }}
                  >
                    {states.map((data, i) => (
                      <option key={i} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <button onClick={(e) => handleSubmit(e, key)}>Add</button>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TaskTable;
