import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

import axios from "axios"

const API_URL = "http://localhost:3000"

export default function HomePage() {
    /*
    TODO: in backend change '/' response
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>{
            console.log(res.data);
            
        })
        .catch(err=>{
            console.log(err.message);
            setError({error: err.message});
        })
    },[])
    */

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
            {/* coming soon...
            <div className="container mb-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <MovieCard/>
                </div>
            </div>
            */}

        </>
    )
}