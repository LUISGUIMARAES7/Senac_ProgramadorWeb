// atividade 3

// let produtos = [
//     {nome: 'Leite', estoque: 6},
//     {nome: 'Ovos', estoque: 1},
//     {nome: 'Cuscuz', estoque: 3},
//     {nome: 'Arroz', estoque: 4}
// ]


// lista = "Estoque OK:\n";
// for (const p of produtos) {
//     if(p.estoque >= 5) {
//         lista += `${p.nome} - ${p.estoque} Un.\n`;
//     }
// }
// lista += "\nEstoque baixo:\n";
// for (const p of produtos) {
//     if(p.estoque < 5) {
//         lista += `${p.nome} - ${p.estoque} Un.\n`;
//     }
// }

// alert(lista);

// atividade 4

let alunos = [
    {
        nome: 'Luis',
        idade: 28,
        notas: [8,9,7.5]
    },
    {
        nome: 'Bruno',
        idade: 29,
        notas: [9,6,10]
    },
    {
        nome:'Guilherme',
        idade: 25,
        notas: [5,5,5]
    }
]

let txt = "";
let totalNotas = 0, media = 0;

for (i = 0; i < alunos.length; i++) {
    for (j = 0; j < alunos[i].notas.length; j++) {
        totalNotas += alunos[i].notas[j];
    }

    media = totalNotas / 3;
    txt += `${alunos[i].nome} - Média ${media.toFixed(2)} - Situação: `;
    

    if (media < 7) {
        txt += "Reprovado\n\n";
    }else {
        txt += "Aprovado\n\n";
    }

    totalNotas = 0;
    media = 0;
}

alert(txt);