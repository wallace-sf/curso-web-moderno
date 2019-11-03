function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor}`
        console.log(partes[indice], "<>")
        console.log(valor, "><")
    })
}

const preco = 29.9
const precoParcela = 11
real `1x de ${preco} ou 3x de ${precoParcela} ai caramba.`

