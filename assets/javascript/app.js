$(document).ready(function () {

    var qs = [
        {
            question: "Name of the drama about the life of southern belle Scarlett O'Hara",
            answer1: "Gone with the Wind",
            answer2: "Overboard",
            answer3: "Vanilla Sky",
            correct: "Gone with the Wind",
            image: "assets/images/GoneWind.gif"
        },

        {
            question: " Christmas comedy film directed by Chris Columbus that stars Macaulay Culkin as Kevin McCallister",
            answer1: "Home Alone",
            answer2: "Gone Fishing",
            answer3: "Die Hard",
            correct: "Home Alone",
            image: "assets/images/homeAlone.gif"
        },
        {
            question: "American television sitcom that revolves around six friends who live in Manhattan, New York City",
            answer1: "Friends",
            answer2: "Desperate Housewives",
            answer3: "Game of Thrones",
            correct: "Friends",
            image: "assets/images/friends.gif"
        },
    ];

    var i = 0;
    var choice;
    var corAnsw = 0;
    var wrAnsw = 0;
    var count = 10;
    var inter;


    function star() {
        const bu = $("<button class='star'>");
        bu.text("START THE GAME");
        $("#form").append(bu);
        $("button").on("click", formQuest);
    }

    function countdown() {

        count--;
        $("#timer").text("Time left: " + count);
        if (count <= 0) {
            clearInterval(inter);
            gameover("Time is out!");
        }


    }


    function formQuest() {
        count = 10;
        $("#timer").text("Time left: " + count);
        inter = setInterval(countdown, 1000);
        $("#form").empty();
        const h = $("<h2>");
        h.text(qs[i].question)
        const formq = $("<form>");
        const radio1 = $("<input type='radio' id='radio1' class='btn' name='movies'>");
        radio1.attr("value", qs[i].answer1);
        const radio1l = $("<label for='radio1'>");
        radio1l.text(qs[i].answer1);
        const radio2 = $("<input type='radio' id='radio2' class='btn' name='movies'>");
        radio2.attr("value", qs[i].answer2);
        const radio2l = $("<label for='radio2'>");
        radio2l.text(qs[i].answer2);

        const radio3 = $("<input type='radio' id='radio3' class='btn' name='movies'>");
        radio3.attr("value", qs[i].answer3);
        const radio3l = $("<label for='radio3'>");
        radio3l.text(qs[i].answer3);
        formq.append(h);
        formq.append(radio1);
        formq.append(radio1l);
        formq.append("<br>");
        formq.append(radio2);
        formq.append(radio2l);
        formq.append("<br>");
        formq.append(radio3);
        formq.append(radio3l);
        formq.append("<br>");
        $("#form").append(formq);
        choice(i);
        i++;

    }


    function choice(i) {
        $(".btn").change(function () {
            clearInterval(inter);
            choicen = $(this).attr("value");
            console.log(choicen);
            checker(i);

        });
    }


    function checker(i) {
        console.log(qs[i].correct);
        $("#form").empty();
        $("#timer").empty();
        if (choicen == qs[i].correct) {
            $("#form").append("<p class='x'>Correct!<p>");
            $("#form").append("<p>It's &quot" + qs[i].correct + "&quot</p>");
            $("#form").append("<img src='" + qs[i].image + "'>");
            corAnsw++;
        }
        else {
            $("#form").append("<p class='x'>Wrong!<p>");
            $("#form").append("<p>Correct answer is &quot" + qs[i].correct + "&quot</p>");
            $("#form").append("<img src='" + qs[i].image + "'>");

            wrAnsw++;
        }

        lengthCheck(i);
    }


    function lengthCheck(i) {
        console.log(i);
        if (i < qs.length - 1) { setTimeout(formQuest, 3000); }
        else {
            setTimeout(function () { gameover("The questions are over!"); }, 3000);
            console.log("Game Over");
        }

    }


    function gameover(t) {
        $("#timer").empty();
        $("#form").empty();
        $("#form").append("<p class='y'>" + t + "</p>");
        $("#form").append("<p class='x'>Correct answers: " + corAnsw + "</p>");
        $("#form").append("<p class='x'>Wrong answers: " + wrAnsw + "</p>");
        i = 0;
        corAnsw = 0;
        wrAnsw = 0;
        const bu2 = $("<button class='star'>");
        bu2.text("START OVER?");
        $("#form").append(bu2);
        $("button").on("click", formQuest);


    }

    star();

});
