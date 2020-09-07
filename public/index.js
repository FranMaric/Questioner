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

var getQuestions = function(category, difficulty) {
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
    console.log(response.results);
}

var category;

function setCategory(selectedCat) {
    categories.forEach((cat) => {
        if (cat["code"] === selectedCat) {
            category = cat["code"];
            document.getElementById("dropdownMenuButton").innerText = cat["name"];
        }
    });
}

window.onload = function() {
    categories.forEach((cat) => {
        const tag = `<a class="dropdown-item" onclick="setCategory('${cat["code"]}')" style="cursor: pointer;">${cat["name"]}</a>`;
        document.getElementById("categories").insertAdjacentHTML("beforeend", tag);
    });
}
getQuestions(10, "hard");