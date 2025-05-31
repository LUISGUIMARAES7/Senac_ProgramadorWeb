// let opcao = Number(prompt("Escolha um Filme:\n\n1 - Vida de Inseto\n2 - Os Vingadores\n3 - Premonição"))
// let idade = Number(prompt("Digite sua idade: "));

// switch(opcao) {
//     case 1:
//         alert("Filme liberado")
//         break;
//     case 2:
//         if (idade < 12){
//             alert("Filme bloqueado +12")
//         } else {
//             alert("Filme liberado")
//         }
//         break;
//     case 3:
//         if (idade < 18){
//             alert("Filme bloqueado +18")
//         } else {
//             alert("Filme liberado")
//         }
//         break;
//     default:
//         break;
// }



let opcao = Number(prompt("Conversão:\n\n1 - centímetros\n2 - milímetros\n3 - quilômetro\n4 - polegadas"));
let metro = Number(prompt("Digite um valor em metros: "))
let conv = 0;
switch(opcao) {
    case 1:
        conv = metro * 100
        alert(`${metro}m = ${conv}cm`)
        break;
    case 2:
        conv = metro * 1000
        alert(`${metro}m = ${conv}mm`)
        break;
    case 3:
        conv = metro * 
        alert(`${metro}m = ${conv}km`)
        break;
    case 4:
        conv = metro * 100
        alert(`${metro}m = ${conv}cm`)
        break;
    default:
        break;
}