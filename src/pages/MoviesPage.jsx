import MovieCard from "../components/MovieCard";
import { useEffect, useState, useContext } from "react";

import axios from "axios"
import GlobalContext from "../context/GlobalContext";

const API_URL = "http://localhost:3000/api/movies"


export default function MoviesPage() {

    const { setLoading } = useContext(GlobalContext)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    function fetchData() {
        setLoading(true)
        axios.get(`${API_URL}`)
            .then(res => {
                res.data.image = `/${res.data.image}`
                setMovies(res.data)


            })
            .catch(err => {
                console.log(err.message);
                setError({ error: err.message });
            })
            .then(()=>{

                setLoading(false)
            })
    }

    useEffect(fetchData, [])

    return (
        <>
            <div className="py-4 mb-4 bg-info-subtle">
                <div className="container py-5">
                    <h1 className="display-6 fw-bold">Movies</h1>
                    <p className="col-md-8 fs-4">
                        Here they are all of our movies... Enjoy
                    </p>
                </div>
            </div>
            <div className="container mb-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    }

                </div>
            </div>

        </>
    )
}