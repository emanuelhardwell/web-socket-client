import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Web Sockets - Client!</h1>

    <br />
    <input type="text" id="jwt-input" placeholder="Enter your JWT..." />
    <button id="send-jwt-button">Send</button>
    
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

const jwtInput: HTMLInputElement = document.querySelector("#jwt-input")!;
const sendJwtButton: HTMLButtonElement =
  document.querySelector("#send-jwt-button")!;

sendJwtButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (jwtInput.value.trim().length <= 1)
    return alert("Please enter the JWT token");

  connectToServer(jwtInput.value);
});
