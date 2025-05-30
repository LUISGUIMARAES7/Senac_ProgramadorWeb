// let nome = prompt("Digite seu nome:");
// alert("Olá, " + nome);
// console.log(`Olá, ${nome}`);

// let idade = parseInt(prompt("Digite sua idade:"));
// console.log(`Sua idade é ${idade}`);

// let idadeFutura = idade + 10;

// let mensagem = `Olá ${nome}`;

// let n1 = prompt("Digite o primeiro número: ");
// let n2 = prompt("Digite o segundo número: ");

// let num1 = parseFloat(n1);
// let num2 = parseFloat(n2);
// let soma = num1 + num2;

// let msg = `A soma dos número é igual a ${soma.toFixed(2)}`;
// alert(msg);

// let nota1 = parseFloat(prompt("Digite a 1º nota: "));
// let nota2 = parseFloat(prompt("Digite a 2º nota: "));
// let nota3 = parseFloat(prompt("Digite a 3º nota: "));

// let media = (nota1 + nota2 + nota3) / 3;

// alert(`A média das notas é ${media.toFixed(1)}`);

// let peso = parseFloat(prompt("Digite seu peso:"));
// let altura = parseFloat(prompt("Digite sua altura:"));

// let imc = peso / (altura * altura);

// let msg = `IMC: ${imc.toFixed(0)}`;

// alert(msg);

// let nota = 10;
// if (nota > 6) {
//     console.log("aluno aprovado!")
// } else {
//     console.log("aluno reprovado")

// }

// let numero = -30;

// if (numero > 0) {
//     console.log("número positivo");
// } else if (numero < 0){
//     console.log("número negativo");
// } else {
//     console.log("número zero");
// }

// let idade = parseInt(prompt("Digite sua idade:"))

// if (idade >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// while (true){
//     let num1 = parseFloat(prompt("digite o primeiro número:"));
//     let num2 = parseFloat(prompt("digite o segundo número:"));

//     if(num1 > num2) {
//         alert(`primeiro número (${num1}) é maior que o segundo (${num2})`);
//     } else if (num2 > num1) {
//         alert(`segundo número (${num2}) é maior que o primeiro (${num1})`);
//     } else {
//         alert(`os números são iguais`)
//     }
// }

while (true) {
    let peso = parseFloat(prompt("Digite seu peso:"));
    let altura = parseFloat(prompt("Digite sua altura:"));

    let imc = peso / (altura * altura);

    if (imc <= 18.5){
        alert(`IMC: ${imc.toFixed(1)} - Abaixo do peso`);
    } else if (imc <= 24.9) {
        alert(`IMC: ${imc.toFixed(1)} - Peso Normal`);
    } else if (imc <= 29.9) {
        alert(`IMC: ${imc.toFixed(1)} - Sobrepeso`);
    } else if (imc <= 34.9) {
        alert(`IMC: ${imc.toFixed(1)} - Obesidade grau I`);
    } else if (imc <= 39.9) {
        alert(`IMC: ${imc.toFixed(1)} - Obesidade grau II (severa)`);
    } else {
        alert(`IMC: ${imc.toFixed(1)} - Obesidade grau III (mórbida)`);
    }
}