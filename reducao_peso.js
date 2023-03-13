/*Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas. Sabendo que 1 kg de gordura 
corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário para alcançar essa meta. 
Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de Peso e em quantas semanas. Pergunte 
ainda quanto ele tá disposto a consumir de kcal diariamente. 

Seu objetivo é informar ao usuário qual deve ser seu deficit calórico diário médio e também quanto de 
exercícios diários ele deve fazer para alcançar esse deficit alvo considerando sua ingestão calórica informada.*/

import { question } from "readline-sync";

function main(){

//Entrada
const peso_atual = Number(question('Peso(kg):'))
const meta_de_reduçao = Number(question('Meta de reducão de peso em %:'))
const meta_de_semanas = Number(question('Meta de semanas para a redução:'))
const ingestao_calorica_diaria = Number(question('Consumo desejado de calorias por dia:'))

//Processamento
const peso_corporal_a_reduzir = tranformar_porcentagem_em_kg(peso_atual,meta_de_reduçao)
const tempo_em_dias = transformar_semanas_em_dias(meta_de_semanas)
const calorias_a_reduzir_geral = tranformar_peso_em_caloria(peso_corporal_a_reduzir)
const deficit_medio_diario = Number((calorias_a_reduzir_geral/tempo_em_dias).toFixed(2))
const queima_total_necessaria_com_ativ_fisica = ingestao_calorica_diaria + deficit_medio_diario
//Saída
console.log(`Deficit diário médio necessário: ${deficit_medio_diario}`)
console.log(`Você deverá gastar diariamente ${queima_total_necessaria_com_ativ_fisica} kcal com atividades físicas`)

//Funções usadas
function tranformar_porcentagem_em_kg(peso_atual,meta_de_reduçao){
    const peso_em_kg = peso_atual * (meta_de_reduçao/100)
    return peso_em_kg
}
function transformar_semanas_em_dias(meta_de_semanas){
    const dias = meta_de_semanas * 7
    return dias
}
function tranformar_peso_em_caloria(peso_corporal_a_reduzir){
    const calorias = peso_corporal_a_reduzir * 7700
    return calorias
}
}
main()