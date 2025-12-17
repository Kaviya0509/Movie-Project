import React, { useState } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import MovieModal from '../../Components/Modal/MovieModal';

const Popular = ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div id="popular">
      <Carousel
        data={data}
        title="Popular"
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

export default Popular;