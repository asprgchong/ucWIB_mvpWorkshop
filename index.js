import STORE_DATA from './store.js';

// create a list of objects to store the data about the games using JSON.parse
const STORE_JSON = JSON.parse(STORE_DATA);

// remove all child elements from a parent element in the DOM
/*function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}*/

/*****************************************************************************
 * To do #1: Add data about each ___ to the table display
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id table
const tableContainer = document.getElementById("table");

// create a function that adds all data from the games array to the page
function addToPage(store_info) {
    // loop over each item in the data
    for (let i=0; i < store_info.length; i++){
        let each = store_info[i];
        // create a new div element, which will become the game card
        const store_each = document.createElement("div");
        // add the class table-row to the list
        store_each.classList.add('table-row');

        store_each.innerHTML = 
        `<h2>Name: ${each.name}</h2>
        <p>Description: ${each.description}</p>`;
        // set the inner HTML using a template literal to display some info 
        // about each row info

        tableContainer.appendChild(store_each);
        // append the rows to the table-container
    }
}
// call the function we just defined using the correct variable
addToPage(STORE_JSON);

