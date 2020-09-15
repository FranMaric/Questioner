var _0x3838 = ['beforeend', 'length', 'random', 'toLocaleString', 'https://opentdb.com/api_token.php?command=request', 'expires=', 'responseType', '\x20sec\x0a\x20\x20\x20\x20\x20\x20\x20\x20Your\x20score:\x20', 'counter', 'setTime', 'get', 'Index\x20out\x20of\x20range\x20in\x20showQuestion()', 'top10', 'remove', 'then', 'onload', 'hard', 'charAt', 'time-counter', 'medium', 'scoreboard-body', 'You\x20have\x20completed\x20the\x20questioner.\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'categories', '</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'hide', 'finish', 'toString', '\x20sec', 'This\x20isn\x27t\x20a\x20valid\x20game,\x20something\x20suspicious\x20is\x20going\x20on', 'token', '<a\x20class=\x22dropdown-item\x22\x20onclick=\x22setCategory(\x27', 'answer-btn-', 'push', 'getElementById', 'outter-semafor', 'includes', 'log', 'set', 'question-mark', '\x20min\x20and\x20', 'insertAdjacentHTML', 'collection', 'data', 'response', 'sessionToken', 'dropdownMenuButtonCategory', 'tables', 'slice', 'pop', 'GET', 'error', 'value', 'incorrect_answers', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', 'response_code', 'open', 'toUpperCase', 'indexOf', 'dropdownMenuButtonnDifficulty', '&type=multiple&token=', 'innerText', 'again', 'splice', 'question-form', 'status', 'enter-score', 'cookie', 'keys', 'split', '&difficulty=', 'substring', 'forEach', 'score', 'doc', 'classList', 'name', 'start-form', 'https://opentdb.com/api.php', 'innerHTML', '\x20min\x20', 'floor', 'correct_answer', '?amount=', 'easy', 'question', 'add', 'results', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20'];
(function(_0x5bfd0b, _0x3838d6) {
    var _0x1281d3 = function(_0x51635b) { while (--_0x51635b) { _0x5bfd0b['push'](_0x5bfd0b['shift']()); } };
    _0x1281d3(++_0x3838d6);
}(_0x3838, 0x1e6));
var _0x1281 = function(_0x5bfd0b, _0x3838d6) { _0x5bfd0b = _0x5bfd0b - 0x0; var _0x1281d3 = _0x3838[_0x5bfd0b]; return _0x1281d3; };
var print = _0x51635b => console[_0x1281('0x4e')](_0x51635b);
const NUMBER_OF_QUESTIONS = 0xa,
    categories = { 'Random': '', 'General\x20Knowledge': '9', 'Books': '10', 'Film': '11', 'Music': '12', 'Televison': '14', 'Video\x20games': '15', 'Board\x20games': '16', 'Science\x20&\x20Nature': '17', 'Computers': '18', 'Mathematics': '19', 'Mythology': '20', 'Sports': '21', 'Geography': '22', 'History': '23', 'Politics': '24', 'Art': '25', 'Celebrities': '26', 'Animals': '27', 'Vehicles': '28', 'Comics': '29', 'Gadgets': '30', 'Cartoon\x20&\x20Animations': '32' },
    baseUrl = _0x1281('0x1f'),
    fetchSessionTokenUrl = _0x1281('0x2e');
window[_0x1281('0x39')] = function() {
    setDifficulty(_0x1281('0x25')), Object['keys'](categories)[_0x1281('0x19')](_0x1b4e0f => {
        const _0x348371 = _0x1281('0x48') + categories[_0x1b4e0f] + '\x27)\x22\x20style=\x22cursor:\x20pointer;\x22>' + _0x1b4e0f + '</a>';
        document[_0x1281('0x4b')](_0x1281('0x40'))[_0x1281('0x52')]('beforeend', _0x348371);
    }), checkCookie(_0x1281('0x56'));
};
var categoryCode = '',
    difficulty = '',
    sessionToken = '',
    questions = [],
    questionIndex = 0x0,
    correctAnswerIndex, top10 = [],
    score, timeCounter = 0x0,
    correctAnswers = 0x0,
    timer, callAPI = function(_0xa7744c, _0x52a1f3) {
        var _0xdc3e38 = new XMLHttpRequest();
        _0xdc3e38[_0x1281('0x9')](_0x1281('0x3'), _0xa7744c, !![]), _0xdc3e38[_0x1281('0x30')] = 'json', _0xdc3e38['onload'] = function() {
            var _0xe996de = _0xdc3e38[_0x1281('0x12')];
            _0xe996de === 0xc8 ? _0x52a1f3(null, _0xdc3e38['response']) : _0x52a1f3(_0xe996de, _0xdc3e38[_0x1281('0x55')]);
        }, _0xdc3e38['send']();
    };

function questionResponse(_0x37909d, _0x3c5d41) {
    if (_0x37909d != null || _0x3c5d41['results']['length'] != NUMBER_OF_QUESTIONS || _0x3c5d41[_0x1281('0x8')] === 0x1) { document[_0x1281('0x4b')]('start-form')[_0x1281('0x1c')]['add'](_0x1281('0x42')), document[_0x1281('0x4b')](_0x1281('0x11'))[_0x1281('0x1c')][_0x1281('0x27')](_0x1281('0x42')), document[_0x1281('0x4b')](_0x1281('0x4'))['classList'][_0x1281('0x37')](_0x1281('0x42')); return; }
    questionIndex = 0x0, questions = _0x3c5d41[_0x1281('0x28')], document[_0x1281('0x4b')](_0x1281('0x1e'))['classList'][_0x1281('0x27')](_0x1281('0x42')), showQuestion(0x0), startTimer(), document['getElementById']('question-form')[_0x1281('0x1c')][_0x1281('0x37')]('hide'), document[_0x1281('0x4b')](_0x1281('0x4c'))[_0x1281('0x1c')][_0x1281('0x37')](_0x1281('0x42'));
}

function sessionTokenResponse(_0x5a807e, _0xd316c3) {
    if (_0x5a807e != null || _0xd316c3[_0x1281('0x8')] === 0x1) return;
    sessionToken = _0xd316c3[_0x1281('0x47')], setCookie(_0x1281('0x56'), sessionToken, 0.25);
}

function checkCookie() {
    var _0x101b1a = getCookie(_0x1281('0x56'));
    if (_0x101b1a != '') sessionToken = _0x101b1a;
    else callAPI(fetchSessionTokenUrl, sessionTokenResponse);
}

function setCookie(_0x159372, _0x1ddd4e, _0xd86dcd) {
    var _0x976c36 = new Date();
    _0x976c36[_0x1281('0x33')](_0x976c36['getTime']() + _0xd86dcd * 0x18 * 0x3c * 0x3c * 0x3e8);
    var _0x172fd9 = _0x1281('0x2f') + _0x976c36['toUTCString']();
    document[_0x1281('0x14')] = _0x159372 + '=' + _0x1ddd4e + ';' + _0x172fd9 + ';path=/';
}

function getCookie(_0x2afb73) {
    var _0x56ff8f = _0x2afb73 + '=',
        _0x240dba = document[_0x1281('0x14')][_0x1281('0x16')](';');
    for (var _0x3543de = 0x0; _0x3543de < _0x240dba[_0x1281('0x2b')]; _0x3543de++) { var _0x30fa06 = _0x240dba[_0x3543de]; while (_0x30fa06[_0x1281('0x3b')](0x0) == '\x20') { _0x30fa06 = _0x30fa06[_0x1281('0x18')](0x1); } if (_0x30fa06[_0x1281('0xb')](_0x56ff8f) == 0x0) return _0x30fa06[_0x1281('0x18')](_0x56ff8f[_0x1281('0x2b')], _0x30fa06['length']); }
    return '';
}

function setCategory(_0x3b2934) { Object[_0x1281('0x15')](categories)[_0x1281('0x19')](_0x19a6f6 => { categories[_0x19a6f6] === _0x3b2934 && (categoryCode = _0x3b2934, document[_0x1281('0x4b')](_0x1281('0x57'))[_0x1281('0xe')] = _0x19a6f6); }); }

function setDifficulty(_0x44cf24) {
    ['easy', _0x1281('0x3d'), 'hard']['includes'](_0x44cf24) && (difficulty = _0x44cf24, document['getElementById'](_0x1281('0xc'))[_0x1281('0xe')] = _0x44cf24[_0x1281('0x3b')](0x0)[_0x1281('0xa')]() + _0x44cf24[_0x1281('0x1')](0x1), getAndShowScoreboard(_0x44cf24));
}

function getAndShowScoreboard(_0xabef76) {
    db['collection'](_0x1281('0x0'))[_0x1281('0x1b')](_0xabef76)[_0x1281('0x34')]()['then'](_0x59ecbe => {
        _0x59ecbe[_0x1281('0x54')]()[_0x1281('0x36')] != undefined && _0x59ecbe[_0x1281('0x54')]()[_0x1281('0x36')] != null && (top10 = _0x59ecbe[_0x1281('0x54')]()[_0x1281('0x36')], document[_0x1281('0x4b')](_0x1281('0x3e'))[_0x1281('0x20')] = '', top10[_0x1281('0x19')](_0x4f0fd4 => {
            var _0x1c323a = _0x1281('0x7') + _0x4f0fd4['name'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22>' + _0x4f0fd4[_0x1281('0x1a')] + _0x1281('0x41');
            document[_0x1281('0x4b')](_0x1281('0x3e'))[_0x1281('0x52')](_0x1281('0x2a'), _0x1c323a);
        }));
    });
}

function startGame() {
    if (!['', '\x20', null, undefined][_0x1281('0x4d')](categoryCode) && [_0x1281('0x25'), _0x1281('0x3d'), _0x1281('0x3a')][_0x1281('0x4d')](difficulty)) {
        const _0x24d82e = baseUrl + (_0x1281('0x24') + NUMBER_OF_QUESTIONS + '&category=' + categoryCode + _0x1281('0x17') + difficulty + _0x1281('0xd') + sessionToken);
        callAPI(_0x24d82e, questionResponse);
    }
}

function endGame() {
    if (timeCounter < 0x1388) document[_0x1281('0x4b')](_0x1281('0x43'))[_0x1281('0xe')] = _0x1281('0x46');
    else {
        var _0x1cdf76 = Math[_0x1281('0x22')](timeCounter % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c)),
            _0x585a7e = timeCounter % (0x3e8 * 0x3c) / 0x3e8;
        score = Math[_0x1281('0x22')](correctAnswers ** 0x2 / (NUMBER_OF_QUESTIONS * timeCounter) * 0xa ** 0x8), document['getElementById']('finish')['innerText'] = _0x1281('0x3f') + correctAnswers + '/' + NUMBER_OF_QUESTIONS + '\x20in\x20' + _0x1cdf76 + _0x1281('0x51') + _0x585a7e + _0x1281('0x31') + score + _0x1281('0x29'), (top10['length'] === 0x0 || score > top10[top10[_0x1281('0x2b')] - 0x1]['score'] || top10[_0x1281('0x2b')] < 0xa) && document['getElementById'](_0x1281('0x13'))['classList']['remove']('hide');
    }
    document[_0x1281('0x4b')](_0x1281('0x11'))[_0x1281('0x1c')][_0x1281('0x27')](_0x1281('0x42')), document[_0x1281('0x4b')](_0x1281('0x32'))['classList'][_0x1281('0x27')](_0x1281('0x42')), document[_0x1281('0x4b')](_0x1281('0x50'))['classList'][_0x1281('0x27')](_0x1281('0x42')), document[_0x1281('0x4b')]('finish')[_0x1281('0x1c')]['remove'](_0x1281('0x42')), document[_0x1281('0x4b')](_0x1281('0xf'))[_0x1281('0x1c')][_0x1281('0x37')]('hide'), clearInterval(timer);
}

function submitScore() {
    if (top10[_0x1281('0x2b')] === 0x0 || score > top10[top10[_0x1281('0x2b')] - 0x1][_0x1281('0x1a')] || top10[_0x1281('0x2b')] < 0xa) {
        var _0x42ba95 = document[_0x1281('0x4b')](_0x1281('0x1d'))[_0x1281('0x5')],
            _0x13c848 = { 'name': _0x42ba95, 'score': score, 'category': categoryCode, 'datetime': new Date()[_0x1281('0x2d')]() };
        for (var _0x95a947 = top10[_0x1281('0x2b')] - 0x1; _0x95a947 > -0x1; _0x95a947--) { if (top10[_0x95a947][_0x1281('0x1a')] < score || top10['length'] - 0x1 === _0x95a947 && top10[_0x1281('0x2b')] < 0xa) { top10[_0x1281('0x10')](_0x95a947 + 0x1, 0x0, _0x13c848); break; } }
        if (top10[_0x1281('0x2b')] === 0x0) top10[_0x1281('0x4a')](_0x13c848);
        while (top10['length'] > 0xa) { top10[_0x1281('0x2')](); }
        print(top10), db[_0x1281('0x53')]('tables')['doc'](difficulty)[_0x1281('0x4f')]({ 'top10': top10 })[_0x1281('0x38')](() => location['reload']());
    }
}

function answer(_0x338be8) {
    if (_0x338be8 === correctAnswerIndex) correctAnswers++;
    if (questionIndex === NUMBER_OF_QUESTIONS - 0x1) { endGame(); return; }
    questionIndex++, showQuestion(questionIndex);
}

function showQuestion(_0x26ff27) {
    if (_0x26ff27 >= NUMBER_OF_QUESTIONS || _0x26ff27 < 0x0) { print(_0x1281('0x35')); return; }
    document[_0x1281('0x4b')]('question')['innerText'] = questions[_0x26ff27][_0x1281('0x26')], correctAnswerIndex = Math[_0x1281('0x22')](Math[_0x1281('0x2c')]() * 0x4), document[_0x1281('0x4b')](_0x1281('0x49') + correctAnswerIndex)[_0x1281('0xe')] = questions[_0x26ff27][_0x1281('0x23')], wrongAnswers = questions[_0x26ff27][_0x1281('0x6')];
    for (var _0x22c5d6 = 0x0; _0x22c5d6 < 0x4; _0x22c5d6++)
        if (_0x22c5d6 != correctAnswerIndex) document['getElementById']('answer-btn-' + _0x22c5d6)[_0x1281('0xe')] = wrongAnswers[_0x1281('0x10')](Math['floor'](Math[_0x1281('0x2c')]() * wrongAnswers['length']), 0x1);;
    document[_0x1281('0x4b')]('counter')['innerText'] = correctAnswers + '/' + questionIndex, document['getElementById'](_0x1281('0x50'))[_0x1281('0xe')] = questionIndex + 0x1 + '.';
}

function startTimer() {
    timeCounter = 0x0, timer = setInterval(function() {
        timeCounter += 0xa;
        if (timeCounter % 0x64 === 0x0) {
            var _0x10c137 = Math[_0x1281('0x22')](timeCounter % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c)),
                _0x1bc6b6 = timeCounter % (0x3e8 * 0x3c) / 0x3e8;
            Math['floor'](_0x1bc6b6) === _0x1bc6b6 && (_0x1bc6b6 = _0x1bc6b6[_0x1281('0x44')]() + '.0'), document[_0x1281('0x4b')](_0x1281('0x3c'))['innerHTML'] = _0x10c137 + _0x1281('0x21') + _0x1bc6b6 + _0x1281('0x45');
        }
    }, 0xa);
}