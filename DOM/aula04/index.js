const usuariosCadastrados = [];
const btnCadastrar = document.getElementById('btnCadastrar');

document.getElementById('formCadastro').addEventListener('submit',function(ev){
    ev.preventDefault();
    const usuario = document.getElementById('nomeUsu').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    if (usuario.trim() === ""|| email.trim() === "" || senha.trim() === "" || confirmarSenha.trim() === "") {
        alert("Campos vazios obrigatórios")
        return;
    }

    if (senha !== confirmarSenha ){
        alert("As senhas não conferem");
        return;
    }
    else {

        usuariosCadastrados.push({usuario: usuario,email: email, senha: senha});
    
        alert(`Usuário "${usuario}" cadastrado com sucesso!`);
    
        ev.target.reset();
    }

});


const btnEntrar = document.getElementById('btnEntrar');

btnEntrar.addEventListener('click', function(ev){
    ev.preventDefault();
    const sectionElement = ev.currentTarget.parentNode;
    const email = sectionElement.children.emailLogin.value.trim();
    const senha = sectionElement.children.senhaLogin.value.trim();

    const usuario = usuariosCadastrados.find(u => u.email === email && u.senha === senha);

    if (email.trim() === "") {
        alert("Campo email obrigatório");
        return;
    }

    if (senha.trim() === "") {
        alert("Campo senha obrigatório");
        return;
    }

    if (!usuario) {
        alert(`Usuário não cadastrado`);
        return;
    }

    if (usuario.senha !== senha){
        alert("Senha incorreta!");
        return;
    }
    else {
        alert("Login feito com sucesso!");
    }

    document.getElementById('emailLogin').value = '';
    document.getElementById('senhaLogin').value = '';

});
