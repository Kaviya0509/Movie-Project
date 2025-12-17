import React, { useState } from 'react';
import MovieModal from "../../Components/Modal/MovieModal";
import Carousel from "../../Components/Carousel/Carousel";

const Trending = ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div id='trending'>
      <Carousel
        data={data}
        title="Trending"
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

export default Trending;