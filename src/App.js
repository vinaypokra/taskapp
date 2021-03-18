import React, { useState } from "react";
import "./App.css";
import Heading from "./component/Title/Heading";

import "./App.css";
import Cal from "./component/Calender/Main";
function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Heading />

      <Cal
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default App;
