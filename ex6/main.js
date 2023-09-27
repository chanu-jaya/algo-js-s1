let names = []

names.push("Vincent", "Paul", "Arthur")

console.log(names.length)

for (let i=0; i < names.length; i++){
    names[i] = names [i] + " va à la pêche."
    console.log(names[i])
}