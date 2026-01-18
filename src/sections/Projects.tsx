// import Divider from "../components/Divider";

import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)

    return <section className="min-h-screen w-full flex flex-col gap-1 overflow-hidden relative p-2">
        <DecorationCircles />
        <ProjectCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={0} bgColor="#d4ddc9" image="/icons/ardour.png" title="Ardour AI" description="An AI social media platform" />
        <ProjectCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={1} bgColor="#f6ad4a" image="/icons/ktc.svg" title="Know To Cure" description="Your personal AI doctor." />
        <Intro />
        <ProjectCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={2} bgColor="#887fe3" image="/icons/auto-mailer.svg" title="Auto Mailer" description="Send mails within clicks with AI assist" />
        <ProjectCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={3} bgColor="#464f67" image="/icons/echo-draft.svg" title="Echo Draft" description="Write long scripts and proposals with Ease" />
    </section>
}

function Intro() {
    return (
        <section className="relative p-2 pb-14 bg-[#1d1d1d] rounded-4xl">
            <div className="max-w-7xl flex bg-background-color p-3 pb-0 rounded-3xl overflow-clip">
                <div className="flex flex-col items-start pb-3">
                    <p className="text-gray-600 font-bold lg:text-lg mb-1 lg:mb-4">
                        My personal
                    </p>

                    <h1 className="text-4xl tracking-[3px] sm:text-6xl md:text-8xl font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                        PROJECTS
                    </h1>

                    <p className="max-w-xs text-[10px] text-left text-gray-600 leading-relaxed">
                        I bring 4+ years of hands-on experience building industry-relevant systems using modern backend frameworks, frontend technologies, and data-driven architectures.
                    </p>
                </div>

                <HeroImage />
            </div>
        </section>
    );
}


function HeroImage() {
    return <section className="z-10 w-full flex justify-center relative lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-landing.png" alt="leon.png" className="h-full object-cover rotate-y-180 w-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-background-color glass-morph" />
    </section>
}

type Props = {
    bgColor: string
    image: string
    title: string
    description: string
    index: number
    activeIndex: number
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

function ProjectCard({
    bgColor,
    image,
    title,
    description,
    index,
    activeIndex,
    setActiveIndex
}: Props) {

    const isActive = index === activeIndex

    return (
        <span onClick={() => setActiveIndex(index)} className={`w-full rounded-4xl flex justify-between overflow-clip items-center ${isActive ? "min-h-[200px]" : "min-h-[80px]"}`} style={{ background: bgColor }}>
            <span className="flex relative flex-1 h-full pt-4">
                <img src={image} alt={image} className="bg-white rounded-full aspect-square h-12 p-1 ml-3" />
                <span className={`text-left pl-3 my-auto absolute ${isActive ? "left-1 top-18" : "left-15 top-5"}`}>
                    <p className={`font-bold text-gray-800 ${isActive ? "text-3xl" : "text-lg"}`}> {title} </p>
                    <p className={isActive ? "text-xs" : "text-[9px]"}> {description} </p>
                </span>
            </span>
            <motion.span layout className={`flex h-full max-w-[150px] ${isActive ? "items-center" : "items-end "}`}>
                <img src="/images/ardour-illustration.png" alt="" className="object-cover w-full" />
            </motion.span>
        </span>
    )
}


function DecorationCircles() {
    return <>
        {/* <span className="absolute -top-[10%] -right-[30%] w-[300px] rounded-full aspect-square bg-[#1a2dc4]" /> */}
    </>
}
