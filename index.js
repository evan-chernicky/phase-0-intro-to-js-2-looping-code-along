// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards() {

    const messages = [];


    for (let i= 0; i < names.length; i++) {

        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;

        messages.push(message);
    };

    return messages;

};

writeCards(names);

counter = 10;

function countDown(counter) {

    while (counter >= 0) {
            console.log(counter--);
        };

};

countDown(counter);