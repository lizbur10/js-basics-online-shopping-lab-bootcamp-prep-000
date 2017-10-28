var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100 );
  var itemObject = { [itemName]: itemPrice };
  cart.push(itemObject);
  console.log(itemName + " has been added to your cart.");
  return cart;
}


function viewCart() {
  var cartContentsMessage = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (let i=0; i<cart.length; i++) {
      var itemName = Object.keys(cart[i]);
      var itemPrice = cart[i][itemName];
      cartContentsMessage += itemName + " at $" + itemPrice;
      if (i === cart.length - 1) {
        cartContentsMessage +="."
      } else if (i === cart.length - 2) {
         if (cart.length > 2) {
           cartContentsMessage += ", and ";
         } else {
           cartContentsMessage += " and ";
         }
      } else {
        cartContentsMessage += ", "
      }
    }
    console.log(cartContentsMessage);
  }
}

var totalPrice=0;
function total() {
  for (let i=0; i<cart.length; i++) {
    var itemName = Object.keys(cart[i]);
    totalPrice += cart[i][itemName];
  }
  console.log(totalPrice);
  return totalPrice;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
//    console.log(cart[i].hasOwnProperty(item));
    if ( cart[i].hasOwnProperty(item) ) {
        cart.splice(i,1);
        console.log(cart);
        return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + totalPrice + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
    return cart;
  }
}

//Code Testing
/*
addToCart('bananas');
addToCart('strawberries');
addToCart('apples');
addToCart('pineapple');
viewCart();
total();
console.log(cart);
removeFromCart('bananas');
placeOrder(44422210109333);
*/
