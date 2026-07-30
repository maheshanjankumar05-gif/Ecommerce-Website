// ===============================
// Get Selected Product
// ===============================

const selectedId = Number(localStorage.getItem("selectedProduct"));

const product = products.find(item => item.id === selectedId);

if (!product) {
    alert("Product not found!");
    window.location.href = "products.html";
}

// ===============================
// Display Product
// ===============================

document.getElementById("product-image").src = product.image;
document.getElementById("product-image").alt = product.name;

document.getElementById("product-name").textContent = product.name;

document.getElementById("product-category").textContent = product.category;

document.getElementById("product-rating").innerHTML =
`⭐ ${product.rating} / 5`;

document.getElementById("product-price").textContent =
`₹${product.price.toLocaleString()}`;

document.getElementById("old-price").textContent =
`₹${product.oldPrice.toLocaleString()}`;

document.getElementById("discount").textContent =
`${product.discount}% OFF`;

document.getElementById("product-description").textContent =
product.description;

document.getElementById("stock").textContent =
product.stock;

// ===============================
// Specifications
// ===============================

const specTable = document.getElementById("spec-table");

for (const key in product.specifications) {

    specTable.innerHTML += `

    <tr>

        <th>${key}</th>

        <td>${product.specifications[key]}</td>

    </tr>

    `;

}

// ===============================
// Add To Cart
// ===============================

document.getElementById("cartBtn").addEventListener("click", () => {

    addToCart(product.id);

});

// ===============================
// Wishlist
// ===============================

document.getElementById("wishBtn").addEventListener("click", () => {

    addToWishlist(product.id);

});

// ===============================
// Buy Now
// ===============================

const buyButton = document.createElement("button");

buyButton.className = "buy-btn";

buyButton.innerHTML =
`<i class="fas fa-bolt"></i> Buy Now`;

buyButton.onclick = () => {

    addToCart(product.id);

    window.location.href = "checkout.html";

};

document.querySelector(".detail-buttons").appendChild(buyButton);