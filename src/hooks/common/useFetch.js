import { TStatus } from "@/utils/status";
import { useEffect, useState } from "react";


function useFetchData(fetchFunction, deps) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(TStatus.idle)

  useEffect(() => {
    async function fetchData() {
      setStatus(TStatus.fetching)
      try {
        const response = await fetchFunction();
        console.log(response)
        setData(response.data);
        setStatus(TStatus.fetched)
      } catch (error) {
        console.log(error)
        setError(error);
        setStatus(TStatus.error)
      }
    }
    fetchData();
    return () => {
      setData(null)
      setError(null)
      setStatus(TStatus.idle)
    }
  }, [...deps]);

  return { data, status, error };
}


export default function useFetch(fetchFunction, deps) {
  const { data, status, error } = useFetchData(fetchFunction, deps);
  return { data, status, error, TStatus };
}
