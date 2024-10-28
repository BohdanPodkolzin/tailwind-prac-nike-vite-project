import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className=" ustify-center max-container flex flex-col" id="contact-us">

      <h3 className="w-full text-center capitalize text-4xl leading-[68px] font-semibold font-palanquin">sign for updates <span className="text-coral-red">Updates</span> & Newsletter</h3>
      
      <div className="flex w-full max-sm:w-full sm:border sm:border-slate-700 p-3 mt-10 rounded-full">
        <input className="input py-2 font-montserrat" type="email" placeholder="subscribe@nike.com" />
        <div className="max-sm:ml-3 max-sm:w-[60%] flex p-0.4">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    
    </section>
  )
}

export default Subscribe
