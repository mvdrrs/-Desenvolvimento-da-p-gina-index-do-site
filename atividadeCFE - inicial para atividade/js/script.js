// Função para finalizar o cadastro e salvar os dados no localStorage
function finalizarCadastro() {
    var usuario = document.getElementById('cadastro-usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('cadastro-senha').value;

    if (usuario && email && senha) {
        // Criando um objeto com os dados do usuário
        var userData = {
            usuario: usuario.toLowerCase(),
            email: email,
            senha: senha
        };

        // Salvando os dados no localStorage
        localStorage.setItem('usuarioCadastrado', JSON.stringify(userData));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html"; // Redireciona para a tela de login  
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

// Função para login
function login() {
    var usuarioDigitado = document.getElementById('usuario').value.toLowerCase();
    var senhaDigitada = document.getElementById('senha').value;

    // Recupera os dados do usuário armazenado no localStorage
    var usuarioCadastrado = JSON.parse(localStorage.getItem('usuarioCadastrado'));

    if (usuarioCadastrado && usuarioDigitado === usuarioCadastrado.usuario && senhaDigitada === usuarioCadastrado.senha) {
        alert("Login realizado com sucesso!");
        window.location = "index.html"; // Redireciona para a página principal
    } else {
        alert("Acesso Negado. Dados incorretos");
    }
}

// Mostrar o formulário de cadastro ao clicar no botão
$(document).ready(function () {
    $("#btn-cadastrar").click(function () {
        $("#form-cadastrar").slideDown("slow"); // Exibe o formulário
        $("#botao-cadastrar").hide(); // Esconde o botão
    });
});
