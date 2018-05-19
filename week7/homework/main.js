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


getAjaxData(moviesUrl, function(objMovies) {
//    const allMoviesTag = objMovies.filter(setTag);

//    console.log(allMoviesTag);
    for(let i=0; i < objMovies.length; i++) {
        if(objMovies[i].rating >= 7) {
            objMovies[i].tag = "Good";
//            console.log(objMovies[i]);
        }
        else if(objMovies[i].rating < 7 && objMovies[i].rating >=4 ) {
            objMovies[i].tag = "Average";
//            console.log(objMovies[i]);
        }
        else {
            objMovies[i].tag = "Bad";
//            console.log(objMovies[i]);
        }
    }

    const allRatings = objMovies.map( movie => movie.rating );
    const totalRatings = allRatings.reduce(function(firstVal,nextVal) {
        return firstVal + nextVal;
    });
    console.log("Total Ratings", totalRatings);
    const averageRating = totalRatings / allRatings.length;
    console.log("Average Ratings", averageRating);
});