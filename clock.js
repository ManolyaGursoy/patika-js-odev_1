let username = prompt("Adınız ne idi?", "İsminizi giriniz...");

document.getElementById("myName").innerHTML = username;

let clock = document.querySelector("#myClock");

setInterval(() => {
  showTime()
}, 1);

function showTime() {
    const weekDays = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = weekDays[today.getDay()];
  
    hour = prependZero(hour);
    minute = prependZero(minute);
    second = prependZero(second);
    clock.innerHTML = ` ${hour}:${minute}:${second} ${day}`;
               
}
function prependZero(number) {
    if (number < 10) {number = `0${number}`;};  // put zero in front of numbers that are less than ten
    return number;
  }
showTime();