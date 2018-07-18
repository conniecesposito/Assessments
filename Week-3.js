1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, {Component} from 'react';

class Comp extends Component{
    render() {
        return (
            <h1> "I am a component"</h1>
        );
    }
}
export Comp;
//
2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})
//
// // your for loop here, you can reference the same stuffArray variable
//
  for(let i = 0; i <stuffArray.length; i++){
    console.log(stuffArray[i] + " is at index : " + i)
// }
//
// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var priceArray = [1.72, 86.79, 45.50, 100.01, 12.50]

priceArray.sort(function(a,b) {
    return a-b
});

console.log(priceArray)
  // your logic here
