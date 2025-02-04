import { Manager } from "socket.io-client";

export const connectToServer = (): void => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");
  manager.socket("/");
};
