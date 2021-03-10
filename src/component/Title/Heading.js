import React from "react";

const Heading = (props) => {
  return (
    <>
      <h1>App </h1>
      <button
        onClick={() => {
          sessionStorage.clear();
          props.setLogin(false);
        }}
      >
        LogOut
      </button>
    </>
  );
};

export default Heading;
