// Sample product data (same as in main.js)
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
    },
    {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 59.99,
        description: 'Portable Bluetooth speaker with excellent sound quality.',
        image: 'https://via.placeholder.com/300x200?text=Speaker',
        category: 'electronics'
    },
    {
        id: 6,
        name: 'Denim Jeans',
        price: 49.99,
        description: 'Classic denim jeans with a comfortable fit.',
        image: 'https://via.placeholder.com/300x200?text=Jeans',
        category: 'clothing'
    },
    {
        id: 7,
        name: 'Blender',
        price: 39.99,
        description: 'Powerful blender for smoothies and food preparation.',
        image: 'https://via.placeholder.com/300x200?text=Blender',
        category: 'home'
    },
    {
        id: 8,
        name: 'Desk Lamp',
        price: 29.99,
        description: 'Adjustable desk lamp with multiple brightness levels.',
        image: 'https://via.placeholder.com/300x200?text=Desk+Lamp',
        category: 'home'
    }
];

// Function to create product cards (same as in main.js)
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
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

// Function to display all products
function displayProducts(filteredProducts = products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = filteredProducts
        .map(product => createProductCard(product))
        .join('');
    
    // Add event listeners to the Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to handle adding products to cart (same as in main.js)
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // In a real application, you would update the cart state here
        console.log(`Added ${product.name} to cart`);
        alert(`${product.name} has been added to your cart!`);
    }
}

// Function to filter products by category
function filterProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Function to sort products
function sortProducts(products, sortOption) {
    const sortedProducts = [...products];
    
    switch (sortOption) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    
    return sortedProducts;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all products initially
    displayProducts();
    
    // Set up category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            const sortOption = document.getElementById('sort-filter').value;
            
            let filteredProducts = filterProductsByCategory(category);
            filteredProducts = sortProducts(filteredProducts, sortOption);
            
            displayProducts(filteredProducts);
        });
    }
    
    // Set up sort filter
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            const category = document.getElementById('category-filter').value;
            const sortOption = sortFilter.value;
            
            let filteredProducts = filterProductsByCategory(category);
            filteredProducts = sortProducts(filteredProducts, sortOption);
            
            displayProducts(filteredProducts);
        });
    }
});