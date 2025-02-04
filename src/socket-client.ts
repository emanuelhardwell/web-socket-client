import { Manager, Socket } from "socket.io-client";

export const connectToServer = (): void => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");
  const socket = manager.socket("/");
  addEventListeners(socket);
};

export const addEventListeners = (socket: Socket) => {
  const serverStatus = document.querySelector("#server-status")!;
  socket.on("connect", () => {
    serverStatus.textContent = "Connected.";
  });

  socket.on("disconnect", () => {
    serverStatus.textContent = "DisConnected.";
  });
};
