console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem ( item ){ // add items to basket
  basket.push(item);
  console.log( 'Added item:', item );
  return true;
}

console.log( `Basket is${basket}`);
console.log('Add apple to list:', addItem('apple'));
console.log( 'Add banana to list:', addItem('banana'));
console.log( `Basket is now ${basket}`);

function listItems ( array ){ // list items in basket
  for ( let i = 0; i < array.length; i++ ) {
    if ( array < array.length ) {
       console.log( array[i] );
    }
  }
      console.log( 'Nothing in Basket');
}


console.log( basket );
console.log( 'Items in my basket', basket.length);
console.log( 'What items are in my basket?', listItems( basket ));

function empty ( reset ){
  basket.length = 0; // remove all items in cart
  return console.log( 'Empty' );
}

console.log( `Basket is ${basket}`);
console.log( 'Basket is', empty(basket));
