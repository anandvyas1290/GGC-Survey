import React, { useState } from "react";

import { PrimaryBtn } from "../Button";
import { addresses } from "../../db/dummy";
import { contactBg } from "../../db/assets";
import { Input, Textarea } from "../UI/Input";
import {
    Desc,
    H1Animate,
    H5,
    H6,
    Mail,
    SubHeading,
    Telephone,
} from "../Typography";

function ContactUs() {
    const [state, setState] = useState({
        name: "",
        email: "",
        number: "",
        website: "",
        message: "",
        errMessage: {
            name: "",
            email: "",
            number: "",
            website: "",
            message: "",
        },
    });
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const handleContactUs = (e) => {
        e.preventDefault();
        if (formValid(state)) {
            setState((prev) => {
                return {
                    ...prev,
                    errMessage: {
                        name: !state?.name ? "Required" : "",
                        email: !state?.email ? "Required" : "",
                        number: !state?.number ? "Required" : "",
                        website: !state?.website ? "Required" : "",
                        message: !state?.message ? "Required" : "",
                    },
                };
            });
        }
    };
    const formValid = ({ errMessage, ...rest }) => {
        let isValid = false;
        Object.values(errMessage).forEach((val) => {
            if (val.length > 0) {
                isValid = false;
            } else {
                isValid = true;
            }
        });
        Object.values(rest).forEach((val) => {
            if (val === null) {
                isValid = false;
            } else {
                isValid = true;
            }
        });
        return isValid;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let errMessage = { ...state.errMessage };
        switch (name) {
            case "name":
                errMessage.name = value.length < 2 ? "Enter your name" : "";
                break;
            case "email":
                errMessage.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "number":
                errMessage.number =
                    value.length <= 10 ? "Valid mobile number required" : "";
                break;
            case "website":
                errMessage.website = value.length <= 6 ? "Valid website" : "";
                break;
            case "message":
                errMessage.message = value.length < 10 ? "Valid message" : "";
                break;
            default:
                break;
        }
        setState((prev) => {
            return {
                ...prev,
                errMessage,
                [name]: value,
            };
        });
    };

    const { name, email, number, website, message, errMessage } = state;
    return (
        <section className="relative z-[1] md:py-20 py-10 xl:px-8 md:px-6 px-3">
            <div className="hidden sm:block">
                <img
                    src={contactBg}
                    alt="icon"
                    className="absolute -z-[1] bottom-0 left-0 right-0 w-full"
                />
            </div>
            <div className="max-w-screen-lg mx-auto lg:max-w-screen-xl">
                <div className="md:flex py-0 sm:!py-10">
                    <div className="my-10 md:w-1/2">
                        <SubHeading className="w-fit">
                            Get In Touch with us !
                        </SubHeading>
                        <H1Animate className="md:!justify-start">
                            Let's Work Together
                        </H1Animate>
                        <Desc className="mb-4">
                            Just tell us your requirements, and we will assist
                            you!
                        </Desc>
                        <div className="flex flex-col gap-1 md:mt-14">
                            <Telephone>+91 6354917511</Telephone>
                            <Mail>ggcs@globalgarner.com</Mail>
                        </div>
                        <div className="mt-5">
                            <PrimaryBtn
                                size="px-8 py-2"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn bg-0"
                            >
                                <a
                                    href="tel:+91 6354917511"
                                    data-rel="external"
                                >
                                    Call Us Now
                                </a>
                            </PrimaryBtn>
                        </div>
                    </div>
                    <div className="px-3 py-10 bg-white md:w-1/2 rounded-3xl sm:px-6 before:bg-homeGradient before:-top-4 before:left-0 before:absolute shadow-services ">
                        <form
                            action=""
                            onSubmit={(e) => {
                                handleContactUs(e);
                            }}
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="w-full">
                                    <Input
                                        value={name}
                                        name="name"
                                        placeholder={"Fill Name "}
                                        type={"mail"}
                                        errMsg={errMessage?.name}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        value={email}
                                        name="email"
                                        placeholder={"Email Address"}
                                        type={"mail"}
                                        errMsg={errMessage?.email}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        value={number}
                                        name="number"
                                        placeholder={"Phone Number"}
                                        type={"mail"}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        errMsg={errMessage?.number}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        value={website}
                                        name="website"
                                        placeholder={"Website"}
                                        type={"text"}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        errMsg={errMessage?.website}
                                    />
                                </div>
                                <div className="w-full sm:col-span-2">
                                    <Textarea
                                        value={message}
                                        name="message"
                                        placeholder="Message"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        errMsg={errMessage?.message}
                                    />
                                </div>
                                {/* <textarea
                                    name="textarea"
                                    placeholder="Message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    onChange={(e) => {
                                        handleChange(e)
                                    }}
                                    errMsg={errMessage?.website}
                                    className="col-span-2 w-full border-[1px] border-gray-200 relative rounded-xl h-40 px-5 outline-none  bg-gray-100"
                                /> */}
                            </div>
                            <div className="w-full mt-3 lg:mt-4">
                                <PrimaryBtn
                                    size="px-8 py-3"
                                    bgColor="bg-primaryBtn"
                                    type="submit"
                                >
                                    Send Message
                                </PrimaryBtn>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="grid grid-cols-1 gap-10 mb-10 sm:grid-cols-2 lg:gap-20 lg:mb-auto">
                    {addresses?.map((item) => (
                        <div key={item?.id} className="w-full">
                            <address className="h-full w-fit md:px-10 px-3 py-4 not-italic rounded-3xl bg-slate-200 !backdrop-blur-3xl">
                                <main>
                                    <H5 className="mb-3 text-primary">
                                        {item?.title}
                                    </H5>
                                    <H6 className="">{item?.address}</H6>
                                </main>
                            </address>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default ContactUs;
