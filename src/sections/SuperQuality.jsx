import { shoe8 } from "../assets/images";
import Button from "../components/Button";


const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you <span className="text-coral-red font-mono">Super</span>
          <br /> 
          <span className="text-coral-red font-mono">Quality</span> Shoes
        </h2>

        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe cum tenetur magnam minus ad nemo, eos ipsam ipsum suscipit recusandae, dolor error cumque atque, voluptas vitae sunt rerum distinctio.
        </p>
        
        <p className="mt-3 info-text lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta aspernatur non fugit dolor rerum impedit cumque maiores neque libero.</p>
        
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>

    </section>
  )
}

export default SuperQuality
