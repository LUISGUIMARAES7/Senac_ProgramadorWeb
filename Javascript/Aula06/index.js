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