import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Skills from "./components/4-skills/Skills";
import Contact from "./components/5-contact/Contact";
import Footer from "./components/6-footer/Footer";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ScrollToTop from "./components/7-scroll/ScrollToTopButton";
function App() {
    return (
        <>
            <Container maxWidth="lg" className="container">
                <Header />
                <Hero />
                <Divider
                    sx={{
                        borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
                        py: "1.4rem",
                        mb: "1rem",
                    }}
                />
                <Main />
                <Divider
                    sx={{
                        borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
                        py: "3rem",
                        mb: "1rem",
                    }}
                />
                <Skills />
                <Divider
                    sx={{
                        borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
                        py: "3rem",
                        mb: "1rem",
                    }}
                />
                <Contact />
                <Divider
                    sx={{
                        borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
                        py: "3rem",
                        mb: "1rem",
                    }}
                />
                <Footer />
            </Container>
            <ScrollToTop />
        </>
    );
}

export default App;
