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
    screenshots: string[],
    hash?: string
}


export default function Projects() {

    const [activeProject, setActiveProject] = useState<ProjectProps>()
    const [screenShotImage, setScreenShotImage] = useState<string>()

    const [classNames, setClassNames] = useState<string[]>([
        "aspect-3/4 max-h-[400px] w-1/3",
        "aspect-3/4 max-h-[600px] w-3/4",
        "aspect-3/4 max-h-[400px] w-1/2",
        "aspect-3/4 max-h-[400px] w-1/3",
    ])

    const projects: ProjectProps[] = [
        {
            id: "ardour-ai",
            title: "Ardour AI",
            tagline: "Human-like Social AI Platform",
            description:
                "Ardour AI is a next-generation social platform where users interact with human-like AI characters that have memory, personality, and evolving relationships.",
            techStack: [
                { tool: "React", icon: "/icons/react.svg" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "MongoDB", icon: "/icons/mongodb.svg" },
                { tool: "AI APIs", icon: "/icons/ai.png" },
                { tool: "WebSocket", icon: "/icons/websocket.svg" },
                { tool: "Cloud Services", icon: "/icons/cloud.svg" }
            ],
            category: "AI / Social Platform",
            image: "/images/ardour-illustration.png",
            status: "In Development",
            screenshots: [
                "ardour-screen-shot-1.jpeg",
                "ardour-screen-shot-2.jpeg",
                "ardour-screen-shot-3.jpeg"
            ],
            hash: "@ardour.ai"
        },

        {
            id: "know-to-cure",
            title: "Know To Cure",
            tagline: "Medical Report Simplification Platform",
            description:
                "Know To Cure is a smart healthcare assistant that analyzes medical reports and prescriptions.",
            techStack: [
                { tool: "Python", icon: "/icons/python.svg" },
                { tool: "AI Models", icon: "/icons/ai.png" },
                { tool: "Django", icon: "/icons/django.svg" },
                { tool: "REST API", icon: "/icons/api.svg" },
                { tool: "Document Processing", icon: "/icons/document.svg" }
            ],
            category: "Health Tech / AI",
            image: "/images/know-to-cure-illustration.png",
            status: "Prototype",
            screenshots: [],
            hash: "@knowtocure"
        },

        {
            id: "auto-mailer",
            title: "Auto Mailer",
            tagline: "Secure Email Automation Platform",
            description:
                "Auto Mailer allows users to send automated and bulk emails directly from their own email accounts.",
            techStack: [
                { tool: "React", icon: "/icons/react.svg" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "OAuth 2.0", icon: "/icons/oauth.svg" },
                { tool: "MongoDB", icon: "/icons/mongodb.svg" },
                { tool: "API Integration", icon: "/icons/api.svg" }
            ],
            category: "Automation / SaaS",
            image: "/images/auto-mailer-illustration.png",
            status: "Working MVP",
            screenshots: [
                "auto-mailer-screen-shot-1.jpeg",
                "auto-mailer-screen-shot-2.jpeg",
                "auto-mailer-screen-shot-3.jpeg",
                "auto-mailer-screen-shot-4.jpeg"
            ],
            hash: "@automailer"
        },

        {
            id: "echo-draft",
            title: "Echo Draft",
            tagline: "AI Writing Assistant",
            description:
                "Echo Draft is an AI-powered content writing platform.",
            techStack: [
                { tool: "React", icon: "/icons/react.svg" },
                { tool: "AI APIs", icon: "/icons/ai.png" },
                { tool: "Node.js", icon: "/icons/node-js.svg" },
                { tool: "Cloud Storage", icon: "/icons/cloud.svg" }
            ],
            category: "AI / Productivity",
            image: "/images/echo-draft-illustration.png",
            status: "In Development",
            screenshots: [
                "echo-draft-screen-shot-1.jpeg",
                "echo-draft-screen-shot-2.jpeg",
                "echo-draft-screen-shot-3.png"
            ],
            hash: "@echodraft"
        }
    ];


    const substitute = (index: number) => {

        const BIG_CLASS = "aspect-3/4 max-h-[600px] w-3/4"

        setClassNames(prev => {
            const idx = prev.indexOf(BIG_CLASS);
            prev[idx] = prev[index];
            prev[index] = BIG_CLASS;
            return [...prev];
        })
    }


    return <section id="projects">
        {/* mobile */}
        <div className="min-h-screen w-full flex sm:hidden gap-1 overflow-hidden relative p-2">
            <ProjectShowCase props={activeProject} setProps={setActiveProject} />
            <div className="grid grid-cols-2 h-full w-full gap-2">
                {/* left side */}
                <div className="grid grid-rows-3 grid-cols-1 gap-2">
                    <span className="bg-gray-700 flex max-h-[500px]" onClick={() => setActiveProject(projects[0])}>
                        <img src="/images/ardour-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                    </span>
                    <span className="bg-gray-700 flex max-h-[500px]" onClick={() => setActiveProject(projects[1])}>
                        <img src="/images/know-to-cure-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                    </span>
                    <span className="bg-gray-700 flex max-h-[500px]" onClick={() => setActiveProject(projects[2])}>
                        <img src="/images/auto-mailer-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                    </span>
                </div>

                {/* right side */}
                <div className="grid grid-rows-3 grid-cols-1 gap-2">
                    <span className="bg-[#6a4df4] row-span-2">
                        <Intro />
                    </span>
                    <span className="bg-gray-700 flex max-h-[500px]" onClick={() => setActiveProject(projects[3])}>
                        <img src="/images/echo-draft-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover" />
                    </span>
                </div>
            </div>
        </div>

        {/* desktop */}
        <div className="min-h-screen w-full hidden sm:flex flex-col gap-2 relative p-2">
            <ProjectScreenShot landscapeView={activeProject?.title === "Echo Draft"} setImage={setScreenShotImage} image={screenShotImage} />

            <div className="flex w-full flex-col lg:flex-row justify-between items-start p-4 gap-10">
                {/* LEFT SIDE (STATIC) */}
                <div className="flex flex-col items-start">
                    <p className="text-gray-800 font-bold lg:text-lg mb-1 lg:mb-2">
                        My personal
                    </p>

                    <p className="text-6xl xl:text-8xl tracking-[3px] font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                        PROJECTS
                    </p>

                    <p className="max-w-xs text-xs text-gray-600 text-left leading-relaxed">
                        I bring 4+ years of hands-on experience building industry-relevant systems using modern backend frameworks, frontend technologies, and data-driven architectures.
                    </p>
                </div>


                {/* RIGHT SIDE (ACTIVE PROJECT) */}
                {activeProject && (
                    <div className="max-w-sm flex flex-col text-right self-end">

                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                            {activeProject.category}
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {activeProject.title}
                        </h2>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            {activeProject.description}
                        </p>

                        <span className="mt-2 text-xs text-gray-500">
                            {activeProject.techStack.map((tech, index) => (
                                <span key={index} className="mr-2 font-bold">
                                    #{tech.tool}
                                </span>
                            ))}
                        </span>

                        {
                            activeProject.screenshots.length !== 0 && <span className="text-gray-600 underline mt-4 text-xs text-primary-purple">
                                Click on the images to view it
                            </span>
                        }

                        <span className="flex gap-2 justify-end mt-4 mb-8">
                            {activeProject.screenshots.map((screenshot, index) => (
                                <img onClick={() => setScreenShotImage(`/images/${screenshot}`)} key={index} src={`/images/${screenshot}`} alt={`${activeProject.title}-screenshot-${index + 1}`} className="cursor-pointer hover:scale-[1.05] aspect-square w-50 shadow-2xl shadow-gray-400 object-cover rounded-2xl overflow-clip" />
                            ))}
                        </span>
                    </div>
                )}

            </div>


            <div className="flex-1 flex gap-4 items-end max-w-[1120px] mx-auto">
                <span className={`flex flex-col items-start hover:scale-[1.05] cursor-pointer ${classNames[0]} `} onClick={() => { substitute(0); setActiveProject(projects[0]); }}>
                    <p className="text-xs"> @ardour.ai </p>
                    <img src="/images/ardour-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover rounded-2xl overflow-clip" />
                </span>
                <span className={`flex flex-col items-start hover:scale-[1.05] cursor-pointer ${classNames[1]} `} onClick={() => { substitute(1); setActiveProject(projects[1]); }}>
                    <p className="text-xs"> @knowtocure </p>
                    <img src="/images/know-to-cure-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover rounded-2xl overflow-clip" />
                </span>
                <span className={`flex flex-col items-start hover:scale-[1.05] cursor-pointer ${classNames[2]} `} onClick={() => { substitute(2); setActiveProject(projects[2]); }}>
                    <p className="text-xs"> @auto-mailer </p>
                    <img src="/images/auto-mailer-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover rounded-2xl overflow-clip" />
                </span>
                <span className={`flex flex-col items-start hover:scale-[1.05] cursor-pointer ${classNames[3]} `} onClick={() => { substitute(3); setActiveProject(projects[3]); }}>
                    <p className="text-xs"> @echo-draft </p>
                    <img src="/images/echo-draft-illustration.png" alt="ardour-illustration" className="h-full w-full object-cover rounded-2xl overflow-clip" />
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
                        "PROJECTS".split("").map((char) => <h1 key={char} className="text-4xl tracking-[3px] font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                            {char}
                        </h1>)
                    }
                </span>
                <HeroImage />
            </div>

            <p className="max-w-xs text-xs text-white text-left leading-relaxed">
                Developed and delivered multiple real-world projects focused on scalable system design, clean architecture, and efficient user experiences using modern frontend and backend technologies.
            </p>

            <p className="text-xs font-bold text-white text-left mt-4">
                [click on an image to view project]
            </p>
        </div>
    );
}


function HeroImage() {
    return <section className="z-10 flex-1 self-end flex justify-center relative lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-hands-fold.png" alt="leon.png" className="h-full object-cover w-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-[#6a4df4] glass-morph" />
    </section>
}


function ProjectShowCase({ props, setProps }: { props: ProjectProps | undefined, setProps: React.Dispatch<React.SetStateAction<ProjectProps | undefined>> }) {
    const [flip, setFlip] = useState(false);
    const [activeShot, setActiveShot] = useState(0);

    return (
        <div
            className={`h-screen w-screen fixed top-0 left-0 z-99999 flex ${props ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300 text-white`}
        >
            <div className="glass-card h-full w-full p-4 relative">
                <div className={`h-full w-full max-w-[450px] absolute poppins top-0 left-1/2 -translate-x-1/2 p-4 transition-transform duration-700 ease-out
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


                <div className={`h-full w-full max-w-[450px] absolute top-0 left-1/2 -translate-x-1/2 p-4 ${flip ? "z-[10] rotate-y-0" : "z-[5] rotate-y-180"}`}>
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
                                        src={`images/${props.screenshots[activeShot]}`}
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
                                            src={`images/${shot}`}
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

function ProjectScreenShot({ image, setImage, landscapeView }: { landscapeView?: boolean; image: string | undefined, setImage: React.Dispatch<React.SetStateAction<string | undefined>> }) {
    return (
        <div
            className={`h-screen w-screen fixed top-0 left-0 z-99999 flex ${image ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300 text-white`}
        >
            <div className="glass-card h-full w-full p-4 relative">
                <div className={`h-full w-full ${landscapeView ? "max-w-[700px] lg:max-w-[900px] xl:max-w-[1300px]" : "max-w-[450px]"} absolute poppins top-0 left-1/2 -translate-x-1/2 p-4 transition-transform duration-700 ease-out`}>

                    <div className="h-full w-full flex relative rounded-xl overflow-hidden shadow-xl">

                        {/* Background Poster Image */}
                        <img
                            src={image}
                            alt={image}
                            className="h-full w-full object-cover scale-[1.02]"
                        />

                        {/* Close Button */}
                        <button
                            className="w-9 absolute top-3 right-3 z-30 aspect-square bg-primary-purple p-1.5 rounded-xl border border-white/40 backdrop-blur hover:scale-105 transition"
                            onClick={() => setImage(undefined)}
                        >
                            <svg viewBox="0 0 24 24" fill="none">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
