var home_game_score = "0";
var home_set_score = 0;
var visitor_game_score = "0";
var visitor_set_score = 0;

window.onload = function() {
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
}

function add_home_game_score() {
    if (home_game_score == "0") {
        home_game_score = "15";
    } else if (home_game_score == "15") {
        home_game_score = "30";
    } else if (home_game_score == "30") {
        home_game_score = "40";
    } else if (home_game_score == "40" && visitor_game_score != "40") {
        home_game_score = "0";
        visitor_game_score = "0";
        home_set_score += 1;
    } else if (home_game_score == "40" && visitor_game_score == "40") {
        home_game_score = "AD";
        visitor_game_score = " ";
    } else if (home_game_score == "AD") {
        home_game_score = "0";
        visitor_game_score = "0";
        home_set_score += 1;
    } else if (home_game_score == " ") {
        home_game_score = "40";
        visitor_game_score = "40";
    }
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
}


function add_visitor_game_score() {
    if (visitor_game_score == "0") {
        visitor_game_score = "15";
    } else if (visitor_game_score == "15") {
        visitor_game_score = "30";
    } else if (visitor_game_score == "30") {
        visitor_game_score = "40";
    } else if (visitor_game_score == "40" && home_game_score != "40") {
        visitor_game_score = "0";
        home_game_score = "0";
        visitor_set_score += 1;
    } else if (visitor_game_score == "40" && home_game_score == "40") {
        visitor_game_score = "AD";
        home_game_score = " ";
    } else if (visitor_game_score == "AD") {
        visitor_game_score = "0";
        home_game_score = "0";
        visitor_set_score += 1;
    } else if (visitor_game_score == " ") {
        visitor_game_score = "40";
        home_game_score = "40";
    }
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
}