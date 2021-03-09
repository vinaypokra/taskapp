import React, { useState } from "react";
import "./App.css";
import AddNewTask from "./component/AddNewTask/addNewTask";
import Heading from "./component/Title/Heading";
import LoginPage from "./component/LoginPage/loginPage";
import "./App.css";

function App() {
  const [userLogin, setLogin] = useState(false);
  if (userLogin) {
    return (
      <>
        <Heading />
        <AddNewTask />
      </>
    );
  } else {
    return (
      <>
        <LoginPage />
      </>
    );
  }
}

export default App;
