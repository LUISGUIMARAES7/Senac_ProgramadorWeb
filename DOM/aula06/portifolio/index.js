function mudarTema() {
    const body = document.body;
    body.classList.toggle('is-light');
    body.classList.toggle('is-dark');
    
    const btnMudarTema = document.querySelector('#btnMudarTema');
    
    if (btnMudarTema.innerText === 'Modo Escuro') {
    btnMudarTema.innerText = 'Modo Claro';
    } else {
    btnMudarTema.innerText = 'Modo Escuro';
    }

}

const btnMudarTema = document.querySelector('#btnMudarTema');
btnMudarTema.addEventListener('click', mudarTema)