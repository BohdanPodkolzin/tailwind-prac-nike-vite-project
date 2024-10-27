function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]
    shadow-3xl px-10 py-8">
        <div className="mb-6">
            <div className="flex  bg-coral-red w-12 h-12 justify-center items-center rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
        </div>
        <h3 className="text-3xl font-palanquin font-semibold leading-normal">{label}</h3>
        <p className="max-sm:text-lg text-xl leading-[28px] text-slate-700 font-montserrat mt-4 break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard;
