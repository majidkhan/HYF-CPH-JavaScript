/*

1. Write a function to append a new `<li>` element to the `<ul>`.
2. Add a 'click' event listener for the `<button>`
3. When button is clicked, a new `<li>` element should be added to the `<ul>`.
   You can put any text of your choice inside the `<li>` tag.

*/
/*
// Done in clase - assignment
function createItem( event ) {

    const container = document.getElementById("items");
    const element = document.createElement("li");
    const txtNode = document.createTextNode("New Li");
    element.appendChild(txtNode);

    container.appendChild(element);
}

document.getElementById("btn").addEventListener("click", createItem, false);

*/

function addNewItem(greeting) {
    if (!greeting) {
        return;
    }
    console.log('It\'s loaded');

    const ul = document.querySelector('ul#items');
    
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = greeting;
}

const btn = document.getElementById("btn");
//btn.addEventListener('click', addNewItem);

btn.addEventListener('click', function() {
    const input = document.querySelector('input');
    console.log(input.value);
    addNewItem(input.value);
    input.value = '';

});