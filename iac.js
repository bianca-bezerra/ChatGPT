/* O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura
 corporal. Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril 
 e altura.
 
Dado o quadril (em cm) e a altura (em cm) de uma pessoa, calcule o IAC dessa pessoa.
Fórmula do IAC: IAC = (quadril / (altura * sqrt(altura))) - 18 
 Magra : entre 0 e 8.9
Normal :  entre 9 e 20.9
Sobrepeso : entre 21 e 25.9
Obesidade grau 1 : entre 26 e 29.9
*/

 import { question } from 'readline-sync'

 function main(){

  //Entrada
const quadril = Number(question('Medida do quadril(cm):'))
const altura = Number(question('Altura(m):'))

  //Processamento
const iac_resultado = calcula_iac(quadril,altura)
const classificação = verificar_iac(iac_resultado)
const medidas_max_min_normalizar = calcular_max_min_quadril(quadril,altura)


  //Saída
console.log(`O índice de adiposidade corporal é ${iac_resultado}%`)
console.log(`De acordo com seu IAC, você está classificado em ${classificação}`)
console.log(`Para normalizar seu IAC, ${medidas_max_min_normalizar}`)

  //Funções usadas

function calcula_iac(quadril,altura){
    const iac = ((quadril/(altura * Math.sqrt((altura)))) - 18).toFixed(2)
    return iac
    }

function verificar_iac(iac){
    if (iac >= 0 && iac <= 8.9){
        return 'Magro'
    }else if (iac >= 9 && iac <= 20.9){
        return 'Normal'
    }else if (iac >= 21 && iac <= 25.9){
        return 'Sobrepeso'
    }else {
        return 'Obesidade grau 1'
    } 
}

function calcular_max_min_quadril(quadril,altura){
    const quadril_max = (38.9 * (altura * Math.sqrt(altura))).toFixed(2)
    const quadril_min = (27 * (altura * Math.sqrt(altura))).toFixed(2)
    const medidas_para_normal = `é ideal que a medida do seu quadril seja no mínimo ${quadril_min} cm e no máximo ${quadril_max} cm`
    return medidas_para_normal
}
    
}
  
 main()