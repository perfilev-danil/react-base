import PostItem from "./PostItem";

export default function PostsList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>No posts here!</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </>
  );
}
