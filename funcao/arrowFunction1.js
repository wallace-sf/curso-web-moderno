let dobro = function (a) {
    return 2 * a
}

console.log(dobro(4))

dobro = (a) => {
    return 2 * a
}

console.log(dobro(3))

dobro = a => 2 * a

console.log(dobro(Math.PI))