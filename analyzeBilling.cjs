const billingData = require('./dados.json');

const analyzeBilling = () => {
    const daysWithRevenue = billingData.filter((entry) => entry.valor > 0).map((entry) => entry.valor);

    const totalRevenue = daysWithRevenue.reduce((acc, cur) => acc + cur, 0);
    const averageRevenue = totalRevenue / daysWithRevenue.length;

    const lowestRevenue = Math.min(...daysWithRevenue);
    const highestRevenue = Math.max(...daysWithRevenue);

    const daysAboveAverage = daysWithRevenue.filter((revenue) => revenue > averageRevenue).length;

    console.log(`Menor faturamento: ${lowestRevenue.toFixed(2)}`);
    console.log(`Maior faturamento: ${highestRevenue.toFixed(2)}`);
    console.log(`Dias acima da média: ${daysAboveAverage}`);
};

analyzeBilling();
