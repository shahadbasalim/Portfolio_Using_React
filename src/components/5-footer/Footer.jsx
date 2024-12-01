import "./footer.css";
export default function Footer() {
    return (
        <footer className="flex" id="footer">
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
            </ul>
            <p>Made With 💖 By Shahad © 2024</p>
        </footer>
    );
}
