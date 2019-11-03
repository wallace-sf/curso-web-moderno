const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produto.filter(p => p.preco > 10 && p.fragil)) // Alternativa 1
console.log(produto.filter(p => p.preco > 10).filter(p => p.fragil))