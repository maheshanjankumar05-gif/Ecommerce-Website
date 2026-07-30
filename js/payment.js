// ===============================
// Get Cart
// ===============================

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItems = 0;
let totalAmount = 0;

cart.forEach(item => {
    totalItems += item.quantity;
    totalAmount += item.price * item.quantity;
});

// Show Order Summary
document.getElementById("totalItems").innerText = totalItems;
document.getElementById("totalAmount").innerText =
    "₹" + totalAmount.toLocaleString();

// ===============================
// Place Order
// ===============================

document.getElementById("payBtn").addEventListener("click", () => {

    const paymentMethod =
        document.querySelector('input[name="payment"]:checked').value;

    const order = {

        id: "SE" + Date.now(),

        date: new Date().toLocaleDateString(),

        time: new Date().toLocaleTimeString(),

        payment: paymentMethod,

        status: "Order Confirmed",

        total: totalAmount,

        items: [...cart]

    };

    // Save Orders
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    // Save Last Order
    localStorage.setItem("lastOrder", JSON.stringify(order));

    // Clear Cart
    localStorage.removeItem("cart");

    // Redirect
    window.location.href = "success.html";

});