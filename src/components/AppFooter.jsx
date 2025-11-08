import { Link } from "react-router-dom"

export default function AppFooter({ menu }) {
    return (
        <footer className="bg-dark-subtle py-4">
            <div className="container">
                <div className="row">
                    <ul className="col list-unstyled">
                        <h5>Quick links</h5>
                        {
                            menu.map((item) => (
                                <li className="ps-2" key={item.id}>
                                    <Link className="nav-link" aria-current="page" to={item.link}>{item.text}</Link>
                                </li>
                            ))
                        }
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