// if (process.argv[2] === "harry") {
//     console.log("Hello Mr Potter");
// }

function app (input) {
    switch (input[2]) {
        case "Harry":
            const name = input[2];
            console.log("Hello Mr Potter");
            break;
        case "Ron":
            console.log("Hello Mr Weasley");
            break;
        case "Hermione":
            console.log("Hello Miss Granger");
            break;
        default:
            console.log("Hello unknown ether soul");
            break;
    }

};

app(process.argv);