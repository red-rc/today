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
    "crab",
    "lion cup",
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
    "deputy",
    "sofa",
    "diploma",
    "expert teacher",
    "dog",
    "fat resistant",
    "acorn",
    "priest",
    "cat",
    "boar",
    "pig",
    "K-pop",
    "KENOBIII"
];
var how = [
    "as",
    "like",
    "looks like",
    "same as"
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${["Your", names[Math.floor(Math.random() * 17)], how[Math.floor(Math.random() * 4)], howwhat[Math.floor(Math.random() * 22)] + "!!!"].join(" ")}</p>`;
    callingField.innerHTML = out;
}