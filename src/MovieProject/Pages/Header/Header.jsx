import React, { useRef } from "react";
import "./Header.scss";
import emailjs from "@emailjs/browser";
import { Button } from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input"

const Header = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elq7tiz",    // Service ID
        "template_k3xtqpu",   // Template ID
        form.current,
        "5WImgzBB2rkR6j5Vz"   // Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("FAILED: " + error.text);
        }
      );
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Starts at ₹149. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="email-box">
            <Input
              type="email"
              name="user_email"
              placeholder="Enter your Email Address"
              required
            />

            <Button type="submit" text="Get Started >" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Header;