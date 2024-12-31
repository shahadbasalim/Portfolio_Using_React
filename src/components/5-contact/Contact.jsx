import "./contact.css";
import Stack from "@mui/material/Stack";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Contact() {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mrbgoyww");

    return (
        <section className="contact-us" id="contact">
            <h1 className="title flex">{t("contact.title")}</h1>
            <p className="sub-title">{t("contact.subTitle")}</p>
            <div className="flex" style={{ justifyContent: "space-around" }}>
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: "-100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{ duration: 1 }}
                >
                    <Stack>
                        <label htmlFor="email">{t("contact.emailLabel")}</label>
                        <input type="email" id="email" name="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </Stack>
                    <Stack style={{ marginTop: "24px" }}>
                        <label htmlFor="message">
                            {t("contact.messageLabel")}
                        </label>
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
                        {state.submitting
                            ? t("contact.submitButton.submitting")
                            : t("contact.submitButton.default")}
                    </button>
                </motion.form>
                <motion.div
                    className="animation"
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 1 }}
                >
                    <Lottie
                        animationData={contactAnimation}
                        style={{ width: "355px" }}
                    />
                </motion.div>
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
                        {t("contact.successMessage")}
                    </p>
                )}
            </div>
        </section>
    );
}
