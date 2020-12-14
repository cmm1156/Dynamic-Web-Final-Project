import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

function UserProfile() {
  const [userPostData, setUserPostData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://vast-tor-77687.herokuapp.com/posts/${id}/`)
      .then(function (response) {
        if (response.data) {
          setUserPostData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Your posts:</h2>
      {userPostData.map((item, i) => (
        <RecipeCard recipeData={item} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
