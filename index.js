var home_game_score = "0";
var home_set_score = 0;
var home_match_score = 0;
var visitor_game_score = "0";
var visitor_set_score = 0;
var visitor_match_score = 0;

window.onload = function() {
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("home_match_score").innerHTML = home_match_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
    document.getElementById("visitor_match_score").innerHTML = visitor_match_score;
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
    check_home_set_score();
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
    check_visitor_set_score();
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
}

function check_home_set_score() {
    if (home_set_score >= 6 && (home_set_score - visitor_set_score) > 1) {
        home_set_score = 0;
        visitor_set_score = 0;
        home_match_score += 1;
    }
    document.getElementById("home_match_score").innerHTML = home_match_score;
    check_match_score();
}

function check_visitor_set_score() {
    if (visitor_set_score >= 6 && (visitor_set_score - home_set_score) > 1) {
        visitor_set_score = 0;
        home_set_score = 0;
        visitor_match_score += 1;
    }
    document.getElementById("visitor_match_score").innerHTML = visitor_match_score;
    check_match_score();
}

function check_match_score() {
    if (home_match_score == 2 || visitor_match_score == 2) {
        if (home_match_score == 2) {
            alert("Home player won the match!");
        } else if (visitor_match_score == 2) {
            alert("Visiting player won the match!");
        }
        home_match_score = 0;
        visitor_match_score = 0;
        document.getElementById("home_match_score").innerHTML = home_match_score;
        document.getElementById("visitor_match_score").innerHTML = visitor_match_score;
    }
}