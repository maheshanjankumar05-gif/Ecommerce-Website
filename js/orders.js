const ordersContainer = document.getElementById("orders-container");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {

    ordersContainer.innerHTML = `
        <div class="empty-orders">
            <i class="fas fa-box-open"></i>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders.</p>
            <a href="products.html" class="btn">
                Shop Now
            </a>
        </div>
    `;

} else {

    orders.reverse().forEach(order => {

        let productsHTML = "";

        order.items.forEach(item => {

            productsHTML += `
                <div class="order-product">
                    <img src="${item.image}" width="80">

                    <div>
                        <h4>${item.name}</h4>

                        <p>
                            ₹${item.price.toLocaleString()}
                        </p>

                        <p>
                            Quantity : ${item.quantity}
                        </p>
                    </div>

                </div>
            `;

        });

        ordersContainer.innerHTML += `

        <div class="order-card">

            <div class="order-header">

                <h3>Order #${order.id}</h3>

                <span class="status">
                    Delivered
                </span>

            </div>

            <p><strong>Date:</strong> ${order.date}</p>

            <p><strong>Payment:</strong> ${order.payment}</p>

            <p><strong>Total:</strong> ₹${order.total.toLocaleString()}</p>

            <hr>

            ${productsHTML}

        </div>

        `;

    });

}