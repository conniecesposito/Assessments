// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.
function trueOrFalse (true) {
if(true) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}
}

function trueOrFalse (true) {
if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}
}


// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(var i=10; i>=0; i--) {
	 var result = i
// your code here
console.log(result)
}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
var array = ["cat", "dog", "bird", "hamster"]
console.log([1])
array [3] = "duck"

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

function hunger(true) {
    if (true) {
        console.log("you should eat!")
    } else {
        console.log("you are not hungry!")
    }
}



// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	if (arg1 + arg2 <= 20){
        return (arg1 + arg2)
    } else {
        return ("can't count that high!")
    }
}
