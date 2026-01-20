// import Divider from "../components/Divider";

import React, { useState } from "react";

interface ProjectProps {
    id: string,
    tagline: string,
    techStack: { tool: string, icon: string }[],
    category: string,
    status: string,
    title: string,
    description: string,
    image: string,
    screenshots: string[]
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectProps>()

    const projects: ProjectProps[] = [
        {
            id: "ardour-ai",
            title: "Ardour AI",
            tagline: "Human-like Social AI Platform",
            description:
                "Ardour AI is a next-generation social platform where users interact with human-like AI characters that have memory, personality, and evolving relationships. AI characters behave like real social users by chatting, posting, reacting, and building long-term connections.",
            techStack: [
                { tool: "React", icon: "/icons/react.svg" },
                { tool: "Flutter", icon: "/icons/flutter.svg" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "AI", icon: "/icons/ai.png" },
                { tool: "Cloud", icon: "/icons/cloud.svg" }
            ],
            category: "AI / Social Platform",
            image: "/images/ardour-illustration.png",
            status: "In Development",
            // screenshots: ["/images/ardour-illustration.png", "/images/know-to-cure-illustration.png", "/images/echo-draft-illustration.png", "/images/auto-mailer-illustration.png"]
            screenshots: []
        },
        {
            id: "know-to-cure",
            title: "Know To Cure",
            tagline: "Medical Report Simplification Platform",
            description:
                "Know To Cure is a smart healthcare assistant that analyzes medical reports and prescriptions in PDF format and converts complex medical terms into simple human language. It also generates personalized monthly diet and workout plans with tracking and notification features.",
            techStack: [
                { tool: "Flutter", icon: "/icons/flutter.svg" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "AI", icon: "/icons/ai.png" },
                { tool: "Document Parser", icon: "/icons/document.svg" }
            ],
            category: "Health Tech / AI",
            image: "/images/know-to-cure-illustration.png",
            status: "Prototype",
            screenshots: []
        },
        {
            id: "auto-mailer",
            title: "Auto Mailer",
            tagline: "Secure Email Automation Platform",
            description:
                "Auto Mailer allows users to send automated and bulk emails directly from their own email accounts using OAuth authentication. It supports To and CC recipients and ensures secure email sending without sharing passwords.",
            techStack: [
                { tool: "Flutter", icon: "/icons/flutter.svg" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "OAuth", icon: "/icons/oauth.svg" },
                { tool: "API", icon: "/icons/api.svg" }
            ],
            category: "Automation / SaaS",
            image: "/images/auto-mailer-illustration.png",
            status: "Working MVP",
            screenshots: []
        },
        {
            id: "echo-draft",
            title: "Echo Draft",
            tagline: "AI Writing Assistant",
            description:
                "Echo Draft is an AI-powered content writing platform that helps users generate and refine emails, social media posts, professional messages, and marketing content with customizable tones and styles.",
            techStack: [
                { tool: "React", icon: "/icons/react.svg" },
                { tool: "AI", icon: "/icons/ai.png" },
                { tool: "Firebase", icon: "/icons/firebase.svg" },
                { tool: "Cloud", icon: "/icons/cloud.svg" }
            ],
            category: "AI / Productivity",
            image: "/images/echo-draft-illustration.png",
            status: "In Development",
            screenshots: []
        }
    ]


    return <section className="min-h-screen w-full flex flex-col gap-1 overflow-hidden relative p-2">
        <ProjectShowCase props={activeProject} setProps={setActiveProject} />
        <div className="grid grid-cols-2 h-full w-full gap-2">
            {/* left side */}
            <div className="grid grid-rows-3 grid-cols-1 gap-2">
                <span className="bg-gray-700 flex" onClick={() => setActiveProject(projects[0])}>
                    <img src="/images/ardour-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
                <span className="bg-gray-700 flex" onClick={() => setActiveProject(projects[1])}>
                    <img src="/images/know-to-cure-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
                <span className="bg-gray-700 flex" onClick={() => setActiveProject(projects[2])}>
                    <img src="/images/auto-mailer-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                </span>
            </div>

            {/* right side */}
            <div className="grid grid-rows-3 grid-cols-1 gap-2">
                <span className="bg-[#6a4df4] row-span-2">
                    <Intro />
                </span>
                <span className="bg-gray-700 flex" onClick={() => setActiveProject(projects[3])}>
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


function ProjectShowCase({ props, setProps }: { props: ProjectProps | undefined, setProps: React.Dispatch<React.SetStateAction<ProjectProps | undefined>> }) {
    const [flip, setFlip] = useState(false);
    const [activeShot, setActiveShot] = useState(0);

    return (
        <div
            className={`h-screen w-screen fixed top-0 left-0 z-200 flex ${props ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300 text-white`}
        >
            <div className="glass-card h-full w-full p-4 relative">
                <div className={`h-full w-full absolute poppins top-0 left-0 p-4 transition-transform duration-700 ease-out
  ${flip ? "z-[5] rotate-y-180" : "z-[10] rotate-y-0"}`}>

                    <div className="h-full w-full flex relative rounded-xl overflow-hidden shadow-xl">

                        {/* Background Poster Image */}
                        <img
                            src={props?.image}
                            alt=""
                            className="h-full w-full object-cover scale-[1.02]"
                        />

                        {/* Close Button */}
                        <button
                            className="w-9 absolute top-3 right-3 z-30 aspect-square bg-primary-purple p-1.5 rounded-xl border border-white/40 backdrop-blur hover:scale-105 transition"
                            onClick={() => setProps(undefined)}
                        >
                            <svg viewBox="0 0 24 24" fill="none">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Gradient Overlay */}
                        <span className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Content Layer */}
                        <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-4 pb-7 z-20">

                            {/* Title */}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                                    {props?.title}
                                </h1>
                                <p className="text-sm opacity-80 mt-1">
                                    {props?.tagline}
                                </p>
                            </div>

                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-2">
                                {props?.techStack.slice(0, 3).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 rounded-xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-2 text-xs hover:bg-white/20 transition"
                                    >
                                        <img
                                            src={tech.icon}
                                            className="w-5 h-5 bg-primary-purple p-1 rounded-md border border-white"
                                        />
                                        {tech.tool}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => setFlip(true)}
                                    className="flex-1 bg-primary-purple hover:bg-purple-600 py-3 rounded-xl font-medium transition active:scale-95 shadow-lg"
                                >
                                    View Details
                                </button>

                                <button
                                    className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center hover:bg-white/30 transition active:scale-95"
                                    onClick={() => ""}
                                >
                                    <img src="/icons/github.svg" className="w-5" />
                                </button>

                            </div>

                        </div>

                    </div>
                </div>


                <div className={`h-full w-full absolute top-0 left-0 p-4 ${flip ? "z-[10] rotate-y-0" : "z-[5] rotate-y-180"}`}>
                    {/* concentrate here chatgpt */}
                    <div className="h-full w-full flex flex-col rounded-xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/30 p-4 gap-4 text-black">

                        {/* HEADER */}
                        <div className="flex items-center justify-between">

                            <div className="text-left">
                                <h2 className="text-xl font-semibold">{props?.title}</h2>
                                <p className="text-xs opacity-70">{props?.category}</p>
                            </div>

                            <button
                                onClick={() => setFlip(false)}
                                className="px-3 py-1 text-xs rounded-full border border-black/20 hover:bg-black/5 transition"
                            >
                                Back
                            </button>

                        </div>

                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-2">
                            {props?.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="p-1 pr-3 text-xs rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-2"
                                >
                                    <img src={tech.icon} alt={tech.icon} className="w-8 aspect-square bg-primary-purple p-1.5 rounded-xl border-2 border-white" />
                                    {tech.tool}
                                </span>
                            ))}
                        </div>

                        {/* DESCRIPTION */}
                        <div className="text-xs leading-relaxed text-black/80 text-left">
                            {props?.description}
                        </div>

                        {/* STATUS BAR */}
                        <div className="flex justify-between text-xs text-black/60">

                            <span>
                                Status:
                                <span className="text-black font-medium ml-1">
                                    {props?.status}
                                </span>
                            </span>

                            <span>
                                Tech:
                                <span className="text-black font-medium ml-1">
                                    {props?.techStack.length}
                                </span>
                            </span>

                        </div>

                        {/* SCREENSHOTS SECTION */}
                        <div className="flex-1 flex flex-col gap-3 overflow-hidden">

                            {/* MAIN IMAGE */}
                            <div className="flex-1 rounded-xl border border-black/10 overflow-hidden bg-black/5">
                                {props?.screenshots[activeShot] ? (
                                    <img
                                        src={props.screenshots[activeShot]}
                                        className="w-full h-full object-cover transition-opacity duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-black/40">
                                        Preview Coming Soon
                                    </div>
                                )}
                            </div>

                            {/* THUMBNAILS */}
                            <div className="flex gap-2 h-20 shrink-0">
                                {props?.screenshots.filter((_, key) => key !== activeShot).map((shot, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveShot(i)}
                                        className={`flex-1 rounded-lg overflow-hidden border transition-all
        ${activeShot === i
                                                ? "border-primary-purple scale-[1.03]"
                                                : "border-black/10 opacity-70 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={shot}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

