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
const tmb_mulher = calcula_tmb_mulher(peso,altura,idade)

//Saída
console.log(`A Taxa Metabólica Basal de uma mulher com essas caracteristicas é de ${tmb_mulher} calorias`)

//Função usada

function calcula_tmb_mulher(peso,altura,idade){
    const tmb_feminino = Math.floor(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade))
    return tmb_feminino
}

}

main()