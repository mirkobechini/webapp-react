import { NavLink } from "react-router-dom"

export default function AppFooter(){
    return(
        <footer className="bg-dark-subtle">
            <div className="container">
                <div className="row">
                    <ul className="col list-unstyled">
                        <h5>Quick links</h5>
                        <li className="ps-2">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="ps-2">
                            <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
                        </li>
                        <li className="ps-2">
                            <NavLink className="nav-link" aria-current="page" to="#">Other</NavLink>
                        </li>
                    </ul>
                    <ul className="col list-unstyled">
                        <h5>Legal links</h5>
                        <li className="ps-2">
                            <NavLink className="nav-link" aria-current="page" to="#">Policy</NavLink>
                        </li>
                        <li className="ps-2">
                            <NavLink className="nav-link" aria-current="page" to="#">Terms</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}