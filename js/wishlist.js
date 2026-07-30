const wishlistContainer = document.getElementById("wishlist-container");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayWishlist(){

    wishlistContainer.innerHTML = "";

    if(wishlist.length === 0){

        wishlistContainer.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                ❤️ Your Wishlist is Empty
            </h2>
        `;
        return;
    }

    wishlist.forEach(product=>{

        wishlistContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <span class="category">${product.category}</span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <p class="description">
                    ${product.description}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString()}
                </p>

                <button class="remove-btn"
                    onclick="removeWishlist(${product.id})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

}

displayWishlist();

function removeWishlist(id){

    wishlist = wishlist.filter(item => item.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();

}