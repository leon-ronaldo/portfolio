export default function Skills() {
    return <section className="min-h-screen w-full flex flex-col overflow-hidden pt-2 relative bg-[#6a4df4]">
        <DecorationCircles />
        <Intro />
        <SkillSet />
        <HeroImage />
    </section>
}

function Intro() {
    return (
        <section className="relative">
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
    return <section className="self-center justify-self-start w-1/2 relative lg:h-[90%] lg:max-w-full xl:flex-1">
        <img src="/images/leon-look-up.png" alt="leon.png" className="h-full w-full object-cover rotate-y-180" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] bg-white -z-1 rounded-full"></span>
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation anim-delay-1 -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[11%] border-3 border-white wifi-float-animation anim-delay-2 -z-1 rounded-full" />
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-[#6a4df4] glass-morph" />
    </section>
}

function DecorationCircles() {
    return <>
        {/* <span className="absolute -top-[10%] -right-[30%] w-[300px] rounded-full aspect-square bg-[#1a2dc4]" /> */}
    </>
}

function SkillSet() {
    return <section className="flex-1 relative">
        {/* <img src="/images/github.png" alt="github" className="w-20 aspect-square" /> */}
    </section>
}