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

  const messageForm = document.querySelector<HTMLFormElement>("#message-form");
  const messageInput =
    document.querySelector<HTMLInputElement>("#message-input")!;

  messageForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (messageInput?.value.trim().length <= 1) {
      return;
    }

    socket.emit("message_client", {
      id: "client",
      message: messageInput?.value,
    });
    messageInput.value = "";
  });

  socket.on(
    "message_server",
    (payload: { fullname: string; message: string }) => {
      console.log(payload);
      const messagesList = document.querySelector("#messages_list")!;

      const li = document.createElement("li");
      li.textContent = `${payload.fullname}: ${payload.message}`;
      messagesList.appendChild(li);
    }
  );
};
