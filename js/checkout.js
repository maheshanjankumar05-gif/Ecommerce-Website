const cart = JSON.parse(localStorage.getItem("cart")) || [];

let items = 0;
let total = 0;

cart.forEach(product => {

    items += product.quantity;
    total += product.price * product.quantity;

});

document.getElementById("summary-items").innerText = items;

document.getElementById("summary-subtotal").innerText =
"₹" + total.toLocaleString();

document.getElementById("summary-total").innerText =
"₹" + total.toLocaleString();

document.getElementById("checkout-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    window.location.href = "payment.html";

});