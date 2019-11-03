// Exemplos de callbacks no browser

document.getElementsByTagName('body')[0].onclick = function () {
    console.log('O evento ocorreu!')
}

document.getElementsByTagName('body')[0].onclick = () => console.log('O evento ocorreu!')