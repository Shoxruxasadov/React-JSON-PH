import React, { useState } from "react";
import UsersJSX from "./components/users";
import TodosJSX from "./components/todos";
import AlbumsJSX from "./components/albums";
import PostsJSX from "./components/posts";
import ShowAlbumsJSX from "./components/showAlbum";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [showAlbum, setShowAlbum] = useState([]);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState("info");
  const [current, setCurrent] = useState("");
  const [currentAlbum, setCurrentAlbum] = useState("");

  return (
    <div className="App">
      <main id="main">
        <section id="left-section">
          <UsersJSX
            setUsers={setUsers}
            users={users}
            setCurrent={setCurrent}
            setShow={setShow}
          />
        </section>
        <section id="right-section">
          {show === "info" && (
            <div id="draw-content" className="draw-content">
              <div className="default-content">
                <h1>Information</h1>
              </div>
            </div>
          )}
          {show === "todo" && (
            <TodosJSX setTodos={setTodos} todos={todos} current={current} />
          )}
          {show === "album" && (
            <AlbumsJSX
              setAlbums={setAlbums}
              albums={albums}
              current={current}
              setShow={setShow}
              setCurrentAlbum={setCurrentAlbum}
            />
          )}
          {show === "post" && (
            <PostsJSX setPosts={setPosts} posts={posts} current={current} />
          )}
          {show === "showAlbum" && (
            <ShowAlbumsJSX
              setShowAlbum={setShowAlbum}
              showAlbum={showAlbum}
              currentAlbum={currentAlbum}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
