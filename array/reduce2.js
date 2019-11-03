const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const arrayBolsas = alunos.map(aluno => aluno.bolsista)

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = arrayBolsas.reduce(function (acumulador, atual) {
    return acumulador && atual
})
console.log(`Todos são bolsistas?: ${todosBolsistas}`)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = arrayBolsas.reduce(function (acumulador, atual) {
    return acumulador || atual
})
console.log(`Tem algum bolsista?: ${algumBolsista}`)