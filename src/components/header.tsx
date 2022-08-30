import { useState } from "react"
const Header = () => {
    const [mobileMenu, mobileSetMenu] = useState(true);
    return (
        <header className="w-screen pt-3 sm:pt-10 flex justify-center items-center flex-col sm:text-lg">
            <section className="w-32 sm:w-36">
                <img src=".\src\assets\tesla_icon.png" alt="" />
            </section>
            <section className="flex pt-5 gap-8 font-bold ">
                <a className="hover:text-red-500" href="#"><h1>Model S</h1></a>
                <a className="hover:text-red-500" href="#"><h1>Model 3</h1></a>
                <a className="hover:text-red-500" href="#"><h1>Model X</h1></a>
            </section>
        </header>
    )
}

export default Header