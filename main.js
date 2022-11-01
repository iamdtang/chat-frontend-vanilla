// const webSocket = new WebSocket("ws://localhost:4000");
const webSocket = new WebSocket("wss://itp404-chat-backend.herokuapp.com");

wss: webSocket.onopen = () => {
  console.log("WebSocket connected");
};

webSocket.onclose = () => {
  console.error("WebSocket disconnected");
};

webSocket.onerror = (error) => {
  console.error("WebSocket failed to connect", error);
};

webSocket.onmessage = (event) => {
  const blob = event.data;

  // Blob means “Binary Large Object” and it's an opaque representation
  // of a chunk of bytes. Web Browsers implement a Blob object, which is
  // responsible for holding data.
  // https://javascript.plainenglish.io/javascript-blob-why-is-it-useful-20c372dfca00

  blob.text().then((message) => {
    console.log("WebSocket received");

    const li = document.createElement("li");
    li.textContent = message;

    document.getElementById("chat").append(li);
  });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input");
  const message = input.value;
  webSocket.send(message);
  input.value = "";
});
