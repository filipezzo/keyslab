import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

function Layout() {
  return (
    <main className="flex">
      <Aside />
      <Outlet />
    </main>
  );
}

export default Layout;
