var calling = [
    "Helen you are bitch", 
    "Yeees, YOU are bitch", 
    "You how sand!", 
    "Beach", 
    "Hey Hilan!", 
    "You are the bitch, like peace of sand in anakin's shoes", 
    "Bye bitch!",
    "I hate you in all realities!",
    "I think Dragon egg is game of shit",
    "But Dragon egg have tasty egg",
    "Dragon shit",
    "Anakin don't play in dragon",
    "Star Wars better Dragon age",
    "Dragon socks be shit!",
    "I am KENOBIII! Hello there!",
    "Game of year is Minecraft, game bad of all is Egg of dragon sock",
    "Ольэна ти гімно"
];

document.getElementById('button').onclick = function() {   
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${calling[Math.floor(Math.random() * 17)]}</p>`;
    callingField.innerHTML = out;
}