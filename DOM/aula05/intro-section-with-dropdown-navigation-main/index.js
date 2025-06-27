function mudarTema() {
    const body = document.body;
    body.classList.toggle('is-light');
    body.classList.toggle('is-dark');

    const links = document.querySelectorAll('.a-light, .a-dark');
    links.forEach(link => {
        link.classList.toggle('a-light');
        link.classList.toggle('a-dark');
    });
}

const btnMudarCor = document.querySelector('#switchBtn');
btnMudarCor.addEventListener('click', mudarTema);
