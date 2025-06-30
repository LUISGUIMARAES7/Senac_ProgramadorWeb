function mudarTema() {
    const body = document.body;
    body.classList.toggle('is-light');
    body.classList.toggle('is-dark');
    
    const btnMudarTema = document.querySelector('#btnMudarTema');
    
    if (btnMudarTema.innerText === 'Modo Escuro') {
    btnMudarTema.innerText = 'Modo Claro';
    // btnMudarTema.style.background = '#f5f5f5';
    // btnMudarTema.style.color = '#333';
    } else {
    btnMudarTema.innerText = 'Modo Escuro';
    // btnMudarTema.style.background = '#333';
    // btnMudarTema.style.color = '#f5f5f5';
    }

}

const btnMudarTema = document.querySelector('#btnMudarTema');
btnMudarTema.addEventListener('click', mudarTema)