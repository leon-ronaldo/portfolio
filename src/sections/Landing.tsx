import Navbar from "../components/Navbar";
import { Dribbble, Github, Linkedin } from "lucide-react";
import { cn } from "../utils/tools";

export default function Landing() {
    return <main className="flex flex-col min-h-screen w-screen items-center overflow-hidden">
        <Navbar />
        <section className="flex lg:hidden flex-col justify-center w-full h-full pt-10">
            <div className="flex">
                <Intro />
                <HeroImage />
            </div>

            <SkillsShowcase />
            <ContactBar />
        </section>
        <section className="w-full hidden lg:flex items-stretch h-full">
            <Intro />
            <HeroImage />
            <SkillsShowcase />
            <ContactBar />
        </section>
    </main>
}

function Intro() {
    return (
        <section className="flex-1 self-center relative">
            <div className="max-w-7xl mx-auto pl-6 flex flex-col items-start text-left">
                <p className="text-gray-600 lg:text-lg mb-1 lg:mb-4">
                    Hello, I'm
                </p>

                <h1 className="text-4xl tracking-[3px] sm:text-6xl md:text-8xl font-extrabold text-gray-800 leading-none mb-6 text-shadow">
                    LEON
                </h1>

                <p className="max-w-xl text-xs text-gray-500 leading-relaxed">
                    Designer with 12 years experience sketching, building and coaching.
                    I love fun UI, collaboration and making helpful products that connect people.
                </p>

            </div>
        </section>
    );
}

function HeroImage() {
    return <section className="flex-[1.5] h-full self-end relative max-w-85 lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-landing.png" alt="leon.png" className="h-full w-full object-cover" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] bg-white -z-1 rounded-full"></span>
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-1 -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-2 -z-1 rounded-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-background-color glass-morph" />
    </section>
}

function Divider() {
    return <div className="flex self-center items-center">
        <span className="h-1 w-1 bg-black rounded-full" />
        <span className="h-1 w-8 bg-black rounded-full" />
        <span className="h-1 w-1 bg-black rounded-full" />
    </div>
}

function SkillCard({ image, title, flexible, cardClassName, titleClassName }: { image: string, title: string, flexible?: boolean, cardClassName?: string, titleClassName?: string }) {
    return <div className={cn(`flex flex-col ${flexible ? "flex-1" : "w-48"}`, cardClassName)}>
        <div className=" bg-white rounded-3xl shadow-xl p-2">
            <img
                src={image}
                className="w-full rounded-2xl"
                alt={image}
            />
        </div>

        <Divider />

        <div className={cn("bg-white text-xs shadow-md w-full rounded-2xl p-6", titleClassName)}>
            {title}
        </div>
    </div>
}

function SkillsShowcase() {
    return <>
        <section className="hidden lg:flex flex-1 w-fit items-center justify-stretch relative h-full">
            <div className="w-full pr-6 pl-4 xl:pl-22 flex flex-col gap-12">
                {/* Left Top Card */}
                <SkillCard title="UI - UX Developer" image="/images/ui-ux.webp" cardClassName="w-34 xl:w-44" titleClassName="text-[9px] py-4 xl:text-xs" />

                {/* Center 3D */}
                <SkillCard title="3D Designer" image="/images/3d-modeling.webp" cardClassName="w-34 self-end xl:w-44" titleClassName="text-[9px] py-4 xl:text-xs" />

                {/* Left Bottom Card */}
                <SkillCard title="React JS Developer" image="/images/web.png" cardClassName="w-34 xl:w-44" titleClassName="text-[9px] py-4 xl:text-xs" />
            </div>
        </section>

        <section className="flex lg:hidden flex-col w-full gap-2 px-6 -mt-4 z-20">
            <Divider />

            {/* first card */}
            <div className=" bg-white rounded-3xl p-2 h-18 flex sm:hidden items-center text-sm">
                <img
                    src="/images/ui-ux.webp"
                    className="w-16 rounded-2xl h-full object-cover"
                    alt=""
                />
                <span className="flex-1 pl-3 text-[9px] text-left">
                    <p className="text-xs font-medium"> UI - UX Developer </p>
                    <p> Delivered 20+ projects </p>
                </span>
            </div>

            {/* second card */}
            <div className=" bg-white rounded-3xl p-2 h-18 flex sm:hidden items-center text-sm">
                <img
                    src="/images/3d-modeling.webp"
                    className="w-16 rounded-2xl h-full object-cover"
                    alt=""
                />
                <span className="flex-1 pl-3 text-[9px] text-left">
                    <p className="text-xs font-medium"> 3D Designer </p>
                    <p> Sold 5 game assets </p>
                </span>
            </div>

            {/* third card */}
            <div className=" bg-white rounded-3xl p-2 h-18 flex sm:hidden items-center text-sm">
                <img
                    src="/images/web.png"
                    className="w-16 rounded-2xl h-full object-cover"
                    alt=""
                />
                <span className="flex-1 pl-3 text-[9px] text-left">
                    <p className="text-xs font-medium"> React JS Developer </p>
                    <p> Expertise with experience </p>
                </span>
            </div>

            {/* collage cards */}
            <div className="hidden sm:grid grid-cols-3 gap-2">
                <SkillCard title="UI - UX Developer" image="/images/ui-ux.webp" flexible />
                <SkillCard title="3D Designer" image="/images/3d-modeling.webp" flexible />
                <SkillCard title="React JS Developer" image="/images/web.png" flexible />
            </div>
        </section>
    </>;
}

function ContactBar() {
    return (
        <div className="lg:fixed left-0 bottom-0 w-full flex justify-center">
            <div className="flex justify-start max-w-360 w-full">
                <div className="flex flex-col items-center gap-4 mt-6 pb-8 px-6 w-full lg:w-fit">
                    <span className="lg:hidden">
                        <Divider />
                    </span>

                    {/* Email pill */}
                    <div className="bg-white w-full rounded-full px-6 py-3 text-sm text-gray-700">
                        ronaldoleon029@gmail.com
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-4">
                        {/* Mail */}
                        <a
                            href="mailto:morgan@email.com"
                            className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center hover:scale-105 transition"
                        >
                            <Linkedin fill="white" className="text-white w-5 h-5" />
                        </a>

                        {/* Twitter */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-105 transition"
                        >
                            <Github fill="#2b7fff" className="text-blue-500 w-5 h-5" />
                        </a>

                        {/* Behance */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:scale-105 transition"
                        >
                            <Dribbble fill="#ffabe7" className="text-[#bc569f] w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
