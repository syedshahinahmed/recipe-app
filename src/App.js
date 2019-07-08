import React, { Component } from "react";

import "./App.css";
import Form from "./components/Form";

class App extends Component {
  //Getting Recipe
  getRecipe = e => {
    //Preventing Default Behaviour
    e.preventDefault();
    console.log("Working!!!");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
