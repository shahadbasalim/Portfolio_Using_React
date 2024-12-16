import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";
export default function Contact() {
    const [state, handleSubmit] = useForm("mrbgoyww");

    return (
        <section className="contact-us" id="contact">
            <h1 className="title flex">
                <EmailIcon sx={{ mr: 1 }} className="contact-icon" /> Contact Us
            </h1>
            <p className="sub-title">
                I look forward to hearing your thoughts and ideas. You can
                easily get in touch with me using the form below.
            </p>
            <div className="flex" style={{ justifyContent: "space-around" }}>
                <form onSubmit={handleSubmit}>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </Stack>
                    <Stack
                        style={{ marginTop: "24px" }}
                        direction={{ xs: "column", sm: "row" }}
                    >
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" required />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </Stack>
                    <button
                        type="submit"
                        className="main-button"
                        disabled={state.submitting}
                    >
                        {state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                </form>
                <div className="animation">
                    <Lottie
                        animationData={contactAnimation}
                        style={{ width: "355px"}}
                    />
                </div>
            </div>
            <div>
                {state.succeeded && (
                    <p
                        style={{ color: "gray", marginTop: "1.7rem" }}
                        className="flex"
                    >
                        <Lottie
                            animationData={doneAnimation}
                            style={{ width: "20px" }}
                            loop={false}
                        />
                        Your message has been sent successfully
                    </p>
                )}
            </div>
        </section>
    );
}
