import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-6 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
                <p className="text-center font-general text-xs sm:text-sm font-light md:text-left">
                    ©Zentry {new Date().getFullYear()}. All rights reserved
                </p>

                <div className="flex justify-center gap-5 md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-lg text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center font-general text-xs sm:text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
