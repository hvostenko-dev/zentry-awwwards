import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const audioRef = useRef(null);
    const navRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const isVisibleRef = useRef(true);

    const { y: scrollY } = useWindowScroll();

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (!isAudioPlaying) {
            audio
                .play()
                .then(() => {
                    setIsAudioPlaying(true);
                    setIsIndicatorActive(true);
                })
                .catch((err) => {
                    console.warn("Audio blocked:", err);
                });
        } else {
            audio.pause();
            setIsAudioPlaying(false);
            setIsIndicatorActive(false);
        }
    };

    useEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        const prevY = lastScrollYRef.current;
        let nextVisible = isVisibleRef.current;

        if (scrollY <= 10) {
            nextVisible = true;
            navEl.classList.remove("floating-nav");
        } else if (scrollY > prevY && !isMobileMenuOpen) {
            nextVisible = false;
            navEl.classList.add("floating-nav");
        } else if (scrollY < prevY) {
            nextVisible = true;
            navEl.classList.add("floating-nav");
        }

        lastScrollYRef.current = scrollY;

        if (nextVisible !== isVisibleRef.current) {
            isVisibleRef.current = nextVisible;
            gsap.to(navEl, {
                y: nextVisible ? 0 : -100,
                opacity: nextVisible ? 1 : 0,
                duration: 0.25,
                ease: "power2.out",
            });
        }
    }, [scrollY, isMobileMenuOpen]);

    return (
        <div
            ref={navRef}
            className="fixed inset-x-2 top-3 z-50 h-16 transition-all duration-500 sm:inset-x-6 sm:top-4"
        >
            <header className="relative flex size-full items-center">
                <nav className="flex size-full items-center justify-between px-4 py-2 sm:px-6">
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4 sm:gap-7">
                        <a href="#hero" className="shrink-0 transition-transform duration-300 hover:scale-105">
                            <img src="/img/logo.png" alt="Zentry Logo" className="w-9 sm:w-10" />
                        </a>

                        <a href="#nexus" className="hidden md:block">
                            <Button
                                id="product-button"
                                title="Products"
                                rightIcon={<TiLocationArrow />}
                                containerClass="bg-blue-50 flex items-center justify-center gap-1"
                            />
                        </a>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex h-full items-center gap-3 sm:gap-6">
                        {/* DESKTOP NAV LINKS */}
                        <div className="hidden md:flex items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* AUDIO BTN */}
                        <button
                            onClick={toggleAudio}
                            aria-label={isAudioPlaying ? "Mute background audio" : "Play background audio"}
                            title={isAudioPlaying ? "Pause audio" : "Play audio"}
                            className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/70 cursor-pointer"
                        >
                            <audio
                                ref={audioRef}
                                src="/audio/loop.mp3"
                                className="hidden"
                                loop
                            />

                            <div className="flex items-center space-x-1 h-4">
                                {[1, 2, 3, 4].map((bar) => (
                                    <div
                                        key={bar}
                                        className={clsx("indicator-line", {
                                            active: isIndicatorActive,
                                        })}
                                        style={{
                                            animationDelay: `${bar * 0.12}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </button>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                            className="flex md:hidden items-center justify-center rounded-full border border-white/15 bg-black/50 p-2 text-blue-50 backdrop-blur-sm transition-colors hover:bg-black/80"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="size-5" />
                            ) : (
                                <HiOutlineMenuAlt3 className="size-5" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* MOBILE DROPDOWN DRAWER */}
                <div
                    className={clsx(
                        "absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/15 bg-black/95 backdrop-blur-xl shadow-2xl transition-all duration-300 md:hidden",
                        isMobileMenuOpen
                            ? "max-h-96 opacity-100 translate-y-0 py-5 px-6"
                            : "max-h-0 opacity-0 -translate-y-2 py-0 px-6 pointer-events-none border-transparent"
                    )}
                >
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-zentry text-2xl uppercase tracking-wider text-blue-50 transition-colors hover:text-yellow-300"
                            >
                                {item}
                            </a>
                        ))}

                        <div className="pt-2 border-t border-white/10">
                            <a
                                href="#nexus"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-block w-full"
                            >
                                <Button
                                    id="mobile-product-button"
                                    title="Explore Products"
                                    rightIcon={<TiLocationArrow />}
                                    containerClass="w-full !justify-center bg-yellow-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
