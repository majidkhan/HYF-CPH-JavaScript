// Exercise

/*

ONLY using promises! 

1. wait for 3 seconds, then fetch some movies using this url https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
2. When that is done, fetch the reddit programmerhumor posts. 'https://www.reddit.com/r/ProgrammerHumor.json'

*/

function getAjaxData(url) {
    return new Promise((resolve, reject) => {
        // Create new ajax call with the js function called XMLHttpRequest
        const request = new XMLHttpRequest();
        request.addEventListener('load', function () {
            // This in here is our callback function
            // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
            if (this.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else {
                reject('error');
            }
        });

        request.addEventListener('error', function (error) {
            reject(error);
        });

        // initializes a request with an http method
        request.open("GET", url);
        // Sends the request 
        request.send();
    });
}

function getTimeOutPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

const timeOutPromise = getTimeOutPromise();
timeOutPromise
    .then(()=>{
        console.log("3 seconds has passed");
        return getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json');
    })
    .then((movies) => {
        console.log(movies);
    })
    .then(() => {
        return getAjaxData('https://www.reddit.com/r/ProgrammerHumor.json');
    })
    .then((reddit) => {
        console.log(reddit.data.children);
    })
    