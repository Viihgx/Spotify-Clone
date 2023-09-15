import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";

export default function Principal() {
    return (
        <>
            <Sidebar />

            <Outlet />
        </>
    )
}