class Pokemon{
    constructor(name, pv, atk, def){
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
    }

    attackPokemon(Pokemon){
        let damage = this.atk - Pokemon.def
        Pokemon.pv -= damage
        console.log(this.name + " a attaqué " + Pokemon.name + ", il lui reste " + Pokemon.pv)
    }
}

let dracofeu = new Pokemon("Dracaufeu", 50, 30, 5)

let mewto = new Pokemon("Mewto", 50, 20, 5)


while (dracofeu.pv > 0 && mewto.pv > 0) {
    dracofeu.attackPokemon(mewto)
    if (mewto.pv<=0){
        console.log(mewto.name + " est mort.")
        break
    }
    
    mewto.attackPokemon(dracofeu)
    if (dracofeu.pv <= 0){
        console.log(dracofeu.name + " est mort.")
        break
    }
}
