const checkFibonacci = (number) => {
    let previous = 0, current = 1, next;

    while (current < number) {
        next = previous;
        previous = current;
        current = next + current;
    }

    if (current === number || number === 0) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
};

const randomNumber = Math.floor(Math.random() * 100) + 1;
checkFibonacci(randomNumber);
