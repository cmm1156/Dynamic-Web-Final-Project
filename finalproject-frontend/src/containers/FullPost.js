import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CreateReport from "../components/CreateReport";

// EXPAND ONE POST
function FullPost({ userAuthInfo }) {
  const [userPostData, setUserPostData] = useState([]);
  const { id } = useParams();
  const idFromTitle = id.replace(/\s+/g, "-").toLowerCase();

  axios
    .get(
      `http://localhost:4000/post/${idFromTitle}`
      // `https://vast-tor-77687.herokuapp.com/post/${idFromTitle}`
    )
    .then(function (response) {
      setUserPostData(response.data);
    })
    .catch(function (error) {
      console.warn("ERROR:", error);
    });

  return (
    <>
      <div>
        <img src={userPostData.image} alt="trailImage" />
      </div>

      <div>
        <h1>{userPostData.postName}</h1>
        <h2>{userPostData.postAuthor}</h2>

        <ul>
          <li>{userPostData.location}</li>
          <li>{userPostData.numMiles}</li>
          <li>{userPostData.maxAlt}</li>
        </ul>
      </div>

      <div>
        <p>{userPostData.review}</p>
      </div>

      <div>
        <CreateReport userAuthInfo={userAuthInfo} />
      </div>
    </>
  );
}

export default FullPost;
