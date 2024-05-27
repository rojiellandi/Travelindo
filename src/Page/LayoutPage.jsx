import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import "../index.css";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col ">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
