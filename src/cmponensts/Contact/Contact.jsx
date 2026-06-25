import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      name="contact"
      id="contact"
      className="contactSection"
      data-aos="fade-up"
    >

      <hr className="line" />

      <h2 className="contactTitle">Contact Me</h2>

      <div className="contactDetails">

        <p>
          <strong>✉️ Email:</strong>{" "}
          <a href="mailto:thrinathnani0404@gmail.com">
            thrinathnani0404@gmail.com
          </a>
        </p>

        <p>
          <strong>📞 Phone:</strong>{" "}
          <a href="tel:+917569332794">
            +91 7569332794
          </a>
        </p>

        <p>
          <strong>🔗 LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/thrinath-ark-bb6034331/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My LinkedIn
          </a>
        </p>

        <p>
          <strong>💻 GitHub:</strong>{" "}
          <a
            href="https://github.com/thrinathnani"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </p>

      </div>

    </section>
  );
};

export default Contact;