import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import DashBoard from "./component/DashBoard";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/DashBoard" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
