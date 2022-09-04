import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {

    return (
        <header className="w-screen pt-3 sm:pt-10 flex justify-center items-center flex-col sm:text-lg">
            <section className="w-32 sm:w-36">
                <img src=".\src\assets\tesla_icon.png" alt="" />
            </section>
            <section className="flex pt-5 gap-8 font-bold ">
                <Link to='/model-s'><a className="hover:text-red-500" ><h1>Model S</h1></a></Link>
                <Link to='/model-3'><a className="hover:text-red-500" ><h1>Model 3</h1></a></Link>
                <Link to='/model-x'><a className="hover:text-red-500" ><h1>Model X</h1></a></Link>
            </section>
        </header>
    )
}

export default Header