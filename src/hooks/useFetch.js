import { useState, useEffect } from "react";
import { DEV_API_KEY } from "../config";
import axios from "axios";

export default function useFetch(url, param = "") {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setHasError(false);
      try {
        let response = await axios.get(`${url}${param}`, {
          headers: {
            Authorization: `${DEV_API_KEY}`,
          },
        });
        if (response.status === 200) {
          setLoading(false);
          setData(response.data);

          console.log(response);
        } else {
          setLoading(false);
          setHasError(true);
        }
      } catch (error) {
        setLoading(false);
        setHasError(true);
      }
    }

    fetchData();
  }, [url, param]);

  return [loading, hasError, data];
}
