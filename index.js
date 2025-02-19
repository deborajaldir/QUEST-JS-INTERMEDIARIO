const formularioEnviado = document.querySelector('.formulario')
const input = document.querySelectorAll('.input')
const mensagemObrigatoria = document.querySelectorAll('.mensagemObrigatoria')

formularioEnviado.addEventListener('submit', (event) => {
    event.preventDefault()
    input.forEach(input => {

        const campoObrigatorio = input.nextElementSibling;

        if (input.value == "") {
            input.classList.add('dados-invalidos');
            campoObrigatorio.classList.add('mensagemMostrar');
        }

        else {
            input.classList.add('dados-validos');
        }
    }

    )
}

)