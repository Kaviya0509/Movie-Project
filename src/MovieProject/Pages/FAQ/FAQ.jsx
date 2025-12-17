import React, { useState } from "react";
import "./FAQ.scss";

const faqs = [
  { q: "What is Netflix?", a: "Netflix is a streaming service that offers a wide variety of movies, TV shows and more." },
  { q: "How much does Netflix cost?", a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming device for one low monthly fee." },
  { q: "Where can I watch?", a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly." },
  { q: "How do I cancel?", a: "Netflix is flexible. There are no contracts and no cancellation fees." },
  { q: "What can I watch on Netflix?", a: "Netflix has an extensive library of feature films, documentaries, TV shows and more." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.q}</span>
              <span className="plus">{openIndex === index ? "×" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;