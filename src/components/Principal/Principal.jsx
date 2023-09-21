import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import StickyNav from "../Navbar/Navbar";

export default function Principal() {
    return (
        <>
            <StickyNav />
            <Sidebar />
            <Outlet />
        </>
    )
}