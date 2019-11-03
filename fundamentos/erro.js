function tratarErroELancar(erro) {
    //throw 10
    //throw new Error('propriedade incorreta')
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        console.log(tratarErroELancar(e))
    } finally{
        console.log('final')
    }
}

obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)