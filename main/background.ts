import { app, globalShortcut, ipcMain } from "electron";
import serve from "electron-serve";

import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";
const isInstanceLock = app.requestSingleInstanceLock();

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1440,
    height: 900,
  });

  if (!isInstanceLock) {
    app.quit();
  } else {
    app.on("second-instance", () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore();
          mainWindow.focus();
        }
      }
    });
  }

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
    mainWindow.webContents.closeDevTools();
    globalShortcut.register("Control+Shift+I", () => {
      return null;
    });

    globalShortcut.register("Control+Shift+R", () => {
      return false;
    });
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    mainWindow.webContents.openDevTools({ mode: "undocked" });
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.once("close-app", () => {
  app.quit();
});

app.on("quit", () => {});
