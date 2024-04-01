import React, { Fragment, useEffect, useState } from "react";

import { steps } from "./dummy";
import { Input } from "../../../components/Input";

export default function Form(props) {
    const [state, setState] = useState({ inputData: {}, animated: false });

    const { currentStep, fieldsData, formStepHandler, completed } = props;

    const setData = (k, v) => {
        setState((prev) => {
            return { ...prev, inputData: { ...prev?.inputData, [k]: v } };
        });
    };

    useEffect(() => {
        for (let i in fieldsData) {
            setState((prev) => {
                return {
                    ...prev,
                    inputData: {
                        ...prev?.inputData,
                        [fieldsData[i]?.name]: "",
                    },
                };
            });
        }
    }, [props]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <section className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 border rounded-xl p-5 md:p-10 m-3 lg:m-0 border-gray-300">
                {props?.fieldsData?.map((field) => (
                    <Fragment key={field?.id}>
                        <Input
                            label={field?.label}
                            className="border-2 border-gray-400 rounded-xl !bg-gray-100 py-2.5 md:!py-4 !text-lg"
                            value={state?.inputData[field?.name]}
                            onChange={(v) =>
                                setData(field?.name, v.target.value)
                            }
                        />
                    </Fragment>
                ))}
            </section>
            <div className="relative flex justify-center my-20">
                {!completed ? (
                    <div className="flex items-center justify-center">
                        <div
                            className={`px-12 py-6 ${state?.animated
                                ? "animate-ping bg-green-200"
                                : ""
                                } rounded-full ![animation-duration:2s]`}
                        />
                        <button
                            className="group flex gap-3 absolute top-[2%] lg:left-[45%] border-2 text-xl font-semibold rounded-full px-4 py-3 text-white bg-green-400 hover:bg-green-500"
                            onClick={() => {
                                currentStep === steps?.length
                                    ? formStepHandler(true)
                                    : formStepHandler(false);
                            }}
                            onMouseEnter={() =>
                                setState((prev) => {
                                    return { ...prev, animated: true };
                                })
                            }
                            onMouseLeave={() =>
                                setState((prev) => {
                                    return { ...prev, animated: false };
                                })
                            }
                        >
                            {currentStep === steps?.length ? "Finish" : "Next"}
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
                    </div>
                ) : null}
            </div>
        </div>
    );
}
