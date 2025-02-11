$(document).ready(function() {
    $("#botao-cadastrar").click(function() {
        $("#form-cadastrar").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});

// Função para login
function login() {
    var usuario = document.getElementById('usuario').value.toLowerCase();
    var senha = document.getElementById('senha').value;
    if (usuario === "admin" && senha === "123456") {
        window.location = "index.html";
    } else {
        alert("Acesso Negado. Dados incorretos");
    }
}

// Função para finalizar o cadastro
function finalizarCadastro() {
    var usuario = document.getElementById('cadastro-usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('cadastro-senha').value;

    if (usuario && email && senha) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html"; // Redireciona para a tela de login
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

// Mostrar o formulário de cadastro ao clicar no botão
$(document).ready(function () {
    $("#btn-cadastrar").click(function () {
        $("#form-cadastrar").slideDown("slow"); // Exibe o formulário
        $("#botao-cadastrar").hide(); // Esconde o botão
    });
});
