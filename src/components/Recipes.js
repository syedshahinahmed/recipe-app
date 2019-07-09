import React from "react";

import Recipe1 from "./Test1";

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          {
            /* const totalNutrients={recipe.recipe.totalNutrients}; */
          }
          return (
            <div key={recipe.recipe.label}>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <h1>{recipe.recipe.label}</h1>
              <p>Calories: {recipe.recipe.calories}</p>
              <p>Diet: {recipe.recipe.dietLabels[0]}</p>
              {/* <p>
                totalNutrients: {recipe.recipe.totalNutrients.CA.label}{" "}
                <span>
                  {recipe.recipe.totalNutrients.CA.quantity.toFixed(1)}
                </span>
                <span>{recipe.recipe.totalNutrients.CA.unit}</span>
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
