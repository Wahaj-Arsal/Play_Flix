/** @format */

// require("dotenv").config();

import "../src/App.scss";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Header from "./components/header/Header";
import Upload from "./pages/upload/Upload";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/upload"
          render={(routerProps) => <Upload {...routerProps} />}
        />
        <Route
          path="/video/:videoID"
          render={(routerProps) => <Home {...routerProps} />}
        />
      </Switch>
    </div>
  );
}
