import { useEffect, useState } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFunction();
      setData(data);
    };
    fetchData();
  }, [fetchFunction]);

  return data;
};

export { useFetch };
