document.addEventListener("DOMContentLoaded", function(event) {

let ul = function(){
    let output = "";
    output += "<ul><li><a href='#'>Facebook</a></li><li><a href='#'>Google</a></li><li><a href='#'>Twitter</a></li></ul>"
    return output;
}
document.getElementsByTagName("main").innerHTML= ul;
    
});