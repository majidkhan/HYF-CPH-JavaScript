let btn = document.getElementById("btn");
let renderContainer = document.getElementById("json-response");

let ourRequest;
btn.addEventListener('click', function() {
    ourRequest = new XMLHttpRequest();
    ourRequest.onreadystatechange = alertContents;
    ourRequest.open('GET','https://api.github.com/orgs/HackYourFuture/repos');
    ourRequest.send();    
});

function alertContents() {
    if (ourRequest.readyState === XMLHttpRequest.DONE) {
        if (ourRequest.status === 200) {
            ourRequest.onload = function() {
                const ourData = JSON.parse(ourRequest.responseText);  /// responseText method return data as string. In order to console in browser it must be parsed.
                renderData(ourData);
            };
        } else {
            alert("There was a problem with the request");
        }
    }
}

function renderData(data) {
    let htmlString = "";
    htmlString += "<table class='table table-striped'>";
    htmlString += "<tr><th>Repository</th><th>Stargazers</th><th>Watchers</th><th>Forks</th><th>language</th></tr>";

    for(let i = 0; i < data.length; i++) {
        console.log(data);
        htmlString += "<tr><td><a href='" + data[i].html_url + "' target='_blank'>" + data[i].name + "</a></td><td>" + data[i].stargazers_count + "</td><td>" + data[i].watchers + "</td><td>" + data[i].forks + "</td><td>" + data[i].language + "</td></tr>";
    }
    htmlString += "</table>";
    renderContainer.insertAdjacentHTML('beforeend', htmlString);
    btn.innerHTML="JSON data loaded";
}

