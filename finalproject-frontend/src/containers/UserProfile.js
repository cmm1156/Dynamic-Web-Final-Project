import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

// SHOWING ALL THE POSTS FROM A GIVEN USER
function UserProfile() {
  const [userPostData, setUserPostData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // this is getting all the posts that contain the user's UID, and
    axios // and displaying them in a PostCard format
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
        <PostCard postData={item} key={i} /> // RUNNING THE FUNCTION PostCard with 'item' as the argument
      ))}
    </div>
  );
}

export default UserProfile;
