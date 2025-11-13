import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "http://localhost:3000/api/movies"


export default function MovieCreate() {

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


    return (
        <>


            <div className="container">
                <div className="table-responsive-sm">
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
                                        <img width={60} src={`/${movie.image}`} alt={movie.title} />
                                    </td>
                                    <td> {movie.title}</td>
                                    <td> {movie.director}</td>
                                    <td>
                                        <a className="btn btn-dark mx-1">
                                            <i className="bi bi-eye"></i>
                                        </a>
                                        <a className="btn btn-primary mx-1">
                                            <i className="bi bi-pencil"></i>
                                        </a>
                                        <a className="btn btn-danger mx-1">
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