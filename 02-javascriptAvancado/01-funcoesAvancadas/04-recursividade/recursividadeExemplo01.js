function decrementar(numero) {
    console.log(numero)
    
    numero--
    
    if (numero > 0) {
        decrementar(numero)
    } 
}

decrementar(10)