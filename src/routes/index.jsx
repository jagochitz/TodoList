import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Menu from "../components/Menu";
import { useState } from "react";

function Routes() {
  const [dash, setDash] = useState(true);
  return (
    <Switch>
      <Route exact path="/">
        <Menu dash={dash} />
        <Home />
      </Route>
      <Route path="/signup">
        <Menu dash={dash} />
        <Signup />
      </Route>
      <Route path="/login">
        <Menu dash={dash} />
        <Login />
      </Route>
      <Route path="/dashboard">
        <Menu dash={dash} />
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
