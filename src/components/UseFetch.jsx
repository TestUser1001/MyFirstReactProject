import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      /* setIsLoading(true); */
      setIsError(false);
      const response = await axios.get(url);
      setData(response.data);

      /* setIsLoading(false); */ /*  console.log(data); */
      setIsError(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, []);
  /*  console.table(data); */
  return { isLoading, isError, data };
};
export default UseFetch;
