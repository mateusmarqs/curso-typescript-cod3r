// 1) Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!

/*
var dobro = function(valor) {
    return valor * 2
}

console.log(dobro(10))

*/

const dobro = (valor: number): number => valor * 2

console.log(dobro(10))

// 2) Verifique se há espaço para melhorias nesse trecho de código!
/*
var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
}

dizerOla()
dizerOla("Anna")
*/

const dizerOla = (nome: string = 'Pessoa'): void => console.log(`Ola, ${nome}`)
dizerOla()
dizerOla("Anna")

// 3) Dado esse array, imprima o menor valor!
/*
var nums = [-3, 33, 38, 5]
console.log('???')
*/

var nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// 4) Adicione os elementos de nums em array!
/*
var nums = [-3, 33, 38, 5]
var array = [55, 20]
console.log(array)
*/

var nums = [-3, 33, 38, 5]
var array = [55, 20]
array.push(...nums)
console.log(array)

// 5) Simplifique os trechos de código abaixo utilizando o operador Destructuring!
/*
var notas = [8.5, 6.3, 9.4]
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
console.log(nota1, nota2, nota3)

var cientista = {primeiroNome: "Will", experiencia: 12}
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)
*/

var notas: number[] = [8.5, 6.3, 9.4]
let [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

var cientista = {primeiroNome: "Will", experiencia: 12}
let { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)
    