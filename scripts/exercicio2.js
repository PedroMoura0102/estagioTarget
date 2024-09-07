/* declaração de variáveis */
let penultimate = 0;
let last = 1;
let number = 13;

/* laço de repetição */
while (last < number) {
    let temp = penultimate + last; /* variável de soma temporária */
    penultimate = last; /* o penúltimo recebe o valor do ultimo */
    last = temp; /* ultimo recebe o valor temporário */
}

if (number === last) { /* condição compara o tipo e o valor, se bater é true */
    console.log(`${number} pertence à sequência de Fibonacci.`); /* mostra caso seja true */
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`); /* senão mostra quando for false */
}
