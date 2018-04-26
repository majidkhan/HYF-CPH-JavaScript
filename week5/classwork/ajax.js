function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}
// Done in clase - assignment
function getRepoNames( data ) {

    const container = document.getElementById("items");
    data.forEach( function(item)  {
        const element = document.createElement("li");
        const txtNode = document.createTextNode(item.name);
        element.appendChild(txtNode);
    
        container.appendChild(element);            
    });
}
/*
// My Code
fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    console.log(repoList);
    getRepoNames(repoList);
});
*/

// Pankaj code


fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    for(let i= 0; i < repoList.length; i++) {
        const repo = repoList[i];
        console.log(repo);
    };
});