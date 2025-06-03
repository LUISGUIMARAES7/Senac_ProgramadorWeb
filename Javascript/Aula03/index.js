// let i = 1;
// let par = 0;
// let impar = 0;

// while ( i <= 5) {
//     let num = Number(prompt(`Digite o ${i}º valor:`));
//     if (num % 2 == 0){
//         par++;
//     }else {
//         impar++;
//     }
//     i++;
// }

// alert(`Par: ${par}\n\nÍmpar: ${impar}`)

// atividade 2

// let i = 1;
// let palavrasCurtas = 0;
// while ( i <= 5) {
//     let palavra = prompt(`Digite a ${i}º palavra:`);
//     if (palavra.length <= 4){
//         palavrasCurtas++;
//     }
//     i++;
// }

// alert(`${palavrasCurtas} palavras curtas digitadas`)


  // Atividade 3
  
let usuario = prompt("Cadastre um nome de usuário:");
let senha = prompt("Cadastre uma senha:");

while (true){
    let usuarioLogin = prompt("Digite seu nome de usuário:");
    let senhaLogin = prompt("Digite sua senha:");

    if (usuario === usuarioLogin && senha === senhaLogin) {
        alert("Login realizado com sucesso!");
        break;
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
 }


