/*var secondsInAMinute = 60;
var minutesInAnHour = secondsInAMinute * 60;
var hoursInADay = minutesInAnHour * 24;
var daysInAYear = hoursInADay * 365;
var age = daysInAYear * 11;
console.log(age);

var balloons = 100;
balloons /= 4;
console.log(balloons);

var string = "hElLo tHerE, I aM kEnObi!";
string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(string);
*/
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
    "hunting",
    "logarithmics",
    "logarithm",
    "vine",
    "meat",
    "poppy",
    "population",
    "start",
    "innovation",
    "infidelity",
    "New Year",
    "review",
    "bust",
    "revival",
    "armament"
];
var howwhat = [
"beans",
    "real shit",
    "meat",
    "pimples",
    "absenteeism",
    "motoring",
    "highway",
    "atheist",
    "atoll",
    "achromatism",
    "acetone",
    "DON'T rich evening",
    "ballast",
    "launch",
    "watt",
    "Vedism",
    "video clip",
    "video",
    "gas",
    "waiter",
    "helium",
    "hyperpurism",
    "hyponym",
    "Honduras",
    "pot",
    "grotto",
    "screw",
    "deputy",
    "sofa",
    "diploma",
    "expert teacher",
    "element of shit",
    "elitism",
    "fat resistant",
    "acorn",
    "zenith",
    "vision",
    "sol-gel",
    "priest",
    "infante",
    "eater",
    "cat",
    "boar",
    "cabriolet"
];
var how = [
    "as",
    "like",
    "looks like",
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${["Your", names[Math.floor(Math.random() * 26)], how[Math.floor(Math.random() * 3)], howwhat[Math.floor(Math.random() * 44)] + "!!!"].join(" ")}</p>`;
    callingField.innerHTML = out;
}