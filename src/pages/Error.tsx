import { motion } from 'framer-motion';
function ErrorPage() {
    return (
        <main className=" text-5xl  text-white  font-bold w-screen h-screen bg-gradient-to-br from-red-200 to-red-600 flex justify-center items-center">
            <h1 className="text-xl font-extrabold text-white">
                <motion.div
                    layout
                    animate={{ scale:1.3}}
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.3 }
                    }}
                    className="w-96 h-96 rounded-xl text-center bg-black"></motion.div>
            </h1>
        </main>
    )
}

export default ErrorPage