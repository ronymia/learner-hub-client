import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

export default function MainLayout() {
     return (
          <>
               <Header />
               <Outlet />
          </>
     )
}
