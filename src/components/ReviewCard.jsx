import { star } from "../assets/icons"

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt={customerName} className="rounded-full object-cover" width={120} height={120} />
        <p className="max-w-sm text-center info-text mt-5 ">{feedback}</p>
        <div className="mt-3 flex justify-center gap-4 ">
            <img src={star} width={24} height={24} className="object-contain m-0" />
            <p className="text-xl font-montserrat text-slate-700">{rating}</p>
        </div>
        <h3 className="text-3xl mt-1 font-palanquin font-medium">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
