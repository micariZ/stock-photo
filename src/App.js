import React from "react";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import Submenu from "./components/Submenu";
import Error from "./components/pages/Error";
import Sidebar from "./components/Sidebar";
import Search from "./components/pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Submenu />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
