var something = [
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
    "legs",
    "hands",
    "New Year",
    "destiny"
];

var lliw = [
    "like",
    "looks like",
    "is same as",
    "was same as",
    "is"
];

var like = [
    "real shit",
    "meat",
    "pimples",
    "atheism",
    "of acetone",
    "220 volts",
    "Vedism",
    "gas",
    "in Honduras",
    "deputy's",
    "peace of piss",
    "president's",
    "Trump",
    "dog",
    "fat resistant",
    "Lenin",
    "priest",
    "cat",
    "boar",
    "pig",
    "K-pop",
    "KENOBIII's",
    "Jesus"
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${
    ["Your", something[Math.floor(Math.random() * 17)],
    lliw[Math.floor(Math.random() * 5)], 
    like[Math.floor(Math.random() * 23)] + "!"].join(" ")}</p>`;
    callingField.innerHTML = out;
}