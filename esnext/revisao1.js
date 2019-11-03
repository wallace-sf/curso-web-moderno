// let e const
{
    var a =2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é 
caro meu irmão
    né?`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome: i, idade } = { nome: 'Ana', idade: 23 }
console.log(i, idade)
