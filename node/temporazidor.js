const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * * * * *', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
}, 20000)
const obj = {chave: null}

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = 6
regra.second = [new schedule.Range(1, 60)]

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})