import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
}
