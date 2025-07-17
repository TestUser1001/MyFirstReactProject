import React, { useRef } from "react";
import "../../components/layout.scss";
import "./Contact.scss";
import "../../components/typography.scss";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const Contact = () => {
  const { t } = useTranslation();
  const namePlaceHolder = t("namePlaceholder");
  const emailPlaceHolder = t("emailPlaceholder");
  const messagePlaceHolder = t("messagePlaceholder");
  const form = useRef();
  const { service_id, template_id, public_key } = {
    service_id: "service_sc9tyhr",
    template_id: "template_as9b9nm",
    public_key: "68qnZkMz0Fd5vqaXs",
    to_email: "nonamer099@gmail.com",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="contact container"
      id="contact"
    >
      <h2 className="headline">{t("contactHeading")}</h2>
      <p className="contact__cta-text">{t("contactText")}</p>
      <form
        action=""
        ref={form}
        className="contact__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="user_name" className="visually-hidden ">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder={namePlaceHolder}
          className="contact__fields"
          required
        />
        <label htmlFor="user_email" className="visually-hidden">
          email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder={emailPlaceHolder}
          className="contact__fields"
          required
        />
        <label htmlFor="message" className="visually-hidden">
          message
        </label>
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder={messagePlaceHolder}
          className="contact__fields"
          required
        />
        <button type="submit" className="btn btn--contact">
          {t("getInTouch")}
        </button>
      </form>
    </motion.div>
  );
};
export default Contact;
