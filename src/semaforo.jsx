import React, { useState } from 'react';

const Semaforo = () => {
  const [activeLight, setActiveLight] = useState(null);

  const luzClickeada = (colorDeLuz) => {
    setActiveLight(colorDeLuz);
  };

  return (
    <>
      <div id="app">
        <div id="container">
          <div id="trafficTop" onClick={() => luzClickeada(null)}></div>
          <div
            className={`luzRoja ${activeLight === 'red' ? 'glowRed' : ''}`}
            onClick={() => luzClickeada('red')}
          ></div>
          <div
            className={`luzAmarilla ${activeLight === 'yellow' ? 'glowYellow' : ''}`}
            onClick={() => luzClickeada('yellow')}
          ></div>
          <div
            className={`luzVerde ${activeLight === 'green' ? 'glowGreen' : ''}`}
            onClick={() => luzClickeada('green')}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Semaforo;
