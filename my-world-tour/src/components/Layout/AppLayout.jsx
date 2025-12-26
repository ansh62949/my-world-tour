import { Outlet, useLocation } from "react-router-dom";
import { Footers } from "../UI/Footer";
import { Headers } from "../UI/Headers";

export const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Headers />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <Footers />
    </>
  );
};
