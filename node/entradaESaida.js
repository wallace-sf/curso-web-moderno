const os = require('os');

const anonimo = process.argv.indexOf('e') !== -1
// console.log(anonimo)

if (anonimo) {
   process.stdout.write('Fala anônimo! \n') 
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString()

        process.stdout.write(`Fala ${data}`)
        process.exit()
    })
}