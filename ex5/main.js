let a = "Jean"
let b = "Paul"

function checkName(prenom1, prenom2) {
    if (prenom1 === prenom2){
        return true
    }
    else{
        return false
    }
}

let result = checkName(a,b)
console.log(result)

//////

function calcul(nombre1, nombre2){
    return nombre1-nombre2
}

let solution = calcul(5,4)
console.log(solution)