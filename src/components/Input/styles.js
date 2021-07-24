import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route>
        <Home />
      </Route>
      <Route>
        <Signup />
      </Route>
      <Route>
        <Login />
      </Route>
      <Route>
        <Dashboard />
      </Route>
    </Switch>
  );
};
