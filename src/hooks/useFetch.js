import { useEffect, useState } from 'react';

export default function useFetch({ requestUrl, maxAge = 3000 }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(requestUrl, {
        cache: 'default',
        headers: {
          'Cache-Control': 'max-age=' + maxAge,
        },
      });
      const jsonRes = await res.json();
      setData(jsonRes);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await fetch(requestUrl, {
        cache: 'reload',
        headers: {
          'Cache-Control': 'max-age=' + maxAge,
        },
      });
      const jsonRes = await res.json();
      setData(jsonRes);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    data,
    refetch,
  };
}
