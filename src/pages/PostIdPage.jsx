import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";

export default function PostIdPage() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const params = useParams();

  async function fetchPostById() {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  }

  async function fetchComments() {
    const response = await PostService.getComments(params.id);
    setComments(response.data);
  }

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>
        {post.id}, {post.title}
      </h1>
      <h2>Comments</h2>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h5 style={{ marginTop: 15 }}>{comment.email}</h5>
            <div>{comment.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
