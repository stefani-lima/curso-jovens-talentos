let resultado = document.getElementById("resultado");

let iNum1 = (document.getElementById("num1"));
let iNum2 = (document.getElementById("num2"));

function funcaoSomar() {
    let iValor1 = Number(iNum1.value);
    let iValor2 = Number(iNum2.value);

    if (iNum1.value === "" || iNum2.value === "") {
        resultado.innerText = "Erro ao executar função, valor indefinido.";
        return;
    }

    if (Number.isNaN(iValor1) || Number.isNaN(iValor2)) {
        resultado.innerText = "Erro ao executar função, tipo de variável incorreta";
        return;
    }
    
    resultado.innerHTML = `${iValor1} + ${iValor2} = ${iValor1 + iValor2}`;
}

iNum1.addEventListener("input", funcaoSomar);
iNum2.addEventListener("input", funcaoSomar);