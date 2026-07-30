const order = JSON.parse(localStorage.getItem("lastOrder"));

if(order){

    document.getElementById("orderId").innerText = order.id;

    document.getElementById("orderDate").innerText = order.date;

    document.getElementById("paymentMethod").innerText = order.payment;

    document.getElementById("totalAmount").innerText =
    "₹" + order.total.toLocaleString();

}

function downloadInvoice(){

    alert("Invoice download feature coming soon!");

}