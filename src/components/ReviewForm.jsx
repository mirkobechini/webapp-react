import axios from "axios";
import { useState } from "react"

const API_URL = "http://localhost:3000/api"

export default function ReviewForm({id}) {
    


    const initialForm = {
        name:"",
        text: "",
        vote: 0
    }

    const [formData, setFormData] = useState(initialForm)


    function handleSubmit(e){
        e.preventDefault()
        console.log(formData);
        console.log(id);

        axios.post(`${API_URL}/movies/${id}/reviews`, formData)
        .then( res => {
            console.log(res);
            setFormData(initialForm)
            
        })
        .catch(err => {
            console.log(err);
            
        })

        

        
    }

    return (
        <>

            <div className="container mb-3 card p-3 bg-dark-subtle">

                <form onSubmit={handleSubmit}>
                    <div className="row mb-3 justify-content-around py-1">
                        <label htmlFor="name" className="col-sm-1 col-form-label text-center">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Anonymous" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-around py-1">
                        <label htmlFor="Review" className="col-sm-1 col-form-label text-center">Review</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Review" rows={3} value={formData.text} onChange={(e)=>setFormData({...formData, text:e.target.value})}/>
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-around py-1">
                        <label htmlFor="vote" className="col-sm-1 col-form-label text-center">Vote</label>
                        <div className="col-sm-10">
                            <select className="form-select" id="vote" value={formData.vote} onChange={(e)=>setFormData({...formData, vote:e.target.value})}>
                                <option value="1" >1 - Really Bad</option>
                                <option value="2">2 - Bad</option>
                                <option value="3">3 - Average</option>
                                <option value="4">4 - Good</option>
                                <option value="5">5 - Amazing</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark">Add review</button>
                    </div>
                </form>
            </div>
        </>
    )
}