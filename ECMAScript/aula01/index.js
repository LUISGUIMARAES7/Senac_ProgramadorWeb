// const usuario = {
//     nome: 'Luis',
//     idade: 21,
//     nacionalidade: 'Brasileiro',
//     pais: ['Ray', 'Luciano'],
//     endereco: {
//         cidade: 'São Paulo',
//         estado: 'SP'
//     }
// }

// const {nome,idade, nacionalidade,pais, endereco:{cidade,estado}} = usuario;
// const [mae,pai] = pais;

// // console.log(`${nome} tem ${idade} anos e é ${nacionalidade}`);
// // console.log (`Mãe: ${mae} | Pai: ${pai}`)
// console.log(`${cidade} - ${estado}`);


// Exemplo 2

// function mostrarSkills({nome,hardSkills}){
//     const [tech1,tech2,tech3,tech4] = hardSkills;
//     console.log(`${nome} conhece as linguagens: ${tech1}, ${tech2}, ${tech3}, ${tech4}`)
// }

// const hardSkills = {
//     nome:'Luis',
//     hardSkills: ['Javascript','Node','Java','Python']
// }

// mostrarSkills(hardSkills)



// Exemplo 3 OPERADOR SPREAD

// SPREAD EM ARRAYS

// const numeros = [1,2,3];
// const outrosNumeros = [numeros,4,5,6]
// console.log(outrosNumeros)

// const outrosNumeros2 = [...numeros,4,5,6];
// console.log(`Spread: ` + outrosNumeros2);

//SPREAD EM OBJETOS

// const pessoa = {
//     nome:'Luis',
//     idade:28
// }

// const copiaObjeto = {...pessoa}
// console.log(copiaObjeto);

// const endereco = {
//     cidade:'São Paulo'
// }

// const usuario = {...pessoa,...endereco};
// console.log(usuario);

// SPREAD PARA FUNCTIONS

// function mostraNumeros(a,b,c){
//     console.log(a,b,c)
//     console.log(`Soma: ${a + b +c}`)
// }

// const valores = [10, 30, 40]

// mostraNumeros(...valores)

// const usuario = {
//     nome: 'Mariane',
//     email: 'marianabadu5@gmail.com',
//     idade: 21
// }

// const usuarioAtualizado = {
//     ...usuario,
//     email: 'mariana@gmail.com'
// }

// console.log(usuario)
// console.log(usuarioAtualizado)

// PARAMETROS REST

function mostrarNomes(idade, ...nomes){

    console.log(idade);
    console.log(nomes);
}

mostrarNomes(28,'Luis','Bruno');