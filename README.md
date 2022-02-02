#  :computer: Curso TypeScript Cod3r

Exercícios e anotações sobre o curso de TypeScript da Cod3r.

## Instalação no Windows

Para instalação, utiliza-se o seguinte comando:
 
~~~javascript
npm install -g typescript

// Para pode rodar com o plugin Code Runner
npm install -g ts-node
~~~ 

Para iniciar o arquivo de configuração, executar o seguinte comando:

~~~javascript
tsc --init
~~~ 

## Tipos

Os tipos em TypeScript são inferidos, ou seja, ao definir um valor a uma variavel, ela vai passar a pertencer aquele tipo, e não vai aceitar valores diferentes, por exemplo:

~~~javascript
let nome = 'Mateus' // string

nome = 28 // Erro porque 28 != de string
~~~ 

O mesmo vale para objects/arrays:

~~~javascript
let hobbies = ['Cozinhar', 'Vôlei'] // string

hobbies = [50] // Erro porque esse era um object de strings
~~~ 

### Tipo Any
O tipo any faz a variável funcionar igual ao Javascript, podendo receber qualquer tipo de valor:

~~~javascript
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)
~~~ 
