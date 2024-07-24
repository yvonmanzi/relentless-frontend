// src/components/PostDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/posts/${id}/`
        );
        setPost(response.data);
      } catch (error) {
        console.error("There was an error fetching the post!", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
