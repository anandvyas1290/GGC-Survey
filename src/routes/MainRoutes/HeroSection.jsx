import React, { useEffect, useState } from "react";
import shape1 from "../../assets/image/shape1.webp";
import shape2 from "../../assets/image/shape2.webp";
import shape3 from "../../assets/image/shape3.webp";
import shape4 from "../../assets/image/shape4.webp";
import banner1 from "../../assets/image/banner1.webp";
import banner2 from "../../assets/image/banner2.webp";
import banner3 from "../../assets/image/banner3.webp";
import digitalMarketingBanner from "../../assets/image/digitalMarketingBanner.png";

// import Slider from "react-slick";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { PrimaryBtn } from "../../components/Button";

// const services = ["Digital Marketing", "Social Media", "IT Service"];
const services = [
    <h1>
        Let's Make <br />
        <p className="text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
            Your digital dreams
        </p>
        A Reality with GGCS.
    </h1>,
];

export default function HeroSection(props) {
    const [state, setState] = useState({ service: services[0], currentTab: 0 });
    const navigate = useNavigate();

    // const textSettings = {
    //     dots: false,
    //     autoplay: true,
    //     infinite: true,
    //     fade: true,
    //     speed: 600,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    // };
    // const imageSettings = {
    //     dots: false,
    //     autoplay: true,
    //     infinite: true,
    //     fade: true,
    //     speed: 3000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    // };

    useEffect(() => {
        let interval = setInterval(() => {
            setState((prev) => {
                return {
                    ...prev,
                    service: services[prev?.currentTab],
                    currentTab:
                        prev?.currentTab >= 2 ? 0 : prev?.currentTab + 1,
                };
            });
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [state?.currentTab]);

    return (
        <div className="!max-h-fit bg-white !text-black">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-12 sm:pt-[250px] pt-[200px] pb-[60px] sm:pb-[60px] md:pb-[100px] lg:pb-[150px]">
                <div className="sm:w-4/6 relative z-[10]">
                    <div className="">
                        <div
                            className="text-5xl font-bold md:text-[57px] *:leading-[4.5rem]"
                        >
                            {/* <Slider {...textSettings}> */}
                            {services?.map((item, i) => (
                                <div key={i} className="">
                                    {item}
                                </div>
                            ))}
                            {/* </Slider> */}
                            {/* [
                                    "Digital Marketing",
                                    "Social Media",
                                    "IT Service",
                                ] */}
                            {/* {services1[state?.currentTab]} */}
                            {/* <br /> */}
                            <div className="">
                                {/* <div className="text-animate">
                                    <div>
                                        <h4>
                                            Let's Make <br />
                                            Your digital dreams <br />A Reality
                                            with GGCS.
                                        </h4>
                                    </div>
                                    <div>
                                        <h4>
                                            Get ahead in <br />
                                            The Digital Game <br />
                                            With GGCS for all IT things.
                                        </h4>
                                    </div>
                                    <div>
                                        <h4>
                                            Transform Your <br />Business Effortlessly
                                            <br />With GGCS’ expert digital solutions.
                                        </h4>
                                    </div>
                                    <div>
                                        <h4>
                                            From Idea to <br />Implementation GGCS<br /> has
                                            you covered
                                        </h4>
                                    </div>
                                 
                                </div>   */}
                                {/* <div>
                                        <h4>agency</h4>
                                    </div>
                                    <div>
                                        <h4>analysis</h4>
                                    </div>
                                    <div>
                                        <h4>Services</h4>
                                    </div> */}
                                {/* <h5>from India</h5> */}
                            </div>
                            {/* {services2[state?.currentTab]} */}
                        </div>
                        {/* <p className="text-base mb-4 text-grey2 tracking-[1.2px]">
                            Igniting Digital Growth
                        </p> */}
                        <div className="mt-5">
                            <PrimaryBtn
                                size="px-8 py-3"
                                className="border-2 rounded-full bg-[#775AFC] borer-[#775AFC]"
                                onClick={() => {
                                    return props?.btnHandler
                                        ? props?.btnHandler()
                                        : navigate("/");
                                }}
                            >
                                Check your web health
                            </PrimaryBtn>
                        </div>
                        {/* <div className="flex items-center gap-4">
                            <div className="">
                                <PhoneArrowUpRightIcon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-grey1">
                                    Contact Us Today!
                                </p>
                                <H5>+91 6354917511</H5>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="">
                    <div className="lg:block hidden absolute top-0 right-0 w-[700px] z-[5]">
                        {/* <Slider {...imageSettings}> */}
                        {[
                            digitalMarketingBanner,
                        ]?.map((item, i) => (
                            <img
                                key={i}
                                src={item}
                                alt="hero"
                                className="w-[700px] opacity-100"
                            />
                        ))}
                        {/* </Slider> */}
                    </div>
                    <div className="lg:flex hidden absolute top-0 right-0 z-[4]">
                        <img
                            src={banner1}
                            alt="hero-icon"
                            className="w-[700px]"
                        />
                    </div>
                    <div className="lg:flex hidden absolute top-0 right-0 z-[3]">
                        <img
                            src={banner2}
                            alt="hero-icon"
                            className="w-[700px]"
                        />
                    </div>
                    <div className="lg:flex hidden absolute top-0 left-0 z-[1]">
                        <img
                            src={banner3}
                            alt="hero-icon"
                            className="invert-[0.2]"
                        />
                    </div>
                    <div className="absolute left-40  z-[1] animate-upslide">
                        <img src={shape1} alt="" />
                    </div>
                    <div className="absolute lg:left-[600px] top-[350px] z-[1] animate-shape2">
                        <img src={shape2} alt="" />
                    </div>
                    <div className="absolute lg:left-[750px] top-[600px] z-[1] animate-shape3">
                        <img src={shape3} alt="" />
                    </div>
                    <div className="absolute lg:right-[610px] animate-shape4">
                        <img src={shape4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
