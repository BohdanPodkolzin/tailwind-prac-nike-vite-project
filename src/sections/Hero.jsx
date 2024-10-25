import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard"
import { useState } from "react";



const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
        justify-center items-start w-full max-xl:padding-x pt-28">
        
        <p className="max-sm:text-xl text-2xl font-montserrat text-coral-red">Our Summer Collection</p>
        
        <h1 className="mt-10 font-palanquin text-8xl max-xl:text-[84px] font-bold max-sm:text-[68px] max-sm:leading-[80px]">
          <span className="xl:bg-white/75 xl:whitespace-nowrap relative z-10 pr-8">The New Arrival</span>
          <br />
          <span className="text-coral-red font-mono inline-block mt-5">Nike</span> Shoes
        </h1>

        <p className="font-montserrat font-bold text-slate-700 text-lg leading-8 mt-6 mb-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, laborum.
          </p>

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

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
        max-xl:py-40 bg-primary bg-center bg-hero bg-cover">
        
        <div className="flex justify-center items-center w-full h-[95%]">
          <img className="object-contain relative z-10 w-auto h-auto max-w-[610px] max-h-[500px]" src={bigShoeImg} alt="Nike shoe logo" />
        </div>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[3%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard 
              imageURL={shoe} 
              changeBigShoeImg={(bigShoe) => setBigShoeImg(bigShoe)}
              bigShoeImg={bigShoeImg}
            /></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
