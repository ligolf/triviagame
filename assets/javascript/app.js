
// var seconds = 40;
var intervalId;
var wrongAnswers = 0;
var correctAnswers = 0;
var unanswered = 0;

window.onload = function () {

    var cc = 45;

    var interval = setInterval(function () {
        document.getElementById("display").innerHTML = --cc;

        if (cc == 0) {
            clearInterval(interval);

            if ($('input[name=mustang]:checked').val() === "C") {
                correctAnswers++;
            }
            else if ($('input[name=mustang]:checked').val() === "W") {
                wrongAnswers++;
            }
            else {
                unanswered++;
            }

            if ($('input[name=pontiac]:checked').val() === "C") {
                correctAnswers++;
            }
            else if ($('input[name=pontiac]:checked').val() === "W") {
                wrongAnswers++;
            }
            else {
                unanswered++;
            }

            if ($('input[name=ford]:checked').val() === "C") {
                correctAnswers++;
            }
            else if ($('input[name=ford]:checked').val() === "W") {
                wrongAnswers++;
            }
            else {
                unanswered++;
            }

            if ($('input[name=air]:checked').val() === "C") {
                correctAnswers++;
            }
            else if ($('input[name=air]:checked').val() === "W") {
                wrongAnswers++;
            }
            else {
                unanswered++;
            }

            if ($('input[name=fuel]:checked').val() === "C") {
                correctAnswers++;
            }
            else if ($('input[name=fuel]:checked').val() === "W") {
                wrongAnswers++;
            }
            else {
                unanswered++;
            }

            console.log(correctAnswers);
            console.log(wrongAnswers);
            console.log(unanswered);

            $(".container").html("<style> * { text-align: center;color: rgb(245, 3, 3);}  </style>" + "<br> <br> <h1>Car Trivia</h1> <br> <br> <br> <h2>Correct Answers: " + correctAnswers + "</h2>" + "<h2> Wrong Answers: " + wrongAnswers + "</h2>" + "<h2> Unanswered: " + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

        }
    }, 1000);
};

function endTimer() {
    clearInterval(intervalId);
    //tracking answers 

    if ($('input[name=mustang]:checked').val() === "C") {
        correctAnswers++;
    }
    else if ($('input[name=mustang]:checked').val() === "W") {
        wrongAnswers++;
    }
    else {
        unanswered++;
    }

    if ($('input[name=pontiac]:checked').val() === "C") {
        correctAnswers++;
    }
    else if ($('input[name=pontiac]:checked').val() === "W") {
        wrongAnswers++;
    }
    else {
        unanswered++;
    }

    if ($('input[name=ford]:checked').val() === "C") {
        correctAnswers++;
    }
    else if ($('input[name=ford]:checked').val() === "W") {
        wrongAnswers++;
    }
    else {
        unanswered++;
    }

    if ($('input[name=air]:checked').val() === "C") {
        correctAnswers++;
    }
    else if ($('input[name=air]:checked').val() === "W") {
        wrongAnswers++;
    }
    else {
        unanswered++;
    }

    if ($('input[name=fuel]:checked').val() === "C") {
        correctAnswers++;
    }
    else if ($('input[name=fuel]:checked').val() === "W") {
        wrongAnswers++;
    }
    else {
        unanswered++;
    }

    console.log(correctAnswers);
    console.log(wrongAnswers);
    console.log(unanswered);
};


$(".container").on("click", "#submit", function () {
    endTimer();

    $(".container").html("<style> * { text-align: center;color: rgb(245, 3, 3);}  </style>" + "<br> <br> <h1>Car Trivia</h1> <br> <br> <br> <h2>Correct Answers: " + correctAnswers + "</h2>" + "<h2> Wrong Answers: " + wrongAnswers + "</h2>" + "<h2> Unanswered: " + unanswered + "</h2> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

});
// $("document").on("click", "#start", function () {
//     run();
// });








