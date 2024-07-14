// src/components/PostList.js
import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="container mx-auto mt-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
