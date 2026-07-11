function funcaoEstadoMental(estado_mental) {
    let estado = document.getElementById('estado_mental').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (estado === "bem") {
        resultado.style.backgroundColor = "green";
        resultado.style.width = "300px";
        resultado.style.height = "300px";
        resultado.style.color = "white";
        let p = document.createElement('p');
        p.innerText = "Que bom";
        resultado.appendChild(p);
    } else if (estado === "mais_ou_menos") {
        resultado.style.backgroundColor = "blue";
        resultado.style.border = "2px solid green";
        resultado.style.width = "400px";
        resultado.style.height = "600px";
        resultado.style.color = "yellow";
        let p = document.createElement('p');
        p.innerText = "Vai melhorar";
        resultado.appendChild(p);
    } else if (estado === "mal") {
        resultado.style.backgroundColor = "red";
        resultado.style.color = "white";
        let p = document.createElement('p');
        p.innerText = "Procure ajuda!";
        resultado.appendChild(p);
        alert("Para psicólogos ligue: (47) 9999 - 9999");

    }
} 