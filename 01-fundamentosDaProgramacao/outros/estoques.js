function verificarEstoque(quantidade_minina_estoque, quantidade_maxima_estoque, quantidade_atual_estoque) {
    
    quantidade_media_estoque = (quantidade_minina_estoque + quantidade_maxima_estoque) / 2;

    if (quantidade_atual_estoque >= quantidade_media_estoque) {
        return console.log("Não efetuar a compra")
    } else {
        return console.log("Efetuar a compra")
    }
}

verificarEstoque(20, 100, 40)
verificarEstoque(20, 100, 50)
verificarEstoque(20, 100, 60)
verificarEstoque(20, 100, 70)
verificarEstoque(50, 100, 75)


