const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
console.log(contadorA)
contadorB.inc()
console.log(contadorB)

contadorC.inc()
contadorD.inc()
console.log(contadorC)
console.log(contadorD)