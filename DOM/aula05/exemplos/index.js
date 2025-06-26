//Exemplo 1

// function mudarCor(){
//     const elementroParagrafo = document.getElementById('paragrafo');
//     const button = document.getElementById('mudarCor');

//     elementroParagrafo.style.color = 'red';
//     elementroParagrafo.style.fontSize = '30px';
//     elementroParagrafo.style.fontFamily = 'Courrier-New';

//     button.style.cursor = 'pointer';
// }

// const button = document.getElementById('mudarCor');
// button.addEventListener('click', mudarCor);

//Exemplo 2

function mudarTema(){
    const body = document.querySelector('#body');
//  const body = document.body;
    body.classList.toggle('is-light');
    body.classList.toggle('is-dark');
 
}

const btnMudarCor = document.querySelector('#switchBtn');
btnMudarCor.addEventListener('click', mudarTema)
