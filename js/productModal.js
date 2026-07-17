// productModal.js - Product details modal functionality

// Modal state
let currentModalProduct = null;

// Open product modal
function openProductModal(productId) {
    const product = Products.find(p => p.id === productId);
    if (!product) return;
    
    currentModalProduct = product;
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    // Generate modal content
    const isInWishlist = typeof isInWishlist === 'function' ? isInWishlist(product.id) : false;
    
    modalContent.innerHTML = `
        <div>
            <img src="${product.img}" alt="${product.name}" class="w-full rounded-2xl bg-gray-100">
            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-sm font-medium text-gray-500"><i class="far fa-clock mr-1"></i>${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                <span class="text-sm font-medium text-gray-500"><i class="far fa-star mr-1"></i>${product.rating} / 5.0</span>
            </div>
        </div>
        <div>
            <span class="text-siec-gold font-semibold text-sm uppercase tracking-wide">${product.category}</span>
            <h2 class="text-3xl font-bold mt-1">${product.name}</h2>
            <div class="flex items-center gap-2 text-lg mt-1">
                <span class="rating-star">${Utils.stars(product.rating)}</span>
                <span class="text-gray-500 text-sm">(${product.rating})</span>
            </div>
            <p class="text-gray-600 mt-4 leading-relaxed">${product.desc}</p>
            <div class="mt-4 flex items-center gap-4">
                <span class="text-3xl font-bold text-siec-dark">${Utils.formatPrice(product.price)}</span>
                ${Utils.getStockBadge(product.stock)}
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
                <button class="bg-siec-dark text-white px-6 py-2.5 rounded-full hover:bg-[#1e3a5f] transition add-cart-modal" data-id="${product.id}">
                    <i class="fas fa-cart-plus mr-2"></i>Add to Cart
                </button>
                <button class="bg-siec-gold text-siec-dark px-6 py-2.5 rounded-full hover:bg-[#b8963e] transition buy-now-modal" data-id="${product.id}">
                    <i class="fas fa-bolt mr-2"></i>Buy Now
                </button>
                <button class="border-2 border-gray-300 px-4 py-2.5 rounded-full hover:border-gray-400 transition wishlist-modal ${isInWishlist ? 'text-red-500 border-red-200' : ''}" data-id="${product.id}">
                    <i class="fas fa-heart mr-1"></i> ${isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                </button>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-semibold text-sm text-gray-500 uppercase tracking-wide">Product Details</h4>
                <ul class="mt-2 space-y-2 text-sm">
                    <li><span class="font-medium">Category:</span> ${product.category}</li>
                    <li><span class="font-medium">SKU:</span> SIEC-${String(product.id).padStart(4, '0')}</li>
                    <li><span class="font-medium">Rating:</span> ${product.rating} / 5.0</li>
                    <li><span class="font-medium">Availability:</span> ${product.stock > 0 ? `${product.stock} units` : 'Out of stock'}</li>
                </ul>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add event listeners to modal buttons
    modalContent.querySelector('.add-cart-modal')?.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        if (typeof addToCart === 'function') {
            addToCart(id);
            alert('Product added to cart!');
        }
    });
    
    modalContent.querySelector('.buy-now-modal')?.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        if (typeof addToCart === 'function') {
            addToCart(id);
            alert('Product added to cart! Proceed to checkout.');
            // You can redirect to checkout page here
        }
    });
    
    modalContent.querySelector('.wishlist-modal')?.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        if (typeof toggleWishlist === 'function') {
            const added = toggleWishlist(id);
            this.innerHTML = added ? '<i class="fas fa-heart mr-1"></i> In Wishlist' : '<i class="fas fa-heart mr-1"></i> Add to Wishlist';
            this.classList.toggle('text-red-500');
            this.classList.toggle('border-red-200');
        }
    });
    
    // GSAP animation
    gsap.fromTo(modalContent, 
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    currentModalProduct = null;
}

// Initialize product modal
function initProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeModalBtn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeProductModal();
            }
        });
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        currentModalProduct,
        openProductModal,
        closeProductModal,
        initProductModal
    };
}