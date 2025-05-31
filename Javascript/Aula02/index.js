while (true){
    let opcao = Number(prompt("Escolha uma opção:\n\n1 - Carro mais rápido\n2 - Valor da compra\n3 - Turno que estuda\n\n0 - Sair"));

    switch (opcao) {
        case 0:
            alert("Até mais...")
            break;
        case 1:
            let carro1 = prompt("Digite o nome do primeiro carro:");
            let velCar1 = Number(prompt(`Digite a velocidade do ${carro1}:`));

            if (isNaN(velCar1)){
                alert("Digite um valor válido!");
                break;
            }

            let carro2 = prompt("Digite o nome do segundo carro:");
            let velCar2 = Number(prompt(`Digite a velocidade do ${carro2}:`));

            if (isNaN(velCar2)){
                alert("Digite um valor válido!");
                break;
            }


            if (velCar1 > velCar2){
                alert(`${carro1} é mais rápido que o ${carro2}`);
            } else if (velCar1 < velCar2) {
                alert(`${carro2} é mais rápido que o ${carro1}`);
            } else {
                alert(`As velocidades estão iguais`);
            }
            break;
        case 2:
            let valorCompra = parseFloat(prompt("Digite o valor da compra: R$"));

            if (isNaN(valorCompra)){
                alert("Digite um valor válido!");
                break;
            }

            if (valorCompra >= 100){
                let valorComDesc = valorCompra - (valorCompra * 0.10);
                alert(`Desconto de 10% aplicado!\nValor final: R$ ${valorComDesc}`);
            } else {
                alert(`Sem desconto!\nValor final: R$ ${valorCompra}`);
            }
            break;
        case 3:
            let turno = prompt("Digite seu turno: (M,V,N)").toUpperCase();
    
            if (turno === "M"){
                alert("MATUTINO");
            }
            else if (turno === "V"){
                alert("VESPERTINO");
            } 
            else if(turno === "N"){
                alert("NOTURNO");
            } else {
                alert("Digite um valor válido!");
            }
        default:
            alert("Digite um valor válido!");
            break;
    }
    if (opcao == 0){
        break;
    }
}
