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

arr2.pop() // por padrão remove o ultimo

//para pegar o elemento removido
const elementoRemovido = arr2.pop()

//oposto do pop é o shift remove o primeiro elemento
arr2.shift()

//jutar 2 arrays

arr1.concat(arr2)
console.log(console.log("depois", arr2));

console.clear();
//funções

function saudacao(nome, curso) {
    console.log(`ola ${nome} seja bem vindo ao curso de ${curso}`)
}

saudacao('felipe', "javascript")

console.clear();

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));