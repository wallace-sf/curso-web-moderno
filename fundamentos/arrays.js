const valores = [7.7, 8.2, 9.5]

valores.push({id: 3}, false, null, 'teste')

delete valores[6]

console.log(valores)

valores.pop()

console.log(valores)
