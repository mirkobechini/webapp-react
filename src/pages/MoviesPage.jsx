import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
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
                    <MovieCard/>
                </div>
            </div>

        </>
    )
}