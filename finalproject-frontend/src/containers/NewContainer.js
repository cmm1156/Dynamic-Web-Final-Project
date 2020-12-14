import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function NewContainer() {
  const [theData, setTheData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
      .then(function (response) {
        console.log("response", response);
        setTheData(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, [theData]);

  return (
    <>
      <p>NewContainer Hello</p>
      <p>{theData[0].trailName}</p>
    </>
  );
}

export default NewContainer;
