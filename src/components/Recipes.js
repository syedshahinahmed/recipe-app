import React from "react";

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          return (
            <div key={recipe.recipe.label} className="col-md-4">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <h3>{recipe.recipe.label}</h3>
              <p>Calories: {recipe.recipe.calories}</p>
              <p>Diet: {recipe.recipe.dietLabels[0]}</p>
              <p>
                totalNutrients: {recipe.recipe.totalNutrients.CA.label}{" "}
                <span>
                  {recipe.recipe.totalNutrients.CA.quantity.toFixed(1)}
                </span>
                <span>{recipe.recipe.totalNutrients.CA.unit}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
