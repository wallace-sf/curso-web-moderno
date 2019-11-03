// pessoa -> 123 -> {...}

const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// Erro por que não é possível trocar o endereço

console.log(Object.freeze(pessoa))

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)