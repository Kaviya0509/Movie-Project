import React from "react";
import "./MoreRelease.scss";

const reasons = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favourites easily and always have something to watch."
  },
  {
    title: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favourite characters in a space made just for them."
  }
];

const MoreRelease = () => {
  return (
    <section className="reasons-section">
      <h2>More reasons to join</h2>
      <div className="reasons-grid">
        {reasons.map((item, index) => (
          <div className="reason-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreRelease;
