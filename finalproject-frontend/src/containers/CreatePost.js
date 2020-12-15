import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreatePost({ userAuthInfo }) {
  const history = useHistory();
  // const [postId, setPostId] = useState("");

  // let [newId, setNewId] = useState(0);

  // THIS FUNCTION WILL ADD DATA TO Firestore
  function submitPost(e) {
    e.preventDefault(); // Very important stops form from being run because we want to run the whole function
    // we dont want to submit the form, we want to run the function on the button press

    const postName = e.currentTarget.postName.value;
    const postAuthor = e.currentTarget.postAuthor.value; // these keys must be same as Firestore
    const postAuthorId = userAuthInfo.uid; // current user logged in
    const image = e.currentTarget.image.url;
    const location = e.currentTarget.location.value;
    const numMiles = e.currentTarget.numMiles.value;
    const maxAlt = e.currentTarget.maxAlt.value;
    const review = e.currentTarget.review.value;
    // code to come...

    // create request to the backend
    axios
      .get(
        `http://localhost:4000/create?postName=${postName}&postAuthor=${postAuthor}&postAuthorId=${postAuthorId}&image=${image}&location=${location}&numMiles=${numMiles}&maxAlt=${maxAlt}&review=${review}&`
        // `https://vast-tor-77687.herokuapp.com/create?postName=${postName}&postAuthor=${postAuthor}&postAuthorId=${postAuthorId}&image=${image}&location=${location}&numMiles=${numMiles}&maxAlt=${maxAlt}&review=${review}&`
      )
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.warn("ERROR_CREATE_POST:", error);
      });
  }

  // similar to exercise-four createBlogpost.js
  // this will post to the server
  // we want to make sure that name fields are same as firestore names

  // THIS DISPLAYS THE DATA THAT WAS JUST ADDED TO Firestore
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={(e) => submitPost(e)}>
        <label>
          Post Name
          <input type="text" name="postName" placeholder="Title" />
        </label>
        <br />
        <label>
          Display Name
          <input type="text" name="postAuthor" placeholder="Author" />
        </label>
        <br />

        <label>
          Add image
          <input type="file" name="image" placeholder="image" />
        </label>
        <br />
        <label>
          Trail info
          <input type="text" name="location" placeholder="location" />
          <input type="text" name="numMiles" placeholder="miles" />
          <input type="text" name="maxAlt" placeholder="altitude" />
        </label>
        <br />
        <label>
          Review
          <input type="text" name="review" placeholder="review" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
