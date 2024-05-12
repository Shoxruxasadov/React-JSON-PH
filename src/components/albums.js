import React, { useEffect } from "react";
import axios from "axios";

function AlbumsJSX({ setAlbums, albums, current, setShow, setCurrentAlbum }) {
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${current}/albums`)
      .then((res) => setAlbums(res.data));
  }, []);

  function showAlbums(i) {
    setShow("showAlbum");
    setCurrentAlbum(i);
  }

  return (
    <div className="draw-content">
      <div className="albums-wrapper">
        {albums.map((album) => (
          <div className="albums-content">
            <div>
              <span>{album === undefined ? "Loading..." : album.id}</span>
              <p>{album === undefined ? "Loading..." : album.title}</p>
            </div>
            <button onClick={() => showAlbums(album.id)}>Show Album</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumsJSX;
