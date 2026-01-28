import { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const links = [
        ["Home", "home"],
        ["About", "about"],
        ["Skills", "skills"],
        ["Projects", "projects"]
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // offset for fixed navbar

            links.forEach(([name, id]) => {
                const section = document.getElementById(id);

                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActive(name);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full flex justify-center fixed top-0 left-0 bg-background-color z-[9999]">
            <div className="w-full py-4 px-6 md:py-6 md:px-8 lg:py-8 flex items-center justify-between max-w-360">

                {/* Logo */}
                <div className="text-xl font-bold text-gray-900 w-1/4 flex justify-start">
                    leon<span className="text-blue-500">.</span>
                </div>

                {/* Center Menu */}
                <div className="hidden lg:flex justify-center gap-10 w-1/2">
                    {links.map(([label, id]) => (
                        <a
                            key={label}
                            href={`#${id}`}
                            className="relative text-sm font-medium text-gray-700 hover:text-black transition"
                        >
                            {label}

                            {active === label && (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-blue-500 rounded-full"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-end w-fit lg:w-1/4">
                    <a
                        href="tel:+919787416631"
                        className="bg-primary-purple hover:shadow-xl hover:shadow-primary-purple transition text-white text-sm font-semibold px-6 py-2 rounded-xl"
                    >
                        LET'S TALK
                    </a>
                </div>

            </div>
        </nav>
    );
}
