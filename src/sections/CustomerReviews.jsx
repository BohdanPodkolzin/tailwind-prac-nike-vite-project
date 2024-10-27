import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center  font-semibold ">What Our <span className="text-coral-red">Costumers</span> Say?</h3>
      <p className="m-auto mt-4 info-text font-medium max-w-lg text-center text-slate-700">
        Lorem ipsum. Nisi non officiis, reprehenderit in aspernatur veritatis molestias facilis? Veniam, distinctio sequi!</p>
      <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-36">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
