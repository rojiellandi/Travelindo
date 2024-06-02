import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import "../index.css";
import whatsapp from "/assets/whatsapp.png";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col relative">
  <Navbar />
  <div className="mx-2 relative">
    <div className="fixed bottom-56 right-20 mb-4 mr-4 sm:mb-8 sm:mr-14 " style={{ zIndex: 9999 }}>
      <img
        src={whatsapp}
        alt=""
        className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
      />
    </div>
    <Outlet />
  </div>
</div>

    </>
  );
}
