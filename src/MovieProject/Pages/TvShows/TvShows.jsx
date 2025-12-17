import React, { useState } from 'react';
import MovieModal from "../../Components/Modal/MovieModal";
import Carousel from "../../Components/Carousel/Carousel";

const TvShows= ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div id='tvshows'>
      <Carousel
        data={data}
        title="TV Shows"
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

export default TvShows;