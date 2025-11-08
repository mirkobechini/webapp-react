import { Link } from "react-router-dom";

export default function MovieCard() {
    return (
        <>
            <div className="col">
                <div className="card">
                    <Link to="#">
                        <img className="card-img-top" src="https://placehold.co/600x400" alt="" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">movie.title</h5>
                        <div className="card-text pb-3">
                            <p className="card-text mb-2"> <i className="bi bi-person"></i> movie.director</p>
                            <p className="card-text mb-2"><i className="bi bi-tag"></i> movie.genre</p>
                            <p className="card-text mb-2"> <i className="bi bi-calendar"></i> movie.release_year</p>
                        </div>
                        <Link className="btn btn-dark" to="#">View details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}