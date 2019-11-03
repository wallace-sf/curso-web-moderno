// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável

const imprimirSomaArrow = (a, b) => {
    console.log(a + b)
}

imprimirSomaArrow(5, 3)

// retorno implícito

const imprimirSubtracao = (a, b) => a - b

console.log(imprimirSubtracao(9, 3))