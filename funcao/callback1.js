const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    return console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))