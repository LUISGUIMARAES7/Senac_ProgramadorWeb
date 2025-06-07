//atividade 1

// let voto = 0;
// let votosLuis = 0 ,votosVinicius = 0 ,votosBruno = 0, nulo_branco = 0;
// let qtdEleitores = Number(prompt(`Digite a quantidade de eleitores:`));

// if (qtdEleitores > 0) {
//     let cont = 0;
//     do {
//         voto = Number(prompt(`Escolha um candidato:\n\n10 - Luis\n13 - Vinicius\n22 -Bruno`));
//         cont++;
//         if (voto == 10) {
//             votosLuis++;
//             continue;
//         } 
//         if (voto == 13) {
//             votosVinicius++;
//             continue
//         }
//         if (voto == 22){
//             votosBruno++;
//             continue
//         }
//         if (voto != 10 && voto != 13 && voto != 22){
//             nulo_branco++;
//         }
//     } while (cont <qtdEleitores )

//     alert (`Resultado das eleições:\n\nLuis: ${votosLuis}\nVinicius: ${votosVinicius}\nBruno: ${votosBruno}\nNulos/Branco: ${nulo_branco}`);
// }
// else {
//     alert(`Digite um valor válido`);
// }

//atividade 2

// let i = 1
// let valor = 0, total = 0, media = 0;

// do {
//     valor = Number(prompt(`Digite o ${i}º valor:`))
//     total += valor;
//     i++;
// } while (i < 6)

// media = total / 5;

// alert(`Soma total: ${total}\n\nMédia: ${media}`);

// atividade 3

// let cont = 0, total = 0;

// while (true) {

//     let num = Number(prompt("Digite um número positivo: "))
    
//     if (num >= 0) {
//         cont++;
//         total += num;
//         continue;
//     }

//     if (num < 0) {
//         break;
//     }

//     alert("Digite um valor válido");
// }

// alert(`Número positivos digitados: ${cont}\n\nTotal: ${total}`);

// atividade 4

// let opc = 0, itemCarrinho = 0;
// let carrinho = [];
// let item;
// let index;

// do {
//     opc = Number(prompt(`Escolha uma opção:\n\n1 - Adicionar item ao carrinho\n2 - Remover item do carrino\n3 - Ver total de itens no carrinho\n4 - Sair`))

//     switch (opc) {
//         case 1:
//             item = prompt("Item:")
//             carrinho.push(item);
//             itemCarrinho ++;
//             alert("Item adicionado do carrinho!");
//             break;
//         case 2:
//             if (itemCarrinho > 0){
//                 item = prompt(`Carrinho: ${carrinho}\n\nDigite o item que deseja remover:`)
//                 index = carrinho.indexOf(item);
                
//                 if (index !== -1){
//                     carrinho.splice(index,1);
//                     alert(`${item} removido do carrinho!`);
//                     itemCarrinho--;
//                 }
//                 else{
//                     alert("Item não encontrado");
//                 }
//             }
//             else {
//                 alert("Carrinho vazio")
//             }
//             break;
//         case 3:
//             if (itemCarrinho < 1) {
//                 alert("Carrinho vazio")
//             }
//             else {
//                 alert(`Carrinho: ${carrinho}`);
//             }
//             break;
//         case 4:
//             alert("Saindo!")
//             break;
//         default:
//             alert("Digite um valor válido!")
//             break;
//     }

// } while (opc !== 4);


// ativida 1


// let frutaCor = [["limão", "verde"],
//                 ["maçã", "vermelho"],
//                 ["banana", "amarela"]];

// let fruta = prompt("Digite o nome de uma fruta:").toLowerCase();
// let encontrado = false;

// for (let l = 0; l < frutaCor.length; l++) {
//     if (frutaCor[l][0] === fruta) {
//         alert(`Fruta: ${frutaCor[l][0]}\nCor: ${frutaCor[l][1]}`);
//         encontrado = true;
//         break;
//     }
// }

// if (!encontrado) {
//     alert("Fruta não está na lista");
// }


// atividade 2

let aluno = [["Luis", "presente"],
            ["Vinicius", "presente"],
            ["Thiago", "ausente"]];

let aln = prompt("Digite o nome do aluno:").toLowerCase();
let encontrado = false;

for (let l = 0; l < aluno.length; l++) {
    if (aluno[l][0].toLowerCase() === aln) {
        alert(`Aluno: ${aluno[l][0]}\nSituação: ${aluno[l][1]}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    alert("Aluno não está na lista");
}