import React from "react";
import "../App.css";
import Toast from "niz-react-toast";
import { ShinyText, StarBorder } from "./AnimatedComp";
import { motion } from "framer-motion";
import { handleIncrement } from "../Libs/firebase";

const getRandomToastType = () => {
    const types = ["success", "error", "warning", "info"];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
};

const Hero = () => {
    const handleClick = () => {
        const toastType = getRandomToastType(); // Get random toast type
        const messages = {
            success: "Success! Everything went smoothly.",
            error: "Oops! Something went wrong.",
            warning: "Warning! You should be cautious.",
            info: "Info:Here's something interesting.",
        };

        const message = messages[toastType]; // Get the respective message for the toast type
        Toast[toastType](message); // Show the toast with the appropriate message

        handleIncrement()
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const wordVariants = {
        hidden: {
            y: -210,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const words = ["niz", "react", "toast"];

    return (
        <div className="hero-section">
            {/* <div className="name">
                <div className="one"><ShinyText text={"niz"}/></div>
                <div className="one"><ShinyText text={"react"}/></div>
                <div className="one"><ShinyText text={"toast"}/></div>
            </div> */}

            <motion.div className="name" variants={containerVariants} initial="hidden" animate="visible">
                {words.map((word, index) => (
                    <motion.div key={word} variants={wordVariants} className="one">
                        {word}
                    </motion.div>
                ))}
            </motion.div>

            <div className="taglines">
                <h2 className="tagline">
                    <ShinyText text={"The Perfect Toast for You"} />
                </h2>
                <h2 className="tagline2">Delightfully simple React notifications</h2>
            </div>

            <div className="hero-buttons">
                <StarBorder onClick={handleClick}>
                    <i className="material-symbols-outlined">notifications</i> Let's Toast
                </StarBorder>
            </div>
        </div>
    );
};

export default Hero;
