console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log( '1.) - Create addItem Function' );

//create variable named basket and set to an empty array
let basket = [];

// create addItem function
function addItem ( item ){ // add items to basket
  basket.push(item); // add item to basket
  console.log( 'Added item:', item );
  return true; // return true if item is added to basket
}

// console.log to test addItem function
console.log( 'Basket is:', basket ); // check to see basket is empty
console.log( 'Add apple to list:', addItem( 'apple' ) ); // add apple to function
console.log( 'Add banana to list:', addItem( 'banana' ) ); // add banana to function
console.log( 'Add bacon to list:', addItem( 'bacon' ) ); // add bacon to function
console.log( `Basket is now ${basket}` ); // check to see that items run through function and added to basket

// Function to list items in array
console.log( '2.) - Create listItems Function' );

function listItems ( array ){ // list items in basket
  for ( let i = 0; i < array.length; i++ ) { // start of for loop to run through array
       console.log( 'added to ListItems:', array[i] );
    }
    return array;
} // end listItems function

// console.log to test functions
console.log( basket );
console.log( 'Items in my basket', basket.length);
console.log( 'What items are in my basket?', listItems( basket ));

// Extra practice running functions
console.log( '2a.) - Add milk and run functions');
console.log( 'Add milk to list:', addItem( 'milk' ) );
console.log( 'Items now in my basket:', listItems( basket ));

// Function to empty array
console.log( '3.) - Create empty Function' );

function empty ( reset ){ // start function to empty array
  reset.length = 0; // set array length 0
  return true;
} // end empty functions

// console.log to test empty function
console.log( `Basket is ${basket}`);
console.log( `Empty Basket: ${empty(basket)}`);
console.log( `Basket is now ${basket}` );
//console.log( '');
