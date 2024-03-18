// import React from "react";
// import { motion } from "framer-motion";

// export function H1Animate({ className, children, effect = true }) {
//     let res = children?.split(" ");

//     const fadeInAnimationVariants = {
//         initial: {
//             opacity: 0,
//             y: 100,
//         },
//         animate: (index) => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 delay: 0.025,
//                 ease: "linear",
//             },
//         }),
//     };
//     return (
//         <motion.h1
//             className={`flex flex-wrap gap-2 md:gap-3 items-center justify-center md:!text-[45px] text-4xl leading-[2rem] md:leading-[3.5rem] font-axiBold mb-3 ${className}`}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//                 once: true,
//             }}
//         >
//             {res?.map((item, i) => (
//                 <p
//                     className={`${
//                         i < res?.length / 2
//                             ? ""
//                             : !effect
//                             ? ""
//                             : "text-tertiary"
//                     }`}
//                     key={i}
//                 >
//                     {item}
//                 </p>
//             ))}
//         </motion.h1>
//     );
// }

// export function TextAnimate({ className, children }) {
//     const fadeInAnimationVariants = {
//         initial: {
//             opacity: 0,
//             x: 100,
//         },
//         animate: (index) => ({
//             opacity: 1,
//             x: 0,
//             transition: {
//                 delay: 0.025,
//                 ease: "linear",
//             },
//         }),
//     };
//     return (
//         <motion.p
//             className={`!text-xl font-semibold [letter-spacing:-0.3px] text-transparent bg-gradient-to-r fro-g1 va-g2 t-g3 bg-clip-text !bg-[#7d7c83] ${className} `}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//                 once: true,
//             }}
//             // custom={index}
//         >
//             {children}
//         </motion.p>
//     );
// }

// export const SubHeading = ({ className, children }) => {
//     const fadeInAnimationVariants = {
//         initial: {
//             opacity: 0,
//             x: 100,
//         },
//         animate: (index) => ({
//             opacity: 1,
//             x: 0,
//             transition: {
//                 delay: 0.025,
//                 ease: "linear",
//             },
//         }),
//     };
//     return (
//         <motion.p
//             className={`sm:text-[20px] text-lg font-axiMedium mb-1 [letter-spacing:0.4px] text-gray-400 ${className}`}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//                 once: true,
//             }}
//         >
//             {children}
//         </motion.p>
//     );
// };

// export const Desc = ({ className, children }) => {
//     const fadeInAnimationVariants = {
//         initial: {
//             opacity: 0,
//             x: 100,
//         },
//         animate: (index) => ({
//             opacity: 1,
//             x: 0,
//             transition: {
//                 delay: 0.025,
//                 ease: "linear",
//             },
//         }),
//     };
//     return (
//         <motion.p
//             className={`max-w-screen-lg mx-auto text-[17px] md:text-[19px] font-axiMedium text-gray-600 ${className}`}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//                 once: true,
//             }}
//         >
//             {children}
//         </motion.p>
//     );
// };

// export function P({ className, children }) {
//     const fadeInAnimationVariants = {
//         initial: {
//             opacity: 0,
//             x: 100,
//         },
//         animate: (index) => ({
//             opacity: 1,
//             x: 0,
//             transition: {
//                 delay: 0.025,
//                 ease: "linear",
//             },
//         }),
//     };
//     return (
//         <motion.h6
//             className={`lg:text-[17px] text-[15px] [letter-spacing:0.1px] text-[#252525] ${className}`}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//                 once: true,
//             }}
//         >
//             {children}
//         </motion.h6>
//     );
// }
