// src/components/PostItem.js
import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-bold">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
