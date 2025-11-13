
import { useState } from "react";
import MovieForm from "../../components/MovieForm";
import MoviePageCard from "../../components/MoviePageCard";



export default function MovieCreate() {

    const [creatingState, setCreatingState] = useState(false)
    const [movieCreated, setMovieCreated] = useState(null)

    function saveTemporaryMovieCreated(movie){
       
        setMovieCreated(movie)
        
        setCreatingState(true)
    }

    return (
        <>

            {(creatingState && <MoviePageCard movie = {movieCreated} />)}

            <MovieForm setMovieCreated = {saveTemporaryMovieCreated} />


        </>
    )
}