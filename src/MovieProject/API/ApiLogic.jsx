import axiosCreate from "./axios";
import Request from "./Request";

export const getPopularTV = async () => {
  const res = await axiosCreate.get("", {
    params: { endpoint: Request.popular },
  });
  return res.data.results || [];
};

export const getTVShows = async () => {
  const res = await axiosCreate.get("", {
    params: { endpoint: Request.tvshows },
  });
  return res.data.results || [];
};

export const getTrending = async () => {
  const res = await axiosCreate.get("", {
    params: { endpoint: Request.trending },
  });
  return res.data.results || [];
};

export const getActionMovies = async () => {
  const res = await axiosCreate.get("", {
    params: {
      endpoint: Request.discover,
      with_genres: "28",
    },
  });
  return res.data.results || [];
};

export const getUpcomingMovies = async () => {
  const res = await axiosCreate.get("", {
    params: {
      endpoint: Request.upcoming,
      language: "en-US",
      region: "US",
    },
  });
  return res.data.results || [];
};

export const searchMovies = async (query) => {
  if (!query) return [];
  const res = await axiosCreate.get("", {
    params: {
      endpoint: Request.search,
      query,
    },
  });
  return res.data.results || [];
};

export const fetchTrailer = async (movieId, type = "movie") => {
  const endpoint =
    type === "tv"
      ? `/tv/${movieId}/videos`
      : `/movie/${movieId}/videos`;

  const res = await axiosCreate.get("", {
    params: {
      endpoint,
      language: "en-US",
    },
  });

  const trailer = res.data.results?.find(
    (vid) =>
      vid.site === "YouTube" &&
      ["Trailer", "Teaser", "Clip"].includes(vid.type)
  );

  return trailer
    ? `https://www.youtube.com/watch?v=${trailer.key}`
    : null;
};
