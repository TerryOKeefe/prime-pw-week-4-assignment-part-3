console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log( '1.) - Create addItem Function' );

let basket = [];

function addItem ( item ){ // add items to basket
  basket.push(item); // add item to basket
  console.log( 'Added item:', item );
  return true; // return true if item is added to basket
}

console.log( `Basket is ${basket}` ); // check to see basket is empty
console.log( 'Add apple to list:', addItem( 'apple' ) ); // add apple to function
console.log( 'Add banana to list:', addItem( 'banana' ) ); // add banana to function
console.log( 'Add bacon to list:', addItem( 'bacon' ) ); // add bacon to function
console.log( `Basket is now ${basket}` ); // check to see that items run through function and added to basket

console.log( '2.) - Create listItems Function' );

function listItems ( array ){ // list items in basket
  for ( let i = 0; i < array.length; i++ ) {
       console.log( 'added to ListItems:', array[i] );
    }
    return array;
}

//console.log( basket );
//console.log( 'Items in my basket', basket.length);
console.log( 'What items are in my basket?', listItems( basket ));
//console.log(listItems(basket));

function empty ( reset ){
  basket.length = 0; // remove all items in cart
  return true;
}

//console.log( `Basket is ${basket}`);
//console.log( 'Basket is', empty(basket));
//console.log( '');

console.log('TEST');

let tree = [ 'pine', 'spruce' ];
for (let i = 0; i < tree.length; i++) {
  console.log(tree[i]);
}
