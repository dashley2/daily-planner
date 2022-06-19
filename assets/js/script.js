var currentDayE1 = document.getElementById("currentDay");

var currentDate = moment().format("dddd, MMMM Do");
currentDayE1.innerText=currentDate;

var currentTime = moment().format("h:mmA");
console.log(currentTime);