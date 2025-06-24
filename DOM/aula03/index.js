const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function (ev){
    const inputConvidado = document.getElementById('input-convidado');
    const convidado = inputConvidado.value;

    if (inputConvidado.value.trim() === "") {
        alert("Campo obrigatório!");
        return;
    }
    

    const listaConvidados = document.getElementById('lista-convidados');

    const li = document.createElement('li');
    li.innerText = convidado;

    listaConvidados.appendChild(li);

    inputConvidado.value = '';

})