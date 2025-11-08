import { NavLink } from "react-router-dom"

export default function AppHeader({ menu }) {

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
                            {
                                menu.map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link" aria-current="page" to={item.link}>{item.text}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}