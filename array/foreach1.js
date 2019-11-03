const aprovados = ['Daniel', 'Aldo', 'Agatha', 'Raquel']

aprovados.forEach(function (nome, indice, arr) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(arr)
})

aprovados.sort().forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)