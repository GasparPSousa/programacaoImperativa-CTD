var altura = 1.7;
var estarAcompanhada = true;

function podeSubir(altura, estarAcompanhada) {

    if (altura < 1.20) {
        return false;

    } else if (altura <= 1.40 && estarAcompanhada) {
        return true;

    } else if (altura > 1.40 && altura < 2.00) {
        return true;

    } else {
        return false
    }
}


console.log(podeSubir(1.1, false))
console.log(podeSubir(1.1, true))
console.log(podeSubir(1.2, false))
console.log(podeSubir(1.2, true))
console.log(podeSubir(1.3, false))
console.log(podeSubir(1.3, true))
console.log(podeSubir(1.5, false))
console.log(podeSubir(1.5, true))
console.log(podeSubir(1.9, false))
console.log(podeSubir(1.9, true))
console.log(podeSubir(2.0, false))
console.log(podeSubir(2.0, true))
console.log(podeSubir(1.40, true))
console.log(podeSubir(1.40, false))