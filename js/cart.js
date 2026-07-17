// cart.js - Shopping cart functionality

// Cart state - make it accessible globally
let cart = JSON.parse(localStorage.getItem('siec_cart')) || [];
window.cart = cart;

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('siec_cart', JSON.stringify(cart));
    updateCartCounters();
    // Update window reference
    window.cart = cart;
}

// Update cart counters in UI
function updateCartCounters() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountSpan = document.getElementById('cartCount');
    if (cartCountSpan) {
        cartCountSpan.textContent = totalItems;
    }
    // Update any cart badge elements
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = totalItems;
    });
}

// Add product to cart
function addToCart(productId, quantity = 1) {
    // Make sure Products is accessible
    const products = window.Products || Products;
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            qty: quantity,
            maxStock: product.stock
        });
    }
    
    saveCart();
    return true;
}

// Remove product from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        return true;
    }
    return false;
}

// Update product quantity in cart
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return false;
    
    if (quantity <= 0) {
        return removeFromCart(productId);
    }
    
    item.qty = quantity;
    saveCart();
    return true;
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

// Get cart item count
function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Clear cart
function clearCart() {
    cart = [];
    window.cart = cart;
    saveCart();
}

// Initialize cart module
function initCart() {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('siec_cart'));
    if (storedCart) {
        cart = storedCart;
        window.cart = cart;
    }
    updateCartCounters();
}

// Make functions globally accessible
window.cart = cart;
window.saveCart = saveCart;
window.updateCartCounters = updateCartCounters;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.getCartTotal = getCartTotal;
window.getCartCount = getCartCount;
window.clearCart = clearCart;
window.initCart = initCart;

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cart,
        saveCart,
        updateCartCounters,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
        initCart
    };
}