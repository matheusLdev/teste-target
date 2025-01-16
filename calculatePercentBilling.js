const calculatePercentBilling = () => {
    const billing = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const totalBilling = Object.values(billing).reduce((acc, cur) => acc + cur, 0);

    Object.entries(billing).forEach(([state, value]) => {
        const percentage = (value / totalBilling) * 100;
        console.log(`${state}: ${percentage.toFixed(2)}%`);
    });
};

calculatePercentBilling();
