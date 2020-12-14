import React, { useState } from "react";
import UserProfileComponent from "../components/UserProfileComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function UserProfile({ userAuthInfo }) {
  const [UserProfileData, setUserProfileData] = useState({});
  const [userRecipeData, setUserRecipeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://vast-tor-77687.herokuapp.com/recipes/${id}/`)
      .then(function (response) {
        if (response.data) {
          setUserRecipeData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);
  console.log({ userRecipeData });

  return (
    <div>
      <h1>User Profile</h1>
      <h2>{"name"} Recipes:</h2>
      {userRecipeData.map(recipe, i) => (
        <RecipeCard recipeData={recipe} key={i} />
      )}
    </div>
  );
}

export default UserProfile;
