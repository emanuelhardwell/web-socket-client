import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Sockets - Client!</h1>
    <p id="server-status">Offline.</p>
    <ul id="clients_list">
    </ul>

    <br />
    <form id="message-form">
    <input type="text" id="message-input" placeholder="Enter your message..." />
    </form>

    <br />
    <ul id="messages_list"/>
  </div>
`;

connectToServer();
