import { useRef } from 'react';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'Unable to load the info',
        });
      });
  }, [url]);
  return state;
};
