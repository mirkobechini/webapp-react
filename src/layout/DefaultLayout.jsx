import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout({menu}) {

    const { loading } = useContext(GlobalContext)

    return (
        <>
            <AppHeader menu = {menu}/>
            <main>
                {loading && <Loader/>}
                <Outlet/>
            </main>
            <AppFooter menu = {menu}/>

        </>
    )
}