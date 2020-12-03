import React, { useState, useEffect } from "react";
import axios from "axios";

// axios is used to query (get/retrieve/fetch) data from an API

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  // NOTE: localhost:4000 or server equivalent must be running (npm start) in order to retrive the data
  // Later this will be changed to Heroku deploy address
  useEffect(() => {
    axios
      .get(`http://localhost:4000`) // in Excerise-Two, this line contained .get(`https://openweather.com/data/? ...`),
      /*instead of this the openweather API url, we are using our localhost:4000 ( the backend )
      We are using our backend as an API
      How this works:
       - Express serves our data to our localhost:4000
       - We use axios to retrieve that data from our server (localhost:4000) that we just served to our server (localhost:4000) */
      .then(function (response) {
        if (response.data) {
          setSampleAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ sampleAPIData });

  return (
    <div>
      <h1>Hi</h1>
      {sampleAPIData.map((item, i) => (
        <div key={i}>
          <p>Name: {item.name}</p>
          <p>Role: {item.role}</p>
          <p>Dog: {item.dog}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
