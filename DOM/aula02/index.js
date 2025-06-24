function adicionarLivro() {
    const tituloInput = document.getElementById('titulo');
    const autorInput = document.getElementById('autor');
    const anoInput = document.getElementById('ano');
    const editoraInput = document.getElementById('editora');

    const titulo = tituloInput.value;
    const autor = autorInput.value;
    const ano = anoInput.value;
    const editora = editoraInput.value;

    const confirmation = confirm(`Adicionar o livro "${titulo}" do autor "${autor}"?`);

    if (confirmation) {
        const listaLivros = document.getElementById('lista-livros');
        const livroLi = document.createElement('li');

        livroLi.id = "livro-" + titulo.trim().toLowerCase().replace(/\s+/g, "-");
        livroLi.innerText = `📖 ${titulo}, ${autor}, ${ano}, ${editora}`;

        listaLivros.appendChild(livroLi);

        tituloInput.value = '';
        autorInput.value = '';
        anoInput.value = '';
        editoraInput.value = '';
    }
}



function removerLivro(){
    const removerTitulo = document.getElementById('remover-titulo').value.trim().toLowerCase().replace(/\s+/g, "-");
    const bookItem = document.getElementById('livro-' + removerTitulo);

    if (bookItem){
        const confirmation = confirm (`Deseja remover o livro "${removerTitulo.innerText}"?`);
        if (confirmation) {
            document.getElementById("lista-livros").removeChild(bookItem)
            document.getElementById("remover-titulo").value = "";
        }
    } else {
        alert("Livro não encontrado!");
    }
}