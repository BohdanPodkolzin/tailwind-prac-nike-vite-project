import { headerLogo } from "../assets/images";
import { hamburger } from '../assets/icons'
import { navLinks } from "../constants";


function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/"><img src={headerLogo} alt="NikeLogo" width={130} height={30} /></a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label} className="relative group">
                        <a
                          href={item.href}
                          className="font-mono leading-normal text-2xl text-slate-800 font-bold"
                        >
                          {item.label}
                        </a>
                        <span
                          className="absolute left-0 bottom-0 w-2 rounded-xl h-1 bg-coral-red transition-all duration-300 ease-out
                            group-hover:w-full">

                        </span>
                      </li>
                ))}
            </ul>
            <div className="lg:hidden">
                <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
