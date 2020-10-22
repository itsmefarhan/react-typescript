import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SeasonProvider from "./context/seasonContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <SeasonProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </SeasonProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
