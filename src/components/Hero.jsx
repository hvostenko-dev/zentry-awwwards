import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const [loadedVideos, setLoadedVideos] = useState(0);
    const [forceReady, setForceReady] = useState(false);

    const totalVideos = 4;
    const previewVdRef = useRef(null);
    const nextVdRef = useRef(null);

    const isLoading = loadedVideos < totalVideos - 1 && !forceReady;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    // Fallback timeout so mobile browsers with lazy video policies never hang on loader
    useEffect(() => {
        const timer = setTimeout(() => {
            setForceReady(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    const handleSelectVideo = (index) => {
        if (index === currentIndex) return;
        setHasClicked(true);
        setCurrentIndex(index);
    };

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => {
                        nextVdRef.current?.play().catch(() => {});
                    },
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    {/* CENTER MINI VIDEO PREVIEW */}
                    <div className="mask-clip-path absolute-center absolute z-50 size-44 sm:size-64 cursor-pointer overflow-hidden rounded-lg">
                        <VideoPreview>
                            <div
                                onClick={handleMiniVdClick}
                                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                            >
                                <video
                                    ref={previewVdRef}
                                    src={getVideoSrc((currentIndex % totalVideos) + 1)}
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    id="current-video"
                                    className="size-44 sm:size-64 origin-center scale-150 object-cover object-center"
                                    onLoadedData={handleVideoLoad}
                                />
                            </div>
                        </VideoPreview>
                    </div>

                    {/* EXPANDING TRANSITION VIDEO */}
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-44 sm:size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />

                    {/* MAIN BACKGROUND VIDEO */}
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                {/* BOTTOM RIGHT HEADING */}
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>A</b>MING
                </h1>

                {/* TOP LEFT CONTENT */}
                <div className="absolute left-0 top-0 z-40 size-full pointer-events-none">
                    <div className="mt-20 sm:mt-24 px-5 sm:px-10 pointer-events-auto w-fit">
                        <h1 className="special-font hero-heading text-blue-100">
                            redefi<b>n</b>e
                        </h1>

                        <p className="mb-5 mt-2 max-w-64 font-robert-regular text-sm sm:text-base text-blue-100">
                            Enter the Metagame Layer <br /> Unleash the Play Economy
                        </p>

                        <a href="#nexus" className="inline-block">
                            <Button
                                id="watch-trailer"
                                title="Watch trailer"
                                leftIcon={<TiLocationArrow />}
                                containerClass="bg-yellow-300 flex-center gap-1"
                            />
                        </a>
                    </div>
                </div>

                {/* INTERACTIVE SCENE SWITCHER (GREAT FOR MOBILE & DESKTOP) */}
                <div className="absolute bottom-6 left-5 sm:left-10 z-40 flex items-center gap-2">
                    {[1, 2, 3, 4].map((idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectVideo(idx)}
                            aria-label={`Switch to hero scene ${idx}`}
                            className={clsx(
                                "group relative flex items-center justify-center rounded-full font-general text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer backdrop-blur-md",
                                currentIndex === idx
                                    ? "bg-yellow-300 text-black px-3.5 py-1.5 shadow-[0_0_15px_rgba(237,255,102,0.5)]"
                                    : "bg-black/45 text-blue-50/80 border border-white/20 px-2.5 py-1.5 hover:bg-black/75 hover:text-white"
                            )}
                        >
                            0{idx}
                        </button>
                    ))}
                </div>
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                G<b>A</b>MING
            </h1>
        </div>
    );
};

export default Hero;
