### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 -Components in a React app generally come in two flavors, they can be pure, or impure (sometimes called 'dumb' and 'smart' components).'Dump' components receive data via props, and use that data without making any additions or modifications to that data. The Header component is an example of a 'pure' component. We pass in a name, and the Header just displays it. 'Smart' components is where the logic for deciding on what name to display is kept. 'Smart' components manipulate the state of the application by fetching data from the server, or manipulating data in some other way.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 yarn add installs a package and any packages that it depends on. The package.json will always update.


#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:[
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
      ]
        }
      }

      render() {

        return (

          let recipes = this.props.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

<input type = "submit">
<input type = "password">
<input type = "radio">


 #### 6. What happens when we call setState()?

 calling setState() updates state and tells React that the component and its children need to be re-rendered with the updated state.


 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.

State and props are both object that are built in. State holds that values that will change inside the component. It is private to the component where it is created. Props holds the values being passed to a child component when it is called.


#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

It was a good experience to see something built with React from scratch. Pair programming has been tough because I don't know as much as other's in the class and I feel like I haven't been able to add value as a partner. But I learned it's okay to ask a lot of questions and it helps other's as well having to explain the logic. 

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

1) Must import component
2) Must have render method
3) Must have an export statement

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
