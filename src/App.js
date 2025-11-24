import AppRouter from "./components/AppRouter";
import "./styles/App.css";
import { AuthContext } from "./context";
import { BrowserRouter, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <div style={{ display: "flex", gap: 20 }}>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
          <MyButton onClick={logout}>Log out</MyButton>
        </div>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
