document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.querySelector('form');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('mensagemSucesso').style.display = 'block';
            formContato.reset();
        });
    } else {
        console.error('Formulário não encontrado!');
    }
});
