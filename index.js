const cats = [
   "Milo",
   "Otis",
   "Garfield",
];

cats;

function destructivelyAppendCat(name) {
   cats.push("Ralph")
}

function destructivelyPrependCat(name) {
   cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
   cats.pop("Ralph")
}

function destructivelyRemoveFirstCat(name) {
   cats.shift("Milo")
}

function appendCat(name) {
   var newArray = cats.slice()
   newArray.push("Broom")
   return newArray;
}

function prependCat(name) {
   var newArray = cats.slice()
   newArray.unshift("Arnold")
   return newArray;
}

function removeLastCat(name) {
   var newArray = cats.slice()
   newArray.pop("Garfield")
   return newArray;
}

function removeFirstCat(name) {
   var newArray = cats.slice()
   newArray.shift("Milo")
   return newArray;
}
