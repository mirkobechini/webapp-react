export default function ReviewCard({review}) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header border-0 bg-white pb-1">

                    <div className="card-title fw-bold mb-0">{review.name}</div>
                </div>
                <div className="card-body pt-0">
                    <div className="vote text-warning">
                        {'★'.repeat(review.vote)}{'☆'.repeat(5 - review.vote)}
                    </div>
                    <p>{review.text}</p>
                </div>
            </div>
        </>
    )
}