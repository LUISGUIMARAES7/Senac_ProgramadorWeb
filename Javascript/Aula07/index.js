let cinema = [
    ["L","O","L"],
    ["O","O","L"],
    ["L","O","O"]
];

let continuar = true;

while (continuar){
    let map = `Mapa de assentos (L = Livre - O = Ocupado)\n\n`;
    
    for (i =0; i < cinema.length; i ++){
        map += `Fileira ${i + 1}: ${cinema[i].join(" ")}\n`;
    }

    alert (map)

    let inputFileira = prompt("Digite o número da fileira (1 a 3) ou 'sair' para encerrar");

    if (inputFileira == null || inputFileira.toLowerCase() === "sair"){
        continuar = false;
    }

    let inputAssento = prompt("Digite o número do assento (1 a 3)");

    if (inputAssento === null){
        continuar = false;
    }

    let fileira = Number(inputFileira) - 1;
    let assento = Number(inputAssento) - 1;

    if (!isNaN(fileira) && !isNaN(assento) && fileira >= 0 && fileira < cinema.length && assento >= 0 && assento < cinema[0].length){
        if (cinema[fileira][assento] === "L"){
            cinema[fileira][assento] = "O";
            alert("Assento reservado com sucesso!");
        } 
        else {
            alert("Esse assento já está ocupado 😢");
        }
    }
    else {
        alert("Posição inválida. Tente novamente!");
    }
}

alert("Obrigado por usar o sistema de assentos. Volte Sempre! 😁");



