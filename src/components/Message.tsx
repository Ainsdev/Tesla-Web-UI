import { motion, useScroll } from "framer-motion";

function Message() {
    const { scrollYProgress } = useScroll();
    return (
        <article className="pt-[300px] sm:flex sm:self-end sm:m-14 sm:pr-48 sm:pt-[320px]">
            <h1 className="text-6xl font-extrabold text-white sm:text-7xl">
                <p>The Future</p>
                <motion.p style={{translateX:scrollYProgress}} className=" p-2 bg-gradient-to-r from-red-200 to-red-600 inline-block">is Now</motion.p>
            </h1>
        </article>
    )
}
export default Message;