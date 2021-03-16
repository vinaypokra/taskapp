import React from "react";
import { taskData } from "./AddNewTask/addNewTask";
import TaskTable from "./tableLayout/taskTable";
import Heading from "./Title/Heading";

const DashBoard = () => {
  return (
    <>
      {sessionStorage.getItem("userName") === "admin@gmail.com" ? (
        <>
          <Heading />
          <TaskTable taskData={taskData} />
        </>
      ) : (
        <>
          <Heading />
          <TaskTable taskData={taskData.filter((val) => {})} />
        </>
      )}
    </>
  );
};

export default DashBoard;
