// import { cn } from "../utils/tools";

export default function About() {
    return <section className="min-h-screen w-full flex flex-col overflow-hidden" id="about">
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
        <img src="/images/leon-idea.png" alt="leon.png" className="h-full w-full object-contain rotate-y-180 aspect-3/4 sm:aspect-9/7 lg:aspect-9/5" />
        {/* <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] bg-white -z-1 rounded-full"></span>
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-1 -z-1 rounded-full" />
        <span className="aspect-square w-[120%] absolute -bottom-5 -left-[10%] border-3 border-white wifi-float-animation anim-delay-2 -z-1 rounded-full" /> */}
        <span className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-background-color glass-morph" />
    </section>
}

// Interface for the data
interface StepData {
    number: string;
    title: string;
    description: string;
    image: string;
}

const steps: StepData[] = [
    {
        number: '01',
        title: 'Discover',
        description: 'Understanding your goals, users, and challenges through research and strategy.',
        image: '/icons/react.svg',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Transforming insights into intuitive, beautiful, and functional product experiences.',
        image: '/icons/api.svg',
    },
    {
        number: '03',
        title: 'Deliver',
        description: 'Testing, refining, and launching the final product with clarity and precision.',
        image: '/icons/cloud.svg',
    },
    {
        number: '04',
        title: 'Scale',
        description: 'Expanding the solution to handle growth and new market opportunities.',
        image: '/icons/ai.png',
    },
    {
        number: '05',
        title: 'Evolve',
        description: 'Continuous improvement driven by data analytics and user feedback.',
        image: '/icons/3d-tools.svg',
    },
];

const ProcessFlow: React.FC = () => {
    return (
        <div className="flex items-center justify-center p-8 font-sans overflow-x-hidden">
            {/* Main Container - Increased max-width for 5 cards */}
            <div className="relative w-full max-w-[90rem]">

                {/* SVG Connectors Layer - Hidden on mobile, visible on lg screens */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">

                    {/* Logic: We need 4 connectors for 5 cards.
                       We position them using percentages (approx 20% per card section).
                    */}

                    {/* Connector 1 (01 -> 02): Simple Arc Up */}
                    <svg className="absolute left-[13%] top-[15%] w-[15%] h-[100px] z-0 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <path d="M 0,50 Q 50,-20 100,20" fill="none" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 2" />
                        <circle cx="0" cy="50" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="100" cy="20" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                    </svg>

                    {/* Connector 2 (02 -> 03): Loop Down */}
                    <svg className="absolute left-[33%] top-[25%] w-[15%] h-[120px] z-0 overflow-visible" viewBox="0 0 100 80" preserveAspectRatio="none">
                        <path d="M 0,10 C 30,10 20,80 50,80 C 80,80 70,30 100,50" fill="none" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="0" cy="10" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="100" cy="50" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                    </svg>

                    {/* Connector 3 (03 -> 04): Simple Arc Up */}
                    <svg className="absolute left-[53%] top-[15%] w-[15%] h-[100px] z-0 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <path d="M 0,50 Q 50,-20 100,20" fill="none" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="0" cy="50" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="100" cy="20" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                    </svg>

                    {/* Connector 4 (04 -> 05): Loop Down */}
                    <svg className="absolute left-[73%] top-[25%] w-[15%] h-[120px] z-0 overflow-visible" viewBox="0 0 100 80" preserveAspectRatio="none">
                        <path d="M 0,10 C 30,10 20,80 50,80 C 80,80 70,30 100,50" fill="none" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 2" />
                        <circle cx="0" cy="10" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                        <circle cx="100" cy="50" r="3" fill="white" stroke="#84cc16" strokeWidth="2" />
                    </svg>
                </div>

                {/* Cards Grid - 5 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                    {steps.map((step, index) => {
                        // Logic for staggering:
                        // Even index (0, 2, 4) -> Card goes Low
                        // Odd index (1, 3)    -> Card goes High
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={step.number}
                                className={`flex justify-center lg:items-start transition-all duration-500
                                    ${isEven ? 'lg:mt-16' : 'lg:-mt-4'}
                                `}
                            >
                                <Card
                                    data={step}
                                    // Alternating subtle rotation
                                    className={`
                                        ${isEven ? 'rotate-[-2deg]' : 'rotate-[2deg]'} 
                                        hover:rotate-0 transition-transform duration-300
                                    `}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Reusable Card Component
const Card: React.FC<{ data: StepData; className?: string }> = ({ data, className }) => {
    return (
        <div
            className={`
            bg-white 
            w-full max-w-[320px] 
            h-[350px] lg:h-[400px] /* Adjusted height for better fit */
            rounded-[2.5rem] 
            p-6 lg:p-8 
            flex flex-col justify-between items-center
            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] 
            border border-gray-100
            ${className}
        `}
        >
            {/* Number */}
            <div className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
                {data.number}
            </div>

            {/* Icon Image */}
            <div className="w-20 h-20 flex items-center justify-center p-2 bg-gray-50 rounded-2xl">
                {/* Using a placeholder if src is missing during copy-paste, otherwise normal img */}
                <img
                    src={data.image}
                    alt={data.title}
                    className='w-full h-full object-contain opacity-90'
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                />
            </div>

            {/* Content */}
            <div className="space-y-3 text-center">
                <h3 className="text-xl font-medium text-gray-900 tracking-tight">
                    {data.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed font-light line-clamp-3">
                    {data.description}
                </p>
            </div>
        </div>
    );
};

function Servies() {
    return <section className="flex-1 w-full flex flex-col">
        <ProcessFlow />
    </section>
}