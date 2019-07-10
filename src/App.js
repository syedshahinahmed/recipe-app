import React, { Component } from "react";

import "./App.css";
import Form from "./components/Form";
import { async } from "q";
import Recipes from "./components/Recipes";

// .Edamam API ID
const APP_ID = "ee8cf5b2";

// .Edamam API KEY
const APP_KEY = "9cc9114c66e8fda5a47697bf6aaa0032";

class App extends Component {
  //Initial State
  state = {
    recipes: []
  };

  //Getting Recipe
  getRecipe = async e => {
    //Preventing Default Behaviour
    e.preventDefault();

    //getting user input
    const recipeName = e.target.elements.recipeName.value;

    // api call

    const api__call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    // Converting Data to JSON
    const data = await api__call.json();

    // setting state
    this.setState({ recipes: data.hits });

    console.log(this.state.recipes);
  };

  // Pulling Data from LocalStorage using componentDidMount function
  componentDidMount = () => {
    const localJson = localStorage.getItem("ourRecipe");

    //Converting data back to JSON format

    const localJsonRecipe = JSON.parse(localJson);

    // Now setting our state to local recipe state

    this.setState({ recipes: localJsonRecipe });
  };

  // Saving Data to LocalStorage using componentDidUpdate function
  componentDidUpdate = () => {
    const localRecipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("ourRecipe", localRecipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
