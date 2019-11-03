function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 10,
        mostraPrecoLiquido() {
            return preco - 10
        }
    }
}

console.log(criarProduto('bolacha', 50).mostraPrecoLiquido())