var names = [
    "shit",
    "face",
    "hair",
    "kiwi",
    "kimono",
    "movie",
    "kid",
    "kingdom",
    "coronation",
    "cup",
    "beach",
    "vine",
    "meat",
    "poppy",
    "start",
    "New Year",
    "destiny"
];
var howwhat = [
    "real shit",
    "meat",
    "pimples",
    "atheism",
    "acetone",
    "watt",
    "Vedism",
    "gas",
    "Honduras",
    "deputy's",
    "peace of piss",
    "president's",
    "start of business",
    "dog",
    "fat resistant",
    "Lenin",
    "priest",
    "cat",
    "boar",
    "pig",
    "K-pop",
    "KENOBIII"
];
var how = [
    "like",
    "looks like",
    "is same as",
    "was same as"
];
var procent = [
    "70% similarity",
    "80% similarity",
    "90% similarity",
    "100% similarity",
    "100.1% similarity"
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${["Your", names[Math.floor(Math.random() * 17)], how[Math.floor(Math.random() * 4)], howwhat[Math.floor(Math.random() * 22)] + ".", procent[Math.floor(Math.random() * 5)]].join(" ")}</p>`;
    callingField.innerHTML = out;
}