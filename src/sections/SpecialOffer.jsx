import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center"> 
      <div className="flex items-center max-xl:flex-col-reverse">
        <div className="flex max-sm:ml-20">
          <img src={offer} width={773} height={687} className="object-contain w-full" />
        </div>
        
        <div className="flex flex-1 flex-col max-xl:mb-16">
          
            <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              <span className="text-coral-red font-mono">Special</span> Offer
            </h2>

            <p className="mt-6 lg:max-w-lg info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe cum tenetur magnam minus ad nemo, eos ipsam ipsum suscipit recusandae, dolor error cumque atque, voluptas vitae sunt rerum distinctio.
            </p>
            
            <p className="mt-3 info-text lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta aspernatur non fugit dolor rerum impedit cumque maiores neque libero.</p>
            
            <div className='mt-11 flex flex-wrap gap-4'>
              <Button label='Shop now' iconURL={arrowRight} />
              <Button label="Explore more" backgroundColor="bg-transparent" borderColor="border-coral-red" textColor="text-slate-700"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
