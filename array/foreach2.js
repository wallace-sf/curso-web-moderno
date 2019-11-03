Array.prototype.forEach2 = function(f) {
    for (let i = 0; i < this.length; i++) {
        f(this[i], i, this)
    }
}

const aprovados = ['Daniel', 'Aldo', 'Agatha', 'Raquel']

aprovados.forEach2(function (nome, indice, arr) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(arr)
})