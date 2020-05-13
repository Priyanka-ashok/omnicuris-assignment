import React, { Component } from "react";
import "./App.css";
import ExpertDetails from "./components/expertDetails";
import ExpertPanel from "./components/expertPanel";

export class App extends Component {
  
  render() {
    return (
      <>
        <ExpertDetails />
        <ExpertPanel />
      </>
    );
  }
}

export default App;
