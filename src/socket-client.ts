import { Manager, Socket } from "socket.io-client";

export const connectToServer = (): void => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");
  const socket = manager.socket("/");
  addEventListeners(socket);
};

export const addEventListeners = (socket: Socket) => {
  const serverStatus = document.querySelector("#server-status")!;
  const clientsList = document.querySelector("#clients_list")!;

  socket.on("connect", () => {
    serverStatus.textContent = "Connected.";
  });

  socket.on("disconnect", () => {
    serverStatus.textContent = "DisConnected.";
  });

  socket.on("clients_connected", (clientsIds: string[]) => {
    let clients = "";
    clientsIds.forEach((clientID) => {
      clients += `<li>${clientID}</li>`;
    });

    clientsList.innerHTML = clients;
  });
};
