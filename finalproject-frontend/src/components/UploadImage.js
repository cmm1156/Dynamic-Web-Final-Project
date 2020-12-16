import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("url", url);
            // setUrl(url);
            let splitUrl = url.split("&");
            let correctUrl = splitUrl[0].replace("images/", "images%2F");
            setUrl(correctUrl);
            console.log(correctUrl);
            setToken(splitUrl[1]);
          });
      }
    );
  };

  return (
    <>
      {/* <progress value={progress} max="100" /> */}
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <p type="text" name="imageUrl" id="imageUrl">
        {url}
      </p>
      <p type="text" name="token" id="token">
        {token}
      </p>
      {/* <p name="image">{url}</p> */}
    </>
  );
}

export default UploadImage;
