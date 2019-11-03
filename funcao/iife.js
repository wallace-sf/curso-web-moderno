// IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

console.log(typeof (new Function()).__proto__)