import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
/* import { useEffect } from "react"; */
import { useInView } from "react-intersection-observer";
import BackButton from "../components/BackButton";
import { TeslaCarType } from "../interfaces/interfaces&types";

function Car(props: TeslaCarType) {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const animationS = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.2
                }
            })
            animationS.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.2
                }
            })
        } else {
            animation.start({
                x: '-100vw'
            })
            animationS.start({
                x: '100vw'
            })
        }
    })
    return (
        <main className="scroll-smooth snap-y snap-mandatory overflow-hidden" >
            <section className={`text-white snap-always snap-start relative w-screen h-screen flex flex-col justify-between items-center bg-center bg-cover`} style={{ backgroundImage: `url(${props.bgImages[0]})` }}>
                <BackButton />
                <h1 className='text-5xl font-bold pt-24'>{props.name}</h1>
                <article className="sm:flex sm:items-start sm:gap-40 sm:justify-center pb-24 text-xl grid grid-cols-2 gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className='font-bold'>{props.principalData.range}mi</h3>
                        <p className="font-light">Range</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className='font-bold'>{props.principalData.velocity}s</h3>
                        <p className="font-light">0-60mph</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className='font-bold'>{props.principalData.topSpeed}mph</h3>
                        <p className="font-light">Top Speed</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className='font-bold'>{props.principalData.power}hp</h3>
                        <p className="font-light">Power</p>
                    </div>
                    <a href="" className="col-span-2 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white  rounded-full hover:text-black group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">Order Now</span>
                    </a>
                </article>
            </section>
            <section className={`text-white snap-always snap-start relative w-screen h-screen flex flex-col justify-between items-center bg-center bg-cover`} style={{ backgroundImage: `url(${props.bgImages[1]})` }}>
                <motion.h1 animate={{}} className='text-5xl font-bold pt-24 text-white'>Aerodinamic</motion.h1>
            </section>
            <section ref={ref} className="snap-always snap-start w-screen h-max p-40 bg-black flex justify-center items-center">
                <div className="grid sm:grid-cols-2 gap-y-5 grid-rows-3 text-white text-center">
                    <article className="w-[60vh] h-max order-1">
                        <motion.div animate={animation}><img src={props.data[0].photo} /></motion.div>
                    </article>
                    <motion.article animate={animationS} className="w-[60vh] h-max p-5 order-2">
                        <h1 className="text-xl font-bold pb-12">{props.data[0].title}</h1>
                        <p className="text-lg px-20">{props.data[0].text}</p>
                    </motion.article>
                    <motion.article animate={animation} className="w-[60vh] h-max order-4 sm:order-3">
                        <h1 className="text-xl font-bold pb-12">{props.data[1].title}</h1>
                        <p className="text-lg px-20">{props.data[1].text}</p>
                    </motion.article>
                    <motion.article className="w-[60vh] h-max p-5 order-3 sm:order-4">
                        <motion.div animate={animationS} ><img src={props.data[1].photo} /></motion.div>
                    </motion.article>
                    <motion.article className="w-[60vh] h-max order-4">
                        <motion.div animate={animation}><img src={props.data[2].photo} /></motion.div>
                    </motion.article>
                    <motion.article animate={animationS} className="w-[60vh] h-max p-5 order-5">
                        <h1 className="text-xl font-bold pb-12">{props.data[2].title}</h1>
                        <p className="text-lg px-20">{props.data[2].text}</p>
                    </motion.article>
                </div>
            </section>
            <section className={`text-white snap-always snap-start relative w-screen h-screen flex flex-col justify-between items-center bg-center bg-cover`} style={{ backgroundImage: `url(${props.bgImages[2]})` }}>
                <div className="pt-24">
                    <a href="" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white  rounded-full hover:text-black group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">Order Now</span>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Car