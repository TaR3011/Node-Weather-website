// console.log("Client sude javascript file is loaded!");

// fetch("http://localhost:3000/weather?address=boston").then((res) => {
//   res.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const sendFetch = async (input) => {
  const res = await fetch(`/weather?address=${input}`);
  const data = await res.json();

  if (data.error) {
    return { error: data.error };
  } else {
    return { location: data.location, forecast: data.forecast };
  }
};

const weatherForm = document.querySelector("button");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "";

weatherForm.addEventListener("click", async (event) => {
  event.preventDefault();
  const input = search.value.toString();

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${input}`).then((res) =>
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = "";
        messageTwo.textContent = `${data.error}`;
      } else {
        messageOne.textContent = `${data.location} ${data.forecast}`;
        messageTwo.textContent = "";
      }
    })
  );
});
