import React, { useState } from 'react';

const Semaforo = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (light) => {
    setActiveLight(light);
  };

  return (
    <>
      <div id="app">
        <div id="container">
          <div id="trafficTop" onClick={() => handleLightClick(null)}></div>
          <div
            className={`luzRoja ${activeLight === 'red' ? 'glow' : ''}`}
            onClick={() => handleLightClick('red')}
          ></div>
          <div
            className={`luzAmarilla ${activeLight === 'yellow' ? 'glow' : ''}`}
            onClick={() => handleLightClick('yellow')}
          ></div>
          <div
            className={`luzVerde ${activeLight === 'green' ? 'glow' : ''}`}
            onClick={() => handleLightClick('green')}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Semaforo;
