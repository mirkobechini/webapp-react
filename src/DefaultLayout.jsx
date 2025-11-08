import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default function DefaultLayout({menu}) {

    return (
        <>
            <AppHeader menu = {menu}/>
            <main>
                <Outlet/>
            </main>
            <AppFooter menu = {menu}/>

        </>
    )
}