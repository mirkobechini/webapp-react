export default function MoviePageCard({movie}){
    return(
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
        </>
    )
}