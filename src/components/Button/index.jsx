import React from "react";

export * from "./GradientText";
export * from "./RadientBtn";
export * from "./SubmitBtn";

export function PrimaryBtn({ children, className, onClick, type }) {
    return (
        <button
            className={`px-5 md:px-8 py-2 md:py-2.5 flex align-middle justify-center text-base font-semibold bg-blue1 text-white1 font-jakarta border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className} }`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}
export function SecondaryBtn({ children, bgColor, className, onClick }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold border-gray-300 text-gray-700 outline-none font-jakarta ${bgColor} border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className} ${onClick}`}
        >
            {children}
        </button>
    );
}
export function SecondaryBtn2({ children, bgColor, className, onClick }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold bg-white border-gray-300 text-gray-700 outline-none font-jakarta ${bgColor} border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className} ${onClick}`}
        >
            {children}
        </button>
    );
}
