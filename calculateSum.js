const calculateSum = () => {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    console.log(`O valor final de SOMA é: ${SOMA}`);
};

calculateSum();