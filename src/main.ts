import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Sockets - Client!</h1>
    <p id="server-status">Offline.</p>
  </div>
`;

connectToServer();
