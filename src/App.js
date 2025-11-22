import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

function App() {
  const [value, setValue] = useState("0");

  const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "Programming" },
    { id: 2, title: "Python", body: "Programming" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <h1>{value}</h1>
      <input value={value} onChange={(event) => setValue(event.target.value)} />

      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={posts} title={"Posts"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No posts here!</h1>
      )}
    </div>
  );
}

export default App;
