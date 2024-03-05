import React, { useState } from 'react';

const Semaforo = () => {

const [activeLight, setActiveLight] = useState (null);

const handleLight = (luz) => {setActiveLight(luz)

}

  return (
    <>
      <div id="app">
        <div id="container" >
          <div id="trafficTop" className={activeLight === "" ? "" : null} 
          onClick= {() => handleLight("")}
          ></div>
          <div
            className={`luzRoja ${activeLight === "glowRed" ? "glowRed" : ""}`} 
            onClick={() => handleLight("glowRed")}
          ></div>
          <div
            className={`luzAmarilla ${activeLight === "glowYellow" ? "glowYellow" : ""} `}
            onClick= {()=> handleLight("glowYellow")}
          ></div>
          <div
            className= {`luzVerde ${activeLight === "glowGreen" ? "glowGreen" : "" }`}
            onClick= {() => handleLight("glowGreen")}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Semaforo;
