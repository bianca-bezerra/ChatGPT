/*Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água 
que ela deve beber por dia. A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com
atividade física moderada, e 45 ml por quilo de peso para pessoas com atividade física intensa. 
O resultado do cálculo deve ser exibido na tela*/

import {question} from 'readline-sync'

function main() {

//Entrada
const peso = Number(question('Peso(kg):'))
const ativ_fisica_tipo = question('Atividade fisica praticada(moderada ou intensa):')

//Moderada
const qtd_agua_ativ_moderada = calcula_qtd_agua_ativ_moderada(peso)
const qtd_agua_ativ_intensa = calcula_qtd_agua_ativ_intensa(peso)

//Saída
console.log(`Para atividade física moderada, na quantidade recomendada de água é ${qtd_agua_ativ_moderada} ml`)
console.log(`Para atividade física intensa, a quantidade recomendada de água é ${qtd_agua_ativ_intensa} ml`)


//Funções usadas

function calcula_qtd_agua_ativ_moderada(peso){
    const agua = peso * 35
    return agua
}

function calcula_qtd_agua_ativ_intensa(peso){
    const agua = peso * 45
    return agua
}
}

main()
