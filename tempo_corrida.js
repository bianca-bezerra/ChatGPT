/*Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova
 em minutos.*/

 import { question } from "readline-sync";

 function main(){

    //Entrada
    const distancia_da_prova = Number(question('Distância da prova(m):'))
    const velocidade_media = Number(question('Velocidade(km/h):'))

    //Processamento
    const tempo_da_prova =  calcular_tempo_de_prova(distancia_da_prova,velocidade_media)

    //Saída
    console.log(`O tempo de prova é de ${tempo_da_prova} minuto(s)`)


    //Função usada

    function calcular_tempo_de_prova(distancia_da_prova,velocidade_media){
        const tempo = (distancia_da_prova / (velocidade_media * 1000))*60
        return tempo
    }
 }
 main()