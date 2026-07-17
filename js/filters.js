// filters.js - Filter and search functionality

let currentFilters = {
    category: 'all',
    search: '',
    sort: 'default'
};

// Get all unique categories from products
function getCategories() {
    const categories = Products.map(p => p.category);
    return ['all', ...new Set(categories)];
}

// Filter products based on current filters
function filterProducts(products = Products) {
    let filtered = [...products];
    
    // Category filter
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilters.category);
    }
    
    // Search filter
    if (currentFilters.search.trim()) {
        const searchTerm = currentFilters.search.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm) ||
            p.desc.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort
    switch (currentFilters.sort) {
        case 'priceLow':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'priceHigh':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Keep original order
            break;
    }
    
    return filtered;
}

// Render category filter chips
function renderCategories() {
    const container = document.getElementById('categoryFilterContainer');
    if (!container) return;
    
    const categories = getCategories();
    container.innerHTML = categories.map(cat => 
        `<span class="filter-chip ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${cat === 'all' ? 'All Categories' : cat}
        </span>`
    ).join('');
    
    // Add click event listeners
    container.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentFilters.category = this.dataset.category;
            applyFilters();
        });
    });
}

// Apply all filters and render products
function applyFilters() {
    const filteredProducts = filterProducts();
    if (typeof renderProducts === 'function') {
        renderProducts(filteredProducts);
    }
    // Update product count
    const countSpan = document.getElementById('productCount');
    if (countSpan) {
        countSpan.textContent = filteredProducts.length;
    }
    // Show/hide empty state
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        if (filteredProducts.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    }
}

// Reset all filters
function resetFilters() {
    currentFilters = {
        category: 'all',
        search: '',
        sort: 'default'
    };
    
    // Reset UI elements
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) searchInput.value = '';
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';
    
    // Reset category chips
    const container = document.getElementById('categoryFilterContainer');
    if (container) {
        container.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.toggle('active', chip.dataset.category === 'all');
        });
    }
    
    applyFilters();
}

// Initialize filters module
function initFilters() {
    renderCategories();
    applyFilters();
    
    // Search input with debounce
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        const debouncedSearch = Utils.debounce((e) => {
            currentFilters.search = e.target.value;
            applyFilters();
        }, 300);
        searchInput.addEventListener('input', debouncedSearch);
        
        // Also handle search button click
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                currentFilters.search = searchInput.value;
                applyFilters();
            });
        }
    }
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentFilters.sort = this.value;
            applyFilters();
        });
    }
    
    // Clear filters button
    const clearBtn = document.getElementById('clearFiltersBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', resetFilters);
    }
    
    // Reset from empty state
    const resetEmptyBtn = document.getElementById('resetFromEmpty');
    if (resetEmptyBtn) {
        resetEmptyBtn.addEventListener('click', resetFilters);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        currentFilters,
        getCategories,
        filterProducts,
        renderCategories,
        applyFilters,
        resetFilters,
        initFilters
    };
}