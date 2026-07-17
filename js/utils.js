// utils.js - Utility functions

const Utils = {
    // Format price with currency symbol
    formatPrice: (num) => `$${num.toFixed(2)}`,
    
    // Generate stock badge HTML
    getStockBadge: (stock) => {
        if (stock > 0) {
            return `<span class="badge-stock px-2 py-0.5 rounded-full text-xs">
                        <i class="fas fa-check-circle mr-1"></i>In stock (${stock})
                    </span>`;
        } else {
            return `<span class="badge-out badge-stock px-2 py-0.5 rounded-full text-xs">
                        <i class="fas fa-times-circle mr-1"></i>Out of stock
                    </span>`;
        }
    },
    
    // Generate star rating display
    stars: (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
    },
    
    // Debounce function for search input
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Generate unique ID
    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    },
    
    // Get product by ID
    getProductById: (id, products) => {
        return products.find(p => p.id === id);
    },
    
    // Check if product is in cart
    isInCart: (id, cart) => {
        return cart.some(item => item.id === id);
    },
    
    // Check if product is in wishlist
    isInWishlist: (id, wishlist) => {
        return wishlist.some(item => item.id === id);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}