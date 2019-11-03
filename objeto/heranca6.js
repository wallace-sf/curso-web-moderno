function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = Aula('Bem-vindo', 123)
const aula2 = Aula('Até breve', 456)

// simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem-vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)