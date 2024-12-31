import "./skills.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skillsData = [
    { name: "HTML", icon: "/skills/html-icon.png" },
    { name: "CSS", icon: "/skills/css-icon.png" },
    { name: "JavaScript", icon: "/skills/js-icon.webp" },
    { name: "React", icon: "/skills/react-icon.png" },
    { name: "Bootstrap", icon: "/skills/bootstrap-icon.png" },
    { name: "Material UI", icon: "/skills/mui-icon.png" },
    { name: "Git", icon: "/skills/git-icon.png" },
    { name: "GitHub", icon: "/skills/github-icon.png" },
    { name: "Node Package Manager", icon: "/skills/npm-icon.png" },
    { name: "Vite", icon: "/skills/vite-icon.png" },
    { name: "Redux", icon: "/skills/redux-icon.png" },
    { name: "Postman", icon: "/skills/postman-icon.svg" },
    { name: "LottieFiles ", icon: "/skills/lottiefiles-icon.png" },
    { name: "Motion", icon: "/skills/motion-icon.png" },
    { name: "Moment js", icon: "/skills/momentjs-icon.png" },
    { name: "Google Fonts", icon: "/skills/google-fonts-icon.png" },
    { name: "Formspree", icon: "/skills/formspree-icon.png" },
    { name: "Canva", icon: "/skills/canva-icon.png" },
    { name: "Visual Studio Code", icon: "/skills/vscode-icon.png" },
    { name: "Router", icon: "/skills/react-router-icon.png" },
    { name: "netlify", icon: "/skills/netlify-icon.png" },
    { name: "Axios", icon: "/skills/axios-icon.png" },
    { name: "i18next", icon: "/skills/i18next-icon.avif" },
];
export default function Skills() {
    const { t } = useTranslation();

    return (
        <section className="skills" id="skills">
            <h1 className="title">{t("skills.title")}</h1>
            <div className="skills-box flex">
                <div className="skills-container flex">
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="skill flex"
                            data-text={skill.name}
                            //animation
                            initial={{ opacity: 0, x: "-100%" }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0, x: "-100%" }} 
                            transition={{ duration: 1 }}
                        >
                            <img src={skill.icon} alt={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
