import "./header.css";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
export default function Header() {
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
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#footer">Footer</a>
                    </li>
                </ul>
            </nav>
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

            {/* modal = popup */}
            {showModal && (
                <div className=" fixed">
                    <ul className="modal">
                        <li>
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
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => setShowModal(false)}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => setShowModal(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="#footer"
                                onClick={() => setShowModal(false)}
                            >
                                Footer
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
