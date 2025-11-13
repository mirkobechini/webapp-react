import { Link } from "react-router-dom";


const API_URL = "http://localhost:3000"

export default function HomePage() {


    return (
        <>
            <div className="py-4 mb-4 bg-info-subtle">
                <div className="container py-5">
                    <h1 className="display-6 fw-bold">Movies</h1>
                    <p className="col-md-8 fs-4">
                        Explore our movies
                    </p>
                    <Link className="btn btn-dark btn-md" type="button" to={"/movies"}>
                        View movie list
                    </Link>
                </div>
            </div>

        </>
    )
}