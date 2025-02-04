import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Sockets - Client!</h1>
    <p>Offline.</p>
  </div>
`;

connectToServer();
