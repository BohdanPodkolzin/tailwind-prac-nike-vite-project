import { star } from "../assets/icons"

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div key={name} className="flex flex-1 flex-col w-full max-sm:w-[75%]">
        <img src={imgURL} alt={name} className="shadow-xl rounded-3xl" />
        
        <div className="mt-6 pl-4">
            <div className="flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="text-xl font-montserrat leading-normal text-slate-gray font-bold">4.5</p>
            </div>
            
            <p className="mt-1.5 text-xl font-montserrat font-semibold">{name}</p>
            <p className="mt-2 text-2xl font-montserrat text-coral-red font-bold">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard
