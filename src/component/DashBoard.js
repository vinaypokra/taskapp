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
          <TaskTable
            taskData={taskData.filter((val) => {
              if (val.tag.length > 0) {
                for (let i = 0; i < val.tag.length; i++) {
                  if (val.tag[i] === sessionStorage.getItem("userName")) {
                    return val;
                  }
                }
              }
              return false;
            })}
          />
        </>
      )}
    </>
  );
};

export default DashBoard;
