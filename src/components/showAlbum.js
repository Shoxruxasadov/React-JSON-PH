import React, { useEffect } from "react";
import axios from "axios";

function ShowAlbumsJSX({ setShowAlbum, showAlbum, currentAlbum }) {
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${currentAlbum}/photos`)
      .then((res) => setShowAlbum(res.data));
  }, []);

  return (
    <div className="draw-content">
      <div class="show-albums-wrapper">
        {showAlbum.map((pictures) => (
          <div className="showAlbums-content">
            <div className="iden">
              <span>{pictures.id}</span>
            </div>
            <img src={pictures.url} />
            <div className="title-album">{pictures.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAlbumsJSX;
