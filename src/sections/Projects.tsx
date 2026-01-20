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
    return (
        <div
            className={`h-screen w-screen fixed top-0 left-0 z-200 flex ${props ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300 poppins text-white`}
        >
            <div className="glass-card h-full w-full flex p-4">
                <div className="h-full w-full flex relative rounded-xl overflow-hidden">

                    {/* Background Poster Image */}
                    <img
                        src={props?.image}
                        alt=""
                        className="h-full w-full object-cover"
                    />

                    {/* close button */}
                    <button className="w-8 absolute top-2 right-2 aspect-square bg-primary-purple p-1 rounded-lg border-2 border-white" onClick={() => setProps(undefined)}>
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Close</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd"> <g id="Close"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="16.9999" y1="7" x2="7.00001" y2="16.9999" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> <line x1="7.00006" y1="7" x2="17" y2="16.9999" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
                    </button>

                    {/* Gradient Overlay */}
                    <span className="absolute pointer-events-none inset-0 bg-linear-to-b from-transparent via-black/40 to-primary-purple" />

                    {/* Content Layer */}
                    <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-4 pb-6">

                        {/* Title + Tagline */}
                        <div>
                            <h1 className="text-4xl font-semibold text-left">{props?.title}</h1>
                            <p className="text-sm text-left">{props?.tagline}</p>
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-2">
                            {props?.techStack.slice(0, 3).map((tech, i) => (
                                <span
                                    key={i}
                                    className="p-1 pr-3 text-xs rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center gap-2"
                                >
                                    <img src={tech.icon} alt={tech.icon} className="w-8 aspect-square bg-primary-purple p-1.5 rounded-xl border-2 border-white" />
                                    {tech.tool}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">

                            <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur py-3 rounded-2xl font-medium transition">
                                View Project
                            </button>

                            <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                                <img src="/icons/github.svg" className="w-5" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

