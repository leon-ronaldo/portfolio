import React from 'react';
import { Github, } from 'lucide-react';

const RetroFooter: React.FC = () => {
    return (
        <div className="z-9999 w-full font-sans text-gray-900 overflow-hidden mt-12">
            {/* TOP SECTION: Blue GRID */}
            <div className="relative bg-primary-purple pt-28 pb-32 border-b-0 border-black overflow-visible font-sans">
                {/* Grid Background Pattern */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 2px, transparent 2px), linear-gradient(to bottom, #000 2px, transparent 2px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Floating Elements Container */}
                <div className="relative w-full px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12 z-10 inter">
                    {/* LEFT ELEMENT: "Status" ticket */}
                    {/* LEFT ELEMENT: Availability Badge */}
                    <div className='w-full sm:w-1/4 flex justify-center'>
                        <div className="bg-green-400 border-2 border-black rounded-xl px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></span>
                                <span className="font-semibold text-black text-sm">Open to Opportunities</span>
                            </div>
                        </div>
                    </div>


                    {/* CENTER BUTTON: "Let's Connect" */}
                    <div className='w-full sm:w-1/2 flex justify-center'>
                        <div className="relative group">
                            <a href="mailto:hello@example.com" className="relative block">
                                {/* The Button */}
                                <div className="bg-[#FFC107] border-[3px] border-black rounded-full px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <span className="font-hand text-4xl text-black relative top-1">Let's Connect</span>
                                    {/* Underline decorative */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-black rounded-full opacity-80"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT ELEMENT: Resume Button */}
                    <div className='w-full sm:w-1/4 flex justify-center'>
                        <a href="https://drive.google.com/file/d/1ZUMVPKCtlzAVnzQ7zqaRz6hxTzkpda6f/view?usp=sharing" target="_blank" className="group">
                            <div className="bg-blue-500 border-2 border-black rounded-xl px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex flex-col items-center text-white">
                                    <span className="font-bold text-lg">Download Resume</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* SERRATED BORDER SEPARATOR */}
                {/* Replaces the wavy border with a sawtooth pattern, cutting into the red background with the cream color of the section below */}
                <div className="absolute bottom-[-1px] left-0 w-full leading-none z-20 text-background-color">
                    <svg className="w-full h-8" viewBox="0 0 1200 20" preserveAspectRatio="none">
                        <path d="M0,0 L20,20 L40,0 L60,20 L80,0 L100,20 L120,0 L140,20 L160,0 L180,20 L200,0 L220,20 L240,0 L260,20 L280,0 L300,20 L320,0 L340,20 L360,0 L380,20 L400,0 L420,20 L440,0 L460,20 L480,0 L500,20 L520,0 L540,20 L560,0 L580,20 L600,0 L620,20 L640,0 L660,20 L680,0 L700,20 L720,0 L740,20 L760,0 L780,20 L800,0 L820,20 L840,0 L860,20 L880,0 L900,20 L920,0 L940,20 L960,0 L980,20 L1000,0 L1020,20 L1040,0 L1060,20 L1080,0 L1100,20 L1120,0 L1140,20 L1160,0 L1180,20 L1200,0 V20 H0 Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="absolute top-[-1px] rotate-x-180 left-0 w-full leading-none z-20 text-background-color">
                    <svg className="w-full h-8" viewBox="0 0 1200 20" preserveAspectRatio="none">
                        <path d="M0,0 L20,20 L40,0 L60,20 L80,0 L100,20 L120,0 L140,20 L160,0 L180,20 L200,0 L220,20 L240,0 L260,20 L280,0 L300,20 L320,0 L340,20 L360,0 L380,20 L400,0 L420,20 L440,0 L460,20 L480,0 L500,20 L520,0 L540,20 L560,0 L580,20 L600,0 L620,20 L640,0 L660,20 L680,0 L700,20 L720,0 L740,20 L760,0 L780,20 L800,0 L820,20 L840,0 L860,20 L880,0 L900,20 L920,0 L940,20 L960,0 L980,20 L1000,0 L1020,20 L1040,0 L1060,20 L1080,0 L1100,20 L1120,0 L1140,20 L1160,0 L1180,20 L1200,0 V20 H0 Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* BOTTOM SECTION: CREAM CONTENT */}
            <div className="px-6 pb-12 pt-12 md:pt-4 bg-background-color">
                <div className="max-w-6xl mx-auto">

                    {/* Top Text Block */}
                    <div className="flex inter flex-col md:items-end mb-12 mt-4 text-center md:text-right">
                        <p className="font-bold text-lg md:text-xl max-w-xl leading-relaxed border-2 border-transparent hover:border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-xl transition-all duration-300 cursor-default transform md:translate-x-4">
                            I build end-to-end digital solutions across <span className='text-primary-purple'>mobile, web, backend systems,</span> and <span className='text-primary-purple'>AI-driven architectures,</span> with a strong focus on performance, scalability, and real-world usability.
                        </p>
                    </div>

                    {/* Bottom Logo & Socials Row */}
                    <div className="flex  md:flex-row justify-between gap-8 border-t-2 border-black pt-14">

                        {/* BIG LOGO */}
                        <div className="flex items-baseline gap-2">
                            <div className="text-5xl font-bold text-gray-900 flex justify-start">
                                leon<span className="text-blue-500">.</span>
                            </div>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex gap-2">
                            <a
                                href="https://www.linkedin.com/in/leon-ronaldo-s/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center hover:scale-105 transition"
                            >
                                <img src="/icons/linkedin-dark.svg" alt="" className="w-full h-full" />
                            </a>

                            <a
                                href="https://github.com/leon-ronaldo" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-12 rounded-2xl  flex items-center justify-center hover:scale-105 transition"
                            >
                                <Github fill="#1e2939" className="text-[#1e2939] w-full h-full" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RetroFooter;