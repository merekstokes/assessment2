///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'hungryhowies',
    price: '10',
    category: 'entree',
    popularity: '80',
    rating: '95',
    tags: ['cheap', 'cheesy', 'tasty']
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

const { price } = pizza;
console.log(pizza.price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const { category } = pizza;
console.log(pizza.category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const foodArr = [ 
    {name: 'dominos', price: '9', category: 'appetizer', popularity: '85', rating: '100', tags: ['good', 'yum', 'awesome']}, 
    {name: 'kneaders', price: '10', category: 'appetizer', popularity: '86', rating: '99', tags: ['great', 'yummy', 'awesome']}, 
    {name: 'mcdonalds', price: '11', category: 'appetizer', popularity: '87', rating: '98', tags: ['amazing', 'stomach ache', 'awesome']}, 
    {name: 'wendys', price: '12', category: 'appetizer', popularity: '88', rating: '97', tags: ['cheap', 'alright', 'good fry']}, 
    {name: 'dutch bros', price: '13', category: 'appetizer', popularity: '89', rating: '96', tags: ['diarrhea', 'yum', 'sugary']}
];



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

 const filteredFood = foodArr.filter(element => (element.tags.includes('awesome')))

//  console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(property, number, type) {
    let filteredFood = foodArr.filter(food => {
      if (type === 'above') {
        return food[property] > number
      } else {
        return food[property] < number
      }
    })
    console.log(filteredFood)
  }
  
  filterByProperty('popularity', 87, 'above');
  filterByProperty('price', 12, 'below');
  filterByProperty('rating', 96, 'below');


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

