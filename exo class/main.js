class Pokemon{
    constructor(name, pv, atk, def){
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }

    attackPokemon(atq){
        atq.pv -= this.atk
    }
}

let dracofeu = new Pokemon("Dracaufeu", 130, 30, 15)

let mewto = new Pokemon("Mewto", 100, 20, 20)

dracofeu.attackPokemon(mewto)
console.log(mewto)

while dracofeu.pv > 0 : {
    
}
