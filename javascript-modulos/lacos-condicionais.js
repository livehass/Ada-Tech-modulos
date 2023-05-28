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
//fatiamento: slice

const arr1 = [30, 12, 45, 34, 29]

console.log(arr1.slice(0, 2))

let arr2 = []
console.log("antes", arr2);

arr2.push(10,20,30,40)
arr2.push(50)
console.log("depois", arr2);

arr2.unshift(60) //unshift joga o numero do array no começo

console.log("depois de unshift", arr2);
