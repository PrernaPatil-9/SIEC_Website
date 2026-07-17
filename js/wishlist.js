// wishlist.js - Wishlist functionality

// Wishlist state - make it accessible globally
let wishlist = JSON.parse(localStorage.getItem('siec_wishlist')) || [];
window.wishlist = wishlist;

// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('siec_wishlist', JSON.stringify(wishlist));
    updateWishlistCounters();
    window.wishlist = wishlist;
}

// Update wishlist counters in UI
function updateWishlistCounters() {
    const wishlistCountSpan = document.getElementById('wishlistCount');
    if (wishlistCountSpan) {
        wishlistCountSpan.textContent = wishlist.length;
    }
}

// Toggle product in wishlist
function toggleWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
        saveWishlist();
        return false; // Removed
    } else {
        const products = window.Products || Products;
        const product = products.find(p => p.id === productId);
        if (product) {
            wishlist.push({ ...product });
            saveWishlist();
            return true; // Added
        }
        return false;
    }
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Remove product from wishlist
function removeFromWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
        saveWishlist();
        return true;
    }
    return false;
}

// Clear wishlist
function clearWishlist() {
    wishlist = [];
    window.wishlist = wishlist;
    saveWishlist();
}

// Initialize wishlist module
function initWishlist() {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem('siec_wishlist'));
    if (storedWishlist) {
        wishlist = storedWishlist;
        window.wishlist = wishlist;
    }
    updateWishlistCounters();
    // Update all wishlist button states
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (isInWishlist(id)) {
            btn.classList.add('liked');
        }
    });
}

// Make functions globally accessible
window.wishlist = wishlist;
window.saveWishlist = saveWishlist;
window.updateWishlistCounters = updateWishlistCounters;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;
window.removeFromWishlist = removeFromWishlist;
window.clearWishlist = clearWishlist;
window.initWishlist = initWishlist;

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        wishlist,
        saveWishlist,
        updateWishlistCounters,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
        initWishlist
    };
}