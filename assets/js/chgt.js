var images = new Array();
images[0] = "/assets/img/logos/shoulders.png";
images[1] = "/assets/img/logos/torso.png";
images[2] = "/assets/img/logos/forearm.png";
setInterval("changeImage()", 3000);
var x = 0;

function changeImage() {
  document.getElementById("img").src = images[x];
  x++;
  if (images.length == x) {
    x = 0;
  }
}

// Time v2.0
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  ); // + ":" +
  //(sec < 10 ? ("0" + sec) : sec);
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    cmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return " " + cday + " " + cnum + " " + cmonth;
}
// Set up the clock and date
document.getElementById("time").innerHTML =
 'Today is' + getDate();