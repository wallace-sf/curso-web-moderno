// tagged templates - procesa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
}

const aluno = 'Skinner'
const professor = 'Chalmers'

tag `${aluno} de ${professor}`