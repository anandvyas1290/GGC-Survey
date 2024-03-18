import React from "react";

export function SubmitBtn({ children, className }) {
    return <button className={`bg-mainDark ${className}`}>{children}</button>;
}
