let aValores = ["Saab", "Volvo", "BMW"];
let len = aValores.length;

function funcaoExibirValores(aValores) {
    let texto = "";
    for (let i = 0; i < len; i++) {
        texto += `${aValores[i]}<br>`;
    }

    document.getElementById("div").innerHTML = texto;
}