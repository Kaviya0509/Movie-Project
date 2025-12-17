import { useState, useEffect } from "react";

const useSearchMovies = (query, searchFunction) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const data = await searchFunction(query);
        setMovies(data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, searchFunction]);

  return { movies, loading };
};

export default useSearchMovies;