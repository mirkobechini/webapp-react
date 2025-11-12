import { useEffect, useState } from "react";

import axios from "axios"
import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

const API_URL = "http://localhost:3000/api/movies"


export default function MoviePage() {

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                res.data.image = `/${res.data.image}`
                setMovie(res.data)
                

            })
            .catch(err => {
                console.log(err.message);
                setError({ error: err.message });
            })
    }, [])

    return (
        <>
            <div className="py-4 mb-4 bg-info-subtle">
                <div className="container  py-5">
                    <div className="row justify-content-evenly">
                        <div className="col-3">
                            <img className="img-fluid" src={movie?.image} alt={movie?.title} />
                        </div>
                        <div className="details col-6">
                            <h1 className="mb-2">{movie?.title}</h1>
                            <p className="mb-2"> <i className="bi bi-person"></i> {movie?.director}</p>
                            <p className="mb-2"><i className="bi bi-tag"></i> {movie?.genre}</p>
                            <p className="mb-2"> <i className="bi bi-calendar"></i> {movie?.release_year}</p>
                            <p className="mb-2"> <i className="bi bi-newspaper"></i> {movie?.abstract}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ReviewsList reviews={movie?.reviews || []} />

        </>
    )
}