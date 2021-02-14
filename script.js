$(document).ready(function () { 
    //define variables
    var currentDayEl = $("#currentDay");
    var currentTimeEl = $("#currentTime")
    var saveBtnEl = $(".saveBtn");
    var textAreaEl = $("textarea");
    var currentHour = parseInt(moment().format("H"));
    var todaysDate = moment().format("dddd, " + "MMMM Do YYYY");
    var events = JSON.parse(localStorage.getItem("events")) || [];

    // Current Date display at the top 
    currentDayEl.text(`${todaysDate}`);
    currentTimeEl.text(`${currentHour}`)


    textAreaEl.each(function() {
        var nameAtt = parseInt($(this).attr("name"));

        if (currentHour > nameAtt) {
            $(this).addClass("past");
        } else if (currentHour < nameAtt) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        };
    })

    saveBtnEl.on("click", function() {
        var planEl = $(this).siblings(".description").val();
        var planTime = $(this).siblings(".description").attr("id");

        var planOb = {
            text: planEl,
            time: planTime
        };

        events.push(planOb);
        
        localStorage.setItem("events", JSON.stringify(events));
    });

    for (var i = 0; i < events.length; i++) {
    var currentText = events[i].text;
    var currentTime = events[i].time;

    $(`#${currentTime}`).val(currentText);
}


})

