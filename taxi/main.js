function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

class Character{
    constructor(name,sanity){
        this.name = name
        this.sanity = sanity
    }

    trajet(playlist){
        let numberChangTaxi = 0
        let redLightsNumbers = 0
        while (redLightsNumbers < 30 && this.sanity > 0){
            redLightsNumbers++
            console.log(redLightsNumbers)
            let result = getRandomItem(playlist)
            if (result === "Wejdene - Anissa") {
                this.sanity -= 1
                numberChangTaxi = numberChangTaxi + 1
                console.log(numberChangTaxi)
            }
            if (this.sanity === 0) {
                console.log(this.name + " a explosé.")
                break
            }
            if (redLightsNumbers === 30) {
                console.log(this.name + " est bien arrivé et il lui a fallu " + numberChangTaxi + " changements de taxis pour y arriver")
                break
            }
            
        }
    }
}

let John = new Character("John", 10)
let Musics = ["Wejdene - Anissa", "2Pac - All Eyez On Me", "Freeze Corleone - Shavkat", "Central Cee - Doja", "Drake - God's Plan"]

console.log(John)
console.log(Musics)
John.trajet(Musics)

