var greeting = "Hello World";
console.log(greeting);

var random = Math.floor( Math.random() * 10);
console.log("Random: " + random);

function displayMessage(msg){
	console.log(msg);
}

var array = ["One", "Two", "Three"];
console.log("Element 0: " + array[0]);
console.log("Element 2: " + array[2]);

var object = {first: "Manu", last: "Buhay"};
console.log("First: " + object.first);
console.log("Last: " + object.last);

//load os module in node
var os = require('os');
console.log("Platform: " + os.platform());
