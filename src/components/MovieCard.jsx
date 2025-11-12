import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <>
            <div className="col">
                <div className="card">
                    <div>
                        <div className="app-sizer">
                            <Link to={`/movies/${movie.id}`}>
                                <img className="card-img-top" src={movie.image} alt={movie.title}/>
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <div className="card-text pb-3">
                            <p className="card-text mb-2"> <i className="bi bi-person"></i> {movie.director}</p>
                            <p className="card-text mb-2"><i className="bi bi-tag"></i> {movie.genre}</p>
                            <p className="card-text mb-2"> <i className="bi bi-calendar"></i> {movie.release_year}</p>
                        </div>
                        <Link className="btn btn-dark" to={`/movies/${movie.id}`}>View details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}