import Navbar from "../components/Navbar";

export default function Landing() {
    return <main className="flex h-screen w-screen items-center">
        <Navbar />
        <section className="w-full flex items-stretch h-full">
            <Intro />
            <HeroImage />
            <SkillsShowcase />
        </section>
    </main>
}

function Intro() {
    return (
        <section className="flex-1 py-24 self-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
                <p className="text-gray-600 text-lg mb-4">
                    Hello, I'm
                </p>

                <h1 className="text-7xl md:text-8xl font-extrabold text-gray-800 tracking-tight leading-none mb-6 text-shadow">
                    LEON
                </h1>

                <p className="max-w-xl text-gray-500 leading-relaxed">
                    Designer with 12 years experience sketching, building and coaching.
                    I love fun UI, collaboration and making helpful products that connect people.
                </p>

            </div>
        </section>
    );
}

function HeroImage() {
    return <section className="w-[40%] pt-32">
        <img src="/images/leon-landing.png" alt="leon.png" className="h-full w-full object-cover" />
    </section>
}

export function SkillsShowcase() {
    return (
        <section className="relative w-full h-full py-32 overflow-hidden flex-1">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">

                {/* Left Top Card */}
                <div className="flex flex-col w-48">
                    <div className=" bg-white rounded-3xl shadow-xl p-2">
                        <img
                            src="/images/ui-ux.webp"
                            className="w-full rounded-2xl"
                            alt=""
                        />
                    </div>

                    <div className="flex self-center items-center">
                        <span className="h-1 w-1 bg-black rounded-full" />
                        <span className="h-1 w-8 bg-black rounded-full" />
                        <span className="h-1 w-1 bg-black rounded-full" />
                    </div>

                    <div className="bg-white text-xs shadow-md w-full rounded-2xl px-6 py-6">
                        UI - UX Developer
                    </div>
                </div>

                {/* Center 3D */}
                <div className="flex flex-col w-48 self-end">
                    <div className="flex justify-center">
                        <img
                            src="/images/3d-modeling.webp"
                            className="w-[260px] rounded-3xl"
                            alt=""
                        />
                    </div>

                    <div className="flex self-center items-center">
                        <span className="h-1 w-1 bg-black rounded-full" />
                        <span className="h-1 w-8 bg-black rounded-full" />
                        <span className="h-1 w-1 bg-black rounded-full" />
                    </div>

                    <div className="bg-white text-xs shadow-md w-full rounded-2xl px-6 py-6">
                        3D Designer
                    </div>
                </div>

                {/* Left Bottom Card */}
                <div className="flex flex-col w-48">
                    <div className=" bg-white rounded-3xl shadow-xl p-2">
                        <img
                            src="/images/web.png"
                            className="w-full rounded-2xl"
                            alt=""
                        />
                    </div>

                    <div className="flex self-center items-center">
                        <span className="h-1 w-1 bg-black rounded-full" />
                        <span className="h-1 w-8 bg-black rounded-full" />
                        <span className="h-1 w-1 bg-black rounded-full" />
                    </div>

                    <div className="bg-white text-xs shadow-md w-full rounded-2xl px-6 py-6">
                        React JS Developer
                    </div>
                </div>

            </div>
        </section>
    );
}
