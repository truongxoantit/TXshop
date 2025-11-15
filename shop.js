// Coupon Codes
const coupons = {
    'WELCOME10': { discount: 10, type: 'percent' },
    'SAVE50K': { discount: 50000, type: 'fixed' },
    'VIP20': { discount: 20, type: 'percent' },
    'NEW2024': { discount: 15, type: 'percent' }
};

// Admin Credentials (in production, use secure authentication)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123' // Change this in production!
};

// Default Products Data
const defaultProducts = [
    {
        id: 1,
        name: 'Áo Hoodie Thêu Logo Premium',
        category: 'Áo Hoodie',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
        description: 'Áo hoodie chất lượng cao, vải dày dặn, logo thêu tay tinh tế. Size S-XL'
    },
    {
        id: 2,
        name: 'Áo T-Shirt Thêu Hoa Hồng',
        category: 'Áo T-Shirt',
        price: 280000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        description: 'Áo thun cotton 100%, họa tiết hoa hồng thêu đẹp mắt, thoáng mát'
    },
    {
        id: 3,
        name: 'Áo Sweatshirt Thêu Chữ Ký',
        category: 'Áo Sweatshirt',
        price: 380000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
        description: 'Áo sweatshirt ấm áp, chữ ký thêu tinh tế, form rộng thoải mái'
    },
    {
        id: 4,
        name: 'Áo Polo Thêu Logo Cổ Điển',
        category: 'Áo Polo',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop',
        description: 'Áo polo lịch sự, logo thêu cao cấp, chất liệu cotton pha'
    },
    {
        id: 5,
        name: 'Áo Lưới Thêu Họa Tiết Thể Thao',
        category: 'Áo Lưới',
        price: 220000,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
        description: 'Áo lưới thể thao, họa tiết thêu độc đáo, thoáng mát khi vận động'
    },
    {
        id: 6,
        name: 'Baby Knotted Cap Thêu Gấu',
        category: 'Baby Cap',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
        description: 'Mũ thêu hình gấu dễ thương cho bé, chất liệu mềm mại, size 0-24 tháng'
    },
    {
        id: 7,
        name: 'Baby Bow Embroidered Hồng',
        category: 'Baby Bow',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop',
        description: 'Nơ thêu màu hồng xinh xắn cho bé gái, chất liệu cao cấp'
    },
    {
        id: 8,
        name: 'Embroidered Sleep Bag Mùa Đông',
        category: 'Sleep Bag',
        price: 550000,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
        description: 'Túi ngủ thêu ấm áp cho mùa đông, chất liệu mềm mại, an toàn cho bé'
    },
    {
        id: 9,
        name: 'Áo Hoodie Thêu Hình Cây',
        category: 'Áo Hoodie',
        price: 420000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
        description: 'Áo hoodie thêu hình cây độc đáo, màu sắc đa dạng, size đầy đủ'
    },
    {
        id: 10,
        name: 'Áo T-Shirt Thêu Chữ "LOVE"',
        category: 'Áo T-Shirt',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        description: 'Áo thun thêu chữ LOVE, thiết kế đơn giản nhưng ấn tượng'
    },
    {
        id: 11,
        name: 'Áo Sweatshirt Thêu Hình Mèo',
        category: 'Áo Sweatshirt',
        price: 360000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
        description: 'Áo sweatshirt thêu hình mèo dễ thương, màu pastel nhẹ nhàng'
    },
    {
        id: 12,
        name: 'Áo Polo Thêu Họa Tiết Hoa',
        category: 'Áo Polo',
        price: 300000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop',
        description: 'Áo polo thêu họa tiết hoa tinh tế, phù hợp mặc đi làm'
    },
    {
        id: 13,
        name: 'Áo Lưới Thêu Logo Thể Thao',
        category: 'Áo Lưới',
        price: 200000,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
        description: 'Áo lưới thể thao, logo thêu nổi bật, thoáng mát khi chơi thể thao'
    },
    {
        id: 14,
        name: 'Baby Cap Thêu Hình Thỏ',
        category: 'Baby Cap',
        price: 140000,
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
        description: 'Mũ thêu hình thỏ ngộ nghĩnh, chất liệu mềm, bảo vệ da đầu bé'
    },
    {
        id: 15,
        name: 'Baby Bow Embroidered Xanh',
        category: 'Baby Bow',
        price: 110000,
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop',
        description: 'Nơ thêu màu xanh dương, thiết kế đơn giản nhưng thanh lịch'
    },
    {
        id: 16,
        name: 'Sleep Bag Thêu Sao',
        category: 'Sleep Bag',
        price: 500000,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
        description: 'Túi ngủ thêu hình sao, chất liệu cotton mềm mại, an toàn cho bé'
    },
    {
        id: 17,
        name: 'Áo Hoodie Thêu Hình Mặt Trời',
        category: 'Áo Hoodie',
        price: 440000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
        description: 'Áo hoodie thêu hình mặt trời năng động, màu sắc tươi sáng'
    },
    {
        id: 18,
        name: 'Áo T-Shirt Thêu Hình Máy Bay',
        category: 'Áo T-Shirt',
        price: 270000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        description: 'Áo thun thêu hình máy bay, phù hợp cho trẻ em và người lớn'
    },
    {
        id: 19,
        name: 'Áo Sweatshirt Thêu Chữ "FAMILY"',
        category: 'Áo Sweatshirt',
        price: 390000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
        description: 'Áo sweatshirt thêu chữ FAMILY, ý nghĩa gia đình, phù hợp mặc cùng nhau'
    },
    {
        id: 20,
        name: 'Áo Polo Thêu Logo Minimalist',
        category: 'Áo Polo',
        price: 310000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop',
        description: 'Áo polo logo minimalist, thiết kế tối giản, thanh lịch'
    }
];
let settings = JSON.parse(localStorage.getItem('telegramSettings')) || {
    token: '7931663050:AAH3E2d7rDq3A553o7V9okU8TQixX1HAGcg',
    chatId: '-5022971494'
};
let currentCoupon = null;
let filteredProducts = [];

// Initialize filtered products
function initFilteredProducts() {
    filteredProducts = [...productsData];
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    try {
        // Load data safely
        cart = safeGetItem('cart', []);
        orders = safeGetItem('orders', []);
        isAdmin = localStorage.getItem('isAdmin') === 'true';
        favorites = safeGetItem('favorites', []);
        
        // Load products from localStorage or use default
        const savedProducts = safeGetItem('products', null);
        if (savedProducts && Array.isArray(savedProducts) && savedProducts.length > 0) {
            productsData = savedProducts;
        } else {
            // Use default products
            productsData = [...defaultProducts];
            safeSetItem('products', productsData);
        }
        
        // Load settings
        const savedSettings = safeGetItem('telegramSettings', null);
        if (savedSettings && savedSettings.token && savedSettings.chatId) {
            settings = savedSettings;
        } else {
            safeSetItem('telegramSettings', settings);
        }
        
        // Initialize
        initFilteredProducts();
        checkAdminStatus();
        setupNavigation();
        renderProducts();
        updateCartBadge();
        updateFavoritesBadge();
        setupEventListeners();
        setupAdvancedFilter();
        loadOrders();
        
        if (isAdmin) {
            setupAdminEventListeners();
            loadAdminData();
        }
        
        console.log('TXshop initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showToast('Có lỗi xảy ra khi khởi tạo ứng dụng. Vui lòng tải lại trang.', 'error');
    }
}

// Admin Functions
function checkAdminStatus() {
    const adminElements = document.querySelectorAll('.admin-only');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminNavBtn = document.getElementById('adminNavBtn');
    
    if (isAdmin) {
        adminElements.forEach(el => el.style.display = 'flex');
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'flex';
        if (adminNavBtn) adminNavBtn.style.display = 'flex';
    } else {
        adminElements.forEach(el => el.style.display = 'none');
        if (loginBtn) loginBtn.style.display = 'flex';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminNavBtn) adminNavBtn.style.display = 'none';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        isAdmin = true;
        localStorage.setItem('isAdmin', 'true');
        checkAdminStatus();
        showPage('admin');
        showToast('Đăng nhập thành công!', 'success');
        loadAdminData();
    } else {
        showToast('Sai tên đăng nhập hoặc mật khẩu!', 'error');
    }
}

function handleLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        isAdmin = false;
        localStorage.setItem('isAdmin', 'false');
        checkAdminStatus();
        showPage('home');
        showToast('Đã đăng xuất', 'success');
    }
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');
    
    pages.forEach(p => p.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    const targetBtn = document.querySelector(`[data-page="${pageName}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    if (pageName === 'cart') {
        renderCart();
    } else if (pageName === 'orders') {
        loadOrders();
    } else if (pageName === 'favorites') {
        renderFavorites();
    } else if (pageName === 'admin' && isAdmin) {
        loadAdminData();
    }
}

// Navigation
function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn[data-page]');
    const pages = document.querySelectorAll('.page');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPage = btn.getAttribute('data-page');
            showPage(targetPage);
        });
    });
}

// Admin Event Listeners
function setupAdminEventListeners() {
    // Admin tabs
    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    adminTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-admin-tab');
            
            adminTabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetContent = document.getElementById(`admin-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            if (targetTab === 'stats') {
                updateStats();
            } else if (targetTab === 'products') {
                renderAdminProducts();
            } else if (targetTab === 'orders') {
                renderAdminOrders();
            } else if (targetTab === 'export') {
                // Export tab is ready
            }
        });
    });
    
    // Add product form
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', handleAddProduct);
    }
}

function handleAddProduct(e) {
    e.preventDefault();
    
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value.trim();
    const price = parseInt(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value.trim() || 'https://via.placeholder.com/300x200/e0e0e0/999999?text=No+Image';
    const description = document.getElementById('productDescription').value.trim() || '';
    
    if (!name || !category || !price || price <= 0) {
        showToast('Vui lòng điền đầy đủ thông tin sản phẩm!', 'error');
        return;
    }
    
    const newProduct = {
        id: Date.now(),
        name: name,
        category: category,
        price: price,
        image: image,
        description: description
    };
    
    productsData.push(newProduct);
    saveProducts();
    initFilteredProducts();
    renderProducts();
    renderAdminProducts();
    document.getElementById('addProductForm').reset();
    showToast('Đã thêm sản phẩm thành công!', 'success');
}

function saveProducts() {
    safeSetItem('products', productsData);
}

function renderAdminProducts() {
    const adminProductsList = document.getElementById('adminProductsList');
    if (!adminProductsList) return;
    
    adminProductsList.innerHTML = productsData.map(product => `
        <div class="admin-product-card">
            <h4>${product.name}</h4>
            <p><strong>Danh mục:</strong> ${product.category}</p>
            <p><strong>Giá:</strong> ${formatPrice(product.price)}</p>
            <div class="product-actions">
                <button class="btn btn-secondary btn-small" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i> Sửa
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </div>
        </div>
    `).join('');
}

function editProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        showToast('Không tìm thấy sản phẩm!', 'error');
        return;
    }
    
    const newName = prompt('Tên sản phẩm:', product.name);
    if (newName === null || !newName.trim()) return;
    
    const newPrice = prompt('Giá (VNĐ):', product.price);
    if (newPrice === null) return;
    
    const priceNum = parseInt(newPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
        showToast('Giá không hợp lệ!', 'error');
        return;
    }
    
    product.name = newName.trim();
    product.price = priceNum;
    
    saveProducts();
    initFilteredProducts();
    renderProducts();
    renderAdminProducts();
    showToast('Đã cập nhật sản phẩm!', 'success');
}

function deleteProduct(productId) {
    if (!confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;
    
    productsData = productsData.filter(p => p.id !== productId);
    saveProducts();
    initFilteredProducts();
    renderProducts();
    renderAdminProducts();
    showToast('Đã xóa sản phẩm!', 'success');
}

function loadAdminData() {
    renderAdminProducts();
    renderAdminOrders();
    updateStats();
}

function renderAdminOrders() {
    const adminOrdersList = document.getElementById('adminOrdersList');
    if (!adminOrdersList) return;
    
    if (orders.length === 0) {
        adminOrdersList.innerHTML = '<div class="empty-state"><i class="fas fa-list-alt"></i><h3>Chưa có đơn hàng nào</h3></div>';
        return;
    }
    
    adminOrdersList.innerHTML = orders.reverse().map(order => `
        <div class="admin-order-card">
            <div class="admin-order-header">
                <div>
                    <div class="order-id">Đơn hàng #${order.id}</div>
                    <div class="order-date">${order.date}</div>
                </div>
                <select class="status-select ${order.status}" onchange="updateOrderStatus('${order.id}', this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>⏳ Chờ xử lý</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>✅ Hoàn thành</option>
                </select>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>${formatPrice(item.total)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(order.total)}</span>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                <p><strong>Khách hàng:</strong> ${order.name}</p>
                <p><strong>SĐT:</strong> ${order.phone}</p>
                <p><strong>Địa chỉ:</strong> ${order.address}</p>
                ${order.note ? `<p><strong>Ghi chú:</strong> ${order.note}</p>` : ''}
            </div>
        </div>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        safeSetItem('orders', orders);
        renderAdminOrders();
        loadOrders();
        showToast('Đã cập nhật trạng thái đơn hàng!', 'success');
    }
}

function updateStats() {
    document.getElementById('totalProducts').textContent = productsData.length;
    document.getElementById('totalOrders').textContent = orders.length;
    document.getElementById('pendingOrders').textContent = orders.filter(o => o.status === 'pending').length;
    const revenue = orders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.total, 0);
    document.getElementById('totalRevenue').textContent = formatPrice(revenue);
}

// Payment Method Change
function handlePaymentMethodChange(e) {
    const paymentInfo = document.getElementById('paymentInfo');
    if (e.target.value === 'bank') {
        paymentInfo.style.display = 'block';
    } else {
        paymentInfo.style.display = 'none';
    }
}

// Event Listeners
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filters
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilter);
    }
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', handleFilter);
    }
    const sortBtn = document.getElementById('sortBtn');
    if (sortBtn) {
        sortBtn.addEventListener('click', handleSort);
    }
    
    // Cart
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }
    
    // Modal
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', closeCheckoutModal);
    }
    const cancelOrderBtn = document.getElementById('cancelOrderBtn');
    if (cancelOrderBtn) {
        cancelOrderBtn.addEventListener('click', closeCheckoutModal);
    }
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
    
    // Payment method change
    const paymentMethod = document.getElementById('paymentMethod');
    if (paymentMethod) {
        paymentMethod.addEventListener('change', handlePaymentMethodChange);
    }
    
    // Coupon
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', applyCoupon);
    }
    
    // Login
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => showPage('login'));
    }
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Admin - setup will be called in initializeApp if admin is logged in
    
    // Settings (admin only)
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveSettings);
    }
    const testTelegramBtn = document.getElementById('testTelegramBtn');
    if (testTelegramBtn) {
        testTelegramBtn.addEventListener('click', testTelegram);
    }
}

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        // Update category filter
        const categories = [...new Set(productsData.map(p => p.category))];
        categoryFilter.innerHTML = '<option value="">Tất cả danh mục</option>';
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });
    }
    
    // Render products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Thử tìm kiếm với từ khóa khác</p>
            </div>
        `;
        return;
    }
    
    // Render products with all features
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     loading="lazy"
                     onclick="showProductDetail(${product.id})"
                     style="cursor: pointer;"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/e0e0e0/999999?text=No+Image'">
                <button class="favorite-btn ${isFavorite(product.id) ? 'active' : ''}" 
                        onclick="toggleFavorite(${product.id})" 
                        title="${isFavorite(product.id) ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-name" onclick="showProductDetail(${product.id})" style="cursor: pointer;">${escapeHtml(product.name)}</div>
                <div class="product-category">${escapeHtml(product.category)}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="showProductDetail(${product.id})">
                        <i class="fas fa-eye"></i> Chi tiết
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterProducts();
}

// Filter
function handleFilter() {
    filterProducts();
}

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    
    filteredProducts = productsData.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) ||
                          product.category.toLowerCase().includes(searchTerm);
        const matchCategory = !category || product.category === category;
        
        let matchPrice = true;
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            matchPrice = product.price >= min && product.price <= max;
        }
        
        return matchSearch && matchCategory && matchPrice;
    });
    
    renderProducts();
}

// Sort
function handleSort() {
    const sortOptions = [
        { text: 'Giá tăng dần', value: 'price-asc' },
        { text: 'Giá giảm dần', value: 'price-desc' },
        { text: 'Tên A-Z', value: 'name-asc' },
        { text: 'Tên Z-A', value: 'name-desc' }
    ];
    
    const selected = prompt('Chọn cách sắp xếp:\n' + 
        sortOptions.map((opt, idx) => `${idx + 1}. ${opt.text}`).join('\n') + '\n\nNhập số (1-4):');
    
    if (!selected) return;
    
    const option = sortOptions[parseInt(selected) - 1];
    if (!option) return;
    
    const [field, order] = option.value.split('-');
    
    filteredProducts.sort((a, b) => {
        let aVal, bVal;
        if (field === 'price') {
            aVal = a.price;
            bVal = b.price;
        } else {
            aVal = a.name.toLowerCase();
            bVal = b.name.toLowerCase();
        }
        
        if (order === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
    
    renderProducts();
    showToast('Đã sắp xếp sản phẩm', 'success');
}

// Cart Functions
function addToCart(productId) {
    if (!productId) {
        showToast('Lỗi: Không tìm thấy sản phẩm!', 'error');
        return;
    }
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        showToast('Lỗi: Sản phẩm không tồn tại!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartBadge();
    showToast(`Đã thêm ${product.name} vào giỏ hàng`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCart();
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCart();
    renderCart();
}

function saveCart() {
    safeSetItem('cart', cart);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Giỏ hàng trống</h3>
                <p>Hãy thêm sản phẩm vào giỏ hàng</p>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 onerror="this.src='https://via.placeholder.com/100x100/e0e0e0/999999?text=No+Image'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           min="1" onchange="setQuantity(${item.id}, this.value)">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </div>
            <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function setQuantity(productId, quantity) {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty < 1) return;
    
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = qty;
        saveCart();
        renderCart();
    }
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = 30000;
    
    let discount = 0;
    if (currentCoupon) {
        if (currentCoupon.type === 'percent') {
            discount = (subtotal * currentCoupon.discount) / 100;
        } else {
            discount = currentCoupon.discount;
        }
    }
    
    const total = subtotal + shippingFee - discount;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shippingFee').textContent = formatPrice(shippingFee);
    document.getElementById('totalAmount').textContent = formatPrice(total);
    
    const discountRow = document.getElementById('discountRow');
    const discountAmount = document.getElementById('discountAmount');
    
    if (discount > 0) {
        discountRow.style.display = 'flex';
        discountAmount.textContent = `-${formatPrice(discount)}`;
    } else {
        discountRow.style.display = 'none';
    }
}

// Coupon
function applyCoupon() {
    const code = document.getElementById('couponCode').value.toUpperCase().trim();
    
    if (!code) {
        showToast('Vui lòng nhập mã giảm giá', 'error');
        return;
    }
    
    const coupon = coupons[code];
    
    if (!coupon) {
        showToast('Mã giảm giá không hợp lệ', 'error');
        return;
    }
    
    currentCoupon = { ...coupon, code };
    updateCartSummary();
    showToast(`Áp dụng mã giảm giá ${code} thành công!`, 'success');
}

// Checkout Modal
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Giỏ hàng trống!', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const orderPreview = document.getElementById('orderPreview');
    
    // Render order preview
    const itemsHtml = cart.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 5px 0;">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = 30000;
    let discount = 0;
    if (currentCoupon) {
        if (currentCoupon.type === 'percent') {
            discount = (subtotal * currentCoupon.discount) / 100;
        } else {
            discount = currentCoupon.discount;
        }
    }
    const total = subtotal + shippingFee - discount;
    
    orderPreview.innerHTML = `
        ${itemsHtml}
        <div style="border-top: 1px solid #e0e0e0; margin-top: 10px; padding-top: 10px;">
            <div style="display: flex; justify-content: space-between;">
                <span>Tạm tính:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <span>Phí vận chuyển:</span>
                <span>${formatPrice(shippingFee)}</span>
            </div>
            ${discount > 0 ? `
            <div style="display: flex; justify-content: space-between; color: #28a745;">
                <span>Giảm giá (${currentCoupon.code}):</span>
                <span>-${formatPrice(discount)}</span>
            </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; font-size: 1.1rem; color: #667eea;">
                <span>Tổng cộng:</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const form = document.getElementById('checkoutForm');
    if (modal) modal.classList.remove('active');
    if (form) form.reset();
    
    // Hide payment info
    const paymentInfo = document.getElementById('paymentInfo');
    if (paymentInfo) paymentInfo.style.display = 'none';
}

// Handle Checkout
async function handleCheckout(e) {
    e.preventDefault();
    
    if (!settings.token || !settings.chatId) {
        showToast('Vui lòng cấu hình Telegram trong phần Cài Đặt!', 'error');
        closeCheckoutModal();
        // Switch to settings page
        document.querySelector('[data-page="settings"]').click();
        return;
    }
    
    const formData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        address: document.getElementById('customerAddress').value,
        note: document.getElementById('orderNote').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        shippingFee: 30000,
        discount: currentCoupon ? (currentCoupon.type === 'percent' 
            ? (cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * currentCoupon.discount) / 100
            : currentCoupon.discount) : 0,
        total: 0
    };
    
    formData.total = formData.subtotal + formData.shippingFee - formData.discount;
    
    showLoading(true);
    
    try {
        // Create order
        const order = {
            id: Date.now().toString(),
            date: new Date().toLocaleString('vi-VN'),
            status: 'pending',
            ...formData
        };
        
        orders.push(order);
        safeSetItem('orders', orders);
        
        // Send to Telegram
        await sendToTelegram(order);
        
        // Clear cart
        cart = [];
        currentCoupon = null;
        saveCart();
        updateCartBadge();
        
        showLoading(false);
        closeCheckoutModal();
        showToast('Đặt hàng thành công! Đã gửi thông tin đến Telegram.', 'success');
        
        // Switch to orders page
        setTimeout(() => {
            document.querySelector('[data-page="orders"]').click();
        }, 1500);
        
    } catch (error) {
        showLoading(false);
        console.error('Error:', error);
        showToast('Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!', 'error');
    }
}

// Send to Telegram
async function sendToTelegram(order) {
    const botToken = settings.token;
    const chatId = settings.chatId;
    
    if (!botToken || !chatId) {
        throw new Error('Telegram settings not configured');
    }
    
    const itemsText = order.items.map(item => 
        `  • ${item.name} x${item.quantity} - ${formatPrice(item.total)}`
    ).join('\n');
    
    const message = `
🛒 *ĐƠN HÀNG MỚI*

📋 *Mã đơn:* #${order.id}
📅 *Ngày đặt:* ${order.date}

👤 *Thông tin khách hàng:*
  • Tên: ${order.name}
  • SĐT: ${order.phone}
  ${order.email ? `  • Email: ${order.email}` : ''}
  • Địa chỉ: ${order.address}
  ${order.note ? `  • Ghi chú: ${order.note}` : ''}

🛍️ *Sản phẩm:*
${itemsText}

💰 *Thanh toán:*
  • Tạm tính: ${formatPrice(order.subtotal)}
  • Phí vận chuyển: ${formatPrice(order.shippingFee)}
  ${order.discount > 0 ? `  • Giảm giá: -${formatPrice(order.discount)}` : ''}
  • *Tổng cộng: ${formatPrice(order.total)}*

💳 *Phương thức:* ${getPaymentMethodText(order.paymentMethod)}

📊 *Trạng thái:* ${order.status === 'pending' ? '⏳ Chờ xử lý' : '✅ Hoàn thành'}
    `.trim();
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        })
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.description || 'Failed to send message');
    }
}

function getPaymentMethodText(method) {
    const methods = {
        'cod': 'Thanh toán khi nhận hàng (COD)',
        'bank': 'Chuyển khoản ngân hàng',
        'momo': 'Ví MoMo'
    };
    return methods[method] || method;
}

// Orders
function loadOrders() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-list-alt"></i>
                <h3>Chưa có đơn hàng nào</h3>
                <p>Đơn hàng của bạn sẽ hiển thị ở đây</p>
            </div>
        `;
        return;
    }
    
    ordersList.innerHTML = orders.reverse().map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <div class="order-id">Đơn hàng #${order.id}</div>
                    <div class="order-date">${order.date}</div>
                </div>
                <div class="order-status ${order.status}">
                    ${order.status === 'pending' ? '⏳ Chờ xử lý' : '✅ Hoàn thành'}
                </div>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>${formatPrice(item.total)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(order.total)}</span>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                <p><strong>Khách hàng:</strong> ${order.name}</p>
                <p><strong>SĐT:</strong> ${order.phone}</p>
                <p><strong>Địa chỉ:</strong> ${order.address}</p>
                ${order.note ? `<p><strong>Ghi chú:</strong> ${order.note}</p>` : ''}
            </div>
        </div>
    `).join('');
}

// Settings
function loadSettings() {
    const tokenEl = document.getElementById('telegramToken');
    const chatIdEl = document.getElementById('telegramChatId');
    if (tokenEl && settings.token) {
        tokenEl.value = settings.token;
    }
    if (chatIdEl && settings.chatId) {
        chatIdEl.value = settings.chatId;
    }
}

function saveSettings() {
    const token = document.getElementById('telegramToken').value.trim();
    const chatId = document.getElementById('telegramChatId').value.trim();
    
    if (!token || !chatId) {
        showToast('Vui lòng nhập đầy đủ thông tin!', 'error');
        return;
    }
    
    settings = { token, chatId };
    safeSetItem('telegramSettings', settings);
    showToast('Đã lưu cài đặt thành công!', 'success');
}

async function testTelegram() {
    if (!settings.token || !settings.chatId) {
        showToast('Vui lòng lưu cài đặt trước!', 'error');
        return;
    }
    
    showLoading(true);
    
    try {
        const url = `https://api.telegram.org/bot${settings.token}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: settings.chatId,
                text: '✅ Test thành công! Cửa hàng của bạn đã kết nối với Telegram.'
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.description || 'Failed to send message');
        }
        
        showLoading(false);
        showToast('Gửi test thành công! Kiểm tra Telegram của bạn.', 'success');
    } catch (error) {
        showLoading(false);
        showToast(`Lỗi: ${error.message}`, 'error');
    }
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Favorites/Wishlist - Already initialized above

function toggleFavorite(productId) {
    if (!productId) return;
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Đã xóa khỏi yêu thích', 'success');
    } else {
        favorites.push(productId);
        showToast('Đã thêm vào yêu thích', 'success');
    }
    safeSetItem('favorites', favorites);
    updateFavoritesBadge();
    renderProducts();
    if (document.getElementById('favoritesGrid')) {
        renderFavorites();
    }
}

function isFavorite(productId) {
    return favorites.includes(productId);
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (badge) {
        badge.textContent = favorites.length;
    }
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    if (!favoritesGrid) return;
    
    const favoriteProducts = productsData.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-heart"></i>
                <h3>Chưa có sản phẩm yêu thích</h3>
                <p>Thêm sản phẩm vào yêu thích để xem lại sau</p>
            </div>
        `;
        return;
    }
    
    favoritesGrid.innerHTML = favoriteProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 loading="lazy"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/e0e0e0/999999?text=No+Image'">
            <div class="product-info">
                <div class="product-name">${escapeHtml(product.name)}</div>
                <div class="product-category">${escapeHtml(product.category)}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="btn btn-danger btn-small" onclick="toggleFavorite(${product.id})" title="Xóa khỏi yêu thích">
                        <i class="fas fa-heart-broken"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Product Detail Modal
function showProductDetail(productId) {
    if (!productId) {
        showToast('Lỗi: Không tìm thấy sản phẩm!', 'error');
        return;
    }
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        showToast('Lỗi: Sản phẩm không tồn tại!', 'error');
        return;
    }
    
    const modal = document.getElementById('productDetailModal');
    const nameEl = document.getElementById('productDetailName');
    const contentEl = document.getElementById('productDetailContent');
    
    if (!modal || !nameEl || !contentEl) {
        console.error('Modal elements not found');
        return;
    }
    
    nameEl.textContent = product.name;
    contentEl.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400/e0e0e0/999999?text=No+Image'">
            </div>
            <div class="product-detail-info">
                <div class="detail-category">${escapeHtml(product.category)}</div>
                <div class="detail-price">${formatPrice(product.price)}</div>
                <div class="detail-description">
                    <h4>Mô tả sản phẩm:</h4>
                    <p>${escapeHtml(product.description || 'Chưa có mô tả')}</p>
                </div>
                <div class="detail-actions">
                    <button class="btn btn-primary btn-large" onclick="addToCart(${product.id}); closeProductDetail();">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                    <button class="btn btn-danger" onclick="toggleFavorite(${product.id})" style="margin-left: 10px;">
                        <i class="fas ${isFavorite(product.id) ? 'fa-heart' : 'fa-heart'}"></i> 
                        ${isFavorite(product.id) ? 'Đã yêu thích' : 'Yêu thích'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    if (modal) modal.classList.remove('active');
}

// Advanced Filter
function setupAdvancedFilter() {
    const advancedFilterBtn = document.getElementById('advancedFilterBtn');
    const advancedFilterPanel = document.getElementById('advancedFilterPanel');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    
    if (advancedFilterBtn && advancedFilterPanel) {
        advancedFilterBtn.addEventListener('click', () => {
            advancedFilterPanel.style.display = advancedFilterPanel.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', applyAdvancedFilter);
    }
    
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', resetAdvancedFilter);
    }
}

function applyAdvancedFilter() {
    const minPriceEl = document.getElementById('minPrice');
    const maxPriceEl = document.getElementById('maxPrice');
    const sortEl = document.getElementById('advancedSort');
    
    if (!minPriceEl || !maxPriceEl || !sortEl) {
        showToast('Lỗi: Không tìm thấy các trường lọc!', 'error');
        return;
    }
    
    const minPrice = parseInt(minPriceEl.value) || 0;
    const maxPrice = parseInt(maxPriceEl.value) || Infinity;
    const sortValue = sortEl.value;
    
    filteredProducts = productsData.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    });
    
    if (sortValue) {
        const [field, order] = sortValue.split('-');
        filteredProducts.sort((a, b) => {
            let aVal, bVal;
            if (field === 'price') {
                aVal = a.price;
                bVal = b.price;
            } else {
                aVal = a.name.toLowerCase();
                bVal = b.name.toLowerCase();
            }
            return order === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
        });
    }
    
    renderProducts();
    showToast('Đã áp dụng bộ lọc', 'success');
}

function resetAdvancedFilter() {
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('advancedSort').value = '';
    initFilteredProducts();
    renderProducts();
    showToast('Đã đặt lại bộ lọc', 'success');
}

// Export/Import Data
function exportData(type) {
    let data = {};
    let filename = '';
    
    if (type === 'products') {
        data = { products: productsData };
        filename = 'txshop-products.json';
    } else if (type === 'orders') {
        data = { orders: orders };
        filename = 'txshop-orders.json';
    } else {
        data = { products: productsData, orders: orders, settings: settings };
        filename = 'txshop-all-data.json';
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Đã xuất ${type === 'all' ? 'tất cả' : type} thành công!`, 'success');
}

function importData() {
    const fileInput = document.getElementById('importFile');
    if (!fileInput || !fileInput.files[0]) {
        showToast('Vui lòng chọn file!', 'error');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.products) {
                productsData = data.products;
                saveProducts();
                initFilteredProducts();
                renderProducts();
                renderAdminProducts();
            }
            
            if (data.orders) {
                orders = data.orders;
                safeSetItem('orders', orders);
                loadOrders();
                if (isAdmin) {
                    renderAdminOrders();
                }
            }
            
            if (data.settings) {
                settings = data.settings;
                safeSetItem('telegramSettings', settings);
                loadSettings();
            }
            
            showToast('Đã nhập dữ liệu thành công!', 'success');
            fileInput.value = '';
        } catch (error) {
            showToast('File không hợp lệ!', 'error');
            console.error(error);
        }
    };
    
    reader.readAsText(file);
}

// Print Order
function printOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        showToast('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Hóa Đơn #${order.id}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .order-info { margin-bottom: 20px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #667eea; color: white; }
                    .total { font-size: 1.2em; font-weight: bold; text-align: right; margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>TXshop</h1>
                    <h2>HÓA ĐƠN BÁN HÀNG</h2>
                </div>
                <div class="order-info">
                    <p><strong>Mã đơn:</strong> #${order.id}</p>
                    <p><strong>Ngày đặt:</strong> ${order.date}</p>
                    <p><strong>Khách hàng:</strong> ${order.name}</p>
                    <p><strong>SĐT:</strong> ${order.phone}</p>
                    <p><strong>Địa chỉ:</strong> ${order.address}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items.map(item => `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.quantity}</td>
                                <td>${formatPrice(item.price)}</td>
                                <td>${formatPrice(item.total)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div class="total">
                    <p>Tạm tính: ${formatPrice(order.subtotal)}</p>
                    <p>Phí vận chuyển: ${formatPrice(order.shippingFee)}</p>
                    ${order.discount > 0 ? `<p>Giảm giá: -${formatPrice(order.discount)}</p>` : ''}
                    <p>Tổng cộng: ${formatPrice(order.total)}</p>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Make functions global for onclick handlers - Call this early
function makeFunctionsGlobal() {
    // These will be defined later, but we set them up here
    // The actual assignments happen after functions are defined
}

// Make functions global for onclick handlers - Called at end of file
function setupGlobalFunctions() {
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;
    window.setQuantity = setQuantity;
    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
    window.updateOrderStatus = updateOrderStatus;
    window.toggleFavorite = toggleFavorite;
    window.showProductDetail = showProductDetail;
    window.closeProductDetail = closeProductDetail;
    window.exportData = exportData;
    window.importData = importData;
    window.printOrder = printOrder;
}

// Setup global functions after all functions are defined
setupGlobalFunctions();

