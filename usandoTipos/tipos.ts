// arrays
let hobbies = ['Cozinhar', 22] // string

hobbies = [50]

console.log(hobbies)

hobbies = ['asd'] 

console.log(hobbies)

// tuplas
let endereco: [string, number] = ['Av Princiapal', 22]
console.log(endereco)

// enums
enum Cor {
    Cinza = '#A23412', // 0
    Verde = '#453612', // 1 
    Azul = '#009rg'// 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any

let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// functions
//                                                retorna um número
function multiplicar(numA: number, numB: number): number {
    return numA + numB
}

console.log(2 + 4)

//objetos

let usuario: { nome: string, idade: number } = {
    nome: 'Mateus',
    idade: 23
}

console.log(usuario)

usuario = {
    nome: 'Maria',
    idade: 31
}

console.log(usuario)

// Alias
type Funcionario = { 
    supervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionario2: Funcionario = {
    supervisores: ['marcos', 'Ronaldo'],
    baterPonto(horario: number) :string{
        if (horario > 8) {
            return 'Fora do horário'
        } else {
            return 'Ponto normal'
        }
    }
}

console.log(funcionario2)

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

// Union Types
// Unir tipos, por exemplo:
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
