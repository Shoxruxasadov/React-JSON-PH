import React, { useEffect } from "react";
import axios from "axios";

function UsersJSX({ setUsers, users, setCurrent, setShow }) {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  function drawTodos(i) {
    setShow("todo");
    setCurrent(i);
  }

  function drawAlbums(i) {
    setShow("album");
    setCurrent(i);
  }

  function drawPosts(i) {
    setShow("post");
    setCurrent(i);
  }

  return (
    <div className="wrapper">
      {users.map((user, index) => (
        <div className="card">
          <div className="front">
            <div className="iden">
              <span>{user.id}</span>
            </div>
            <div className="logo-img">
              <img src={`usersPhoto/user${index + 1}.jpg`} />
            </div>
            <div className="front-content">
              <span>{user.username}</span>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.phone}</h3>
              <h4>{user.website}</h4>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <div>
                <h1>Company</h1>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
              </div>
              <div>
                <h1>Address</h1>
                <p>
                  Street: {user.address.street} / City:
                  {user.address.city}
                </p>
                <p>
                  Suite: {user.address.suite} / Zipcode:
                  {user.address.zipcode}
                </p>
              </div>
            </div>
            <div className="btn-wrapper">
              <button onClick={() => drawTodos(index + 1)}>Todos</button>
              <button onClick={() => drawAlbums(index + 1)}>Albums</button>
              <button onClick={() => drawPosts(index + 1)}>Posts</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersJSX;
