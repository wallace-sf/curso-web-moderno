// Função em JS é First-Class Object (citizens)
// Higher-order function

// criar de forma literal

function f1() {}

// Armazenar em uma váriavel
const f2 = function () {}

// Armazenar em um array
const array = [function (a, b) { return a + b }, f1, f2]
console.log(array[0](2, 3))
console.log(array[1]())
console.log(array[2]())

// Armazenar em um objeto
const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Passar a função como parâmetro
function run(fun) {
    fun()
}
console.log(run(f1))

run(function () { return console.log('Executando...') })

// Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)