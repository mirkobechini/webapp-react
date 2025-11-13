import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function AdminLayout({menu}) {

    return (
        <>
            <AppHeader menu = {menu}/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}