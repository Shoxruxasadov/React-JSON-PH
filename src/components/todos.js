import React, { useEffect } from "react";
import axios from "axios";

function TodosJSX({ setTodos, todos, current }) {
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${current}/todos`)
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="draw-content">
      {todos.map((todo) => (
        <div className="todos-content">
          <div>
            <input type="checkbox" checked={todo.completed} />
            <p>{todo === undefined ? "Loading..." : todo.title}</p>
          </div>
          <span>{todo === undefined ? "Loading..." : todo.id}</span>
        </div>
      ))}
    </div>
  );
}

export default TodosJSX;
