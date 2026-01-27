// import { cn } from "../utils/tools";

export default function About() {
    return <section className="min-h-screen w-full flex flex-col overflow-hidden">
        <Intro />
        <Servies />
        <HeroImage />
    </section>
}

function Intro() {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto pl-6 flex flex-col items-end text-right p-5">
                <p className="text-gray-600 lg:text-lg mb-1 lg:mb-4">
                    What I
                </p>

                <h1 className="text-4xl tracking-[3px] sm:text-6xl md:text-8xl font-extrabold text-gray-800 leading-none mb-3 text-shadow">
                    WORK
                </h1>

                <p className="max-w-xs pl-10 text-xs text-gray-500 leading-relaxed">
                    I build animated, responsive interfaces and robust web, mobile applications, with hands on experience with In-Demand skills. Here's what I do.
                </p>

            </div>
        </section>
    );
}

function HeroImage() {
    return <section className="self-start justify-self-start pl-5 w-1/2 relative lg:max-h-[50vh] lg:max-w-full xl:flex-1">
        <img src="/images/leon-look-up.png" alt="leon.png" className="h-full w-full object-contain rotate-y-180 aspect-2/3" />
        {/* <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] bg-white -z-1 rounded-full"></span>
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-1 -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-2 -z-1 rounded-full" /> */}
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-background-color glass-morph" />
    </section>
}

// function ServiceCard({ image, cardClassName }: { image: string, cardClassName?: string }) {
//     return <div className={cn("p-2 w-34 flex flex-col bg-white rounded-2xl", cardClassName)}>
//         <img src={image} alt={image} className="w-full aspect-square rounded-2xl object-cover" />
//         <p className="mt-3 text-[9px]"> Frontend </p>
//     </div>
// }

function Servies() {
    return <section className="flex-1 w-full flex flex-col">
        {/* <ServiceCard image="/images/frontend.png" /> */}
    </section>
}