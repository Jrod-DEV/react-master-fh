import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

export const Message = (e) => {
  const [coords, setCoords] = useState({ x: e.x, y: e.y });
  const { x, y } = coords;

  useEffect(() => {
    setCoords(coords);

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h3>You are osom, from react hook, Message</h3>
      <p>
        x: {x} y: {y}
      </p>
    </>
  );
};
