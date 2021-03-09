import React, { useState } from "react";
import "./App.css";
import AddNewTask from "./component/AddNewTask/addNewTask";
import Heading from "./component/Title/Heading";
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
        <h1>Login First</h1>
      </>
    );
  }
}

export default App;
