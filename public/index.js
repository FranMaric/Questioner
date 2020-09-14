var print = (_a) => console.log(_a);

//CONSTANT variables
const NUMBER_OF_QUESTIONS = 10;

const categories = {
    'Random': '',
    'General Knowledge': '9',
    'Books': '10',
    'Film': '11',
    'Music': '12',
    'Televison': '14',
    'Video games': '15',
    'Board games': '16',
    'Science & Nature': '17',
    'Computers': '18',
    'Mathematics': '19',
    'Mythology': '20',
    'Sports': '21',
    'Geography': '22',
    'History': '23',
    'Politics': '24',
    'Art': '25',
    'Celebrities': '26',
    'Animals': '27',
    'Vehicles': '28',
    'Comics': '29',
    'Gadgets': '30',
    'Cartoon & Animations': '32',
};

const baseUrl = "https://opentdb.com/api.php";

const fetchSessionTokenUrl = "https://opentdb.com/api_token.php?command=request";

//PROGRAM \/

//On window load
window.onload = function() {
    //Put all categories into dropdown
    Object.keys(categories).forEach((key) => {
        const tag = `<a class="dropdown-item" onclick="setCategory('${categories[key]}')" style="cursor: pointer;">${key}</a>`;
        document.getElementById("categories").insertAdjacentHTML("beforeend", tag);
    });

    checkCookie("sessionToken");
}

var categoryCode = "";
var difficulty = "";
var sessionToken = "";

var questions = [];
var questionIndex = 0;
var correctAnswerIndex;

var timeCounter = 0;
var correctAnswers = 0;

var timer;

//API call
var callAPI = function(url, responseFunc) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            responseFunc(null, xhr.response);
        } else {
            responseFunc(status, xhr.response);
        }
    };
    xhr.send();
};

function questionResponse(status, response) {
    if (status != null || response.results.length != NUMBER_OF_QUESTIONS || response.response_code === 1) {
        document.getElementById("start-form").classList.add("hide");
        document.getElementById("question-form").classList.add("hide");

        document.getElementById("error").classList.remove("hide");
        return;
    }

    questionIndex = 0;
    questions = response.results;

    document.getElementById("start-form").classList.add("hide");

    showQuestion(0);

    startTimer();

    document.getElementById("question-form").classList.remove("hide");

    document.getElementById("outter-semafor").classList.remove("hide");


}

function sessionTokenResponse(status, response) {
    if (status != null || response.response_code === 1) {
        return;
    }

    sessionToken = response.token;

    setCookie("sessionToken", sessionToken, 0.25);
    print(`Session token from api: ${sessionToken}`);
}

function checkCookie() {
    var cookieData = getCookie("sessionToken");

    if (cookieData != "") sessionToken = cookieData;
    else callAPI(fetchSessionTokenUrl, sessionTokenResponse);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCategory(selectedCat) {
    Object.keys(categories).forEach((key) => {
        if (categories[key] === selectedCat) {
            categoryCode = selectedCat;
            document.getElementById("dropdownMenuButtonCategory").innerText = key;
        }
    });
}

function setDifficulty(diff) {
    if (["easy", "medium", "hard"].includes(diff)) {
        difficulty = diff;
        document.getElementById("dropdownMenuButtonnDifficulty").innerText = diff.charAt(0).toUpperCase() + diff.slice(1);
        db.collection('tables').doc(diff).get().then((e) => {
            var top10 = e.data()['top10'];
            if (top10 != undefined || top10 != null) {
                document.getElementById('scoreboard-body').innerHTML = '';
                top10.forEach((scoreRow) => {
                    var tableRow = `
                <tr>
                    <td>${scoreRow['name']}</td>
                    <th scope="row">${scoreRow['score']}</th>
                </tr>`;
                    document.getElementById('scoreboard-body').insertAdjacentHTML('beforeend', tableRow);
                });
            }
        });
    }
}

function startGame() {
    if (!["", " ", null, undefined].includes(categoryCode) && ["easy", "medium", "hard"].includes(difficulty)) {
        //Get questions through API
        const url = baseUrl + `?amount=${NUMBER_OF_QUESTIONS}&category=${categoryCode}&difficulty=${difficulty}&type=multiple&token=${sessionToken}`;
        callAPI(url, questionResponse);
    }
}

function endGame() {
    if (timeCounter < 5000) {
        document.getElementById("finish").innerText = "This isn't a valid game, something suspicious is going on";
    } else {
        var minutes = Math.floor((timeCounter % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (timeCounter % (1000 * 60)) / 1000;

        var score = Math.floor(correctAnswers ** 1.5 / (NUMBER_OF_QUESTIONS * timeCounter) * 10 ** 8)

        document.getElementById("finish").innerText =
            `You have completed the questioner.
        ${correctAnswers}/${NUMBER_OF_QUESTIONS} in ${minutes} min and ${seconds} sec
        Your score: ${score}
        `;
    }

    document.getElementById("question-form").classList.add('hide');
    document.getElementById("counter").classList.add('hide');
    document.getElementById("question-mark").classList.add('hide');

    document.getElementById("finish").classList.remove('hide');
    document.getElementById("again").classList.remove('hide');


    clearInterval(timer);
}

function answer(index) {
    if (index === correctAnswerIndex) correctAnswers++;

    if (questionIndex === NUMBER_OF_QUESTIONS - 1) {
        endGame();
        return;
    }

    questionIndex++;
    showQuestion(questionIndex);
}

function showQuestion(index) {
    if (index >= NUMBER_OF_QUESTIONS || index < 0) {
        print("Index out of range in showQuestion()");
        return;
    }

    document.getElementById("question").innerText = questions[index]["question"];

    correctAnswerIndex = Math.floor(Math.random() * 4);
    document.getElementById(`answer-btn-${correctAnswerIndex}`).innerText = questions[index]["correct_answer"];

    wrongAnswers = questions[index]["incorrect_answers"];

    for (var i = 0; i < 4; i++)
        if (i != correctAnswerIndex)
            document.getElementById(`answer-btn-${i}`).innerText = wrongAnswers.splice(Math.floor(Math.random() * wrongAnswers.length), 1);;

    document.getElementById("counter").innerText = `${correctAnswers}/${questionIndex}`;
    document.getElementById("question-mark").innerText = `${questionIndex}.`;
}

//Counter
function startTimer() {
    timeCounter = 0;

    timer = setInterval(function() {
        timeCounter += 10;
        if (timeCounter % 100 === 0) {
            var minutes = Math.floor((timeCounter % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = (timeCounter % (1000 * 60)) / 1000;

            if (Math.floor(seconds) === seconds) {
                seconds = seconds.toString() + '.0';
            }

            document.getElementById("time-counter").innerHTML = minutes + " min " + seconds + ' sec';
        }
    }, 10);
}