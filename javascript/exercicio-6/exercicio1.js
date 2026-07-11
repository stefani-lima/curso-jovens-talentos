function funcaoSomar() {
    let iNum1 = Number(document.getElementById('num1').value);
    let iNum2 = Number(document.getElementById('num2').value);
    if (iNum1 === undefined || iNum2 === undefined) {
        window.alert("Erro ao executar função, valor indefinido.");
    } else if (typeof iNum1 !== "number" || typeof iNum2 !== "number") {
        window.alert("Erro ao executar função, tipo de variável incorreta");
    } else {
        window.alert(iNum1 + iNum2);
    }
}
