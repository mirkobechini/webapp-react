import { useEffect, useState } from "react";

import axios from "axios"
import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";
import MoviePageCard from "../components/MoviePageCard";

const API_URL = "http://localhost:3000/api/movies"


export default function MoviePage() {

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    function fetchData() {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                res.data.image = `/${res.data.image}`
                setMovie(res.data)


            })
            .catch(err => {
                console.log(err.message);
                setError({ error: err.message });
            })
    }

    useEffect(fetchData, [])

    return (
        <>
            <MoviePageCard movie = {movie} />
            <ReviewForm id={id} />
            <ReviewsList reviews={movie?.reviews || []} />

        </>
    )
}