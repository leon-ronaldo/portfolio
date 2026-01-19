// import Divider from "../components/Divider";

// import { motion } from "framer-motion";
// import type React from "react";
// import { useState } from "react";

export default function Projects() {
    // const [activeIndex, setActiveIndex] = useState(0)

    return <section className="min-h-screen w-full flex flex-col gap-1 overflow-hidden relative p-2">
        <DecorationCircles />
        <div className="grid grid-cols-2 h-full w-full gap-2">
            {/* left side */}
            <div className="grid grid-rows-3 grid-cols-1 gap-2">
                <span className="bg-gray-700 flex">
                    <img src="/images/ardour-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
                <span className="bg-gray-700 flex">
                    <img src="/images/know-to-cure-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
                <span className="bg-gray-700 flex">
                    <img src="/images/auto-mailer-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
            </div>

            {/* right side */}
            <div className="grid grid-rows-3 grid-cols-1 gap-2">
                <span className="bg-[#6a4df4] row-span-2">
                    <Intro />
                </span>
                <span className="bg-gray-700 flex">
                    <img src="/images/echo-draft-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
            </div>
        </div>
    </section>
}

function Intro() {
    return (
        <div className="w-full h-full flex flex-col items-start p-4">
            <p className="text-white font-bold lg:text-lg mb-1 lg:mb-4">
                My personal
            </p>

            <div className="flex">
                <span>
                    {
                        "PROJECTS".split("").map((char) => <h1 key={char} className="text-4xl tracking-[3px] sm:text-6xl md:text-8xl font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                            {char}
                        </h1>)
                    }
                </span>
                <HeroImage />
            </div>

            <p className="max-w-xs text-xs text-white text-left leading-relaxed">
                I bring 4+ years of hands-on experience building industry-relevant systems using modern backend frameworks, frontend technologies, and data-driven architectures.
            </p>
        </div>
    );
}


function HeroImage() {
    return <section className="z-10 flex-1 self-end flex justify-center relative lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-landing.png" alt="leon.png" className="h-full object-cover w-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-[#6a4df4] glass-morph" />
    </section>
}

// type Props = {
//     bgColor: string
//     image: string
//     title: string
//     description: string
//     index: number
//     activeIndex: number
//     setActiveIndex: React.Dispatch<React.SetStateAction<number>>
// }

// function ProjectCard({
//     bgColor,
//     image,
//     title,
//     description,
//     index,
//     activeIndex,
//     setActiveIndex
// }: Props) {

//     const isActive = index === activeIndex

//     return (
//         <span onClick={() => setActiveIndex(index)} className={`w-full rounded-4xl flex justify-between overflow-clip items-center ${isActive ? "min-h-[200px]" : "min-h-[80px]"}`} style={{ background: bgColor }}>
//             <span className="flex relative flex-1 h-full pt-4">
//                 <img src={image} alt={image} className="bg-white rounded-full aspect-square h-12 p-1 ml-3" />
//                 <span className={`text-left pl-3 my-auto absolute ${isActive ? "left-1 top-18" : "left-15 top-5"}`}>
//                     <p className={`font-bold text-gray-800 ${isActive ? "text-3xl" : "text-lg"}`}> {title} </p>
//                     <p className={isActive ? "text-xs" : "text-[9px]"}> {description} </p>
//                 </span>
//             </span>
//             <motion.span layout className={`flex h-full max-w-[150px] ${isActive ? "items-center" : "items-end "}`}>
//                 <img src="/images/ardour-illustration.png" alt="" className="object-cover w-full" />
//             </motion.span>
//         </span>
//     )
// }


function DecorationCircles() {
    return <>
        {/* <span className="absolute -top-[10%] -right-[30%] w-[300px] rounded-full aspect-square bg-[#1a2dc4]" /> */}
    </>
}
