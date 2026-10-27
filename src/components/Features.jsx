import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

/* ===========================
   BENTO TILT (3D Hover)
=========================== */
export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
        if (typeof window !== "undefined" && window.innerWidth < 768) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        setTransformStyle(
            `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.97, .97, .97)`
        );
    };

    const handleMouseLeave = () => setTransformStyle("");

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

/* ===========================
   BENTO CARD
=========================== */
export const BentoCard = ({ src, title, description, isComingSoon }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                playsInline
                className="absolute left-0 top-0 size-full object-cover object-center"
            />

            {/* Subtle gradient overlay for text readability on mobile & desktop */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

            <div className="relative z-10 flex size-full flex-col justify-between p-5 sm:p-7 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 font-circular-web text-xs sm:text-sm md:text-base text-blue-50/85">
                            {description}
                        </p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHoverOpacity(1)}
                        onMouseLeave={() => setHoverOpacity(0)}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1.5 overflow-hidden rounded-full bg-black/85 px-5 py-2 text-xs uppercase text-white/60 backdrop-blur-md transition-colors hover:text-white"
                    >
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20 text-sm" />
                        <p className="relative z-20 font-general tracking-wider">coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ===========================
   FEATURES SECTION
=========================== */
const Features = () => (
    <section id="nexus" className="bg-black pb-28 sm:pb-40 md:pb-52">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
            {/* TOP INTRO TEXT */}
            <div className="px-2 py-20 sm:px-5 sm:py-28 md:py-32">
                <p className="font-circular-web text-base sm:text-lg text-blue-50">
                    Into the Metagame Layer
                </p>
                <p className="mt-2 max-w-md font-circular-web text-sm sm:text-lg text-blue-50 opacity-50 leading-relaxed">
                    Immerse yourself in a rich and ever-expanding universe where a vibrant
                    array of products converge into an interconnected overlay experience
                    on your world.
                </p>
            </div>

            {/* MAIN HERO BENTO CARD */}
            <BentoTilt className="border-hsla relative mb-6 sm:mb-7 h-80 sm:h-96 w-full overflow-hidden rounded-xl md:h-[65vh]">
                <BentoCard
                    src="videos/feature-1.mp4"
                    title={
                        <>
                            radia<b>n</b>t
                        </>
                    }
                    description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    isComingSoon
                />
            </BentoTilt>

            {/* BENTO GRID */}
            <div
                id="vault"
                className="grid w-full grid-cols-2 gap-4 sm:gap-7 md:h-[135vh] md:grid-rows-3"
            >
                <BentoTilt className="bento-tilt_1 col-span-2 h-[380px] sm:h-[440px] md:col-span-1 md:row-span-2 md:h-auto">
                    <BentoCard
                        src="videos/feature-2.mp4"
                        title={
                            <>
                                zig<b>m</b>a
                            </>
                        }
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 col-span-2 h-[320px] sm:h-[360px] sm:ms-16 md:col-span-1 md:ms-0 md:h-auto">
                    <BentoCard
                        src="videos/feature-3.mp4"
                        title={
                            <>
                                n<b>e</b>xus
                            </>
                        }
                        description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 col-span-2 h-[320px] sm:h-[360px] sm:me-14 md:col-span-1 md:me-0 md:h-auto">
                    <BentoCard
                        src="videos/feature-4.mp4"
                        title={
                            <>
                                az<b>u</b>l
                            </>
                        }
                        description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_2 col-span-1 h-[210px] sm:h-[260px] md:h-auto">
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-4 sm:p-5">
                        <h1 className="bento-title special-font max-w-64 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                        </h1>

                        <TiLocationArrow className="m-2 sm:m-5 scale-[2.5] sm:scale-[5] self-end text-black" />
                    </div>
                </BentoTilt>

                <BentoTilt className="bento-tilt_2 col-span-1 h-[210px] sm:h-[260px] md:h-auto">
                    <video
                        src="videos/feature-5.mp4"
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="size-full object-cover object-center"
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;
