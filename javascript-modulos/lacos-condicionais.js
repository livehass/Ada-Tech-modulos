// const input = require('readline-sync')

// let nota;
// let soma = 0;
// for (let i = 1; i <= 3; i++){
//     nota = Number(input.question(`informe sua nota ${i} do aluno:`))
//     soma = soma + nota
// }
// console.log(`A média do aluno é ${soma / 3}.`);


let arr = ['felipe', 26, 1.85, true]

console.log(arr[0])
console.log(arr.length)

for (let i = 0; i < arr.length; i++){
    console.log(typeof i + i)
}
console.clear()
for (let e of arr){        //elemento
    console.log(e)
}
console.clear()
for (let indice in arr){ //indice
    console.log(arr[indice])
}