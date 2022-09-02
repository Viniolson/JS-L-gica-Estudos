/*Recebendo informação dado em string e mostrando em alert 

let nome = prompt('Qual seu nome?')
alert('Ola '+nome)
*/

/*----------------------------------------------------------------------------------------------------------------*/

/*Soma de numeros

alert('Iremos somar 2 números');

let numeroUm = prompt('Digite o primeiro numero: ');
let numeroDois = prompt('Digite o segundo numero: ');

let soma = (Number(numeroUm) + Number(numeroDois)) / 2;

alert('O resultado é da soma é: '+soma);*/

/*----------------------------------------------------------------------------------------------------------------*/

/*Capturar 2 numeros e fazer operações matemáticas 

alert('Iremos fazer operações com dois numeros');

let primeiroNumero = prompt('Digite o primeiro número: ');
let segundoNumero = prompt('Digite o segundo número: ');

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

const soma = primeiroNumero + segundoNumero;
const sub = primeiroNumero - segundoNumero;
const multi = primeiroNumero * segundoNumero;
const div = primeiroNumero / segundoNumero
const restDiv = primeiroNumero % segundoNumero;

alert('O resultado da soma é: '+soma);
alert('O resultado da subtração é: '+sub);
alert('O resultado da multiplicação é: '+multi);
alert('O resultado da divisão é: '+div);
alert('O resultado do resto da divisão é: '+restDiv); */

/*----------------------------------------------------------------------------------------------------------------*/

/*EX 1: Solicitar nome e 3 notas do aluno, calcular a nota, mostrar o resultado e informar se passou ou nao. (nota para ser aprovado = 5).*/

/*alert('Vamos pedir 3 notas e calcular se o aluno está aprovado ou não.')

let aluno = prompt('Digite o nome do aluno: ')
let primeiraNota = prompt('Digite a primeira nota: ');
let segundaNota = prompt('Digite a segunda nota: ');
let terceiraNota = prompt('Digite a terceira nota: ');

primeiraNota = Number(primeiraNota);
segundaNota= Number(segundaNota);
terceiraNota = Number(terceiraNota);

let resultado = (primeiraNota + segundaNota + terceiraNota) / 3;

alert(aluno+' sua média de notas é: '+resultado);

if(resultado >= 5) {
    alert('Parabéns '+aluno+', você foi aprovado.');
} else {
    alert(aluno+' você foi reprovado, esperamos que estude mais para a recuperação');
}*/

/*----------------------------------------------------------------------------------------------------------------*/

/*EX 2: Fazer uma lista de compras de 10 itens e mostrar eles no final.*/

/*
let itens = [];
              


        contador  numdig
for (let item = 0; item < 10; item++) {
    let itemName = prompt('Digite o item: ' + (item + 1))
    itens[item] = itemName
}

alert(itens)
*/

/*----------------------------------------------------------------------------------------------------------------*/

/*EX 3: JOGO DA ADIVINHAÇÃO*/

/*let numeroChutado = prompt('Adivinhe o número que estou pensando, está entre 0 e 10: ');

const numeroAleatorio = Math.round(Math.random() * 10);

let contadorTentativas = 1;

while(Number(numeroChutado) != numeroAleatorio) {
    numeroChutado = prompt('Voce errou, tente novamente: ');
    contadorTentativas++;
}

alert('Parabéns, você acertou em '+contadorTentativas+' tentativas.');*/

/*----------------------------------------------------------------------------------------------------------------*/

/*EX 4: PROGRAMA DE CADASTRO DE PRODUTOS*/

/*let escolha;
let itens = [];
contadorItem = 0;

while (escolha != 3 ) {

    escolha = Number(prompt(`Olá usuário! Digite o número da opção desejada:
    
    1. Cadastrar um item na lista.
    2. Mostrar itens cadastrados
    3. Sair do programa.
    
    `));
    
    switch(escolha) {
        case 1:
            itens[contadorItem] = prompt('Digite o nome do item; ');
            contadorItem++;
        
        case 2:
            if (itens.length == 0) {
                alert('Não há produtos cadastrados.');
            } else {
                alert(itens);
            }

        case 3:
            alert('Good Bye');
            break;

        default:
            alert('Opção inválida, tente novamente.')
    }


 (OPÇÃO COM IF)


    if (escolha == 1) {
        itens[contadorItem] = prompt('Digite o nome do item; ');
        contadorItem++;
    }
    
    else if (escolha == 2) {
        if (itens.length == 0) {
            alert('Não há produtos cadastrados.');
        } else {
            alert(itens);
        }
    } 
    
    else if (escolha == 3) {
        alert('Good Bye');
    }
}*/

/*----------------------------------------------------------------------------------------------------------------*/

/*EX 5 LISTA DE PACIENTES COM OBJETOS*/

const patients = [
    {
        name: "Carlos",
        age: 22,
        weight: 80,
        height: 180,
    },
    {
        name: "Maria",
        age: 20,
        weight: 50,
        height: 165,
    },
    {
        name: "Paulo",
        age: 53,
        weight: 100,
        height: 180,
    }
]

/*for (let contador = 0; contador < patients.length; contador++){
    let imc = Math.round(Number(patients[contador].weight / ((patients[contador].height / 100)**2)));
    alert(patients[contador].name+' o seu IMC é de: '+imc);
}*/


/*COM FUNÇÃO*/

const printIMC = (patient) => {   //arrow function, mesma coisa que function printIMC só que abreviado
    alert(`O paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`)
}

for (let contador = 0; contador < patients.length; contador++) {
    printIMC(patients[contador])
}


/*

* - multiplicação
** - exponeciação
/ - divisão
% - resto da divisão
+ - soma
- - subtração

&& - E lógico
!! - OU lógico
! - Não lógico

> - maior
< - menor
>= - maior igual
<= - menor igual
== - igualdade
=== - igual no valor e do mesmo tipo (estritamente igual)
!= - diferente
!== - diferente do valor e do mesmo tipo (estritamente diferente)





*/