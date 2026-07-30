// =============================
// LOGIN STATUS
// =============================

window.onload = function () {

    const user = JSON.parse(localStorage.getItem("user"));
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true" && user) {

        document.getElementById("loginLink").style.display = "none";
        document.getElementById("registerLink").style.display = "none";

        document.getElementById("userName").style.display = "block";
        document.getElementById("logoutLink").style.display = "block";

        document.getElementById("userName").innerHTML =
            `<a href="#"><i class="fas fa-user"></i> ${user.name}</a>`;
    }

};

// =======================
// Add To Cart
// =======================

function addToCart(id) {

    const product = products.find(product => product.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");
}

// =======================
// Cart Count
// =======================

function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    const count = document.getElementById("cart-count");

    if (count) {
        count.innerText = total;
    }
}

updateCartCount();

// =============================
// LOGOUT
// =============================

function logout() {

    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}