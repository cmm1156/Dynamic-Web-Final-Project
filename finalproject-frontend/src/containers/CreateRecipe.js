import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateRecipe({ userAuthInfo }) {
  const history = useHistory();

  console.log({ userAuthInfo });

  // THIS FUNCTION WILL ADD DATA TO Firestore
  function submitRecipe(e) {
    e.preventDefault(); // Very important stops form from being run because we want to run the whole function

    const recipeName = e.currentTarget.recipeName.value;
    const recipeAuthor = e.currentTarget.recipeAuthor.value; // these keys must be same as Firestore
    const recipeAuthorId = userAuthInfo.uid.value;
    // code to come...
    // recipe author
    // recipe author id
    // recipe Name
    // Steps: Array ???
    // ingredients : Array of values???

    axios
      .get(
        `https://vast-tor-77687.herokuapp.com/create?recipeName=${recipeName}&recipeAuthor=${recipeAuthor}&recipeAuthorId=${recipeAuthorId}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
        history.push("/");
      })
      .catch(function (error) {
        console.log({ ERROR: error });
      });

    console.log(e.currentTarget);
  }

  // similar to exercise-four createBlogpost.js
  // this will post to the server
  // we want to make sure that name fields are same as firestore names

  // THIS DISPLAYS THE DATA THAT WAS JUST ADDED TO Firestore
  return (
    <div>
      <h1>Create Recipe</h1>
      <form onSubmit={(e) => submitRecipe(e)}>
        <label>Recipe Name</label>
        <input type="text" name="recipeName" placeholder="Title" />
        <label>Recipe Author Name</label>
        <input type="text" name="recipeAuthor" placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
