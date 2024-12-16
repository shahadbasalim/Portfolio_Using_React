import "./hero.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/developer.json";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero flex" id="about">
            <div className="left-section">
                <div className="parent-avatar">
                    <motion.img
                        className="avatar"
                        src="/logo2.png"
                        alt="avatar"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    <VerifiedIcon className="verified-icon" />
                </div>
                <motion.h1
                    className="title"
                    initial={{ opacity: 0, rotate: -10 }} 
                    whileInView={{ opacity: 1, rotate: 0 }} 
                    exit={{ opacity: 0, rotate: -10 }} 
                    transition={{ duration: 2 }} 
                    viewport={{ once: false }} 
                >
                    Hello, I'm Shahad Basalim
                </motion.h1>
                <motion.p className="sub-title">
                    A computer engineer and passionate frontend web developer
                    with an interest in React. I specialize in creating
                    interactive and visually appealing user interfaces that
                    deliver exceptional user experiences. I’m always excited to
                    bring ideas to life through code and explore new
                    possibilities in web development.
                </motion.p>
                <motion.div
                    className="social-media flex"
                    initial={{ opacity: 0, x: "-50%" }} // The text starts from the right
                    whileInView={{ opacity: 1, x: 0 }} // The text appears when it comes into view
                    exit={{ opacity: 0, x: "-50%" }} // The text disappears when it exits the view
                    viewport={{ once: false, amount: 0.5 }} // The animation repeats when returning to the section
                    transition={{ duration: 1 }}
                >
                    <div>
                        <a
                            href="https://www.linkedin.com/in/shahadbasalim/"
                            target="_blank"
                        >
                            <LinkedInIcon className="linked-in" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/shahadbasalim"
                            target="_blank"
                        >
                            <GitHubIcon className="github" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://x.com/sh21u?t=ZJSgX5C-ZzdRDsIvOeYcWA&s=09"
                            target="_blank"
                        >
                            <XIcon className="x" />
                        </a>
                    </div>
                    <div>
                        <a href="https://wa.me/+966505297987" target="_blank">
                            <WhatsAppIcon className="whatsapp" />
                        </a>
                    </div>
                    <div style={{ marginBottom: "30px" }}>
                        <a href="/cv/CV-Shahad Basalim.pdf" download>
                            <button className="main-button">Download CV</button>
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="right-section animation">
                <Lottie
                    animationData={developerAnimation}
                    style={{ width: "355px" }}
                />
            </div>
        </section>
    );
}
