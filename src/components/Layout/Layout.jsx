import React from "react";

export const Container = ({ children, className }) => {
    return (
        <div
            className={`max-w-screen-lg lg:max-w-screen-xl mx-auto px-3 md:px-8 ${className}`}
        >
            {children}
        </div>
    );
};
