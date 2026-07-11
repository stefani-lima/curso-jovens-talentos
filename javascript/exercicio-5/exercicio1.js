function funcaoSoma(iNum1, iNum2) {
    document.getElementById("teste")
    if (iNum1 === undefined || iNum2 === undefined) {
        window.alert("Erro ao executar função, valor indefinido.");
    } else if (typeof iNum1 !== "number" || typeof iNum2 !== "number") {
        window.alert("Erro ao executar função, tipo de variável incorreta");
    } else {
        window.alert(iNum1 + iNum2)
    }
}

funcaoSoma(2, 3)