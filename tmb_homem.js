/*A Taxa Metabólica Basal (TMB) é o mínimo de energia necessária para manter as funções do organismo em
repouso,como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal.*/



import { question } from "readline-sync"


function main(){

//Entrada
const peso = Number(question('Peso(kg):'))
const altura = Number(question('Altura(cm):'))
const idade = Number(question('Idade:'))
const genero = question('Genero(M ou F):')

//Processamento
const tmb_homem = calcula_tmb_homem(peso,altura,idade)

//Saída
console.log(`A Taxa Metabólica Basal de um homem com essas caracteristicas é de ${tmb_homem} calorias`)

//Função usada

function calcula_tmb_homem(peso,altura,idade){
    const tmb_masculino =  Math.floor( 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))
    return tmb_masculino
}

}

main()