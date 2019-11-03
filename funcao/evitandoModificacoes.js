// Object.preventExtensios -> Não permite criar atributos
const produto = Object.preventExtensions({ nome: 'Qualquer', preco: 1.99, tag: 'promoção' })
console.log(Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> Não permite criar e apagar atributos
const pessoa = { nome: 'Mihael Keehl', idade: 19 }
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 35
console.log(pessoa)

// Object.freeze -> Selado + valores constantes

const carro = {
    modelo: 'V40',
    cor: 'Azul',
    ano: 2016
}
Object.freeze(carro)

delete carro.ano
carro.proprietario = 'João'
carro.cor = 'Branco'

console.log(carro)