### Week 2 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  // Booleans, Numbers, String, Null, Undefined, Symbol, Objects. All are primitive except Objects.


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: 'inside'


Then, past the code in your console and explain why you were right/wrong.

The result is undefined.

#### 3. What is JSON? How does it relate to javascript objects?

  //JSON stands for JavaScript Object Notation. It is often used for serializing and transmitting structured data over a network connection. It is used to primarily to transmit data between a server and web application.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.


#### 5. What's the difference between =, ==, and === in JavaScript?

  // = is used to assign variables
    == used to compare
    === compares and makes sure they are the same data types.
