import React from "react";
import axios from "axios";

import router from "../finalproject-backend/routes/createPost";

// Here i want a user to be able to make a post on the website
// i want this function to have a form that takes the data, then sends the data to the backend
// the data must be organize in an object that gets the:
/*
Database = {
  userAuthInfo: {
    post1: {
      email: "",
      date: "",
      title: "",
      body: "",
    }

    post2: {
      email: "",
      date: "",
      title: "",
      body: "",
    }
    
  },
}
*/

function PostForm() {
  return <router />;
  // <form>
  //   <input type="text" name="title" placeholder="Title Your Post" />
  //   <input type="text" name="body" placeholder="Body of Post" />
  //   <button>Post</button>
  // </form>;
}

export default PostPost;
