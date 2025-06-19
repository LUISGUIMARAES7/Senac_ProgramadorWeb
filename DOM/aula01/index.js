// Exemplo 1
// function addInput(){
//     const ul = document.getElementById('inputs');

//     // Criando LI
//     const newLi = document.createElement('li');
//     newLi.className = 'list-item';
//     newLi.innerText = 'NOVO ITEM:';

//     //CRIANDO INPUT
//     const newInput = document.createElement('input');
//     newInput.type = 'text';
//     newInput.name = 'input-text';

//     //ADD ELEMENTOS CRIADOS DENTRO DA UL COMO ELEMENTO FILHO
//     newLi.appendChild(newInput);
//     ul.appendChild(newLi);

// }

//exemplo 2

// function addContact(){
//     const contactSection = document.getElementById('contact-list');

//     const h3 = document.createElement('h3');
//     h3.innerText = 'Contato:';

//     const ul = document.createElement('ul');
//     const li = document.createElement('li');

//     li.innerText = 'Nome:';
//     const nameInput = document.createElement('input');
//     nameInput.type = 'text';
//     nameInput.name = 'input-text';
//     li.appendChild(nameInput);
//     ul.appendChild(li);
//     ul.appendChild(document.createElement('br'));


//     const phoneLi = document.createElement('li');
//     phoneLi.innerText = 'Telefone:';
//     const phoneInput = document.createElement('input');
//     phoneInput.type = 'text';
//     phoneInput.name = 'input-text';
//     phoneLi.appendChild(phoneInput);
//     ul.appendChild(phoneLi);
//     ul.appendChild(document.createElement('br'));

//     const addressLi = document.createElement('li');
//     addressLi.innerHTML = '<label class = "label-address"> Endereço </label>';
//     const addressInput = document.createElement('input');
//     addressInput.type = 'text';
//     addressInput.name = 'address-input';
//     addressInput.id = 'address';
//     addressLi.appendChild(addressInput);
//     ul.appendChild(addressLi);
//     ul.appendChild(document.createElement('br'));

//     contactSection.append(h3,ul);
// }

// function removeContact(){
//     const contactSection = document.getElementById('contact-list');
//     const title = document.getElementsByTagName('h3');
//     const contacts = document.getElementsByTagName('ul');

//     contactSection.removeChild(title[title.length-1]);
//     contactSection.removeChild(contacts[contacts.length-1]);
// }


// Atividade

function addTask(){
    const task = document.getElementById('task');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    
    const tarefaLi = document.createElement('li');
    tarefaLi.innerHTML = '<label class = "label-tarefa"> Tarefa: </label>';
    const inputTarefa = document.createElement('input');
    inputTarefa.innerText = 'kkk'
    inputTarefa.type = 'text';
    inputTarefa.name = 'input-text'
    inputTarefa.id = 'tarefa'
    tarefaLi.appendChild(inputTarefa);
    ul.appendChild(tarefaLi);
    ul.appendChild(document.createElement('br'));

    const timeLi = document.createElement('li');
    timeLi.innerHTML = '<label class = "label-tarefa"> Horário: </label>';
    const inputTime = document.createElement('input');
    inputTime.type = 'time';
    timeLi.appendChild(inputTime);
    ul.append(timeLi);
    ul.appendChild(document.createElement('br'));

    const descricaoLi = document.createElement('li');
    descricaoLi.innerHTML = '<label class = "label-descricao"> Descrição: </label>';
    const inputDescricao = document.createElement('input');
    inputDescricao.type = 'textarea';
    descricaoLi.appendChild(inputDescricao);
    ul.append(descricaoLi);
    ul.appendChild(document.createElement('br'));

    task.append(ul);
}

function removeTask(){

    const task = document.getElementById('task');

    const tastExistente = task.querySelector('li');

    if (!tastExistente) {
        alert('Não existe tarefa para remover');
        return;
    }
    
    const tarefas = document.getElementsByTagName('ul');

    task.removeChild(tarefas[tarefas.length-1]);
}