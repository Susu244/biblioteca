const Nome = document.getElementById("nome");
const Email = document.getElementById("email");
const Senha = document.getElementById("senha");
const botaocadastrar = document.getElementById("cadastrar");


botaocadastrar.addEventListener("click", function() {
    const nomeNome = Nome.value;
    const emailDigitado = Email.value;
    const senhaDigitada = Senha.value;


if(nomeNome === ""  || emailDigitado === ""  || senhaDigitada === "" ) {
    alert("Preencha todos os campos!");

}
 else if(nomeNome === "Anna" && emailDigitado === "annaesusu@gmail" && senhaDigitada === "2026" ) {
    alert("Seja bem vindo(a) a nossa biblioteca!");
    window.location.href = "Livros.html"
}
});