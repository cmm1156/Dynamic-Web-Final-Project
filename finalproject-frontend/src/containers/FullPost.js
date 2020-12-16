import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CreateReport from "../components/CreateReport";

// EXPAND ONE POST
function FullPost({ userAuthInfo }) {
  const [userPostData, setUserPostData] = useState([]);
  const { id } = useParams();
  const idFromTitle = id.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => {
    axios
      .get(`https://vast-tor-77687.herokuapp.com/post/${idFromTitle}`)
      .then(function (response) {
        setUserPostData(response.data);
      })
      .catch(function (error) {
        console.warn("ERROR:", error);
      });
  }, []);

  return (
    <div className="FullPost">
      <div
        className="BackgroundDiv"
        style={{
          backgroundImage: `url(
            ${
              userPostData.imageUrl === undefined ? (
                <img src="#" alt="errorLoading" />
              ) : (
                <img
                  src={`${userPostData.imageUrl.replace(
                    "images/",
                    "images%2F"
                  )}&${userPostData.token}`}
                  alt="trailImage"
                />
              )
            }
          )`,
        }}
      ></div>
      <div className="FullPostInfo">
        {/* <img src={userPostData.imageUrl} alt="trailImage" /> */}

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
      </div>

      <div className="CreateReport">
        <CreateReport userAuthInfo={userAuthInfo} />
      </div>
    </div>
  );
}

export default FullPost;
