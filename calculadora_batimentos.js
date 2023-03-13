/*Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, que é dada pela
fórmula 220 menos a idade. O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades
físicas moderadas e intensas, que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente.
Os resultados devem ser exibidos na tela.*/

import { question} from 'readline-sync'

function main() {

//Entrada
const idade = Number(question('Idade:'))

//Processamento
const batimentos_ativ_moderada = calcula_batimento_ativ_moderada(idade)
const batimentos_ativ_intensa = calcula_batimento_ativ_intensa(idade)

//Saída
console.log(`A faixa de batimentos cardiacos ideais para atividade física moderada está entre ${batimentos_ativ_moderada} bpm`)
console.log(`A faixa de batimentos cardiacos ideais para atividade física intensa está entre ${batimentos_ativ_intensa} bpm`)

//Funções usadas

function calcula_batimento_ativ_moderada(idade){
    const batimentos = 220 - idade
    const faixa_batimentos_ativ_moderada = `${0.5 * batimentos} - ${0.7 * batimentos}`
    return faixa_batimentos_ativ_moderada
}    
function calcula_batimento_ativ_intensa(idade){
    const batimentos = 220 - idade
    const faixa_batimentos_ativ_intensa = `${0.7 * batimentos} - ${0.85 * batimentos}`
    return faixa_batimentos_ativ_intensa
}    
}
main()