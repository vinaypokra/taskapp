import React, { useState } from "react";
import CreateContext from "react";
import "./App.css";
import AddNewTask from "./component/AddNewTask/addNewTask";
import Heading from "./component/Title/Heading";
import LoginPage from "./component/LoginPage/loginPage";
import "./App.css";
import Cal from "./component/Calender/Main";
function App() {
  const [userLogin, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (userLogin) {
    return (
      <>
        <Heading setLogin={setLogin} />

        <Cal
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      </>
    );
  } else {
    return (
      <>
        <LoginPage setLogin={setLogin} />
      </>
    );
  }
}

export default App;
