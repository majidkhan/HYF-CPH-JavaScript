const moviesUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

function setTag(movie) {
    if(movie.rating >= 7) {movie.tag = "Good"}
    else if(movie.rating < 7 && movie.rating >= 4) {movie.tag = "Average"}
    else movie.tag = "Bad";
}


function getRating (objMovies) {
    // Add property TAG
    for(let i=0; i < objMovies.length; i++) {
        if(objMovies[i].rating >= 7) {
            objMovies[i].tag = "Good";
        }
        else if(objMovies[i].rating < 7 && objMovies[i].rating >=4 ) {
            objMovies[i].tag = "Average";
        }
        else {
            objMovies[i].tag = "Bad";
        }
    }

    // Calculate total rating of all moves
    const allRatings = objMovies.map( movie => movie.rating );
    const totalRatings = allRatings.reduce(function(firstVal,nextVal) {
        return firstVal + nextVal;
    });
    console.log("Total Ratings:", totalRatings);
    // Calculate average rating of all movies
    const averageRating = totalRatings / allRatings.length;
    console.log("Average Ratings:", averageRating);
}

function goodMovie(movie) {
    return movie.rating >= 7;
}
function averageMovie(movie) {
    return movie.rating >= 4 && movie.rating < 7;
}

function badMovie(movie) {
    return movie.rating < 4; 
}

function hasTitle(movie) {
    return movie.title === "";
}

function moviesBetween(movie,startRange,endRange) {
    return (movie.year > startRange && movie.year < endRange);
}

function getGoodMoviesCount(objMovies) {

    const allGoodMovies = objMovies.filter(goodMovie);
    console.log("Total good movies:", allGoodMovies.length);
    const allAverageMovie = objMovies.filter(averageMovie);
    console.log("Total average movies:", allAverageMovie.length);
    const allBadMovies = objMovies.filter(badMovie);
    console.log("Total bad movies:", allBadMovies.length);
}

function doesItHave(objMovies) {
    // Keywords to search into movies title's
    const lookForList = ["The", "dog", "who", "is", "not", "a", "man"];

    const onlyMovieTitles = objMovies.map(t => t.title);
    console.log("Total titles:",onlyMovieTitles);

    const moviesContainsTitle = onlyMovieTitles.filter( function(title) {
        const x = title.split(" ");
        for(let i = 0; i < x.length; i ++) {
            for( let k = 0; k < lookForList.length; k++) {
                if(x[i] === lookForList[k]) {
                    return x;
                }
            }
        }
    });
    console.log("All that Contains",moviesContainsTitle);
    console.log("Movies containing required keyword:",moviesContainsTitle.length); 
 
}

function moviesFrom80To89(objMovies) {
    const allMovies = objMovies.filter( movie => (movie.year >= 1980 && movie.year <= 1989) );
    console.log("Movies from 80 to 89:", allMovies)
    console.log("Count movies between 80s:", allMovies.length);
}


getAjaxData(moviesUrl, function(objMovies) {
    console.log(objMovies);
//    const allMoviesTag = objMovies.filter(setTag);

    // 2.1 & 2.2 - Give each movie a tag and calculate average rating of all movies
    getRating(objMovies);

    //2.3 Count the total number of Good, Average and Bad movies.
    getGoodMoviesCount(objMovies);

    // 2.4 Movies containing keywork
    doesItHave(objMovies);

    // 2.5 Get movies from 1980 to 1989
    moviesFrom80To89(objMovies);

});