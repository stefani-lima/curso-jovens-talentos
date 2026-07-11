const aCores = ["aqua", "black", "brown", "gold", "grey", "red", "yellow", "green", "blue", "magenta", "tomato", "orange", "olive", "navy"];
const container = document.getElementById('container')

function funcaoCriarDiv() {
    container.innerHTML = "";

    let div = document.createElement('div')
    container.appendChild(div);

    let corFundo = aCores[Math.floor(Math.random() * aCores.length)]
    let corBorda = aCores[Math.floor(Math.random() * aCores.length)]
    div.style.backgroundColor = corFundo;
    div.style.border = `2px solid ${corBorda}`; 
    div.style.width = '20px';
    div.style.height = '20px';
}