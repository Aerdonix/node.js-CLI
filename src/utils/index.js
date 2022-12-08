const movieArr = [];

class Movie {
    constructor (title="Not Specified", actor="Not Specified", starRating="Not Specified") {
        this.title = title;
        this.actor = actor;
        this.starRating = starRating;
    }
    add () {
        movieArr.push(this);
        console.table(movieArr);
    }
    addMulti () {
        movieArr.push(newMovie1);
        movieArr.push(newMovie2);
        movieArr.push(newMovie3);
    }
};

module.exports = Movie;