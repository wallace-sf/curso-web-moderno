Array.prototype.filter2 = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const resultadoCallback = callback(this[i], i, this)

        if (resultadoCallback) {
            newArray.push(this[i])
        }
        
    }

    return newArray
}

const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produto.filter2(p => p.preco > 10 && p.fragil)) // Alternativa 1
console.log(produto.filter2(p => p.preco > 10).filter2(p => p.fragil)) // Alternativa 2