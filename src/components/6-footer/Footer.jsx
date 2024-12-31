import "./footer.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="flex" id="footer">
            <motion.ul
                className="flex"
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-10%" }}
                transition={{ duration: 1 }}
            >
                <li>
                    <a href="#about">{t("footer.about")}</a>
                </li>
                <li>
                    <a href="#projects">{t("footer.projects")}</a>
                </li>
                <li>
                    <a href="#contact">{t("footer.contact")}</a>
                </li>
                <li>
                    <a href="#skills">{t("footer.skills")}</a>
                </li>
            </motion.ul>
            <motion.p
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "10%" }}
                transition={{ duration: 1 }}
            >
                {t("footer.credits")}
            </motion.p>
        </footer>
    );
}
