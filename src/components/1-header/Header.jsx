import "./header.css";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(
        localStorage.getItem("currentLanguage") ?? "en"
    );
    const [theme, setTheme] = useState(
        localStorage.getItem("currentMode") ?? "dark"
        //if localStorage is null set dark theme
    );
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    useEffect(() => {
        // Set the initial language on load
        i18n.changeLanguage(language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language, i18n]);

    function handleLanguageChange() {
        const newLanguage = language === "en" ? "ar" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("currentLanguage", newLanguage);
        i18n.changeLanguage(newLanguage); // Change the language
        document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"; // Update the page direction
    }

    return (
        <header className="flex">
            <button
                onClick={() => {
                    setShowModal(true);
                }}
                className="menu menu-icon flex"
            >
                <MenuIcon sx={{ mt: "0.45rem" }} />
                {/* (2.4rem - 1.5rem) / 2 = 0.45rem*/}
            </button>
            <div />
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#about">{t("header.about")}</a>
                    </li>
                    <li>
                        <a href="#projects">{t("header.projects")}</a>
                    </li>
                    <li>
                        <a href="#contact">{t("header.contact")}</a>
                    </li>
                    <li>
                        <a href="#skills">{t("header.skills")}</a>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <button
                    className="moon-icon flex"
                    onClick={() => {
                        //localStorage
                        localStorage.setItem(
                            "currentMode",
                            theme === "dark" ? "light" : "dark"
                        );
                        setTheme(localStorage.getItem("currentMode"));
                    }}
                >
                    {theme === "dark" ? (
                        <BedtimeOutlinedIcon />
                    ) : (
                        <WbSunnyOutlinedIcon sx={{ color: "orange" }} />
                    )}
                </button>
                <button
                    className="language-icon flex"
                    onClick={handleLanguageChange}
                    style={{ margin: "0px 5px 0px 5px" }}
                >
                    <GTranslateIcon  />
                </button>
            </div>
            {/* modal = popup */}
            {showModal && (
                <div className=" fixed">
                    <ul className="modal">
                        <li
                            className={`close-icon-container ${
                                language === "ar" ? "rtl" : ""
                            }`}
                        >
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                }}
                                className="close-icon"
                                style={{ height: "24px" }}
                            >
                                <CloseIcon />
                            </button>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => setShowModal(false)}
                            >
                                {t("header.about")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => setShowModal(false)}
                            >
                                {t("header.projects")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setShowModal(false)}
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={() => setShowModal(false)}
                            >
                                {t("header.skills")}
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
