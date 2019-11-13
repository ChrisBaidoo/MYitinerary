import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Navbar} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Footer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
