function realizarOperaciones() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultsDiv = document.getElementById('results');


    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<p>Por favor, ingresa ambos números válidos.</p>';
        return;
    }

    const operaciones = {
        suma: num1 + num2,
        resta: num1 - num2,
        multiplicación: num1 * num2,
        división: num2 !== 0 ? num1 / num2 : "No se puede dividir por cero.",
        mod: num2 !== 0 ? num1 % num2 : "No se puede calcular el módulo por cero."
    };

    for (const operacion in operaciones) {
        const resultado = operaciones[operacion];
        const resultMessage = `<p>Resultado de ${operacion}: ${resultado}</p>`;
        resultsDiv.innerHTML += resultMessage;
    }
}
