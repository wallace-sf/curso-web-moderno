let isAtivo = ' '

console.log(!!isAtivo)

console.log(!!('' || 0 || NaN || (isAtivo = false) || undefined || Infinity))

console.log(' ' || 'Desconhecido')