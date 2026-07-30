// Get cart data from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

// Display Cart
function displayCart() {

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        totalElement.innerText = "Total: ₹0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-card">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>₹${item.price.toLocaleString()}</p>

                    <div class="quantity">

                        <button onclick="decreaseQuantity(${item.id})">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQuantity(${item.id})">+</button>

                    </div>

                    <button class="remove-btn" onclick="removeItem(${item.id})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    totalElement.innerText = `Total: ₹${total.toLocaleString()}`;

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Increase Quantity
function increaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    product.quantity++;

    displayCart();
}

// Decrease Quantity
function decreaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if(product.quantity > 1){
        product.quantity--;
    }else{
        removeItem(id);
    }

    displayCart();
}

// Remove Product
function removeItem(id){

    cart = cart.filter(item => item.id !== id);

    displayCart();
}

// Checkout
function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";

}

// Load Cart
displayCart();