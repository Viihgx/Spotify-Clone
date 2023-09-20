import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import StickyNav from "../Navbar";

export default function Principal() {
    return (
        <>
            <StickyNav />
            <Sidebar />
            <Outlet />
        </>
    )
}