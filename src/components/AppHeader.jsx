import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-md bg-dark-subtle">
                <div className="container">
                    <a className="navbar-brand" href="#">Movies Logo</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navMovies" aria-controls="navMovies" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navMovies">
                        <ul className="navbar-nav ms-2 gap-2">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Other</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}