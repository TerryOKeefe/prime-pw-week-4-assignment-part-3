console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem ( item ){ // add items to basket
  basket.push(item);
  return true;
}

console.log('Add apple to list:', addItem('apple'));

function listItems ( array ){ // list items in basket
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array.length) {
      console.log(array[i]);
    }
  }
  return array;
}

console.log('What items are in my basket?', listItems());

function empty ( reset ){

  return; // remove all items in cart
}
