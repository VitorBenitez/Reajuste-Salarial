function calcularReajuste() {
    var salario = parseFloat(document.getElementById("salario").value);
    var percentual = parseFloat(document.getElementById("percentual").value);

    var valorAumento = salario * (percentual / 100);
    var novoSalario = salario + valorAumento;

    var resultadoHTML = "<p>Salário antes do reajuste: R$ " + salario.toFixed(2) + "</p>";
    resultadoHTML += "<p>Percentual de aumento aplicado: " + percentual.toFixed(2) + "%</p>";
    resultadoHTML += "<p>Valor do aumento: R$ " + valorAumento.toFixed(2) + "</p>";
    resultadoHTML += "<p>Novo salário: R$ " + novoSalario.toFixed(2) + "</p>";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
