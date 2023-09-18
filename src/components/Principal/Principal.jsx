import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import StickyNav from "../StickyNav";

export default function Principal() {
    return (
        <>
            <StickyNav />
            <Sidebar />
            <Outlet />
        </>
    )
}