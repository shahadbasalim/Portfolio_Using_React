import "./footer.css";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="flex" id="footer">
            <motion.ul
                className="flex"
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-10%" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
            </motion.ul>
            <motion.p
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "10%" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                Made With 💖 By Shahad © 2024
            </motion.p>
        </footer>
    );
}
