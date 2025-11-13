import axios from "axios";
import { useState } from "react"

const API_URL = "http://localhost:3000"

export default function MovieForm({ id }) {



    const initialForm = {
        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: ""
    }

    const [formData, setFormData] = useState(initialForm)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);

        axios.post(`${API_URL}/movies/${id}/`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                setFormData(initialForm)

            })
            .catch(err => {
                console.log(err);

            })




    }

    return (
        <>

            <div className="container">
                <div className="h4 mb-3">Add Movie</div>
                <div className="card p-3 bg-dark-subtle">
                    <form onSubmit={handleSubmit}>
                        <div className=" mb-3">
                            <label htmlFor="title" className="form-label text-center">Title</label>
                            <input type="text" className="form-control" id="title"  value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                        </div>
                         <div className=" mb-3">
                            <label htmlFor="director" className="form-label text-center">Director</label>
                            <input type="text" className="form-control" id="director"  value={formData.director} onChange={(e) => setFormData({ ...formData, director: e.target.value })} />
                        </div>
                        <div className=" mb-3">
                            <label htmlFor="genre" className="form-label text-center">Genre</label>
                            <input type="text" className="form-control" id="genre"  value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} />
                        </div>
                        <div className=" mb-3">
                            <label htmlFor="release_year" className="form-label text-center">Release Year</label>
                            <input type="text" className="form-control" id="release_year"  value={formData.release_year} onChange={(e) => setFormData({ ...formData, release_year: e.target.value })} />
                        </div>
                        <div className=" mb-3">
                            <label htmlFor="image" className="form-label text-center">Poster</label>
                            <input type="text" className="form-control" id="image" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="abstract" className="form-label text-center">Abstract</label>

                            <textarea className="form-control" id="abstract" rows={3} value={formData.abstract} onChange={(e) => setFormData({ ...formData, abstract: e.target.value })} />

                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-dark">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}