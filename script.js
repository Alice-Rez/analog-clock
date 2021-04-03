let clockSVG = document.querySelector("svg");
const offsetSVG = {
  seconds: 123,
  hours: -16,
  minutes: -120,
};
let clockCSS = document.querySelector(".clock-css");
const offsetCSS = {
  seconds: -90,
  minutes: -90,
  hours: -90,
};

setInterval(() => {
  getTime(clockSVG, "", offsetSVG);
}, 1000);

setInterval(() => {
  getTime(clockCSS, "-css", offsetCSS);
}, 1000);

function getTime(element, specification, offset) {
  let date = new Date();

  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  console.log(hours, minutes, seconds);

  if (hours >= 12) {
    hours -= 12;
  }

  element.style.setProperty(
    "--seconds" + specification,
    offset.seconds + 6 * seconds + "deg"
  );
  element.style.setProperty(
    "--hours" + specification,
    offset.hours + 30 * hours + "deg"
  );
  element.style.setProperty(
    "--minutes" + specification,
    offset.minutes + 6 * minutes + "deg"
  );
}
