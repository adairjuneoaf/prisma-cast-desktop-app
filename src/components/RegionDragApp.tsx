import React from "react";

import { ipcRenderer } from "electron";

import { Container, CustomControlsWindow } from "../styles/components/RegionDragApp";

const RegionDragApp: React.FC = () => {
  function minimizeApp() {
    ipcRenderer.send("minimize-app");
  }

  function maximizeApp() {
    ipcRenderer.send("maximize-app");
  }

  function closeApp() {
    ipcRenderer.send("close-app");
  }

  return (
    <Container>
      <CustomControlsWindow>
        <button className="minimize" onClick={minimizeApp}>
          <img src="/svg/minimize.svg" alt="--" />
        </button>
        <button className="maximize" onClick={maximizeApp}>
          <img src="/svg/maximize.svg" alt="||" />
        </button>
        <button className="close" onClick={closeApp}>
          <img src="/svg/close.svg" alt="X" />
        </button>
      </CustomControlsWindow>
    </Container>
  );
};

export default RegionDragApp;
