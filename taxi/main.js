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
            console.log("Le taxi s'arrête devant le " + redLightsNumbers + "e feu rouge et la musique de la radio change.")
            let result = Math.floor(Math.random() * Musics.length)
            if (Musics[result] === "Wejdene - Anissa") {
                this.sanity -= 1
                numberChangTaxi = numberChangTaxi + 1
                console.log("Anissa de Wejdene passe à la radio, " + this.name + " perd un point de vie et descend.")
                console.log(this.name + " a changé de taxi, c" + "'" + "est la " + numberChangTaxi + "e fois depuis le début du trajet." + " Il lui reste " + this.sanity + " de points de vie.")
                console.log(numberChangTaxi)
            }
            if (this.sanity === 0) {
                console.log(this.name + " a explosé, Anissa de Wejdene est passé trop de fois à la radio.")
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

