// const numero = Number(prompt("Digite um número"))

// if(numero % 2 === 0){
//     console.log("Número é PAR")
// }else{
//     console.log("Número é IMPAR")
// }

// Q 1

// const numero = Number(prompt("Digite um número"))

// if(numero % 2 === 0 && numero > 0){
//     console.log("Número é PAR e Positivo")
// }else{
//     console.log("Ou não é positivo ou não é Par")
// }

// Q 2 

// const peso = Number(prompt("Digite seu Peso"))
// const altura = Number(prompt("Digite sua Altura"))

// const imc = peso/(altura**2)

// if(imc < 16.9 ){
//     console.log("Muito abaixo do Peso")
// }else if(imc >= 16.9 && imc <= 18.4){
//     console.log("Abaixo do Peso")
// }else if(imc > 18.4 && imc <= 24.9){
//     console.log("Peso Normal")
// }else if(imc > 24.9 && imc <= 29.9){
//     console.log("Acima do Peso")
// }else if(imc > 29.9 && imc <= 34.9){
//     console.log("Obesidade grau I")
// }else if(imc > 34.9 && imc <= 40){
//     console.log("Obesidade grau II")
// }else{
//     console.log("Obesidade grau III")
// }

// Q 3

// const preco = Number(prompt("Digite o preço do produto"))
// const idade = Number(prompt("Digite sua idade"))

// const desconto = preco-(preco*0.1)

// if(idade <18 ){
//     console.log(`Preço com desconto R$ ${desconto}` )
// }else{
//     console.log(`Preço final é R$ ${preco}`)
// }

// Q 4 

// const lado1 = Number(prompt("Comprimento Lado 1"))
// const lado2 = Number(prompt("Comprimento Lado 2"))
// const lado3 = Number(prompt("Comprimento Lado 3"))

// if(lado1 === lado2 && lado1 === lado3){
//     console.log(`É um triângulo equilátero`)
// }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
//     console.log(`É um triângulo Isósceles`)
// }else{
//     console.log(`É um triângulo Escaleno`)
// }

// Q 6

// const numero = Number(prompt("Digite um Número de 1 a 7"))

// switch(numero){
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda-feira")
//         break
//     case 3:
//         console.log("Terça-feira")
//         break
//     case 4:
//         console.log("Quarta-feira")
//         break
//     case 5:
//         console.log("Quinta-feira")
//         break
//     case 6:
//         console.log("Sexta-feira")
//         break
//     case 7:
//         console.log("Sábado")
// }

// Q 7

// const calculo = Number(prompt("Escolha o que deseja calcular agora\n1 - Calcular Área do Triângulo\n2 - Calcular Área do Retângulo\n3 - Calcular Volume do Cubo\n4 - Calcular Área do Círculo\n5 - Sair"))


// switch(calculo){
//     case 1:
//         const altura_triangulo = Number(prompt("Qual a altura do triângulo?"))
//         const base_triangulo = Number(prompt("Qual a base do triângulo?"))
//         const area_triangulo = (base_triangulo*altura_triangulo)/2
//         console.log(area_triangulo)
//         break
//     case 2:
//         const altura_retangulo = Number(prompt("Qual a altura do Retângulo?"))
//         const base_retangulo = Number(prompt("Qual a base do Retângulo?"))
//         const area_retangulo = base_retangulo*altura_retangulo
//         console.log(area_retangulo)
//         break
//     case 3:
//         const aresta = Number(prompt("Qual o valor da Aresta do Cubo?"))
//         const volume_cubo = aresta**3
//         console.log(volume_cubo)
//         break
//     case 4:
//         const raio = Number(prompt("Qual a medida do raio do círculo?"))
//         const area_circulo = Math.PI * (raio**2)
//         console.log(area_circulo)
//         break
//     case 5:
//         console.log("Obrigado por vir ao meu Site")
// }