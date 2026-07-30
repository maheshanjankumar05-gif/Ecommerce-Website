// ===============================
// Product Data
// ===============================

const products = [

{
    id: 1,
    name: "Laptop",
    category: "Electronics",

    price: 59999,
    oldPrice: 69999,
    discount: 14,

    rating: 4.8,
    stock: "In Stock",

    description: "High-performance laptop for work, study and gaming.",

    specifications: {
        Brand: "Dell",
        Processor: "Intel Core i7",
        RAM: "16 GB",
        Storage: "512 GB SSD",
        Display: "15.6-inch Full HD",
        Graphics: "Intel Iris Xe",
        Warranty: "1 Year"
    },

    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},

{
    id: 2,
    name: "Smartphone",
    category: "Electronics",

    price: 24999,
    oldPrice: 28999,
    discount: 14,

    rating: 4.7,
    stock: "In Stock",

    description: "Latest smartphone with a high-quality camera and fast processor.",

    specifications: {
        Brand: "Samsung",
        Processor: "Snapdragon 8 Gen 2",
        RAM: "8 GB",
        Storage: "256 GB",
        Display: "6.7-inch AMOLED",
        Camera: "50 MP + 12 MP",
        Battery: "5000 mAh"
    },

    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
    id: 3,
    name: "Smart Watch",
    category: "Accessories",

    price: 4999,
    oldPrice: 6999,
    discount: 29,

    rating: 4.5,
    stock: "In Stock",

    description: "Fitness smartwatch with heart rate and sleep monitoring.",

    specifications: {
        Brand: "Noise",
        Display: "1.85-inch AMOLED",
        Battery: "7 Days",
        Bluetooth: "5.3",
        Waterproof: "IP68",
        Sensors: "Heart Rate, SpO2",
        Warranty: "1 Year"
    },

    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
    id: 4,
    name: "Headphones",
    category: "Accessories",

    price: 2999,
    oldPrice: 3999,
    discount: 25,

    rating: 4.6,
    stock: "In Stock",

    description: "Wireless Bluetooth headphones with deep bass and noise cancellation.",

    specifications: {
        Brand: "Sony",
        Type: "Wireless",
        Connectivity: "Bluetooth 5.2",
        Battery: "30 Hours",
        Microphone: "Yes",
        NoiseCancellation: "Active",
        Warranty: "1 Year"
    },

    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
    id: 5,
    name: "Camera",
    category: "Electronics",

    price: 45999,
    oldPrice: 49999,
    discount: 8,

    rating: 4.9,
    stock: "Limited Stock",

    description: "Professional DSLR camera for photography and videography.",

    specifications: {
        Brand: "Canon",
        Resolution: "24.2 MP",
        Lens: "18-55 mm",
        Video: "4K",
        Display: "3-inch LCD",
        Connectivity: "Wi-Fi",
        Warranty: "2 Years"
    },

    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
},

{
    id: 6,
    name: "Backpack",
    category: "Fashion",

    price: 1999,
    oldPrice: 2499,
    discount: 20,

    rating: 4.4,
    stock: "In Stock",

    description: "Comfortable backpack suitable for college, office and travel.",

    specifications: {
        Brand: "Wildcraft",
        Capacity: "35 L",
        Material: "Polyester",
        Compartments: "3",
        Waterproof: "Yes",
        LaptopCompartment: "15.6-inch",
        Warranty: "6 Months"
    },

    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
},

{
    id: 7,
    name: "Keyboard",
    category: "Electronics",

    price: 2499,
    oldPrice: 3299,
    discount: 24,

    rating: 4.3,
    stock: "In Stock",

    description: "Mechanical RGB gaming keyboard with durable switches.",

    specifications: {
        Brand: "Logitech",
        Type: "Mechanical",
        Keys: "104",
        RGB: "Yes",
        Connection: "USB",
        Switches: "Blue",
        Warranty: "2 Years"
    },

    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},

{
    id: 8,
    name: "Sports Shoes",
    category: "Fashion",

    price: 3499,
    oldPrice: 4499,
    discount: 22,

    rating: 4.5,
    stock: "In Stock",

    description: "Lightweight sports shoes designed for running and everyday comfort.",

    specifications: {
        Brand: "Nike",
        Material: "Mesh",
        Sole: "Rubber",
        Closure: "Lace-Up",
        Weight: "650 g",
        Color: "Black",
        Warranty: "6 Months"
    },

    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
}

];

// ===============================
// Display Products
// ===============================

const productContainer = document.getElementById("product-container");

function displayProducts(productList) {

    if (!productContainer) return;

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <h2 style="grid-column:1/-1;text-align:center;">
                No products found.
            </h2>
        `;
        return;
    }

    productList.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <span class="discount-badge">
                ${product.discount}% OFF
            </span>

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <span class="category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <p class="description">
                    ${product.description}
                </p>

                <div class="price-box">

                    <span class="price">
                        ₹${product.price.toLocaleString()}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString()}
                    </span>

                </div>

                <p class="stock">
                    ✔ ${product.stock}
                </p>

                <p class="delivery">
                    🚚 Free Delivery
                </p>

                <div class="product-actions">

                    <button class="add-cart"
                        onclick="addToCart(${product.id})">

                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart

                    </button>

                    <button class="wishlist-btn"
                        onclick="addToWishlist(${product.id})">

                        <i class="fas fa-heart"></i>

                    </button>

                </div>

                <button class="details-btn"
                    onclick="viewProduct(${product.id})">

                    <i class="fas fa-eye"></i>
                    View Details

                </button>

                <button class="buy-btn"
                    onclick="buyNow(${product.id})">

                    <i class="fas fa-bolt"></i>
                    Buy Now

                </button>

            </div>

        </div>

        `;

    });

}

// Load products
displayProducts(products);

// ===============================
// Search & Category Filter
// ===============================

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

if (searchInput && categorySelect) {

    searchInput.addEventListener("input", filterProducts);
    categorySelect.addEventListener("change", filterProducts);

}

function filterProducts() {

    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(keyword);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayProducts(filteredProducts);

}

// ===============================
// Wishlist
// ===============================

function addToWishlist(id) {

    const product = products.find(item => item.id === id);

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists =
        wishlist.find(item => item.id === id);

    if (exists) {

        alert("Already added to Wishlist ❤️");
        return;

    }

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(product.name + " added to Wishlist ❤️");

}

// ===============================
// View Product Details
// ===============================

function viewProduct(id) {

    localStorage.setItem("selectedProduct", id);

    window.location.href = "product.html";

}

// ===============================
// Buy Now
// ===============================

function buyNow(id) {

    if (typeof addToCart === "function") {

        addToCart(id);

    } else {

        const product = products.find(item => item.id === id);

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const existing =
            cart.find(item => item.id === id);

        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }

    window.location.href = "checkout.html";

}