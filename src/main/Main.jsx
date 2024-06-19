import { Outlet } from "react-router-dom";
import SideNav from "./nav/SideNav";

export default function Main() {
  return (
    <div className="flex">
      <SideNav />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
