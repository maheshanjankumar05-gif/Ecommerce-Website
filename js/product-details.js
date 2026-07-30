const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

const details = document.getElementById("details");

if(product){

details.innerHTML = `

<div class="details-container">

<div class="details-image">

<img src="${product.image}">

</div>

<div class="details-info">

<span class="category">${product.category}</span>

<h1>${product.name}</h1>

<div class="rating">

⭐ ${product.rating}

</div>

<h2>

₹${product.price.toLocaleString()}

<small style="text-decoration:line-through;color:gray;">
₹${product.oldPrice.toLocaleString()}
</small>

</h2>

<p>${product.description}</p>

<p>

<strong>Status :</strong>

<span style="color:green">

${product.stock}

</span>

</p>

<h3>Specifications</h3>

<ul>

${Object.entries(product.specifications)

.map(([key,value])=>`<li><b>${key}</b> : ${value}</li>`)

.join("")}

</ul>

<div class="details-buttons">

<button class="btn"

onclick="addToCart(${product.id})">

<i class="fas fa-shopping-cart"></i>

Add to Cart

</button>

<button class="wishlist-btn"

onclick="addToWishlist(${product.id})">

❤

</button>

</div>

</div>

</div>

`;

}else{

details.innerHTML="<h2>Product Not Found</h2>";

}