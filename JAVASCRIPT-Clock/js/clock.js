let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
 ];

let name = prompt("Please write your name:");
let n = document.querySelector("#myName");
if (name) {
   n.innerHTML = `${name}`;
} else {
   alert("Please enter a name:");
   location.reload();
}

function time() {
   let time = new Date();
   let day = days[time.getDay()];
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds();
   document.querySelector(
      "#myClock"
   ).innerHTML = `${hour} : ${min} : ${sec} ${day}`;
}

setInterval(time, 1000);