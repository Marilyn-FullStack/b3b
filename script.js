$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        // Realizar validações antes de enviar o formulário
        if (!validateName()) {
            alert("Por favor, digite um nome com mais de três letras.");
            return;
        }

        if (!validateEmail()) {
            alert("Por favor, digite um endereço de email válido.");
            return;
        }

        if (!validateSubject()) {
            alert("O assunto deve ter no mínimo 7 caracteres.");
            return;
        }

        // Simulando envio do formulário (pode ser substituído pelo código real de envio)
        // Aqui, exibimos a mensagem de sucesso após 1 segundo (1000 milissegundos)
        setTimeout(function () {
            $("#mensagem-sucesso").show();
        }, 1000);
    });

    // Função de validação do nome
    function validateName() {
        var name = $("#nome").val();
        return name.length > 3;
    }

    // Função de validação do email
    function validateEmail() {
        var email = $("#email").val();
        // Utilizando uma expressão regular simples para verificar o formato de email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função de validação do assunto
    function validateSubject() {
        var subject = $("#subject").val();
        return subject.length >= 7;
    }
});
