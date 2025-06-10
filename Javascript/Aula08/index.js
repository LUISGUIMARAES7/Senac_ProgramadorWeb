// let pessoa = {
//     nome: "Mariana",
//     idade: 21,
//     altura: 1.64,
//     cidade: "São Paulo"
// }

// console.log(pessoa.nome);

// let carro = {
//     marca: 'Fiat',
//     modelo: 'Uno'
// }

// let produto = {
//     nome: 'Notebook',
//     preco: 3500,
//     emEstoque: true,
//     especificacoes: {
//         marca: 'Dell',
//         memoria: '16GB',
//         armazenamento:'512GB SSD'
//     }
// }

// console.log(produto.nome)
// console.log(produto.especificacoes.marca)

// let alunos = [
//     {
//         nome: 'Luis',
//         idade: 28,
//         notas: [8,9,7.5]
//     },
//     {
//         nome: 'Bruno',
//         idade: 29,
//         notas: [9,6,10]
//     },
//     {
//         nome:'Guilherme',
//         idade: 25,
//         notas: [9,8,10]
//     }
// ]

// console.log(alunos[1].notas)

// let concecionaria = {
//     nome: 'SenacAuto',
//     local: 'São Paulo',
//     carros: [
//         {modelo: "Civic", ano: 2025, cor: 'Preta'},
//         {modelo: "Onix", ano: 2024, cor: 'Branco'},
//         {modelo: "Fusca", ano: 2020, cor: 'Verde'}
//     ]
// }

// console.log(concecionaria.carros[2].modelo)
// console.log(concecionaria.carros.length)

// let produtos =  [
//     {nome: 'Mouse',preco: 50},
//     {nome: 'Teclado',preco: 120},
//     {nome: 'Monitor',preco: 900},
// ]

// let continuar = true;

// while (continuar){
//     let lista = 'Lista de produtos:\n'
//     for (let i = 0; i < produtos.length; i++){
//         lista += `${i+1}. ${produtos[i].nome} - R$ ${produtos[i].preco}\n`
//     }

//     lista += "\nDigite o n° do produto que deseja alterar ou 'sair' para encerrar o programa:";
//     let escolha = prompt(lista);

//     if (escolha === null || escolha.toLocaleLowerCase() === "sair") {
//         continuar = false;
//     }

//     let indice = Number(escolha) - 1;

//     if (!isNaN(indice) && indice >= 0 && indice < produtos.length){
//         let novoPreco = parseFloat(prompt(`Digite o novo preço para ${produtos[indice].nome}`));

//         if (!isNaN(novoPreco)) {
//             produtos[indice].preco = novoPreco;
//             alert(`Preço de ${produtos[indice].nome} atualizado para R$ ${novoPreco}`)
//         }
//         else {
//             alert("Preço inválido. Tente novamente!")
//         }
//     }
//     else {
//         alert("Opção inválida. Tente novamente!")
//     }
// }

// let resumo =  "Preços atualizados:\n"

// for(let p of produtos){
//     resumo += `${p.nome}: R$ ${p.preco}\n`;
// }

// alert(resumo);

// ATIVIDADE 1

let produtos = [
    {nome: 'Leite', estoque: 6},
    {nome: 'Ovos', estoque: 5},
    {nome: 'Cuscuz', estoque: 3}
]

let continuar = true;

while(continuar){
    let lista = 'Produtos:\n\n'
    for (let i = 0; i < produtos.length; i++){
        lista += `${i+1}. ${produtos[i].nome} - ${produtos[i].estoque} Un.\n`
    }

    lista += "\nDigite o n° do produto que deseja remover ou 'sair' para encerrar o programa:";
    let escolha = prompt(lista);

    if (escolha === null || escolha.toLocaleLowerCase() === "sair") {
        continuar = false;
        break;
    }

    let indice = Number(escolha) - 1;

    if (!isNaN(indice) && indice >= 0 && indice < produtos.length){

        produtos[indice].estoque--;
        alert = (`1 unidade de ${produtos[indice].nome} removido`);

    }else {

        alert("Opção inválida. Tente novamente!")

    }

}

// atividade 2

// let biblioteca =  [
//     {livro: 'Harry Potter', qtd: 10},
//     {livro: 'Senhos dos Anéis', qtd: 20},
//     {livro: 'As vantagens de ser invisível',qtd: 5}
// ]

// let continuar = true;

// while (continuar){
//     let lista = 'Biblioteca Senac:\n\n'
//     for (let i = 0; i < biblioteca.length; i++){
//         lista += `${i+1}. ${biblioteca[i].livro} - ${biblioteca[i].qtd} Un.\n`
//     }

//     lista += "\nDigite o n° do livro que deseja alterar ou 'sair' para encerrar o programa:";

//     let escolha = prompt(lista);

//     if (escolha === null || escolha.toLocaleLowerCase() === "sair") {
//         continuar = false;
//         break;
//     }

//     let indice = Number(escolha) - 1;

//     if (!isNaN(indice) && indice >= 0 && indice < biblioteca.length){
//         let novaQtd = parseFloat(prompt(`Digite uma nova quantidade para "${biblioteca[indice].livro}"`));

//         if (!isNaN(novaQtd)) {
//             biblioteca[indice].qtd = novaQtd;
//             alert(`Quantidade do livro "${biblioteca[indice].livro}" atualizado para ${novaQtd} unidades.`)
//         }
//         else {
//             alert("Quantidade inválida. Tente novamente!")
//         }
//     }
//     else {
//         alert("Opção inválida. Tente novamente!")
//     }
// }

// let resumo =  "Biblioteca atualizada:\n\n"

// for(let b of biblioteca){
//     resumo += `${b.livro}: ${b.qtd} Un.\n`;
// }

// alert(resumo);