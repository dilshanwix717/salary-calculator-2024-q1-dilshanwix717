import React from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Menu from "./components/menu/Menu";
import "./styles/Global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Navbar />

          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
