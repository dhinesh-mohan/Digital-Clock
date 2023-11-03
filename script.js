let day = document.getElementById("day");
let time = document.getElementById("time");
let midday = document.getElementById("midday");

const clock = setInterval(function calctime() {
  let d = new Date();
  let hr = d.getHours();
  let mn = d.getMinutes();
  let sc = d.getSeconds();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  day.textContent = days[d.getDay()];

  middayValue = hr >= 12 ? "PM" : "AM";

  if (hr == 0) hr = 12;
  else if (hr > 12) hr -= 12;

  hr = hr < 10 ? "0" + hr : hr;
  mn = mn < 10 ? "0" + mn : mn;
  sc = sc < 10 ? "0" + sc : sc;

  time.textContent = hr + ":" + mn + ":" + sc;
  midday.textContent = middayValue;
}, 1000);
