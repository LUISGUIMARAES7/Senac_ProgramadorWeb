// atividade 1

// function contarEpisiodisAssistidos(ep){

//     let res = "Episodios assistidos:\n\n";

//     for (i=0;i < ep.length; i++){

//         if (ep[i].assistido === true){
//             res += `Ep.${ep[i].episodio}: assistido ✔\n`
//         }
//         else {
//             res += `Ep.${ep[i].episodio}: não assistido ❌\n`
//         }
//     }
//     return res;
// }

// let ep = [
//     {episodio: 1, assistido: true},
//     {episodio: 2, assistido:true},
//     {episodio: 3, assistido:false},
//     {episodio: 4, assistido:true},
//     {episodio: 5, assistido:false}
// ]

// console.log(contarEpisiodisAssistidos(ep));


// atividade 2

function musicaMaisLonga(musicas) {
    let res = "";
    let musicaAtual = 0;

    if (musicas.length > 0){

        for (i=0;i < musicas.length; i++){

            if (musicas[i].duracao > musicaAtual){                                                                                                           
                musicaAtual = musicas[i].duracao;
                res = `Música mais longa:\n\n${musicas[i].nome} - ${musicas[i].duracao} segundos`
            }
        }
    }
    else {
        res = "Não há músicas para analisar"
    }
    
    return res;
}

const musicas = [
    { nome: "Bohemian Rhapsody", duracao: 354 },
    { nome: "Stairway to Heaven", duracao: 482 },
    { nome: "Imagine", duracao: 183 },
    { nome: "Smells Like Teen Spirit", duracao: 301 },
    { nome: "Hotel California", duracao: 391 },
    { nome: "Billie Jean", duracao: 294 },
    { nome: "Sweet Child O' Mine", duracao: 356 },
    { nome: "Hey Jude", duracao: 431 },
    { nome: "Like a Rolling Stone", duracao: 369 },
    { nome: "Wonderwall", duracao: 558 }
];

console.log(musicaMaisLonga(musicas))

