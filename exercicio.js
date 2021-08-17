var nota = prompt('Digite a nota do aluno');
var faltas = prompt('Digite a quantidade de faltas do aluno:')

var media = 7;
var faltasMaximas = 15;

if (nota >= media && faltas <= faltasMaximas ) {
    document.write('Aprovado');
} else {
    document.write('reprovado');
}