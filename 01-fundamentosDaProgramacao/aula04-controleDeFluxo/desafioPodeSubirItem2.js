var altura = 1.7;
var estarAcompanhada = true;

function podeSubir(altura, estarAcompanhada) {

    if (altura < 1.20) {
        return console.log("Acesso Negado");

    } else if (altura < 1.40 && estarAcompanhada) {
        return console.log("Acesso autorizado somente com acompanhante");

    } else if (altura > 1.40 && altura < 2.00) {
        return console.log("Acesso autorizado");

    } else {
        return console.log("Acesso Negado")
    }
}

podeSubir(1.1, false)
podeSubir(1.1, true)
podeSubir(1.2, false)
podeSubir(1.2, true)
podeSubir(1.3, false)
podeSubir(1.3, true)
podeSubir(1.5, false)
podeSubir(1.5, true)
podeSubir(1.9, false)
podeSubir(1.9, true)
podeSubir(2.0, false)
podeSubir(2.0, true)