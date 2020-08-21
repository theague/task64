//Task 64 Arrays Challenge

//step 1
let colors = ['red', 'green', 'blue', 'orange', 'yellow']

//step 2
console.log(colors[0]);

//step 3
console.log(colors[2]);

//step 4
colors.splice(4, 1, 'ultraviolet') //removes yellow from index 4, adds 1 value, ultraviolet.

//step 5
let fourthColor = colors[3]; //orange

//step 6
let newColor = colors.push('pink'); //[ 'red', 'green', 'blue', 'orange', 'ultraviolet', 'pink' ]

//step 7
let nextColor = colors.unshift('purple'); //[ 'purple', 'red', 'green', 'blue', 'orange', 'ultraviolet', 'pink' ]

//step 8
console.log(colors.length); //7

//step 9
let lastColor = colors.pop();
console.log(colors.length); //6

//step 10
colors.forEach(colors => console.log(colors)); //purple, red, green, blue, orange, ultraviolet

//step 11
colors.forEach(function(item, index) {
    console.log(index, item); // 0 purple, 1 red, 2 green, 3 blue, 4 orange, 5 ultraviolet
});

//step 12
let lastItem = colors[colors.length - 1]
console.log(lastItem); // ultraviolet