//CONSTANT variables

const categories = [
    { 'name': 'General Knowledge', 'code': '9' },
    { 'name': 'Books', 'code': '10' },
    { 'name': 'Film', 'code': '11' },
    { 'name': 'Music', 'code': '12' },
    { 'name': 'Televison', 'code': '14' },
    { 'name': 'Video games', 'code': '15' },
    { 'name': 'Board games', 'code': '16' },
    { 'name': 'Science & Nature', 'code': '17' },
    { 'name': 'Computers', 'code': '18' },
    { 'name': 'Mathematics', 'code': '19' },
    { 'name': 'Mythology', 'code': '20' },
    { 'name': 'Sports', 'code': '21' },
    { 'name': 'Geography', 'code': '22' },
    { 'name': 'History', 'code': '23' },
    { 'name': 'Politics', 'code': '24' },
    { 'name': 'Art', 'code': '25' },
    { 'name': 'Celebrities', 'code': '26' },
    { 'name': 'Animals', 'code': '27' },
    { 'name': 'Vehicles', 'code': '28' },
    { 'name': 'Comics', 'code': '29' },
    { 'name': 'Gadgets', 'code': '30' },
    { 'name': 'Cartoon & Animations', 'code': '32' },
];

const baseUrl = "https://opentdb.com/api.php";

//On window load

window.onload = function() {
    categories.forEach((cat) => { //Put all categories into dropdown
        const tag = `<a class="dropdown-item" onclick="setCategory('${cat["code"]}')" style="cursor: pointer;">${cat["name"]}</a>`;
        document.getElementById("categories").insertAdjacentHTML("beforeend", tag);
    });
}

var categoryCode = "";
var questions = [];
var questionIndex = 0;
var correctAnswerIndex;

var timer = 0;
var correctAnswers = 0;

var getQuestions = function(category, difficulty) { //API call
    const url = baseUrl + `?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            jsonResponse(null, xhr.response);
        } else {
            jsonResponse(status, xhr.response);
        }
    };
    xhr.send();
};

function jsonResponse(status, response) {
    timer = 0;
    questionIndex = 0;
    questions = response.results;

    document.getElementById("start-form").classList.add("hide");

    nextQuestion(0);

    document.getElementById("question-form").classList.remove("hide");

    document.getElementById("counter").classList.remove("hide");


}

function setCategory(selectedCat) {
    categories.forEach((cat) => {
        if (cat["code"] === selectedCat) {
            categoryCode = cat["code"];
            document.getElementById("dropdownMenuButton").innerText = cat["name"];
        }
    });
}

function startGame() {
    if (!["", null, undefined].includes(categoryCode))
        getQuestions(categoryCode, "hard");
}

function endGame() {

}

function answer(index) {
    if (index === correctAnswerIndex) {
        correctAnswers++;
    }
    questionIndex++;
    nextQuestion(questionIndex);
}

function nextQuestion(index) {
    if (index == 9) {
        endGame();
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
}