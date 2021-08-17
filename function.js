
var largura = prompt("Digite a largura do terreno: ");
var comprimento = prompt("Digite o comprimento do terreno:")

var area = calcularAreaTerreno(largura, comprimento);

function calcularAreaTerreno(largura, comprimento) {
    var area = largura * comprimento;
    return area;
}


document.write("O terreno possui área de " + area + "m²");
