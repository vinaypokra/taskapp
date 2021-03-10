import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Cal.css";
import moment from "moment";
import AddNewTask from "../AddNewTask/addNewTask";
export default function Main(props) {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <>
      <AddNewTask
        handleClickOpen={props.handleClickOpen}
        handleClose={props.handleClose}
        open={props.open}
        setOpen={props.setOpen}
        dateState={moment(dateState).format("MMMM Do YYYY")}
      />
      <Calendar
        value={dateState}
        onChange={changeDate}
        onClickDay={props.handleClickOpen}
      />
      <p>
        Current selected date is{" "}
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
    </>
  );
}
