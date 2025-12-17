import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchFunction();
      setData(results);
    };

    fetchData();
  }, [fetchFunction]);

  return data;
};

export default useFetchData;