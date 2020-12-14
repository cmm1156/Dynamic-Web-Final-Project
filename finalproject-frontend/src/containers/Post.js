import React from "react";
import PostForm from "../components/LoginForm";

function Post({ LoginFunction }) {
  return (
    <div>
      <h1>Post</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Post;
