import { useEffect, useState, useContext } from "react";

import axios from "axios"
import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";
import MoviePageCard from "../components/MoviePageCard";
import GlobalContext from "../context/GlobalContext";

const API_URL = "http://localhost:3000/api/movies"


export default function MoviePage() {

    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    const { setLoading } = useContext(GlobalContext)
    const { id } = useParams()

    function fetchData() {

        setLoading(true)
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                res.data.image = `/${res.data.image}`
                setMovie(res.data)


            })
            .catch(err => {
                console.log(err.message);
                setError({ error: err.message });
            })
            .finally(
                setLoading(false)
            )
    }

    useEffect(fetchData, [])

    return (
        <>
            <MoviePageCard movie={movie} />
            <ReviewForm id={id} />
            <ReviewsList reviews={movie?.reviews || []} />

        </>
    )
}