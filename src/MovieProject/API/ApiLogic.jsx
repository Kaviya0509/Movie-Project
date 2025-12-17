// src/MovieProject/API/ApiLogic.js
import axiosCreate from "./axios";
import Request from "./Request";

const API_KEY = "6695fc904e6b4f072be33e9a99dd7db0";
const COMMON_PARAMS = { api_key: API_KEY };

// Fetch Popular TV Shows
export const getPopularTV = async () => {
  try {
    const response = await axiosCreate.get(Request.popular, { params: COMMON_PARAMS });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Popular TV:", error);
    return [];
  }
};

// Fetch General TV Shows (Top Rated)
export const getTVShows = async () => {
  try {
    const response = await axiosCreate.get(Request.tvshows, { params: COMMON_PARAMS });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV Shows:", error);
    return [];
  }
};

// Fetch Trending Shows
export const getTrending = async () => {
  try {
    const response = await axiosCreate.get(Request.trending, { params: COMMON_PARAMS });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Trending:", error);
    return [];
  }
};

// Fetch Action Movies
export const getActionMovies = async () => {
  try {
    const response = await axiosCreate.get(Request.discover, {
      params: { ...COMMON_PARAMS, with_genres: "28" },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Action Movies:", error);
    return [];
  }
};

// Fetch Upcoming Movies
export const getUpcomingMovies = async () => {
  try {
    const response = await axiosCreate.get(Request.upcoming, {
      params: { ...COMMON_PARAMS, language: "en-US", region: "US" },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Upcoming Movies:", error);
    return [];
  }
};

// Search Movies / TV
export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    const response = await axiosCreate.get(Request.search, {
      params: { ...COMMON_PARAMS, query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// Fetch Trailer for Movie / TV
export const fetchTrailer = async (movieId, type = "movie") => {
  try {
    const endpoint = type === "tv" ? `/tv/${movieId}/videos` : `/movie/${movieId}/videos`;
    const response = await axiosCreate.get(endpoint, {
      params: { api_key: API_KEY, language: "en-US" },
    });

    const trailer = response.data.results.find(
      (vid) =>
        vid.site.toLowerCase() === "youtube" &&
        ["Trailer", "Teaser", "Clip"].includes(vid.type)
    );
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};