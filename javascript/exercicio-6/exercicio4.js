const caixa = document.getElementById('caixa');
caixa.style.display = 'flex';

function funcaoGerarDivs() {
    let quant = Number(document.getElementById("quant").value);

    caixa.innerHTML = "";

    for (let i = 0; i < quant; i++) {
        let container = document.createElement('div');
        container.innerHTML = `${i+1}`;
        caixa.appendChild(container);
        container.style.backgroundColor = 'red';
        container.style.color = 'yellow';
        container.style.width = '30px';
        container.style.height = '30px';
    }
    
}