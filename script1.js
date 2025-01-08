function convertir() {
    var monto = document.getElementById('monto').value;
    var conversionRate = 0.02; // 1 peso = 0.02 bolívares
    var conversionBody = document.getElementById('conversion-body');
    conversionBody.innerHTML = '';

    for (var i = 1000; i <= 100000; i += 1000) {
        var row = document.createElement('tr');
        var cellPesos = document.createElement('td');
        var cellBolivares = document.createElement('td');

        cellPesos.textContent = i;
        cellBolivares.textContent = (i * conversionRate).toFixed(2);

        row.appendChild(cellPesos);
        row.appendChild(cellBolivares);

        conversionBody.appendChild(row);
    }

    if (monto) {
        var montoRow = document.createElement('tr');
        var cellMontoPesos = document.createElement('td');
        var cellMontoBolivares = document.createElement('td');

        cellMontoPesos.textContent = monto;
        cellMontoBolivares.textContent = (monto * conversionRate).toFixed(2);

        montoRow.appendChild(cellMontoPesos);
        montoRow.appendChild(cellMontoBolivares);

        conversionBody.appendChild(montoRow);
    }
}

function sumar() {
    var suma = parseFloat(document.getElementById('suma').value);
    var conversionRate = 0.02; // 1 peso = 0.02 bolívares
    var resultado = document.getElementById('resultado');

    if (suma) {
        resultado.textContent = `La suma de ${suma} pesos equivale a ${(suma * conversionRate).toFixed(2)} bolívares.`;
    } else {
        resultado.textContent = 'Por favor, ingrese un monto para sumar.';
    }
}
