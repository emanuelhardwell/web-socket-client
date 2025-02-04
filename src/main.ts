import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Sockets - Client!</h1>
    <p id="server-status">Offline.</p>
    <ul id="clients_list">
    </ul>
  </div>
`;

connectToServer();
