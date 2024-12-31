import "./main.css";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import { myProjects } from "./myProjects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Main() {
    const { t, i18n  } = useTranslation();
    const [arr, setArr] = useState(myProjects);
    const [currentActive, setCurrentActive] = useState("all");

    // function of category buttons
    function handleClick(buttonCategory) {
        setCurrentActive(buttonCategory);
        const newArr = myProjects.filter((item) => {
            return item.category === buttonCategory;
        });
        setArr(newArr);
    }
    return (
        <main id="projects">
            <Box
                className="left-section flex"
                sx={{
                    flexDirection: {
                        xs: "row",
                        md: "column",
                    },
                    flexWrap: { xs: "wrap" },
                }}
                
            >
                <button
                    className={currentActive === "all" ? "active" : null}
                    onClick={() => {
                        setCurrentActive("all");
                        setArr(myProjects);
                    }}
                >
                    {t("projects.allProjects")}
                </button>
                <button
                    className={currentActive === "react" ? "active" : null}
                    onClick={() => {
                        handleClick("react");
                    }}
                >
                    React & MUI
                </button>
                <button
                    className={currentActive === "js" ? "active" : null}
                    onClick={() => {
                        handleClick("js");
                    }}
                >
                    JavaScript
                </button>
                <button
                    className={currentActive === "css" ? "active" : null}
                    onClick={() => {
                        handleClick("css");
                    }}
                >
                    HTML & CSS
                </button>
                <button
                    className={currentActive === "bootstrap" ? "active" : null}
                    onClick={() => {
                        handleClick("bootstrap");
                    }}
                >
                    Bootstrap
                </button>
            </Box>

            <div className="right-section flex">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                className="card"
                                key={`${item.imgPath}-${currentActive}`}
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{
                                    type: "spring",
                                    damping: 8,
                                    stiffness: 50,
                                }}
                            >
                                <img src={item.imgPath} alt="project" />
                                <div className="box">
                                    <h2 className="title">
                                    {item.projectTitle[i18n.language]}
                                    </h2>
                                    <p className="sub-title">
                                    {item.projectDescription[i18n.language]}
                                    </p>
                                    <div className="details flex">
                                        <div className="links">
                                            <a href={item.liveDemoLink}>
                                                <LinkIcon sx={{ mr: 1 }} />
                                            </a>
                                            <a href={item.githubLink}>
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                        {/* <div className="more">
                                            <a href="" className="flex">
                                                more
                                                <span>
                                                    <ArrowForwardIcon
                                                        sx={{
                                                            mt: 0.6,
                                                            ml: 0.6,
                                                        }}
                                                        className="arrow"
                                                    />
                                                </span>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </div>
        </main>
    );
}
