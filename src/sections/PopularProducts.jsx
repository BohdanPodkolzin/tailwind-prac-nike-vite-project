import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        
        <h2 className="text-[60px] text-slate-900 font-palanquin max-sm:text-[52px] font-semibold">Our <span className="text-coral-red">Popular</span> Products</h2>
        
        <p className="text-slate-700 font-montserrat text-[28px] leading-[52px] my-2 max-sm:text-xl max-sm:leading-[36px] xl:max-w-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit animi earum beatae assumenda eveniet reiciendis veniam quibusdam ipsa facilis libero quasi aspernatur dolor illo consequuntur debitis architecto, accusantium alias illum!
          </p>   
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:gap-6 gap-14 grid-cols-1 justify-items-center">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))};
      </div>

    </section>
  )
}

export default PopularProducts
