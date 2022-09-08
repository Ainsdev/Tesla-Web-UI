import React from "react";
import Header from "../components/header"
import Message from "../components/Message"
import PreviewCar from "../components/PreviewCar"


function Home() {
    const scrollToRefS = React.useRef<HTMLInputElement>(null);
    const scrollToRef3 = React.useRef<HTMLInputElement>(null);
    const scrollToRefX = React.useRef<HTMLInputElement>(null);


    return (
        <div className="overflow-hidden relative snap-y snap-mandatory overflow-y-scroll">
            <main className="flex flex-col justify-start items-center bg-[url('./assets/interior-tesla-model-s-2022-105.jpg')] w-full h-screen bg-top sm:bg-top bg-cover overflow-hidden">
                <section className="w-screen py-1 flex justify-center bg-white opacity-90 text-black top-0 text-center">
                    <a className="font-light underline sm:font-semibold text-sm" href="https://www.tesla.com/impact">Read Tesla's 2021 Impact Report</a>
                </section>
                <Header />
                <Message />
                <button onClick={() => scrollToRefS.current?.scrollIntoView(
                    {
                        behavior: 'smooth',
                        block: "end"

                    }
                )} className="animate-bounce bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full mt-40 sm:m-24">See More</button>
            </main>
            <div ref={scrollToRefS}>
                <PreviewCar path='model-s' name="Model S" photo="https://img.remediosdigitales.com/7e4365/1366_2000/1366_2000.jpeg" />
            </div>
            <div ref={scrollToRef3}>
                <PreviewCar path='model-3' name="Model 3" photo="https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD" />

            </div>
            <div ref={scrollToRefX}>
                <PreviewCar path='model-x' name="Model X" photo="https://tesla-cdn.thron.com/delivery/public/image/tesla/10accb74-6710-4826-ba35-926846c140b5/bvlatuR/std/4096x2560/Model-X-Performance-Hero-Desktop-LHD" />

            </div>
        </div>
    )
}

export default Home