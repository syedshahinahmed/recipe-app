import React from "react";

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          return (
            <div
              key={recipe.recipe.label}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__container">
                <img
                  className="recipes__container-img"
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
                <div className="recipes__body">
                  <h5 className="recipes__title">
                    {recipe.recipe.label.length < 20
                      ? `${recipe.recipe.label}`
                      : `${recipe.recipe.label.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{recipe.recipe.source}</span>
                  </p>
                </div>
                <button className="recipes_btn">View Recipe</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
