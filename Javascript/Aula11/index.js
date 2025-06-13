// ATIVIDADE 3

// function getUsuarios(usuarios, letraEscolhida) {
//     let res = "Usuários encontrados:\n\n";
//     for(i = 0; i < usuarios.length; i++){
//         if (letraEscolhida === usuarios[i].nome.charAt(0).toLocaleUpperCase()){
//             res += `${usuarios[i].nome}\n`;
//         }
//     }
//     return res;
// }

// const usuarios = [
//     { nome: "Ana Silva" },
//     { nome: "Bruno Oliveira" },
//     { nome: "Barla Souza" },
//     { nome: "Daniel Lima" },
//     { nome: "Eduarda Costa" },
//     { nome: "Felipe Rocha" },
//     { nome: "Gabriela Martins" },
//     { nome: "Henrique Almeida" },
//     { nome: "Isabela Fernandes" },
//     { nome: "Luis Fernando" },
//     { nome: "João Pereira" }
// ];

// let letraEscolhida = prompt("Digite a letra inicial dos nomes quer buscar:").toLocaleUpperCase()

// alert(getUsuarios(usuarios,letraEscolhida));

// ATIVIDADE 4

let usuarios = [
    {usuario:"Luis", senha:"1234"}
]

function cadastrarUsuario(usuario,senha) {
    let novoUsuario = {usuario: usuario, senha: senha};
    usuarios.push(novoUsuario);
    alert("Cadastro feito com sucesso!");
}

function fazerLogin(nome, senha){
    let loginValido = false
    for(u of usuarios){
        if (nome === u.usuario && senha === u.senha){
            loginValido = true;
            break;
        }
    }
    if (loginValido){
        alert(`Login feito com sucesso!`);
    }
    else {
        alert("Usuário ou senha inválidos!")
    }
}

function menu(){
    let opcao = "";
    do {
        opcao = Number(prompt(`
            Menu           
                                        
            1. Cadastrar novo usuário 
            2. Login                  
            0. Sair
                               
            Escolha uma opção:` 
        ));

        if (opcao === 1){
            let novoUsuario = prompt ("Digite o usuário:");
            let novaSenha = prompt ("Digite a senha:");
            cadastrarUsuario(novoUsuario,novaSenha);
            console.log(usuarios);
            continue;
        }

        if (opcao === 2){
            let usu = prompt ("Digite o usuário:");
            let sen = prompt ("Digite a senha:");
            fazerLogin(usu,sen)
            continue;
        }

        if (opcao === 0){
            alert("saindo...");
        }

    } while (opcao != 0)
}



menu();





