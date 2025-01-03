var home_game_score = "0";
var home_set_score = 0;
var home_match_score = 0;
var visitor_game_score = "0";
var visitor_set_score = 0;
var visitor_match_score = 0;

function saveScoresToLocalStorage() {
    localStorage.setItem("home_game_score", home_game_score);
    localStorage.setItem("home_set_score", home_set_score);
    localStorage.setItem("home_match_score", home_match_score);
    localStorage.setItem("visitor_game_score", visitor_game_score);
    localStorage.setItem("visitor_set_score", visitor_set_score);
    localStorage.setItem("visitor_match_score", visitor_match_score);
}

window.onload = function() {
    home_game_score = localStorage.getItem("home_game_score") || "0";
    home_set_score = parseInt(localStorage.getItem("home_set_score")) || 0;
    home_match_score = parseInt(localStorage.getItem("home_match_score")) || 0;
    visitor_game_score = localStorage.getItem("visitor_game_score") || "0";
    visitor_set_score = parseInt(localStorage.getItem("visitor_set_score")) || 0;
    visitor_match_score = parseInt(localStorage.getItem("visitor_match_score")) || 0;

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

    saveScoresToLocalStorage();
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

    saveScoresToLocalStorage();
}

function undo_home_game_score() {
    if (home_game_score == "15") {
        home_game_score = "0";
    } else if (home_game_score == "30") {
        home_game_score = "15";
    } else if (home_game_score == "40") {
        home_game_score = "30";
    } else if (home_game_score == "AD") {
        home_game_score = "40";
        visitor_game_score = "40";
    } else if (home_game_score == " ") {
        home_game_score = "0";
        visitor_game_score = "0";
        visitor_set_score += 1;
    }
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
    check_visitor_set_score();

    saveScoresToLocalStorage();
}

function undo_visitor_game_score() {
    if (visitor_game_score == "15") {
        visitor_game_score = "0";
    } else if (visitor_game_score == "30") {
        visitor_game_score = "15";
    } else if (visitor_game_score == "40") {
        visitor_game_score = "30";
    } else if (visitor_game_score == "AD") {
        visitor_game_score = "40";
        home_game_score = "40";
    } else if (visitor_game_score == " ") {
        visitor_game_score = "0";
        home_game_score = "0";
        home_set_score += 1;
    }
    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    check_home_set_score();

    saveScoresToLocalStorage();
}

function undo_home_set_score() {
    if (home_set_score > 0) {
        home_set_score -= 1;
        check_visitor_set_score();
        document.getElementById("home_set_score").innerHTML = home_set_score;
        document.getElementById("visitor_set_score").innerHTML = visitor_set_score;

        saveScoresToLocalStorage();
    }
}

function undo_visitor_set_score() {
    if (visitor_set_score > 0) {
        visitor_set_score -= 1;
        check_home_set_score();    
        document.getElementById("home_set_score").innerHTML = home_set_score;
        document.getElementById("visitor_set_score").innerHTML = visitor_set_score;

        saveScoresToLocalStorage();
    }
}

function undo_home_match_score() {
    if (home_match_score > 0) {
        home_match_score -= 1;
        document.getElementById("home_match_score").innerHTML = home_match_score;

        saveScoresToLocalStorage();
    }
}

function undo_visitor_match_score() {
    if (visitor_match_score > 0) {
        visitor_match_score -= 1;
        document.getElementById("visitor_match_score").innerHTML = visitor_match_score;

        saveScoresToLocalStorage();
    }
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
        home_set_score = 0;
        visitor_match_score = 0;
        visitor_set_score = 0;
        document.getElementById("home_match_score").innerHTML = home_match_score;
        document.getElementById("home_set_score").innerHTML = home_set_score;
        document.getElementById("visitor_match_score").innerHTML = visitor_match_score;
        document.getElementById("visitor_set_score").innerHTML = visitor_set_score;

        saveScoresToLocalStorage();
    }
}

function resetScores() {
    home_game_score = "0";
    home_set_score = 0;
    home_match_score = 0;
    visitor_game_score = "0";
    visitor_set_score = 0;
    visitor_match_score = 0;

    document.getElementById("home_game_score").innerHTML = home_game_score;
    document.getElementById("home_set_score").innerHTML = home_set_score;
    document.getElementById("home_match_score").innerHTML = home_match_score;
    document.getElementById("visitor_game_score").innerHTML = visitor_game_score;
    document.getElementById("visitor_set_score").innerHTML = visitor_set_score;
    document.getElementById("visitor_match_score").innerHTML = visitor_match_score;

    localStorage.clear(); // Clear all saved scores
}

var transcript = {};
let recognitionActive = false; // Track recognition state globally
let recognition; // Define recognition globally to avoid re-creating it

function start_stt() {
    if (recognitionActive) {
        console.warn("Speech recognition is already running.");
        return;
    }

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (window.SpeechRecognition) {
        recognition = new SpeechRecognition();

        recognition.interimResults = true; // Capture partial results
        recognition.continuous = true; // Continuous recognition mode

        const textElement = document.getElementById("text");
        const startButton = document.getElementById("startButton");
        const stopButton = document.getElementById("stopButton");

        recognition.addEventListener('result', e => {
            transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            console.log(transcript); // Log the transcript for debugging
        });

        recognition.addEventListener('end', () => {
            if (recognitionActive) {
                recognition.start(); // Restart recognition if active
            } else {
                startButton.disabled = false; // Enable start button
                stopButton.disabled = true;  // Disable stop button
                startButton.textContent = "Start Microphone"; // Reset button text
            }
        });

        recognition.start(); // Start recognition
        recognitionActive = true;
        startButton.textContent = "Listening..."; // Update button text
        startButton.disabled = true; // Disable start button while active
        stopButton.disabled = false; // Enable stop button
    } else {
        console.error("Speech recognition is not supported in this browser.");
        alert("Your browser does not support speech recognition.");
    }
}

function stop_stt() {
    if (recognition && recognitionActive) {
        recognition.stop(); // Stop the recognition process
        recognitionActive = false;

        const startButton = document.getElementById("startButton");
        const stopButton = document.getElementById("stopButton");

        startButton.disabled = false; // Enable start button
        stopButton.disabled = true;  // Disable stop button
        startButton.textContent = "Start Microphone"; // Reset button text

        const home_won = "home";
        const visitor_won = "visitor";
        var feedbackElement = "";

        if (transcript.includes(home_won) && transcript.includes(visitor_won)) {
            feedbackElement = `Both keywords "${home_won}" and "${visitor_won}" were found in the speech transcript.`;
        } else if (transcript.includes(home_won)) {
            feedbackElement = `Keyword "${home_won}" was found in the speech transcript!`;
            add_home_game_score();
        } else if (transcript.includes(visitor_won)) {
            feedbackElement = `Keyword "${visitor_won}" was found in the speech transcript!`;
            add_visitor_game_score();
        } else {
            feedbackElement = `Neither of the keywords "${home_won}" or "${visitor_won}" were found in the speech transcript.`;
        }
        document.getElementById("feedbackElement").innerHTML = feedbackElement;
    } else {
        console.warn("Speech recognition is not active.");
    }
}