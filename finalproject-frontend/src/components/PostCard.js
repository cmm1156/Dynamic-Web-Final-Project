import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// postData is just a parameter name, it is NOT a defined variable
// therefore ANYTHING can be postData, SEE UserProfile.js
function PostCard({ postData }) {
  return (
    <div className="PostCard">
      <div className="PostCardGrid">
        <div className="PostCardImageDiv">
          {/* <img src={`https://via.placeholder.com/2000x1200`} alt="trailImage" /> */}
          {postData.imageUrl == undefined ? (
            <img src="#" alt="errorLoading" />
          ) : (
            <img
              src={`${postData.imageUrl.replace("images/", "images%2F")}&${
                postData.token
              }`}
              alt="trailImage"
            />
          )}
          {/* <img
            // src={`${postData.imageUrl}`}
            // src={`${postData.imageUrl.replace("images/", "images%2F")}&${
            //   postData.token
            // }`}
            alt="trailImage"
          /> */}
        </div>

        <div className="PostCardInfoDiv">
          <h2>{postData.postName}</h2>
          <h3>
            <a href={`/profile/${postData.postAuthorId}`}>
              By {postData.postAuthor}
            </a>
          </h3>

          <ul>
            <li>{postData.location}</li>
            <li>Length: {postData.numMiles} mi</li>
            <li>Elevation gain: {postData.maxAlt} ft</li>
          </ul>
        </div>
      </div>
      <div className="LinkDiv">
        <Link to={`/full-post/${postData.postName}`}>Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
