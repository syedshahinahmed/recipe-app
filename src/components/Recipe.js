import React, { Component } from "react";
import { async } from "q";
import { Link } from "react-router-dom";

// .Edamam API ID
const APP_ID = "ee8cf5b2";

// .Edamam API KEY
const APP_KEY = "9cc9114c66e8fda5a47697bf6aaa0032";

class Recipe extends Component {
  //Initial State
  state = {
    activeRecipes: []
  };

  // LifeCycle Hook Componet Did Mount

  componentDidMount = async () => {
    // Getting induvidula recipe from id
    const title = this.props.location.state.recipe;
    // console.log(title);

    // Making API Request
    const req = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    // if link doest work we add these to make it work "https://cors-anywhere.herokuapp.com/"

    // Getting API Response
    const res = await req.json();

    // Setting Inital state data to API data
    this.setState({ activeRecipes: res.hits[0].recipe });
    // console.log(this.state.activeRecipes);
    // console.log(res.hits);
  };
  render() {
    // console.log(this.props);
    const myRecipe = this.state.activeRecipes;
    return (
      <div className="container">
        {this.state.activeRecipes.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={myRecipe.image}
              alt={myRecipe.label}
            />
            <h3 className="active-recipe__title">{myRecipe.label}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{myRecipe.source}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a
                  href={myRecipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {myRecipe.url}
                </a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
