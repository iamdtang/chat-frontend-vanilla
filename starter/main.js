document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input");
  const message = input.value;

  console.log(message);

  input.value = "";
});
