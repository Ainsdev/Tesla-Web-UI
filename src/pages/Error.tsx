import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    const { scrollY } = useScroll()

    useEffect(() => {
        return scrollY.onChange((latest) => {
            console.log("Page scroll: ", latest)
        })
    }, [])
    return (
        <main className="overflow-hidden text-5xl relative  text-white  font-bold h-screen bg-gradient-to-br from-red-200 to-red-600 flex flex-col justify-center items-center">
            <div className='h-96 pt-20 z-40 text-center'>
                <motion.h1 animate={{ x: [50, 150,0], opacity: 1, scale: 1 }}
                    transition={{
                        duration: 5,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }} style={{ y: scrollY }}>Oil Engine Error...</motion.h1>
                <Link to='/'> <button className='text-2xl text-red-500' >BACK TO HOME</button></Link>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src="https://tesla-cdn.thron.com/delivery/public/video/tesla/9a153db3-198b-4502-98bc-3bc6041597fd/bvlatuR/WEBHD/model-s-interior-carousel-1-cinematic-display-desktop-global"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </main>
    )
}

export default ErrorPage