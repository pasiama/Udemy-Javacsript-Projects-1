// Sample Product Data
const products = [
      { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/250x150?text=Laptop' },
      { id: 2, name: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/250x150?text=Smartphone' },
      { id: 3, name: 'Headphones', price: 149.99, image: 'https://via.placeholder.com/250x150?text=Headphones' },
      { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/250x150?text=Smartwatch' }
    ];
    
    let cart = [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // DOM Elements
    const pages = document.querySelectorAll('.page');
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout-btn');
    const productsContainer = document.querySelector('.products-container');
    const favoritesList = document.getElementById('favorites-list');
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Page Navigation
    const showPage = (pageId) => {
      pages.forEach(page => page.classList.remove('show'));
      document.getElementById(pageId).classList.add('show');
    };
    
    // Render Products
    const renderProducts = () => {
      productsContainer.innerHTML = '';
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          <button onclick="addToFavorites(${product.id})">Add to Favorites</button>
        `;
        productsContainer.appendChild(productDiv);
      });
    };
    
    // Render Favorites
    const renderFavorites = () => {
      favoritesList.innerHTML = '';
      favorites.forEach(product => {
        const favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('product');
        favoriteDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
        `;
        favoritesList.appendChild(favoriteDiv);
      });
    };
    
    // Update Cart Count
    const updateCartCount = () => {
      cartCount.textContent = cart.length;
    };
    
    // Add Product to Cart
    const addToCart = (productId) => {
      const product = products.find(p => p.id === productId);
      cart.push(product);
      updateCartCount();
    };
    
    // Add Product to Favorites
    const addToFavorites = (productId) => {
      const product = products.find(p => p.id === productId);
      if (!favorites.some(p => p.id === productId)) {
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
      }
    };
    
    // Form Submission (Contact)
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(`Message from ${nameInput.value} sent successfully!`);
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    });
    
    // Handle Navigation
    document.getElementById('home-link').addEventListener('click', () => showPage('home'));
    document.getElementById('shop-link').addEventListener('click', () => showPage('shop'));
    document.getElementById('favorites-link').addEventListener('click', () => showPage('favorites'));
    document.getElementById('contact-link').addEventListener('click', () => showPage('contact'));
    
    // Initialize the Page
    showPage('home');
    renderProducts();
    renderFavorites();
    updateCartCount();
    