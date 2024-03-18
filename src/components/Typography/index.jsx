// export * from "./Animation";

export const H2 = ({ children, className }) => {
    return (
        <h2
            className={`flex flex-col items-center text-2xl md:text-3xl !mb-5 !font-axiSemiBold ${className}`}
        >
            {children}
            <p className="w-24 md:w-36 h-[2px] md:h-1 bg-tertiary rounded-full md:mt-1" />
        </h2>
    );
};
export const H3 = ({ children, className }) => {
    return (
        <h3
            className={`text-[26px] md:text-3xl !mb-3 font-axiSemiBold ${className}`}
        >
            {children}
        </h3>
    );
};
export const H4 = ({ children, className }) => {
    return (
        <h4 className={`md:text-[25px] font-axiSemiBold ${className}`}>
            {children}
        </h4>
    );
};
export const H5 = ({ children, className }) => {
    return (
        <h5 className={`text-[20px] font-axiSemiBold ${className}`}>
            {children}
        </h5>
    );
};
export const H6 = ({ children, className }) => {
    return (
        <h6 className={`text-[16px] font-axiMedium text-gray-500 ${className}`}>
            {children}
        </h6>
    );
};

export const Mail = ({ children, className }) => {
    return (
        <a
            className={`text-xl md:text-2xl font-axiMedium text-primary ${className}`}
            href="mailto:ggcs@globalgarner.com"
        >
            {children}
        </a>
    );
};
export const Telephone = ({ children, className }) => {
    return (
        <a
            className={`text-xl md:text-2xl font-axiMedium text-primar ${className}`}
            href="tel:+916354917511"
        >
            {children}
        </a>
    );
};
