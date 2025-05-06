// Sample product data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        image: 'https://via.placeholder.com/300x200?text=Headphones',
        category: 'electronics'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 199.99,
        description: 'Feature-rich smartwatch with health monitoring.',
        image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
        category: 'electronics'
    },
    {
        id: 3,
        name: 'Cotton T-Shirt',
        price: 24.99,
        description: 'Comfortable cotton t-shirt, perfect for everyday wear.',
        image: 'https://via.placeholder.com/300x200?text=T-Shirt',
        category: 'clothing'
    },
    {
        id: 4,
        name: 'Coffee Maker',
        price: 79.99,
        description: 'Programmable coffee maker for your morning brew.',
        image: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
        category: 'home'
    }
];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to display featured products
function displayFeaturedProducts() {
    const featuredProductsContainer = document.querySelector('.featured-products .product-grid');
    if (!featuredProductsContainer) return;
    
    // Display only 3 products on the homepage
    const featuredProducts = products.slice(0, 3);
    
    featuredProductsContainer.innerHTML = featuredProducts
        .map(product => createProductCard(product))
        .join('');
    
    // Add event listeners to the Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to handle adding products to cart
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // In a real application, you would update the cart state here
        console.log(`Added ${product.name} to cart`);
        alert(`${product.name} has been added to your cart!`);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
});