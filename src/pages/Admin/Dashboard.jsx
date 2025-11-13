
import { Link } from "react-router-dom"

import MovieForm from "../../components/MovieForm";

export default function Dashboard() {
    return (
        <>
            <div className="bg-primary-subtle">
                <div className="container py-4 mb-2"> 
                    <h1 className="display-6 d-inline align-middle">Admin Dashboard</h1>
                    <Link to="/admin/movies/create" className="btn btn-primary ms-5 py-1">Create New Movie</Link>
                </div>
            </div>
            <MovieForm />
        </>
    )
}