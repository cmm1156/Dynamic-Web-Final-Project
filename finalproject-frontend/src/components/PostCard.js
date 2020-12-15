import React from "react";

import { Link } from "react-router-dom";

// postData is just a parameter name, it is NOT a defined variable
// therefore ANYTHING can be postData, SEE UserProfile.js
function PostCard({ postData }) {
  return (
    <div className="PostCard">
      <div>
        <img src={postData.image} alt="trailImage" />
      </div>

      <div>
        <h2>{postData.postName}</h2>
        <h3>
          <a href={`/profile/${postData.postAuthorId}`}>
            By {postData.postAuthor}
          </a>
        </h3>
      </div>

      <div>
        <ul>
          <li>{postData.location}</li>
          <li>{postData.numMiles}</li>
          <li>{postData.maxAlt}</li>
        </ul>
      </div>
      <Link to={`/full-post/${postData.postName}`}>Read More</Link>
    </div>
  );
}

export default PostCard;
