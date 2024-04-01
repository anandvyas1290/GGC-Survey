import React from "react";
import "./styles.css";
import { H3 } from "../../../components/Typography";

export default function SuccessPage(props) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <section className="border rounded-xl m-3 lg:m-0 p-3 md:p-10 border-gray-300">
                <div className="w-full flex items-center flex-col">
                    <div className="w-40 h-44 flex items-center justify-between [flex-flow:column]">
                        <div className="w-full h-full p-5 shadow-[0px_0px_0px_65px_rgba(255,255,255,0.25)_inset,0px_0px_0px_65px_rgba(255,255,255,0.25)_inset] animate-[animateContainer_0.75s_ease-out_forwards_0.75s] flex items-center justify-center opacity-0 rounded-full scale-[0.84] bg-gradient-to-br from-[#5de593] to-[#41d67c]">
                            <svg
                                viewBox="0 0 65 51"
                                fill="none"
                                className="translate-y-1 animate-[animateCheck_0.35s_forwards_1.25s_ease-out] [stroke-dasharray:80] [stroke-dashoffset:80]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 25L27.3077 44L58.5 7"
                                    stroke="white"
                                    stroke-width="13"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="bottom-[calc(-15%_-_5px)] animate-[animateShadow_0.75s_ease-out_forwards_0.75s] rounded-full left-0 [background:radial-gradient(closest-side,#49da83,transparent)]"></div>
                    </div>
                    <H3>Thanks for taking this survey</H3>
                </div>
            </section>
        </div>
    );
}
