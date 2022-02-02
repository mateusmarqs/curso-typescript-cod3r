/*
DESAFIO 1

Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora e retorna uma string
        -> Ponto normal ( <= 8 )
        -> Fora do horário ( > 8 )
*/ 

let funcionario: { 
    supervisores: string[],
    baterPonto: (hora: number) => string
} = {
    supervisores: ['Roberto', 'Robledo'],
    baterPonto(horario: number) :string{
        if (horario > 8) {
            return 'Fora do horário'
        } else {
            return 'Ponto normal'
        }
    }
}

console.log('Desafio 1: ', funcionario.supervisores, funcionario.baterPonto(2))

// Desafio 2

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

console.log('***** DESAFIO 2 *****')
correntista.contaBancaria.depositar(3000)
console.log(correntista)