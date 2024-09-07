const fs = require('fs'); /* lê os arquivos do file system */
const path = require('path'); /* trabalha com os caminhos de arquivo */

/* introdução ao arquivo 'dados.json' */
const filePath = path.join(__dirname, 'dados.json');

/* função para ler e processar os dados */
async function processFaturamento() {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8')); /* lê o arquivo e converte para o js */
    console.log(data)
    const filteredData = data.filter(entry => entry.valor > 0); /* remove os valores 0 e seus respectivos dias */

    const valores = filteredData.map(entry => entry.valor);
    const minValue = Math.min(...valores); /* menor valor */
    const maxValue = Math.max(...valores); /* maior valor */

    /* média */
    const totalSum = valores.reduce((sum, value) => sum + value, 0);
    const average = totalSum / valores.length;

    const daysAboveAverage = filteredData.filter(entry => entry.valor > average).length; /* dias com faturamento acima da média */

    /* resultados são mostrados */
    console.log(`O menor valor é ${minValue}`);
    console.log(`O maior valor é ${maxValue}`);
    console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
}

processFaturamento(); /* executa o codigo */