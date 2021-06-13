console.log("Usando Spread Operator com Arrays.")

frutasUm = ["banana", "pera", "maça"]
frutasDois = ["pessego", "ameixa", "laranja"]

// Spreading
let todasAsFrutas = [...frutasUm, ...frutasDois]

console.log(frutasUm)
console.log(frutasDois)
console.log(todasAsFrutas)

console.log()
console.log("Usando o Spread Operator com Objetos.")

let curso = {
    curso: "Fullstack",
    turno: "Manha",
    sede: "São Paulo"
};

let estudadanteUm = {
    nome: "Gaspar",
    email: "gasparufrj@gmail.com",
    ...curso
};

let estudanteDois = {
    nome: "José",
    email: "jose@gmail.com",
    ...curso
};


console.log(estudadanteUm)
console.log(estudanteDois)

console.log()
console.log("Usando o Spread Operator com Funções.")

function comVariosParametros(...params) {
    console.log(...params)
}

comVariosParametros("a")
comVariosParametros("a", "b")
comVariosParametros("a", "b", "c")