// import React from 'react'

import AboutUs from "./Page/AboutUs";
import Beranda from "./Page/Beranda";
import Cart from "./Page/Cart";
import DetailProduct from "./Page/DetailProduct";
import LayoutPage from "./Page/LayoutPage";
import ListProduct from "./Page/ListProduct";
import Pembayaran from "./Page/Pembayaran";
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
      {
        path: "/tentang-kami",
        element: <AboutUs />,
      },
      {
        path: "/cart/:id",
        element: <Cart />,
      },
      {
        path: "/pembayaran",
        element: <Pembayaran />,
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
