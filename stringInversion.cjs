const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

rl.question("Digite uma palavra para inverter: ", (userInput) => {
    const reversedWord = reverseString(userInput);

    console.log(`Palavra que o usuário solicitou a reversão: '${userInput}'`);
    console.log(`Palavra invertida: '${reversedWord}'`);

    rl.close();
});
