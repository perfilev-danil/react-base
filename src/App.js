import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [value, setValue] = useState("0");

  const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "Programming" },
    { id: 2, title: "Python", body: "Programming" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
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

      <hr style={{ margin: "15px 0" }} />

      <MyButton onClick={() => setModal(true)}>Create</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostsList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Posts"}
      />
    </div>
  );
}

export default App;
