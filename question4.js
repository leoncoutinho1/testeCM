var pilha = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var valor = 5;
function removeValor(pilha, valor) {
    var novaPilha = [];
    while (pilha.length > 0) {
        if (pilha[0] !== valor) {
            novaPilha.push(pilha.shift());
        }
        else {
            pilha.shift();
        }
    }
    return novaPilha;
}
console.log(removeValor(pilha, valor));
