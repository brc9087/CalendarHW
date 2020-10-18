$(document).ready(function () {
    var currentDay = moment().format('dddd MMMM Do YYYY');
    var hour = moment().hour();
    console.log(hour);
    $("#currentDay").append(currentDay).text;


    $("#btn9").on("click", function (event) {
        event.preventDefault();
        var user = {
            input: userInput
        }
        var userInput = $(this).siblings("textarea").val();

        localStorage.setItem("input", userInput);
        var lastInput = localStorage.getItem("input");
        var JSONFinal = JSON.stringify(lastInput).val();
        $("#text9").append(JSONFinal.input); }
        


 


        // var userInput = $(this).siblings("textarea").val();
        // localStorage.setItem("input", userInput);
        // var newInput = localStorage.getItem(userInput);
        // jsonNewInput = JSON.parse(newInput);
        // $("textarea").append(jsonNewInput);

        // $("textarea").append(newInput);



        // function renderLastRegistered() {
        //     var newInput = localStorage.getItem(userInput);
        //     $(event).newInput.text;
        // }




        // localStorage.setItem("userInput", userInput);

        // newInput.text = localStorage.getItem(userInput);
        // $(".text").innerHTML = localStorage.getItem(userInput)
        // var lastInput = localStorage.getItem("userInput")
        // renderLastRegistered();

        // localStorage.getItem("userInput");
    // function colorCode() {
    //     var time = moment().hour()
    //     // console.log(time)
    //     // if ()

    //     else if ($(".time-block").val() < time) {
    //         $(".time-block").css("background-color", "blue");
    //     }

    //     else {
    //         $(".row").css("background-color", "red");
    //     }
    //     colorCode();
    // }
    })







})