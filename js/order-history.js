const container = document.getElementById("ordersContainer");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {

    container.innerHTML = `
        <div class="empty-orders">
            <i class="fas fa-box-open"></i>
            <h2>No Orders Yet</h2>
            <p>Start shopping to see your orders here.</p>

            <a href="products.html" class="btn">
                Shop Now
            </a>
        </div>
    `;

}
else {

    orders.reverse().forEach(order => {

        let itemsHTML = "";

        order.items.forEach(item => {

            itemsHTML += `
                <li>
                    ${item.name} × ${item.quantity}
                    - ₹${(item.price * item.quantity).toLocaleString()}
                </li>
            `;

        });

        container.innerHTML += `

        <div class="order-card">

            <div class="order-header">

                <h3>Order #${order.id}</h3>

                <span class="order-date">
                    ${order.date}
                </span>

            </div>

            <p><strong>Payment:</strong> ${order.payment}</p>

            <p><strong>Total:</strong>
            ₹${order.total.toLocaleString()}</p>

            <h4>Items</h4>

            <ul>

                ${itemsHTML}

            </ul>

        </div>

        `;

    });

}