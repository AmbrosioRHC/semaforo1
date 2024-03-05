import React, { useState } from 'react';

const Semaforo = () => {

  const [activeLight, setActiveLight] = useState(null)

  const handleLight = (luz) => setActiveLight(luz)



  return (
    <>
      <div id="app">
        <button
          onClick={() => handleLight(null)}
        >Apagame</button>
        <button
          onClick={() => handleLight("prendeTodo")}
        >No apretar</button>

        <div id="container" >
          <div id="trafficTop"
            onClick={() => handleLight(null)}
          ></div>
          <div
            className={`luzRoja ${activeLight === "glowRed" ? "glowRed" : null} 
            ${activeLight === "prendeTodo" ? "prendeTodo" : null} `}
            onClick={() => handleLight("glowRed")}
          ></div>
          <div
            className={`luzAmarilla ${activeLight === "glowYellow" ? "glowYellow" : null}
             ${activeLight === "prendeTodo" ? "prendeTodo" : null}`}
            onClick={() => handleLight("glowYellow")}
          ></div>
          <div
            className={`luzVerde ${activeLight === "glowGreen" ? "glowGreen" : null} 
             ${activeLight === "prendeTodo" ? "prendeTodo" : null}`}
            onClick={() => handleLight("glowGreen")}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Semaforo;
