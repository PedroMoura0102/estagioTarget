/* declaração dos estados */
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

/* calcula o valor total */
const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

/* calcula e exibe o percentual */
for (const [estado, valor] of Object.entries(faturamento)) {
    const percentual = (valor / totalFaturamento * 100).toFixed(2);
    console.log(`${estado} representa: ${percentual}%`);
}