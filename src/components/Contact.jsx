import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} alt="Zentry visual" className="w-full h-auto object-cover" />
    </div>
);

const Contact = () => {
    return (
        <section
            id="contact"
            className="my-12 sm:my-20 min-h-96 w-screen px-4 sm:px-8 md:px-10"
        >
            <div className="relative mx-auto max-w-[1600px] rounded-2xl bg-black py-16 sm:py-24 px-4 sm:px-10 text-blue-50 overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
                {/* LEFT FLOATING IMAGES (TABLET & DESKTOP) */}
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-16 lg:w-96 pointer-events-none opacity-40 md:opacity-100">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
                    />
                </div>

                {/* RIGHT CHARACTER (RESPONSIVE MOBILE + DESKTOP) */}
                <div className="relative mx-auto mb-8 w-44 sm:mb-0 sm:mx-0 sm:absolute sm:-top-12 sm:right-4 md:right-8 md:top-1/2 md:-translate-y-1/2 lg:top-16 lg:translate-y-0 sm:w-56 lg:w-80 pointer-events-none opacity-90 sm:opacity-45 md:opacity-100">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                {/* CENTER TEXT & CTA */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="mb-6 sm:mb-10 font-general text-[10px] uppercase tracking-widest text-blue-50/80">
                        Join Zentry
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
                        containerClass="special-font w-full font-zentry !text-4xl sm:!text-5xl md:!text-6xl lg:!text-[5.8rem] !font-black !leading-[.9]"
                    />

                    <a href="mailto:contact@zentry.com" className="mt-8 sm:mt-10">
                        <Button
                            title="contact us"
                            containerClass="cursor-pointer bg-yellow-300"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
