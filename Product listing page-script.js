const products = [
    { name: 'Laptop', category: 'electronics', price: 1200, rating: 4.5 },
    { name: 'Smartphone', category: 'electronics', price: 800, rating: 4.8 },
    { name: 'The Hobbit', category: 'books', price: 15, rating: 4.9 },
    { name: 'Data Structures Book', category: 'books', price: 50, rating: 4.2 }
];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');

function renderProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function applyFilters() {
    const selectedCategory = categoryFilter.value;
    let filtered = products;

    if (selectedCategory !== 'all') {
        filtered = products.filter(product => product.category === selectedCategory);
    }
    
    renderProducts(filtered);
}

categoryFilter.addEventListener('change', applyFilters);

applyFilters();
