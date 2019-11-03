const pessoa = {
    nome: 'Rebeca',
    idade: 32,
    peso: 62,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2017'
})
console.log(pessoa)
pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)

// Object.assign

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)

// Object.freeze

Object.freeze(obj)
obj.c = 5

console.log(obj)

console.log(Object.prototype)