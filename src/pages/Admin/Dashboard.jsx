
import { Link } from "react-router-dom"

import axios from "axios"
import { useEffect, useState } from "react"


const API_URL = "http://localhost:3000/api/movies"

export default function Dashboard() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                console.error(err.message)
            })
    }, [])

    function handleDelete(id){
        axios.delete(`${API_URL}/${id}`)
             .then(res => {
                if(res.status === 204){
                   setMovies(movies.filter(movie => movie.id!= id))
                    console.log("Movie deleted successfully");
                }

            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            <div className="bg-primary-subtle">
                <div className="container py-4 mb-2">
                    <h1 className="display-6 d-inline align-middle">Admin Dashboard</h1>
                    <Link to="/admin/movies/create" className="btn btn-primary ms-5 py-1">Create New Movie</Link>
                </div>
            </div>

            <div className="container">
                <div className="table-responsive-sm py-3">
                    <table className="table table-striped tabe-borderless table-dark align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Poster</th>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {movies.map(movie =>
                                <tr className="table-dark" key={movie.id}>
                                    <td scope="row" >
                                        <img width={60} src={movie.image} alt={movie.title} />
                                    </td>
                                    <td> {movie.title}</td>
                                    <td> {movie.director}</td>
                                    <td>
                                        <Link to={`/movies/${movie.id}`} className="btn btn-dark mx-1">
                                            <i className="bi bi-eye"></i>
                                        </Link>
                                        <a className="btn btn-primary mx-1">
                                            <i className="bi bi-pencil"></i>
                                        </a>
                                        <a onClick={()=>handleDelete(movie.id)} className="btn btn-danger mx-1">
                                            <i className="bi bi-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}