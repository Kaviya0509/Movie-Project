import React, { useState } from 'react';
import Carousel from "./../../Components/Carousel/Carousel"
import MovieModal from './../../Components/Modal/MovieModal';

const Discover = ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div id='discover'>
      <Carousel
        data={data}
        title="Discover"
        itemsPerPage={5}
        onCardClick={(movie) => setSelectedMovie(movie)}
      />

      <MovieModal
        selectedMovie={selectedMovie}
        closeModal={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default Discover;