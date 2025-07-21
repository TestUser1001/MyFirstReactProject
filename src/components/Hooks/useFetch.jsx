import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState({});

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, isError, data };
};
export default useFetch;
