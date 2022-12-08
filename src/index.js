const Movie = require("./utils/");

function app (input) {
    switch (input[2]) {
        case "add":
            const newMovie = new Movie (input[3],input[4],input[5]);
            newMovie.add();
            break;
        case "addMulti":
            const newMovie1 = new Movie (input[3],input[4],input[5]);
            newMovie1.add();
            const newMovie2 = new Movie (input[6],input[7],input[8]);
            newMovie2.add();
            const newMovie3 = new Movie (input[9],input[10],input[11]);
            newMovie3.add();
            break;
        default:
            console.log("No Movie Displayed");
            break;
    } 
}

app(process.argv);