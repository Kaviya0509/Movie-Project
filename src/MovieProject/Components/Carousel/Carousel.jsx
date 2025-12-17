import React, { useState } from 'react';
import "../../Pages/Popular/Popular.scss";

const Carousel = ({ data=[], itemsPerPage = 5, onCardClick, title }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={prevSlide}>❮</button>
        <div className="carousel-container">
          {data
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => onCardClick(item)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                />
              </div>
            ))}
        </div>
        <button className="scroll-btn right" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
};

export default Carousel;