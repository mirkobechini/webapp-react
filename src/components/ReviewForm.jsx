export default function ReviewForm() {
    return (
        <>

            <div className="container mb-3 card p-3 bg-dark-subtle">

                <form>
                    <div className="row mb-3 justify-content-around py-1">
                        <label for="name" className="col-sm-1 col-form-label text-center">Name</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="name" placeholder="Anonymous" />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-around py-1">
                        <label for="Review" className="col-sm-1 col-form-label text-center">Review</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="Review" rows={3} />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-around py-1">
                        <label for="vote" className="col-sm-1 col-form-label text-center">Vote</label>
                        <div className="col-sm-10">
                            <select className="form-select" id="vote">
                                <option value="1" selected>1 - Really Bad</option>
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