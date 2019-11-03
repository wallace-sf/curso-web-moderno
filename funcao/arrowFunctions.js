let comparaComThis = function (param) {
    return console.log(this === param)
}

comparaComThis(global)

const obj = new Object()
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(exports)