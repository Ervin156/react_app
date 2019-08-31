import React, { useState, useEffect } from "react";
// import { listPhotos } from "./service";
import "./style.scss";

function Photos() {
  const [photos, changePhotos] = useState([]);

  useEffect(() => {
    // listPhotos().then(data => {
    //   console.log(data);
    //   // changePhotos(data);
    // });
    changePhotos([
      { name: "img-1" },
      { name: "img-2" },
      { name: "img-3" },
      { name: "img-4" },
      { name: "img-5" },
      { name: "img-6" },
      { name: "img-7" },
      { name: "img-8" }
    ]);
  }, []);

  return <div id="photos">{
    photos.map(photo=><h2>{photo.name}</h2>)
  } </div>;
}

export default Photos;
