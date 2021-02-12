$(document).ready(function () { 
    //define variables
    var currentDayEl = $("#currentday");
    var saveBtnEl = $(".saveBtn");
    var textAreaEl = $("textarea");
    var currentHour = parseInt(moment().format("H"));
    var todaysDate = moment().format("ddd, " + "MMMM Do YYYY");
    var plans = JSON.parse(localStorage.getItem("plans")) || [];

    // Current Date display at the top 
    currentDayEl.text(`${todaysDate}`)

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

        plans.push(planOb);
        
        localStorage.setItem("plans", JSON.stringify(plans));
    });

    for (var i = 0; i < plans.length; i++) {
    var currentText = plans[i].text;
    var currentTime = plans[i].time;

    $(`#${currentTime}`).val(currentText);
}


})

