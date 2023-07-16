function conversion(event) {
  event.preventDefault();
  let cel = document.querySelector(".temp");
  cel.innerHTML = "72";
}
function conversion2() {
  let cel = document.querySelector(".temp");
  cel.innerHTML = "22";
}
function search(event) {
  let city = document.querySelector("#searchCity");
  console.log(city.value);
  let h2 = document.querySelector("h2");
  h2.innerHTML = city.value;
}
let form = document.querySelector("#search");
form.addEventListener("click", search);
let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", conversion2);
let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", conversion);
let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = document.querySelector(".time");
date.innerHTML = `${
  days[time.getDay()]
} ${time.getHours()}:${time.getMinutes()}`;
