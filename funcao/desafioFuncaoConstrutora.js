function Pessoa(nome) {
    this.nome = nome
    this.present = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.present()

// O this em uma função construtora sempre será a do contexto léxico, por isso
// é inútil para uma arrow function

/*CriarPessoa = nome => {
    this.nome = nome
    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}
 
const p2 = new CriarPessoa('Maria')
p2.falar()*/
