/*Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas. Sabendo que 1 kg de gordura 
corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário para alcançar essa meta. 
Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de Peso e em quantas semanas. 
Pergunte ainda quanto ele tá disposto a consumir de kcal diariamente. 
Seu objetivo é informar ao usuário qual deve ser seu deficit calórico diário médio e também quanto de exercícios
diários ele deve fazer para alcançar esse deficit alvo considerando sua ingestão calórica informada.*/

import { question } from "readline-sync"

function main(){
    //Entrada
    const peso_atual = Number(question('Peso atual:'))
    const meta_reducao_peso = Number(question('Meta em % para reducão de peso:'))
    const meta_semanas = Number(question('Meta de semanas:'))
    const ingestao_calorica_diaria = Number(question('Calorias ingeridas diariamente:'))

    //Processamento
    const quilos_por_porcentagem = meta_reducao_peso * calcula_relaçao_peso_porcentagem(peso_atual)
    const calorias_recomendadas_deficit = ingestao_calorica_diaria - (quilos_por_porcentagem * 7700)/(meta_semanas*7) 
    const deficit_medio_diario = (ingestao_calorica_diaria - calorias_recomendadas_deficit).toFixed(2)
    
    //Saída
    
    console.log(`Para alcançar a meta desejada é preciso realizar um deficit de ${deficit_medio_diario} calorias por dia`)


    //Funções usadas
    function calcula_deficit_calorico(ingestao_calorica_diaria){
        const deficit_calorico = ingestao_calorica_diaria - 1100
        return deficit_calorico
    }

    function calcula_relaçao_peso_porcentagem(peso_atual){
        const um_porcento_peso = peso_atual/100
        return um_porcento_peso
        
       
    }
    

    }


main()