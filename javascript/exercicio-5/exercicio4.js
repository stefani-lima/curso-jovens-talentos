function funcaoCriarBotao() {
    let quebra = document.createElement('br');
    document.body.appendChild(quebra);

    let botao = document.createElement('button');
    botao.innerText = "Criar Botão";
    document.body.appendChild(botao);
}