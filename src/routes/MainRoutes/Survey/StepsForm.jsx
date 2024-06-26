import React from "react";
import checkMark from "../../../assets/icons/check-success.png";

import { Container } from "../../../components/Layout";
import { steps } from "./dummy";

export default function StepsForm(props) {
    const { currentStep, completed } = props;
    return (
        <div>
            <Container className="lg:py-20 py-10">
                <div className="grid grid-cols-5 overflow-scroll whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {steps?.map((item) => (
                        <div
                            key={item?.id}
                            className={`relative flex flex-col justify-center items-center w-full ${currentStep === item?.id ? "active" : ""
                                } ${item?.id < currentStep || completed
                                    ? "complete"
                                    : ""
                                }`}
                        >
                            <div
                                className={`border-2 rounded-full p-2 ${item?.id === currentStep
                                    ? "!border-blue-400"
                                    : ""
                                    } ${item?.id < currentStep || completed
                                        ? "border-green-500"
                                        : ""
                                    }`}
                            >
                                <div
                                    className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${item?.id === currentStep
                                        ? "bg-blue-400"
                                        : "bg-slate-700"
                                        }`}
                                >
                                    {item?.id < currentStep || completed ? (
                                        <img src={checkMark} alt="success" />
                                    ) : (
                                        item?.id
                                    )}
                                </div>
                            </div>
                            <div
                                className={`w-full h-[2px] z-0 absolute top-[30px] lg:!left-[100px] md:!left-[80px] left-10 ${item?.id === currentStep
                                    ? "bg-blue-400"
                                    : "bg-gray-300"
                                    } ${steps?.length === item?.id ? "hidden" : ""
                                    } ${item?.id < currentStep || completed
                                        ? "bg-green-500"
                                        : ""
                                    }`}
                            />
                            <p className="text-gray-500 pt-2 md:text-base text-sm">{item?.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
