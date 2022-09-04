import { Link } from 'react-router-dom';
import { PreviewCarType } from '../interfaces/interfaces&types';

function PreviewCar({ name, photo, path }: PreviewCarType) {
    return (
        <article className='relative w-screen h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-start items-center pt-6 overflow-hidden' style={{ backgroundImage: `url(${photo})` }}>
            <h1 className='text-4xl font-bold '>{name}</h1>
            <h3 className='font-light text-lg italic text-'>Plaid</h3>
            <section className='flex justify-center flex-col sm:flex-row sm:justify-center sm:items-center gap-10 sm:gap-20  bottom-16 absolute font-semibold text-2xl'>
                <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white  rounded-full hover:text-black group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span onClick={() => window.scrollTo(0, 0)} className="relative">Order Now</span>
                </a>
                <Link to={path}>
                    <a className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white bg-red-600 rounded-full hover:bg-red-700">
                        <span className="relative">See More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 mt-0.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </Link>
            </section>

        </article>
    )
}

export default PreviewCar
