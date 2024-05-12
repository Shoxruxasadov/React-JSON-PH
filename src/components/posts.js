import React, { useEffect } from "react";
import axios from "axios";

function PostsJSX({ setPosts, posts, current }) {
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${current}/posts`)
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="draw-content">
      <div className="posts-wrapper">
        {posts.map((post) => (
          <div className="posts-content">
            <div className="front">
              <div className="iden">
                <span>{post === undefined ? "Lodaing..." : post.id}</span>
              </div>
              <div className="title-posts">
                {post === undefined ? "Lodaing..." : post.title}
              </div>
            </div>
            <div className="back">
              <div className="body-posts">
                {post === undefined ? "Lodaing..." : post.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsJSX;
