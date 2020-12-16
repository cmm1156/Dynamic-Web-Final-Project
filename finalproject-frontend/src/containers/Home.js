import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

// axios is used to query (get/retrieve/fetch) data from an API

function Home() {
  const [myAPIData, setMyAPIData] = useState([]);
  // set default states of the current data array, currently nothing because empty []
  // NOTE: localhost:4000 or server equivalent must be running (npm start) in order to retrive the data
  // Later this will be changed to Heroku deploy address
  // http://localhost:4000

  // this is retreiving data from my localhost:4000 or Heroku
  useEffect(() => {
    axios
      .get(`https://vast-tor-77687.herokuapp.com/all-posts`) // use herokuapp.com/theroute to specify where the data is coming from
      // in Excerise-Two, this line contained .get(`https://openweather.com/data/? ...`),
      /*instead of this the openweather API url, we are using our localhost:4000 ( the backend )
      We are using our backend as an API
      How this works:
       - Express serves our data to our localhost:4000
       - We use axios to retrieve that data from our server (localhost:4000) that we just served to our server (localhost:4000) */
      .then(function (response) {
        if (response.data) {
          setMyAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Recent Posts</h1>
        {myAPIData.map((item, i) => (
          <PostCard postData={item} key={i} />
        ))}
      </div>
    </>
  );
}

export default Home;
