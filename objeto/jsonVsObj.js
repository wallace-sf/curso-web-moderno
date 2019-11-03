const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() { return a + b + c }
}


console.log(JSON.stringify(obj))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3.5, "text": "string", "arr": [1, 2, 3, 4, { "nome": "João" }], "obj": { "a": 1 }, "boolean": true }'))