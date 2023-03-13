import { question} from "readline-sync";

function main(){

const altura = Number(question('Altura(cm):'))
const peso = Number(question('Peso:'))
const idade = Number(question('Idade:'))

const tmb_homem = (10 * peso) + (6.25 *altura) - (5 * idade) + 5
const tmb_mulher =(10 * peso) + (6.25 *altura) - (5 * idade) - 161

const tdee_homem = tmb_homem * calcular_tdee_homem(tmb_homem)
const tdee_mulher = tmb_mulher * calcular_tdee_mulher(tmb_mulher)

function calcular_tdee_homem(tmb_homem){
    const tdee_homem_sedentario = tdee_homem * 1.2
    const tdee_homem_leve_ativo = tdee_homem * 1.375
    const tdee_homem_moderado_ativo = tdee_homem * 1.55
    const tdee_homem_muito_ativo = tdee_homem * 1.725
    const tdee_homem_super_ativo = tdee_homem * 1.9
    return 
}






}


main()