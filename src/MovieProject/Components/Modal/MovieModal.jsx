import React, { useState, useEffect } from "react";
import "../../Pages/Popular/Popular.scss";
import CustomPlayer from "../CustomPlayer/CustomPlayer";
import { fetchTrailer } from "../../API/ApiLogic";

const MovieModal = ({ selectedMovie, closeModal }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      if (selectedMovie) {
        const url = await fetchTrailer(selectedMovie.id, "movie");
        setVideoUrl(url);
        setShowVideo(false);
      }
    };
    getVideo();
  }, [selectedMovie]);

  if (!selectedMovie) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="netflix-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>✖</button>

        {!showVideo && (
          <div
            className="netflix-banner"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
            }}
          >
            <div className="netflix-gradient"></div>
            <h1 className="netflix-title">{selectedMovie.title || selectedMovie.name}</h1>
          </div>
        )}

        {showVideo && videoUrl && <CustomPlayer url={videoUrl} />}

        {!showVideo && (
          <div className="netflix-body">
            <div className="netflix-tags">
              <span>2025</span>
              <span>U/A 16+</span>
              <span>Movie</span>
              <span>Action</span>
              <span>Dramas</span>
            </div>

            <p className="netflix-desc">{selectedMovie.overview}</p>

            {videoUrl ? (
              <button className="get-started-btn" onClick={() => setShowVideo(true)}>
                Watch Trailer →
              </button>
            ) : (
              <p style={{ color: "red" }}>Trailer not available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;