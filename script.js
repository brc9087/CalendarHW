$(document).ready(function () {
    //define variables
    var currentDayEl = $("#currentDay");
    var currentTimeEl = $("#currentTime")
    var saveBtnEl = $(".saveBtn");
    var textAreaEl = $("textarea");
    var currentHour = parseInt(moment().format("H"));
    var currentTimePrint = moment().format('LT');
    var todaysDate = moment().format("dddd, " + "MMMM Do YYYY");
    var events = JSON.parse(localStorage.getItem("events")) || [];

    // Current Date display at the top + hour INT
    currentDayEl.text(todaysDate);
    currentTimeEl.text(currentTimePrint)

    // uses name attr to change background color for past, present, future
    textAreaEl.each(function () {
        var nameTime = parseInt($(this).attr("name"));

        if (currentHour > nameTime) {
            $(this).addClass("past");
        } else if (currentHour < nameTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        };
    })



    //save button saves input information
    saveBtnEl.on("click", function () {
        var planEl = $(this).siblings(".description").val();
        var planTime = $(this).siblings(".description").attr("id");

        var planOb = {
            text: planEl,
            time: planTime
        };

        events.push(planOb);

        localStorage.setItem("events", JSON.stringify(events));
    });

    //loops through events and prints current text
    for (var i = 0; i < events.length; i++) {
        var currentText = events[i].text;
        var currentTime = events[i].time;

        $(`#${currentTime}`).val(currentText);
    }


})

