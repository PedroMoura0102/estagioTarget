// let string = "Olá, Target!";
// let gnirts = str.split('').reverse().join('');
// console.log(invertedStr); 

let str = "Olá, Target!"; // Define a string original
let invertedStr = ''; // Inicializa uma string vazia para armazenar o resultado

for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i]; // Adiciona o caractere atual à string invertida
}

console.log(invertedStr); // Exibe a string invertida