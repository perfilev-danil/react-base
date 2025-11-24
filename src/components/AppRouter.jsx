import { Link, Navigate } from "react-router-dom";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              Component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              Component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/posts" : "/login"} replace />}
      />
    </Routes>
  );
}
