import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
    localStorage.clear();
    setAuthenticated(false);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard handleLogout={handleLogout} authenticated={authenticated} />
      </Route>
    </Switch>
  );
}

export default Routes;
