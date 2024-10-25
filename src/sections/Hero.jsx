import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
        justify-center items-start w-full max-xl:padding-x pt-28">
        
        <p className="max-sm:text-xl text-2xl font-montserrat text-coral-red">Our Summer Collection</p>
        
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[68px] max-sm:leading-[80px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red font-mono inline-block mt-5">Nike</span> Shoes
        </h1>

        <p className="font-montserrat font-bold text-slate-700 text-lg leading-8 mt-6 mb-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, laborum.</p>

        <Button label="Shop now" iconURL={arrowRight}/>
        
        <div className="flex justify-starts items-start
         flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-semibold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-700 text-xl">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

          
    </section>
  );
};

export default Hero;
