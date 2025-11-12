import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }) {
    return (
        <>
            <section id="reviews">
                <div className="container mx-auto">

                    {
                        reviews.map((review) => (

                            <ReviewCard review = {review} key={review.id}/>

                        ))
                    }

                </div>
            </section>
        </>
    )
}