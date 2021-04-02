let clock = document.querySelector("svg");
let offsetSeconds = 123;
let offsetHours = -16;
let offsetMinutes = -120;

setInterval(getTime, 1000);

function getTime() {
  let date = new Date();

  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours >= 12) {
    hours -= 12;
  }

  clock.style.setProperty("--seconds", offsetSeconds + 6 * seconds + "deg");
  clock.style.setProperty("--hours", offsetHours + 30 * hours + "deg");
  clock.style.setProperty("--minutes", offsetMinutes + 6 * minutes + "deg");

  console.log(seconds, hours, minutes);
  //   requestAnimationFrame(getTime);
}
