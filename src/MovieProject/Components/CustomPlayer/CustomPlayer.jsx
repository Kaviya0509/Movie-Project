import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player';
import "./CustomPlayer.scss"; // Add styles here

const CustomPlayer = ({ url }) => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showCC, setShowCC] = useState(false);

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgress = (state) => setProgress(state.playedSeconds);
  const handleDuration = (d) => setDuration(d);
  const handleSeek = (e) => {
    const seekTo = parseFloat(e.target.value);
    setProgress(seekTo);
    playerRef.current.seekTo(seekTo);
  };
  const handleForward = () => {
    const newTime = Math.min(progress + 10, duration);
    playerRef.current.seekTo(newTime);
    setProgress(newTime);
  };
  const handleBackward = () => {
    const newTime = Math.max(progress - 10, 0);
    playerRef.current.seekTo(newTime);
    setProgress(newTime);
  };
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="player-container" ref={playerContainerRef}>
      <div className="video-wrapper">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={play}
          muted={mute}
          volume={volume}
          onProgress={handleProgress}
          onDuration={handleDuration}
          width="100%"
          height="100%"
          controls={false}
        />
        {showCC && (
          <div className="cc-overlay">
            <p>This is a sample subtitle text</p>
          </div>
        )}
      </div>

      <div className="controls-container">
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
        />

        <div className="controls-row">
          <button className="btn" onClick={() => setPlay(!play)}>
            {play ? " ▶" : "❚❚"}
          </button>
          <button className="btn" onClick={handleBackward}>⏪ 10s</button>
          <button className="btn" onClick={handleForward}>10s ⏩</button>
          <button className="btn" onClick={() => setMute(!mute)}>
            {mute ?  "🔇":"🔊" }
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="volume-slider"
          />
          <button className="btn" onClick={() => setShowCC(!showCC)}>CC</button>
          <button className="btn" onClick={toggleFullscreen}>⛶</button>
          <span className="time">
            {formatTime(progress)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomPlayer;