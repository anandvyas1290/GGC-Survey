import React, { useEffect, useState } from "react";

import Form from "./Form";
import StepsForm from "./stepsForm";
import { surveyData } from "./dummy";
import SuccessPage from "./SuccessPage";
import Navbar from "../../../container/Navbar";
import HeroSection from "../HeroSection";

export default function Survey(props) {
    const [state, setState] = useState({
        currentStep: 1,
        completed: false,
        fieldsData: [],
        showForm: false,
    });

    useEffect(() => {
        let data = surveyData?.filter((item) => {
            return item?.id === state?.currentStep;
        })[0]?.fields;

        setState((prev) => {
            return { ...prev, fieldsData: data };
        });
    }, [state?.currentStep]);

    const formStepHandler = (complete) => {
        return setState((prev) => {
            return {
                ...prev,
                currentStep: prev?.currentStep + 1,
                completed: complete,
            };
        });
    };

    const { completed, currentStep, fieldsData, showForm } = state;

    const propsData = { currentStep: currentStep, completed: completed };
    return (
        <div>
            <Navbar />
            <main>
                <HeroSection
                    btnHandler={() => {
                        return (
                            setState((prev) => {
                                return { ...prev, showForm: true };
                            }),
                            setTimeout(() => {
                                document
                                    .getElementById("survey-form")
                                    .scrollIntoView({ behavior: "smooth" });
                            }, 100)
                        );
                    }}
                />
            </main>

            {showForm ? (
                <section id="survey-form" className="mb-10">
                    <StepsForm {...propsData} />
                    {completed ? (
                        <SuccessPage />
                    ) : (
                        <Form
                            {...propsData}
                            fieldsData={fieldsData}
                            formStepHandler={formStepHandler}
                        />
                    )}
                </section>
            ) : null}
        </div>
    );
}
