
var modal = document.getElementById("myModal");

var btn = document.getElementById("cart-btn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var cartTotal = 0;
function addToCart(productName, productPrice, inputId) {
    
    var quantity = parseInt(document.getElementById(inputId).value);
    total_price = productPrice*quantity
    cartTotal += total_price
    console.log(cartTotal)
    updateTotalPriceInModal();
    
    var newItem = document.createElement('div');
    newItem.innerHTML = '<p>' + productName + ' - Rs. ' + productPrice + ' per item, Quantity: ' + quantity + '</p>';

    // Append the new item to the cart
    document.getElementById('cartItems').appendChild(newItem);

    // Open the modal
    // openModal();
}

function updateTotalPriceInModal() {
    // Update the total price in the modal
    document.querySelector('.total_price').innerText = 'Total: Rs. ' + cartTotal;
}


