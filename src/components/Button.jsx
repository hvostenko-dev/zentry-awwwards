import clsx from "clsx";

const Button = ({ title, id, rightIcon, leftIcon, containerClass, onClick }) => {
    return (
        <button
            id={id}
            onClick={onClick}
            className={clsx(
                "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-6 py-3 sm:px-7 text-black flex items-center justify-center gap-2 font-general text-xs uppercase transition-all duration-300 ease-out hover:scale-105 active:scale-95",
                containerClass
            )}
        >
            {leftIcon && (
                <span className="text-black text-base flex items-center transition-transform duration-300 group-hover:translate-x-0.5">
                    {leftIcon}
                </span>
            )}

            <span className="relative inline-flex overflow-hidden font-general text-xs font-semibold uppercase tracking-wider">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                    {title}
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    {title}
                </div>
            </span>

            {rightIcon && (
                <span className="text-black text-base flex items-center transition-transform duration-300 group-hover:translate-x-0.5">
                    {rightIcon}
                </span>
            )}
        </button>
    );
};

export default Button;
