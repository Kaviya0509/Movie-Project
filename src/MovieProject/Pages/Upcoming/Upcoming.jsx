import React, { useState } from 'react';
import MovieModal from "../../Components/Modal/MovieModal";
import Carousel from "../../Components/Carousel/Carousel";

const Upcoming= ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div id='upcoming'>
      <Carousel
        data={data}
        title="UpComing List"
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

export default Upcoming;