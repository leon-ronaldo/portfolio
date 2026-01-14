import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const links = ["Home", "Works", "Services", "About me"];

    return (
        <nav className="w-full flex justify-center">
            <div className="w-full py-4 px-6 md:py-6 md:px-8 lg:py-8 flex items-center justify-between max-w-[1440px]">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-900 w-1/4 flex justify-start">
                    leon<span className="text-blue-500">.</span>
                </div>

                {/* Center Menu */}
                <div className="hidden lg:flex justify-center gap-10 w-1/2">
                    {links.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className="relative text-sm font-medium text-gray-700 hover:text-black transition"
                        >
                            {item}

                            {/* Active underline */}
                            {active === item && (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-blue-500 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-end w-fit lg:w-1/4">
                    <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold px-6 py-2 rounded-xl">
                        LET'S TALK
                    </button>
                </div>
            </div>
        </nav>
    );
}
