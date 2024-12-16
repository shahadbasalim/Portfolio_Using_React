import "./scroll.css";
import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Zoom } from "@mui/material";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Check scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={isVisible}>
            <Fab
                size="small"
                onClick={handleScrollToTop}
                style={{
                    position: "fixed",
                    bottom: "2rem",
                    right: "2rem",
                    zIndex: 1000,
                    backgroundColor: "rgb(93, 188, 252)",
                }}
            >
                <KeyboardArrowUpIcon sx={{color: "white"}} />
            </Fab>
        </Zoom>
    );
}
