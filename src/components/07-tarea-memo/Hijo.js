import React from 'react';

// Con React.memo(function) evitamos que la función se vuelva a genear cada vez que pulsamos un botón de incrementar,
// el cual se encuentra en component Padre.js, cuya función está utilizando el Hook useCallback.
export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log('  Me volví a generar :(  ');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
