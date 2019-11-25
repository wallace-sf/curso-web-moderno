// const arrFunc = () => this
// const comFunc = function () {
//     return this
// }

// console.log(this)
// console.log(global)
// console.log(arrFunc())
// console.log(comFunc())

const vectra = {
    modelo: 'VectraCX900',
    chassi: 'AF988MNX8GFS',
    getModelo: function () {
        this.modelo = 'modelo'

        function insideModelo() {
            return this
        }

        return (this, insideModelo())
    },
    getChassi: () => {
        this.chassi = 'chassi'
        return this
    }
}


// Entendendo o this:
// No top level, o this representa o objeto window no browser e o objeto module.exports
// no node. Já em uma função normal representa o objeto que está inserido (context léxico).
// Por outro lado, em uma arrow function, representa o objeto window no browser e o objeto
// module.exports no node.

// Quando uma função normal não possui contexto léxico (está contido em uma função), o this
// retorna o objeto global. Já, a arrow function, retorna o module.exports no node e o objeto
// global no browser.

// Ressalvas:
// Quando uma Arrow function está contida em um método da classe, o this aponta para
// instância do classe (objeto). Entretanto, a função normal ao invés de apontar para
// o objeto global retorna undefined.

vectra.getChassi()

function topLevelNormalFunction() {
    
    function insideTopLevelNormal() {
        return this
    }

    return insideTopLevelNormal()
}

const topLevelArrowFunction = () => {
    const insideTopLevelArrow = () => this

    return insideTopLevelArrow()
}

console.log(topLevelArrowFunction())