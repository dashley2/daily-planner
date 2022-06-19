var currentDayE1 = document.getElementById("currentDay");

var currentDate = moment().format("dddd, MMMM Do");
currentDayE1.innerText=currentDate;

var currentTime = moment().format("hA");

function timeColor(){
    switch (currentTime) {
        case "12AM":
        case "1AM":
        case "2AM":
        case "3AM":
        case "4AM":
        case "5AM":
        case "6AM":
        case "7AM":
        case "8AM":
            $("#hour9").addClass("future");
            $("#hour10").addClass("future");
            $("#hour11").addClass("future");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "9AM":
            $("#hour9").addClass("present");
            $("#hour10").addClass("future");
            $("#hour11").addClass("future");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "10AM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("present");
            $("#hour11").addClass("future");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "11AM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("present");
            $("#hour12").addClass("future");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "12PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("present");
            $("#hour1").addClass("future");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "1PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("present");
            $("#hour2").addClass("future");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "2PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("present");
            $("#hour3").addClass("future");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "3PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("present");
            $("#hour4").addClass("future");
            $("#hour5").addClass("future");
            break;

        case "4PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("past");
            $("#hour4").addClass("present");
            $("#hour5").addClass("future");
            break;

        case "5PM":
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("past");
            $("#hour4").addClass("past");
            $("#hour5").addClass("present");
            break;

        default:
            $("#hour9").addClass("past");
            $("#hour10").addClass("past");
            $("#hour11").addClass("past");
            $("#hour12").addClass("past");
            $("#hour1").addClass("past");
            $("#hour2").addClass("past");
            $("#hour3").addClass("past");
            $("#hour4").addClass("past");
            $("#hour5").addClass("past");
            break;
    };
};

function saveInputs9(){
    var input = $("#hour9").val().trim();
    localStorage.setItem("9AM", input);
};
$("#btn9").on("click",saveInputs9);

function saveInputs10(){
    var input = $("#hour10").val().trim();
    localStorage.setItem("10AM", input);
};
$("#btn10").on("click",saveInputs10);

function saveInputs11(){
    var input = $("#hour11").val().trim();
    localStorage.setItem("11AM", input);
};
$("#btn11").on("click",saveInputs11);

function saveInputs12(){
    var input = $("#hour12").val().trim();
    localStorage.setItem("12PM", input);
};
$("#btn12").on("click",saveInputs12);

function saveInputs1(){
    var input = $("#hour1").val().trim();
    localStorage.setItem("1PM", input);
};
$("#btn1").on("click",saveInputs1);

function saveInputs2(){
    var input = $("#hour2").val().trim();
    localStorage.setItem("2PM", input);
};
$("#btn2").on("click",saveInputs2);

function saveInputs3(){
    var input = $("#hour3").val().trim();
    localStorage.setItem("3PM", input);
};
$("#btn3").on("click",saveInputs3);

function saveInputs4(){
    var input = $("#hour4").val().trim();
    localStorage.setItem("4PM", input);
};
$("#btn4").on("click",saveInputs4);

function saveInputs5(){
    var input = $("#hour5").val().trim();
    localStorage.setItem("5PM", input);
};
$("#btn5").on("click",saveInputs5);

function loadInputs(){
    $("#hour9").val(localStorage.getItem("9AM"));
    $("#hour10").val(localStorage.getItem("10AM"));
    $("#hour11").val(localStorage.getItem("11AM"));
    $("#hour12").val(localStorage.getItem("12PM"));
    $("#hour1").val(localStorage.getItem("1PM"));
    $("#hour2").val(localStorage.getItem("2PM"));
    $("#hour3").val(localStorage.getItem("3PM"));
    $("#hour4").val(localStorage.getItem("4PM"));
    $("#hour5").val(localStorage.getItem("5PM"));
};

timeColor();
loadInputs();