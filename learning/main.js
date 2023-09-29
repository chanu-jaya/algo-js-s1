alert("Bonjour, es-tu sûr de vouloir quitter le site ?")

console.log("Bienvenue dans la console")

var cardName = "Choixpeau"

let Musics = ["Wejdene - Anissa", "2Pac - All Eyez On Me", "Freeze Corleone - Shavkat", "Central Cee - Doja", "Drake - God's Plan"]
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
let result = getRandomItem(Musics)
console.log(result)