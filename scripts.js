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
    "atheist beach",
    "acetone",
    "watt",
    "Vedism",
    "gas",
    "Honduras",
    "in deputy",
    "peace of piss",
    "in president",
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
    "same as"
];
var procent = [
    "10% similarity",
    "20% similarity",
    "30% similarity",
    "40% similarity",
    "50% similarity",
    "60% similarity",
    "70% similarity",
    "80% similarity",
    "90% similarity",
    "100% similarity",
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${["Your", names[Math.floor(Math.random() * 17)], how[Math.floor(Math.random() * 3)], howwhat[Math.floor(Math.random() * 22)] + ".", procent[Math.floor(Math.random() * 10)]].join(" ")}</p>`;
    callingField.innerHTML = out;
}