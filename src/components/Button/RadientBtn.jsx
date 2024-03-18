import React from "react";

export function RadientBtn({ children, className, onClick, hideEffect }) {
    return (
        <div className="relative group">
            <button
                className={`relative z-10 flex items-center justify-center gap-1 p-3 px-4 text-lg font-axiBold text-black bg-white1 shadow-2xl border-4 rounded-xl bg-clip-padding border-200/60 ${className}`}
                onClick={onClick}
            >
                {children}
                <figure className="invisible group-hover:visible group-hover:animate-arrowFadeIn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-8 h-7`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </figure>
            </button>

            {/* {hideEffect ? ( */}
            <div className="absolute inset-0 flex items-center overflow-hidden transition-transform duration-500 pointer-events-none blur-lg will-change-transform group-hover:scale-105">
                <div className={`w-full scale-110 aspect-square`}>
                    <div
                        className={`w-full h-full bg-gradient-to-tr ${
                            hideEffect
                                ? "group-hover:from-gray-400 group-hover:to-300"
                                : "from-amber-600 to-teal-600"
                        } group-hover:animate-spin`}
                    />
                </div>
            </div>
            {/* ) : null} */}
        </div>
    );
}
