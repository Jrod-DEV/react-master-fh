import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, []);

  const { quote } = !!data && data[0];
  // !!data --> if data exists return index 0 of data.
  // !!null return false , !!null is the way to convert null to false, because !null es true, y su negación !!null devolverá false
  // si !!null tiene valor, quiero que regrese el objeto && data[0]

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <div className="alert alert-info text-center">Loading...</div>
      <blockquote className="blockquote">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
