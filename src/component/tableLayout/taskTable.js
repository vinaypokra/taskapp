import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    "& .MuiTable-root": {
      minWidth: 650,
    },
    "& .MuiTableHead-root": {
      background: "aliceblue",
      fontWeight: "900",
    },
  },
});

const TaskTable = (props) => {
  const classes = useStyles();

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TaskTable;
