// Exercise 1

// Firstly lets fetch the reddit posts using this function https://www.reddit.com/r/ProgrammerHumor.json

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


// Exercise 2
// Lets get only the reddit posts that have a thumbnail (what array function are we going to use??)

const url = "https://www.reddit.com/r/ProgrammerHumor.json";

getAjaxData(url,function(redditResponse) {
    const thumbnailsData = redditResponse.data.children;
    console.log(thumbnailsData);
    const thumbnailPosts = thumbnailsData.filter(function(post) {
        return post.data.thumbnail;
    });
    console.log(thumbnailPosts);

});


// Exercise 3
// We are not interested in all the data, but only the number of down votes. 

getAjaxData(url,function(redditResponse) {

    const commentsData = redditResponse.data.children;

    const commentsGreaterThanZero = commentsData.filter(function(post){
        return post.data.num_comments > 0;
    });
    console.log("abc", commentsGreaterThanZero);
    const commentsPosts = commentsGreaterThanZero.map(function(commentPost) {
            return commentPost.data.num_comments;
    });
    console.log("DownvotePosts",commentsPosts);
    const totalComments = commentsPosts.reduce(function(total, comment) {
        return total + comment;
    });
    console.log("Total comments", totalComments);
    console.log("Averate Comments", totalComments/commentsPosts.length )
});


// Exercise 4
// Lets find out if including a thumbnail in your reddit posts decreases the average number of downvotes:



// 4.1 Lets find the average number of downvotes posts with a thumbnail has

// 4.2 Lets find the average number of downvotes posts without a thumbnail has


// Exercise 5
// Get the title of the least successful reddit post. 

getAjaxData(url, function(allRedditPosts) {
    const allPosts = allRedditPosts.data.children;
    const postsUPS = allPosts.map(x => x.data.ups);
    console.log("Post UPS", postsUPS);
    const sortedPosts = postsUPS.sort(compareFunc);
    console.log("Sorted Posts",sortedPosts);
});

function compareFunc(a,b) {
    if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // a must be equal to b
      return 0;    
}