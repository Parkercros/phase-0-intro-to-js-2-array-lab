// Define the initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Define the destructivelyAppendCat function
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Define the destructivelyPrependCat function
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Define the destructivelyRemoveLastCat function
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Define the destructivelyRemoveFirstCat function
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Define the appendCat function
function appendCat(name) {
    let newCats = cats.slice();
    newCats.push(name);
    return newCats;
}

// Define the prependCat function
function prependCat(name) {
    let newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
}

// Define the removeLastCat function
function removeLastCat() {
    let newCats = cats.slice();
    newCats.pop();
    return newCats;
}

// Define the removeFirstCat function
function removeFirstCat() {
    let newCats = cats.slice();
    newCats.shift();
    return newCats;
}

// Export the cats array and functions
module.exports = { cats, destructivelyAppendCat, destructivelyPrependCat, destructivelyRemoveLastCat, destructivelyRemoveFirstCat, appendCat, prependCat, removeLastCat, removeFirstCat };
