const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels`;});


const date = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[date.getDay()];

const currentTimeUTC = date.toUTCString();

document.getElementById("currentDay").innerHTML = currentDay;
document.getElementById("currentTimeUTC").innerHTML = currentTimeUTC;

setInterval(updateDateTime, 1000);
