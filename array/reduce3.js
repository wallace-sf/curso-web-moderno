Array.prototype.reduce2 = function (callback, valorInicial) {
    
    let acumulador;
    
    if (valorInicial) {
        acumulador = valorInicial        
    } else {
        acumulador = this.shift()
    }


    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i])
    }
    
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.bolsista)
console.log(resultado)
const resultadoReduce = resultado.reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador || atual
}, false)
console.log(resultadoReduce)