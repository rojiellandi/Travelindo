// import React from 'react'

import Beranda from "./Page/Beranda";
import DetailProduct from "./Page/DetailProduct";
import LayoutPage from "./Page/LayoutPage";
import ListProduct from "./Page/ListProduct";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login/>,
  //   errorElement: <Error />,
  //   loader : () => {
  //     if (localStorage.getItem("access_token")) {
  //       return redirect("/")
  //     }
  //     return null
  //   }
  // },
  // {
  //   path: "/register",
  //   element: <Register/>,
  //   errorElement: <Error />,
  //   loader : () => {
  //     if (localStorage.getItem("access_token")) {
  //       return redirect("/login")
  //     }
  //     return null
  //   }
  // },
  {
    element: <LayoutPage />,
    // errorElement: <Error />,
    // loader : () => {
    //   // if (!localStorage.getItem("access_token")) {
    //   //   return redirect("/login")
    //   // }

    //   // return null
    // },
    children: [
      {
        path: "/",
        element: <Beranda />,
      },
      {
        path: "/products",
        element: <ListProduct />,
      },
      {
        path: "/products/:id",
        element: <DetailProduct />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
