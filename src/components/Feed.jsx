import React, { useState } from "react";
import Post from "./Post.jsx";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      Feed{" "}
      {posts.map((post) => (
        <Post />
      ))}
    </div>
  );
}
