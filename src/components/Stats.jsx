import React ,{useEffect} from "react";
import stateBG from "../assets/state-bg.jpg"; // Importing image

const Stats = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter");
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let target = parseInt(entry.target.getAttribute("data-target"));
                        let count = 0;
                        let step = Math.ceil(target / 100); // Smooth animation
                        let interval = setInterval(() => {
                            count += step;
                            if (count >= target) {
                                count = target;
                                clearInterval(interval);
                            }
                            entry.target.textContent = count;
                        }, 20);
                    }
                });
            },
            { threshold: 0.5 } // Trigger animation when 50% of section is visible
        );

        counters.forEach((counter) => observer.observe(counter));
    }, []);
    return (
        <section
            className="py-16 text-white rounded-3xl relative bg-cover bg-center flex items-center justify-center h-96"
            style={{ backgroundImage: `url(${stateBG})` }} // Set background
        >
            <div className="container mx-auto px-4 relative z-10 font-['Almarai']">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl font-bold mb-2 text-[#C9E165] counter" data-target="900">
                            0
                        </div>
                        <p className="text-white/80 text-2xl">مريض سعيد</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl font-bold mb-2 text-[#C9E165] counter" data-target="5">
                            0
                        </div>
                        <p className="text-white/80 text-2xl">سنوات خبرة</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="text-5xl font-bold mb-2 text-[#C9E165] counter" data-target="20">
                            0
                        </div>
                        <p className="text-white/80 text-2xl">متخصص مؤهل</p>
                    </div>
                </div>
            </div>


            {/* Background Overlay (keeps text visible) */}
            <div className="absolute inset-0 bg-[#6B297A]/50 rounded-3xl h-96"></div>
        </section>
    );
};

export default Stats;
