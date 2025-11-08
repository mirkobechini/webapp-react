import { Link } from "react-router-dom"

export default function AppFooter(){
    return(
        <footer className="bg-dark-subtle">
            <div className="container">
                <div className="row">
                    <ul className="col list-unstyled">
                        <h5>Quick links</h5>
                        <li className="ps-2">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="ps-2">
                            <Link className="nav-link" aria-current="page" to="/movies">Movies</Link>
                        </li>
                        <li className="ps-2">
                            <Link className="nav-link" aria-current="page" to="#">Other</Link>
                        </li>
                    </ul>
                    <ul className="col list-unstyled">
                        <h5>Legal links</h5>
                        <li className="ps-2">
                            <Link className="nav-link" aria-current="page" to="#">Policy</Link>
                        </li>
                        <li className="ps-2">
                            <Link className="nav-link" aria-current="page" to="#">Terms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}