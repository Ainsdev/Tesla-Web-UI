import { useNavigate } from "react-router-dom";


const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className="absolute top-0 m-10 sm:left-0 z-40">
            <a href="#_" className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                Back to Home
            </a>
        </button>
    )
}

export default BackButton