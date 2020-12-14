import React from "react";

function RecipeCard({ recipeData }) {
  return (
    <div className="RecipeCard">
      <h2>{recipeData.recipeName}</h2>
      <h3>
        <a href={`/user/${recipeData.recipeAuthorId}`}>
          By {recipeData.recipeAuthor}
        </a>
      </h3>
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.ingredients &&
          recipeData.ingredients.map((ingredient, i) => (
            <li key={i}>
              {ingredient.name} -- {ingredient.amount}
            </li>
          ))}
      </ul>
      <h3>Steps:</h3>
      <ul>
        {recipeData.steps &&
          recipeData.steps.map((step, i) => (
            <li key={i}>
              {step.stepNumber} -- {step.stepInstruction}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecipeCard;
