// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);
// console.log(shippingCost);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(price);

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);







