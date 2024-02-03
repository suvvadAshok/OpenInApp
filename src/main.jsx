import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Login } from "./logIn.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginAuth } from "./loginAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAuth,
  },
  {
    path: "/upload-csv",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
