import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./../styles/pages/contactpage.css";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grhha1m",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []);
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-title-wrapper">
          <h5>Bienvenue</h5>
          <h2>Contactez-nous</h2>
          <p></p>
          <p></p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-image"></div>
          <div className="form-wrapper w-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="field-wrapper">
                <label>Nom</label>
                <input
                  className="text-field w-input"
                  type="text"
                  maxLength={256}
                  placeholder="ex: Point Solutions"
                  name="user_name"
                />
              </div>
              <div className="field-wrapper">
                <label>Email</label>
                <input
                  className="text-field w-input"
                  type="email"
                  placeholder="ex: point.solutions@gmail.com"
                  maxLength={256}
                  name="user_email"
                />
              </div>
              <div className="field-wrapper">
                <label>Telephone</label>
                <input
                  className="text-field w-input"
                  maxLength={256}
                  type="tel"
                  placeholder="+237 653 356 653"
                  name="user_phone_number"
                />
              </div>
              <div className="field-wrapper">
                <label>Votre message</label>
                <textarea
                  className="message-area"
                  placeholder="Ecrivez votre message ici"
                  maxLength={5000}
                  name="message"
                ></textarea>
              </div>
              <input className="submit-button" type="submit" value={"submit"} />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
