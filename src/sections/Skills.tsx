import React, { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "../utils/tools";

export default function Skills() {
    return <section className="min-h-screen w-full flex flex-col overflow-hidden pt-2 relative bg-primary-purple">
        <DecorationCircles />
        <Intro />
        <SkillSet />
        <HeroImage />
    </section>
}

function Intro() {
    return (
        <section className="relative pb-6">
            <div className="max-w-7xl mx-auto pl-6 flex flex-col items-center p-5">
                <p className="text-white font-bold lg:text-lg mb-1 lg:mb-4">
                    My technical
                </p>

                <h1 className="text-4xl tracking-[3px] sm:text-6xl md:text-8xl font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                    SKILLS
                </h1>

                <p className="max-w-xs text-xs text-white leading-relaxed">
                    I bring 4+ years of hands-on experience building industry-relevant systems using modern backend frameworks, frontend technologies, and data-driven architectures.
                </p>

            </div>
        </section>
    );
}


function HeroImage() {
    return <section className="self-center justify-self-start w-[40%] pt-8 relative lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-look-up.png" alt="leon.png" className="h-full w-full object-cover rotate-y-180" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] bg-white -z-1 rounded-full"></span>
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation anim-delay-1 -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation anim-delay-2 -z-1 rounded-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-primary-purple glass-morph" />
    </section>
}

function DecorationCircles() {
    return <>
        {/* <span className="absolute -top-[10%] -right-[30%] w-[300px] rounded-full aspect-square bg-[#1a2dc4]" /> */}
    </>
}

function SkillSet() {

    interface StyleProps extends HTMLAttributes<HTMLDivElement> {
        "--spin-time": string
    }

    const Orbit = ({
        children,
        className,
        style
    }: {
        children: React.ReactNode;
        className: string;
        style?: StyleProps;
    }) => {
        const ref = useRef<HTMLDivElement>(null);
        const [radius, setRadius] = useState(0);

        const items = React.Children.toArray(children);
        const count = items.length;

        useEffect(() => {
            const updateRadius = () => {
                if (!ref.current) return;

                const size = ref.current.getBoundingClientRect().width;
                setRadius(size / 2);
            }

            updateRadius();
            window.addEventListener("resize", updateRadius)

            return () => {
                window.removeEventListener("resize", updateRadius)
            }
        }, []);

        return (
            <div
                ref={ref}
                className={cn("relative", className)}
                style={style}
            >
                {items.map((child, index) => {
                    const angle = (2 * Math.PI * index) / count;

                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                            }}
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        );
    };


    return <section className="flex-1 relative w-full flex justify-center min-h-[300px]">
        <div className="absolute h-full aspect-square flex">
            <Orbit className="h-full w-full border-2 border-white rounded-full rotate-full " style={{ "--spin-time": "16s" }}>
                <img src="/icons/github.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/docker.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/android-studio.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/aws.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/python.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/java.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
            </Orbit>
        </div>

        <div className="absolute h-full p-12 aspect-square flex">
            <Orbit className="h-full w-full border-2 border-white rounded-full rotate-full" style={{ "--spin-time": "12s" }}>
                <img src="/icons/node-js.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/firebase.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/websocket.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/django.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
            </Orbit>
        </div>

        <div className="absolute h-full p-24 aspect-square flex">
            <Orbit className="h-full w-full border-2 border-white rounded-full rotate-full" style={{ "--spin-time": "8s" }}>
                <img src="/icons/flutter.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
                <img src="/icons/react.svg" alt="github" className="w-10 aspect-square bg-primary-purple p-1.5 rounded-full border-2 border-white" />
            </Orbit>
        </div>
    </section>
}