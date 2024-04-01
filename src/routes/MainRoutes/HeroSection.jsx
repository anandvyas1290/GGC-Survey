import React, { useEffect, useState } from "react";
import shape1 from "../../assets/image/shape1.webp";
import shape2 from "../../assets/image/shape2.webp";
import shape3 from "../../assets/image/shape3.webp";
import shape4 from "../../assets/image/shape4.webp";
import banner1 from "../../assets/image/banner1.webp";
import banner2 from "../../assets/image/banner2.webp";
import banner3 from "../../assets/image/banner3.webp";
import digitalMarketingBanner from "../../assets/image/digitalMarketingBanner.png";
import heroGlobe from "../../assets/video/heroGlobe.mp4"
// import Slider from "react-slick";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { PrimaryBtn } from "../../components/Button";

// const services = ["Digital Marketing", "Social Media", "IT Service"];
const services = [
    <h1 className="text-white">
        Let's Make <br />
        <p className="text-transparent bg-gradient-to-r from-secondary via-tertiary to-tertiary bg-clip-text">
            Your digital dreams
        </p>
        A Reality with GGCS.
    </h1>,
];

export default function HeroSection(props) {
    const [state, setState] = useState({ service: services[0], currentTab: 0 });
    const navigate = useNavigate();

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
        <div className="!max-h-fit bg-black !text-black">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-12 sm:pt-[250px] pt-[200px] pb-[60px] sm:pb-[60px] md:pb-[100px] lg:pb-[150px]">
                <div className="sm:w-4/6 relative z-[10]">
                    <div className="">
                        <div
                            className="text-5xl font-bold md:text-[57px] *:leading-[4.5rem]"
                        >
                            {services?.map((item, i) => (
                                <div key={i} className="">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <PrimaryBtn
                                size="px-8 py-3"
                                className="border-2 rounded-full bg-blue1 border-blue1"
                                onClick={() => {
                                    return props?.btnHandler
                                        ? props?.btnHandler()
                                        : navigate("/");
                                }}
                            >
                                Check your web health
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="lg:block hidden absolute -top-[100px] right-0 w-[85%] h-[1000px] z-[5]">
                        <video className="h-full w-[1000px] ml-auto" autoPlay muted loop>
                            <source
                                src={heroGlobe}
                                type="video/mp4"
                            />
                        </video>
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
