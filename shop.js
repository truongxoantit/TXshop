// Coupon Codes - Load from localStorage or use default
let coupons = {};
let users = [];
let currentUser = null;

// Initialize coupons
function initCoupons() {
    const savedCoupons = safeGetItem('coupons', null);
    if (savedCoupons && Object.keys(savedCoupons).length > 0) {
        coupons = savedCoupons;
    } else {
        coupons = {
            'WELCOME10': { discount: 10, type: 'percent' },
            'SAVE50K': { discount: 50000, type: 'fixed' },
            'VIP20': { discount: 20, type: 'percent' },
            'NEW2024': { discount: 15, type: 'percent' }
        };
        safeSetItem('coupons', coupons);
    }
}

// Initialize users
function initUsers() {
    users = safeGetItem('users', []);
    currentUser = safeGetItem('currentUser', null);
}

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
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&q=80',
        description: 'Áo hoodie chất lượng cao, vải dày dặn, logo thêu tay tinh tế. Size S-XL. Chất liệu cotton 100%, mềm mại, ấm áp.'
    },
    {
        id: 2,
        name: 'Áo T-Shirt Thêu Hoa Hồng',
        category: 'Áo T-Shirt',
        price: 280000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80',
        description: 'Áo thun cotton 100%, họa tiết hoa hồng thêu đẹp mắt, thoáng mát. Form rộng rãi, dễ mặc.'
    },
    {
        id: 3,
        name: 'Áo Sweatshirt Thêu Chữ Ký',
        category: 'Áo Sweatshirt',
        price: 380000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop&q=80',
        description: 'Áo sweatshirt ấm áp, chữ ký thêu tinh tế, form rộng thoải mái. Chất liệu mềm mại, giữ ấm tốt.'
    },
    {
        id: 4,
        name: 'Áo Polo Thêu Logo Cổ Điển',
        category: 'Áo Polo',
        price: 320000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop&q=80',
        description: 'Áo polo lịch sự, logo thêu cao cấp, chất liệu cotton pha. Phù hợp mặc đi làm, đi chơi.'
    },
    {
        id: 5,
        name: 'Áo Lưới Thêu Họa Tiết Thể Thao',
        category: 'Áo Lưới',
        price: 220000,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop&q=80',
        description: 'Áo lưới thể thao, họa tiết thêu độc đáo, thoáng mát khi vận động. Co giãn tốt, không bám mồ hôi.'
    },
    {
        id: 6,
        name: 'Baby Knotted Cap Thêu Gấu',
        category: 'Baby Cap',
        price: 150000,
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop&q=80',
        description: 'Mũ thêu hình gấu dễ thương cho bé, chất liệu mềm mại, size 0-24 tháng. Bảo vệ da đầu khỏi nắng.'
    },
    {
        id: 7,
        name: 'Baby Bow Embroidered Hồng',
        category: 'Baby Bow',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop&q=80',
        description: 'Nơ thêu màu hồng xinh xắn cho bé gái, chất liệu cao cấp. Dễ thương, an toàn cho da bé.'
    },
    {
        id: 8,
        name: 'Embroidered Sleep Bag Mùa Đông',
        category: 'Sleep Bag',
        price: 550000,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&q=80',
        description: 'Túi ngủ thêu ấm áp cho mùa đông, chất liệu mềm mại, an toàn cho bé. Giữ ấm tốt, dễ vệ sinh.'
    },
    {
        id: 9,
        name: 'Áo Hoodie Thêu Hình Cây',
        category: 'Áo Hoodie',
        price: 420000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&q=80',
        description: 'Áo hoodie thêu hình cây độc đáo, màu sắc đa dạng, size đầy đủ. Thiết kế trẻ trung, năng động.'
    },
    {
        id: 10,
        name: 'Áo T-Shirt Thêu Chữ "LOVE"',
        category: 'Áo T-Shirt',
        price: 250000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80',
        description: 'Áo thun thêu chữ LOVE, thiết kế đơn giản nhưng ấn tượng. Phù hợp mọi lứa tuổi.'
    },
    {
        id: 11,
        name: 'Áo Sweatshirt Thêu Hình Mèo',
        category: 'Áo Sweatshirt',
        price: 360000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop&q=80',
        description: 'Áo sweatshirt thêu hình mèo dễ thương, màu pastel nhẹ nhàng. Form rộng, thoải mái.'
    },
    {
        id: 12,
        name: 'Áo Polo Thêu Họa Tiết Hoa',
        category: 'Áo Polo',
        price: 300000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop&q=80',
        description: 'Áo polo thêu họa tiết hoa tinh tế, phù hợp mặc đi làm. Lịch sự, thanh lịch.'
    },
    {
        id: 13,
        name: 'Áo Lưới Thêu Logo Thể Thao',
        category: 'Áo Lưới',
        price: 200000,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop&q=80',
        description: 'Áo lưới thể thao, logo thêu nổi bật, thoáng mát khi chơi thể thao. Chất liệu nhẹ, bền.'
    },
    {
        id: 14,
        name: 'Baby Cap Thêu Hình Thỏ',
        category: 'Baby Cap',
        price: 140000,
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop&q=80',
        description: 'Mũ thêu hình thỏ ngộ nghĩnh, chất liệu mềm, bảo vệ da đầu bé. Dễ thương, an toàn.'
    },
    {
        id: 15,
        name: 'Baby Bow Embroidered Xanh',
        category: 'Baby Bow',
        price: 110000,
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop&q=80',
        description: 'Nơ thêu màu xanh dương, thiết kế đơn giản nhưng thanh lịch. Chất liệu cao cấp.'
    },
    {
        id: 16,
        name: 'Sleep Bag Thêu Sao',
        category: 'Sleep Bag',
        price: 500000,
        image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&q=80',
        description: 'Túi ngủ thêu hình sao, chất liệu cotton mềm mại, an toàn cho bé. Giữ ấm, dễ vệ sinh.'
    },
    {
        id: 17,
        name: 'Áo Hoodie Thêu Hình Mặt Trời',
        category: 'Áo Hoodie',
        price: 440000,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&q=80',
        description: 'Áo hoodie thêu hình mặt trời năng động, màu sắc tươi sáng. Form rộng, thoải mái.'
    },
    {
        id: 18,
        name: 'Áo T-Shirt Thêu Hình Máy Bay',
        category: 'Áo T-Shirt',
        price: 270000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80',
        description: 'Áo thun thêu hình máy bay, phù hợp cho trẻ em và người lớn. Thiết kế độc đáo.'
    },
    {
        id: 19,
        name: 'Áo Sweatshirt Thêu Chữ "FAMILY"',
        category: 'Áo Sweatshirt',
        price: 390000,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop&q=80',
        description: 'Áo sweatshirt thêu chữ FAMILY, ý nghĩa gia đình, phù hợp mặc cùng nhau. Ấm áp, thoải mái.'
    },
    {
        id: 20,
        name: 'Áo Polo Thêu Logo Minimalist',
        category: 'Áo Polo',
        price: 310000,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop&q=80',
        description: 'Áo polo logo minimalist, thiết kế tối giản, thanh lịch. Phù hợp mọi dịp.'
    }
];

// App State - Initialize safely
let cart = [];
let orders = [];
let isAdmin = false;
let productsData = [];
let settings = {
    token: '7931663050:AAH3E2d7rDq3A553o7V9okU8TQixX1HAGcg',
    chatId: '-5022971494'
};
let currentCoupon = null;
let filteredProducts = [];
let favorites = [];

// Safe localStorage functions
function safeGetItem(key, defaultValue) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn(`Error reading ${key} from localStorage:`, e);
        return defaultValue;
    }
}

function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.warn(`Error writing ${key} to localStorage:`, e);
        return false;
    }
}

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
        // Initialize coupons and users first
        initCoupons();
        initUsers();
        
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
        
        // Setup global functions first
        setupGlobalFunctions();
        
        // Initialize
        initFilteredProducts();
        checkAdminStatus();
        checkUserStatus();
        setupNavigation();
        renderProducts();
        updateCartBadge();
        updateFavoritesBadge();
        setupEventListeners();
        setupAdvancedFilter();
        setupProductDetailModal();
        loadOrders();
        
        if (isAdmin) {
            setupAdminEventListeners();
            loadAdminData();
        }
        
        // Setup global functions again to ensure they're available
        setTimeout(() => {
            setupGlobalFunctions();
        }, 200);
        
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

// User Registration
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    if (!name || !phone || !password) {
        showToast('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }
    
    if (password !== passwordConfirm) {
        showToast('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    // Check if user already exists
    if (users.find(u => u.phone === phone)) {
        showToast('Số điện thoại đã được đăng ký!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: name,
        phone: phone,
        email: email || '',
        password: password, // In production, hash this!
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    safeSetItem('users', users);
    
    showToast('Đăng ký thành công! Vui lòng đăng nhập.', 'success');
    document.getElementById('registerForm').reset();
    setTimeout(() => {
        showPage('login');
    }, 1000);
}

// User Login
function handleUserLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('userPhone').value.trim();
    const password = document.getElementById('userPassword').value;
    
    const user = users.find(u => u.phone === phone && u.password === password);
    
    if (user) {
        currentUser = user;
        safeSetItem('currentUser', currentUser);
        checkUserStatus();
        showPage('home');
        showToast('Đăng nhập thành công!', 'success');
        document.getElementById('userLoginForm').reset();
    } else {
        showToast('Số điện thoại hoặc mật khẩu không đúng!', 'error');
    }
}

// User Logout
function handleUserLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        currentUser = null;
        safeSetItem('currentUser', null);
        checkUserStatus();
        showPage('home');
        showToast('Đã đăng xuất', 'success');
    }
}

// Check User Status
function checkUserStatus() {
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const userLogoutBtn = document.getElementById('userLogoutBtn');
    
    if (currentUser) {
        if (registerBtn) registerBtn.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'none';
        if (userLogoutBtn) userLogoutBtn.style.display = 'flex';
    } else {
        if (registerBtn) registerBtn.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'flex';
        if (userLogoutBtn) userLogoutBtn.style.display = 'none';
    }
}

// Admin Login
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
        
        // Setup admin event listeners after login
        setupAdminEventListeners();
        loadAdminData();
        
        // Reset to first tab
        setTimeout(() => {
            const firstTab = document.querySelector('.admin-tab-btn[data-admin-tab="products"]');
            if (firstTab) {
                firstTab.click();
            }
        }, 100);
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
        // Ensure admin event listeners are setup
        setupAdminEventListeners();
        loadAdminData();
        
        // Reset to first tab
        setTimeout(() => {
            const firstTab = document.querySelector('.admin-tab-btn[data-admin-tab="products"]');
            if (firstTab) {
                firstTab.click();
            }
        }, 100);
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
            // Close mobile menu
            const nav = document.getElementById('mainNav');
            if (nav) nav.classList.remove('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav && mobileMenuToggle && 
            !mainNav.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
}

// Admin Event Listeners
function setupAdminEventListeners() {
    // Remove existing listeners to avoid duplicates
    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    adminTabBtns.forEach(btn => {
        // Clone to remove all event listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Re-query after cloning
    const newAdminTabBtns = document.querySelectorAll('.admin-tab-btn');
    
    // Admin tabs
    newAdminTabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = btn.getAttribute('data-admin-tab');
            
            if (!targetTab) return;
            
            // Remove active from all tabs and contents
            newAdminTabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to clicked tab
            btn.classList.add('active');
            const targetContent = document.getElementById(`admin-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Load data for specific tab
            console.log('Switching to tab:', targetTab);
            if (targetTab === 'stats') {
                updateStats();
            } else if (targetTab === 'products') {
                renderAdminProducts();
            } else if (targetTab === 'orders') {
                renderAdminOrders();
            } else if (targetTab === 'telegram') {
                loadSettings();
            } else if (targetTab === 'coupons') {
                renderAdminCoupons();
            } else if (targetTab === 'export') {
                setupExportImportListeners();
            }
        });
    });
    
    // Add product form
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        // Remove existing listener
        const newForm = addProductForm.cloneNode(true);
        addProductForm.parentNode.replaceChild(newForm, addProductForm);
        document.getElementById('addProductForm').addEventListener('submit', handleAddProduct);
    }
    
    // Settings buttons - remove duplicates first
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        const newSaveBtn = saveSettingsBtn.cloneNode(true);
        saveSettingsBtn.parentNode.replaceChild(newSaveBtn, saveSettingsBtn);
        document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
    }
    
    const testTelegramBtn = document.getElementById('testTelegramBtn');
    if (testTelegramBtn) {
        const newTestBtn = testTelegramBtn.cloneNode(true);
        testTelegramBtn.parentNode.replaceChild(newTestBtn, testTelegramBtn);
        document.getElementById('testTelegramBtn').addEventListener('click', testTelegram);
    }
    
    // Coupon form
    const addCouponForm = document.getElementById('addCouponForm');
    if (addCouponForm) {
        const newForm = addCouponForm.cloneNode(true);
        addCouponForm.parentNode.replaceChild(newForm, addCouponForm);
        document.getElementById('addCouponForm').addEventListener('submit', handleAddCoupon);
    }
    
    console.log('Admin event listeners setup completed');
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
    if (!adminOrdersList) {
        console.warn('Admin orders list element not found');
        return;
    }
    
    if (!orders || !Array.isArray(orders) || orders.length === 0) {
        adminOrdersList.innerHTML = '<div class="empty-state"><i class="fas fa-list-alt"></i><h3>Chưa có đơn hàng nào</h3></div>';
        return;
    }
    
    console.log('Rendering admin orders:', orders.length);
    
    adminOrdersList.innerHTML = [...orders].reverse().map(order => {
        const items = order.items || [];
        const status = order.status || 'pending';
        return `
        <div class="admin-order-card">
            <div class="admin-order-header">
                <div>
                    <div class="order-id">Đơn hàng #${order.id || 'N/A'}</div>
                    <div class="order-date">${order.date || 'N/A'}</div>
                </div>
                <select class="status-select ${status}" onchange="updateOrderStatus('${order.id || ''}', this.value)">
                    <option value="pending" ${status === 'pending' ? 'selected' : ''}>⏳ Chờ xử lý</option>
                    <option value="completed" ${status === 'completed' ? 'selected' : ''}>✅ Hoàn thành</option>
                </select>
            </div>
            <div class="order-items">
                ${items.map(item => `
                    <div class="order-item">
                        <span>${escapeHtml(item.name || 'Sản phẩm')} x${item.quantity || 1}</span>
                        <span>${formatPrice(item.total || 0)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(order.total || 0)}</span>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                <p><strong>Khách hàng:</strong> ${escapeHtml(order.name || 'N/A')}</p>
                <p><strong>SĐT:</strong> ${escapeHtml(order.phone || 'N/A')}</p>
                <p><strong>Địa chỉ:</strong> ${escapeHtml(order.address || 'N/A')}</p>
                ${order.note ? `<p><strong>Ghi chú:</strong> ${escapeHtml(order.note)}</p>` : ''}
            </div>
        </div>
    `;
    }).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId || String(o.id) === String(orderId));
    if (order) {
        order.status = newStatus;
        safeSetItem('orders', orders);
        renderAdminOrders();
        loadOrders();
        updateStats();
        showToast('Đã cập nhật trạng thái đơn hàng!', 'success');
    }
}

function updateStats() {
    const totalProductsEl = document.getElementById('totalProducts');
    const totalOrdersEl = document.getElementById('totalOrders');
    const pendingOrdersEl = document.getElementById('pendingOrders');
    const totalRevenueEl = document.getElementById('totalRevenue');
    
    if (!totalProductsEl || !totalOrdersEl || !pendingOrdersEl || !totalRevenueEl) {
        console.warn('Stats elements not found');
        return;
    }
    
    const productCount = (productsData && Array.isArray(productsData) && productsData.length) ? productsData.length : 0;
    const orderCount = (orders && Array.isArray(orders) && orders.length) ? orders.length : 0;
    const pending = (orders && Array.isArray(orders) && orders.length) 
        ? orders.filter(o => o && o.status === 'pending').length 
        : 0;
    const revenue = (orders && Array.isArray(orders) && orders.length) 
        ? orders.filter(o => o && o.status === 'completed').reduce((sum, o) => sum + (o.total || 0), 0)
        : 0;
    
    totalProductsEl.textContent = productCount;
    totalOrdersEl.textContent = orderCount;
    pendingOrdersEl.textContent = pending;
    totalRevenueEl.textContent = formatPrice(revenue);
    
    console.log('Stats updated:', { productCount, orderCount, pending, revenue });
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
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        badge.textContent = totalItems;
    }
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    if (!cart || cart.length === 0) {
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
    
    cartItems.innerHTML = cart.map(item => {
        const quantity = item.quantity || 1;
        const price = item.price || 0;
        return `
        <div class="cart-item">
            <img src="${item.image || 'https://via.placeholder.com/100x100/e0e0e0/999999?text=No+Image'}" 
                 alt="${escapeHtml(item.name || 'Sản phẩm')}" 
                 class="cart-item-image"
                 onerror="this.src='https://via.placeholder.com/100x100/e0e0e0/999999?text=No+Image'">
            <div class="cart-item-info">
                <div class="cart-item-name">${escapeHtml(item.name || 'Sản phẩm')}</div>
                <div class="cart-item-price">${formatPrice(price)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <input type="number" class="quantity-input" value="${quantity}" 
                           min="1" onchange="setQuantity(${item.id}, this.value)">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </div>
            <div class="cart-item-total">${formatPrice(price * quantity)}</div>
        </div>
    `;
    }).join('');
    
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
    if (!cart || !Array.isArray(cart)) {
        cart = [];
    }
    
    const subtotal = cart.reduce((sum, item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 0;
        return sum + (price * quantity);
    }, 0);
    const shippingFee = 30000;
    
    let discount = 0;
    if (currentCoupon) {
        if (currentCoupon.type === 'percent') {
            discount = (subtotal * currentCoupon.discount) / 100;
        } else {
            discount = currentCoupon.discount || 0;
        }
    }
    
    const total = subtotal + shippingFee - discount;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingFeeEl = document.getElementById('shippingFee');
    const totalAmountEl = document.getElementById('totalAmount');
    const discountRow = document.getElementById('discountRow');
    const discountAmount = document.getElementById('discountAmount');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingFeeEl) shippingFeeEl.textContent = formatPrice(shippingFee);
    if (totalAmountEl) totalAmountEl.textContent = formatPrice(total);
    
    if (discountRow && discountAmount) {
        if (discount > 0) {
            discountRow.style.display = 'flex';
            discountAmount.textContent = `-${formatPrice(discount)}`;
        } else {
            discountRow.style.display = 'none';
        }
    }
}

// Coupon
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    if (!couponInput) {
        showToast('Không tìm thấy ô nhập mã giảm giá', 'error');
        return;
    }
    
    const code = couponInput.value.trim().toUpperCase();
    if (!code) {
        showToast('Vui lòng nhập mã giảm giá!', 'error');
        return;
    }
    
    const coupon = coupons[code];
    if (!coupon) {
        showToast('Mã giảm giá không hợp lệ!', 'error');
        return;
    }
    
    // Check expiry
    if (coupon.expiryDate && new Date(coupon.expiryDate) < new Date()) {
        showToast('Mã giảm giá đã hết hạn!', 'error');
        return;
    }
    
    currentCoupon = { code, ...coupon };
    updateCartSummary();
    couponInput.value = '';
    showToast(`Đã áp dụng mã giảm giá ${code}!`, 'success');
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
    
    if (!cart || cart.length === 0) {
        showToast('Giỏ hàng trống!', 'error');
        return;
    }
    
    if (!settings.token || !settings.chatId) {
        showToast('Vui lòng cấu hình Telegram trong phần Cài Đặt!', 'error');
        closeCheckoutModal();
        // Switch to admin page if admin, otherwise show message
        if (isAdmin) {
            setTimeout(() => {
                const adminBtn = document.querySelector('[data-page="admin"]');
                if (adminBtn) adminBtn.click();
            }, 500);
        }
        return;
    }
    
    const nameEl = document.getElementById('customerName');
    const phoneEl = document.getElementById('customerPhone');
    const emailEl = document.getElementById('customerEmail');
    const addressEl = document.getElementById('customerAddress');
    const noteEl = document.getElementById('orderNote');
    const paymentEl = document.getElementById('paymentMethod');
    
    if (!nameEl || !phoneEl || !addressEl || !paymentEl) {
        showToast('Không tìm thấy form đặt hàng', 'error');
        return;
    }
    
    const formData = {
        name: nameEl.value.trim(),
        phone: phoneEl.value.trim(),
        email: emailEl ? emailEl.value.trim() : '',
        address: addressEl.value.trim(),
        note: noteEl ? noteEl.value.trim() : '',
        paymentMethod: paymentEl.value,
        items: cart.map(item => {
            const quantity = item.quantity || 1;
            const price = item.price || 0;
            return {
                name: item.name || 'Sản phẩm',
                quantity: quantity,
                price: price,
                total: price * quantity
            };
        }),
        subtotal: cart.reduce((sum, item) => {
            const price = item.price || 0;
            const quantity = item.quantity || 0;
            return sum + (price * quantity);
        }, 0),
        shippingFee: 30000,
        discount: 0,
        total: 0
    };
    
    // Calculate discount
    if (currentCoupon) {
        if (currentCoupon.type === 'percent') {
            formData.discount = (formData.subtotal * currentCoupon.discount) / 100;
        } else {
            formData.discount = currentCoupon.discount || 0;
        }
    }
    
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
        
        // Generate and send PDF
        try {
            await generateAndSendPDF(order);
        } catch (error) {
            console.error('Error sending PDF:', error);
        }
        
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
    if (!ordersList) return;
    
    if (!orders || orders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-list-alt"></i>
                <h3>Chưa có đơn hàng nào</h3>
                <p>Đơn hàng của bạn sẽ hiển thị ở đây</p>
            </div>
        `;
        return;
    }
    
    ordersList.innerHTML = [...orders].reverse().map(order => {
        const items = order.items || [];
        const status = order.status || 'pending';
        const orderId = order.id || 'N/A';
        return `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <div class="order-id">Đơn hàng #${orderId}</div>
                    <div class="order-date">${order.date || 'N/A'}</div>
                </div>
                <div class="order-status ${status}">
                    ${status === 'pending' ? '⏳ Chờ xử lý' : '✅ Hoàn thành'}
                </div>
            </div>
            <div class="order-items">
                ${items.map(item => `
                    <div class="order-item">
                        <span>${escapeHtml(item.name || 'Sản phẩm')} x${item.quantity || 1}</span>
                        <span>${formatPrice(item.total || 0)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(order.total || 0)}</span>
            </div>
            <div class="order-actions" style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="btn btn-secondary btn-small" onclick="printOrder('${orderId}')">
                    <i class="fas fa-print"></i> In Hóa Đơn
                </button>
            </div>
        </div>
    `;
    }).join('');
}

// Settings
function loadSettings() {
    const tokenEl = document.getElementById('telegramToken');
    const chatIdEl = document.getElementById('telegramChatId');
    
    if (!tokenEl || !chatIdEl) {
        console.warn('Settings elements not found');
        return;
    }
    
    if (settings && settings.token) {
        tokenEl.value = settings.token;
    }
    if (settings && settings.chatId) {
        chatIdEl.value = settings.chatId;
    }
    
    console.log('Settings loaded:', { token: settings.token ? '***' : 'empty', chatId: settings.chatId || 'empty' });
}

function saveSettings() {
    const tokenEl = document.getElementById('telegramToken');
    const chatIdEl = document.getElementById('telegramChatId');
    
    if (!tokenEl || !chatIdEl) {
        showToast('Không tìm thấy form cài đặt!', 'error');
        return;
    }
    
    const token = tokenEl.value.trim();
    const chatId = chatIdEl.value.trim();
    
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
                    <button class="btn btn-primary btn-large" onclick="addToCart(${product.id}); setTimeout(() => closeProductDetail(), 500);">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                    <button class="btn btn-danger" onclick="toggleFavorite(${product.id})" style="margin-left: 10px;">
                        <i class="fas fa-heart"></i> 
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
    if (modal) {
        modal.classList.remove('active');
    }
}

// Setup Product Detail Modal
function setupProductDetailModal() {
    const modal = document.getElementById('productDetailModal');
    if (!modal) return;
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductDetail();
        }
    });
    
    // Close button
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductDetail);
    }
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductDetail();
        }
    });
}

// Contact Shop Modal
function openContactModal() {
    const modal = document.getElementById('contactShopModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactShopModal');
    if (modal) {
        modal.classList.remove('active');
    }
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

function importData(e) {
    const fileInput = e ? e.target : (document.getElementById('importFile') || document.getElementById('importFileInput'));
    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
        showToast('Vui lòng chọn file!', 'error');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            
            if (data.products) {
                productsData = data.products;
                saveProducts();
                initFilteredProducts();
                renderProducts();
                if (isAdmin) {
                    renderAdminProducts();
                }
            }
            
            if (data.orders) {
                orders = data.orders;
                safeSetItem('orders', orders);
                loadOrders();
                if (isAdmin) {
                    renderAdminOrders();
                    updateStats();
                }
            }
            
            if (data.settings) {
                settings = data.settings;
                safeSetItem('telegramSettings', settings);
                if (isAdmin) {
                    loadSettings();
                }
            }
            
            showToast('Đã nhập dữ liệu thành công!', 'success');
            fileInput.value = '';
        } catch (error) {
            showToast('File không hợp lệ!', 'error');
            console.error('Import error:', error);
        }
    };
    
    reader.onerror = () => {
        showToast('Lỗi đọc file!', 'error');
    };
    
    reader.readAsText(file);
}

// Setup Export/Import Listeners
function setupExportImportListeners() {
    const exportProductsBtn = document.getElementById('exportProductsBtn');
    const exportOrdersBtn = document.getElementById('exportOrdersBtn');
    const importDataBtn = document.getElementById('importDataBtn');
    const importFileInput = document.getElementById('importFileInput');
    
    if (exportProductsBtn) {
        // Remove existing listener
        const newBtn = exportProductsBtn.cloneNode(true);
        exportProductsBtn.parentNode.replaceChild(newBtn, exportProductsBtn);
        document.getElementById('exportProductsBtn').addEventListener('click', () => exportData('products'));
    }
    
    if (exportOrdersBtn) {
        const newBtn = exportOrdersBtn.cloneNode(true);
        exportOrdersBtn.parentNode.replaceChild(newBtn, exportOrdersBtn);
        document.getElementById('exportOrdersBtn').addEventListener('click', () => exportData('orders'));
    }
    
    if (importDataBtn && importFileInput) {
        const newBtn = importDataBtn.cloneNode(true);
        importDataBtn.parentNode.replaceChild(newBtn, importDataBtn);
        document.getElementById('importDataBtn').addEventListener('click', () => {
            importFileInput.click();
        });
        
        const newInput = importFileInput.cloneNode(true);
        importFileInput.parentNode.replaceChild(newInput, importFileInput);
        document.getElementById('importFileInput').addEventListener('change', importData);
    }
}

// Print Order
function printOrder(orderId) {
    if (!orderId) {
        showToast('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    const order = orders.find(o => o.id === orderId || String(o.id) === String(orderId));
    if (!order) {
        showToast('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    const items = order.items || [];
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showToast('Không thể mở cửa sổ in! Vui lòng cho phép popup.', 'error');
        return;
    }
    
    printWindow.document.write(`
        <html>
            <head>
                <title>Hóa Đơn #${order.id || 'N/A'}</title>
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
                    <p><strong>Mã đơn:</strong> #${order.id || 'N/A'}</p>
                    <p><strong>Ngày đặt:</strong> ${order.date || 'N/A'}</p>
                    <p><strong>Khách hàng:</strong> ${escapeHtml(order.name || 'N/A')}</p>
                    <p><strong>SĐT:</strong> ${escapeHtml(order.phone || 'N/A')}</p>
                    <p><strong>Địa chỉ:</strong> ${escapeHtml(order.address || 'N/A')}</p>
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
                        ${items.map(item => `
                            <tr>
                                <td>${escapeHtml(item.name || 'Sản phẩm')}</td>
                                <td>${item.quantity || 1}</td>
                                <td>${formatPrice(item.price || 0)}</td>
                                <td>${formatPrice(item.total || 0)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div class="total">
                    <p>Tạm tính: ${formatPrice(order.subtotal || 0)}</p>
                    <p>Phí vận chuyển: ${formatPrice(order.shippingFee || 0)}</p>
                    ${(order.discount || 0) > 0 ? `<p>Giảm giá: -${formatPrice(order.discount)}</p>` : ''}
                    <p>Tổng cộng: ${formatPrice(order.total || 0)}</p>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Coupon Management
function handleAddCoupon(e) {
    e.preventDefault();
    const code = document.getElementById('couponCode').value.trim().toUpperCase();
    const type = document.getElementById('couponType').value;
    const discount = parseFloat(document.getElementById('couponDiscount').value);
    const expiryDate = document.getElementById('couponExpiryDate')?.value || '';
    const description = document.getElementById('couponDescription')?.value.trim() || '';
    
    if (!code || !type || !discount || discount <= 0) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    
    if (coupons[code] && !document.getElementById('couponCode').hasAttribute('data-editing')) {
        showToast('Mã giảm giá đã tồn tại!', 'error');
        return;
    }
    
    const couponData = { 
        discount: discount, 
        type: type,
        description: description
    };
    
    if (expiryDate) {
        couponData.expiryDate = expiryDate;
    }
    
    coupons[code] = couponData;
    safeSetItem('coupons', coupons);
    renderAdminCoupons();
    document.getElementById('addCouponForm').reset();
    const codeInput = document.getElementById('couponCode');
    if (codeInput) {
        codeInput.removeAttribute('data-editing');
        codeInput.removeAttribute('readonly');
    }
    showToast('Đã tạo mã giảm giá thành công!', 'success');
}

function editCoupon(code) {
    const coupon = coupons[code];
    if (!coupon) return;
    
    const codeInput = document.getElementById('couponCode');
    const typeInput = document.getElementById('couponType');
    const discountInput = document.getElementById('couponDiscount');
    const expiryInput = document.getElementById('couponExpiryDate');
    const descInput = document.getElementById('couponDescription');
    
    if (codeInput) {
        codeInput.value = code;
        codeInput.setAttribute('data-editing', 'true');
        codeInput.setAttribute('readonly', 'readonly');
    }
    if (typeInput) typeInput.value = coupon.type || 'percent';
    if (discountInput) discountInput.value = coupon.discount || 0;
    if (expiryInput) expiryInput.value = coupon.expiryDate || '';
    if (descInput) descInput.value = coupon.description || '';
    
    // Scroll to form
    document.getElementById('addCouponForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Đã tải thông tin mã giảm giá. Chỉnh sửa và nhấn "Lưu Mã Giảm Giá" để cập nhật.', 'info');
}

function renderAdminCoupons() {
    const adminCouponsList = document.getElementById('adminCouponsList');
    if (!adminCouponsList) return;
    
    const couponCodes = Object.keys(coupons);
    if (couponCodes.length === 0) {
        adminCouponsList.innerHTML = '<div class="empty-state"><i class="fas fa-ticket-alt"></i><h3>Chưa có mã giảm giá nào</h3></div>';
        return;
    }
    
    adminCouponsList.innerHTML = couponCodes.map(code => {
        const coupon = coupons[code];
        return `
        <div class="admin-coupon-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4 style="margin: 0; color: #667eea;">${code}</h4>
                    <p style="margin: 5px 0; color: #666;">
                        ${coupon.type === 'percent' ? `Giảm ${coupon.discount}%` : `Giảm ${formatPrice(coupon.discount)}`}
                    </p>
                </div>
                <button class="btn btn-danger btn-small" onclick="deleteCoupon('${code}')">
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </div>
        </div>
    `;
    }).join('');
}

function deleteCoupon(code) {
    if (!confirm(`Bạn có chắc muốn xóa mã giảm giá "${code}"?`)) {
        return;
    }
    
    delete coupons[code];
    safeSetItem('coupons', coupons);
    renderAdminCoupons();
    showToast('Đã xóa mã giảm giá!', 'success');
}

async function deleteOrder(orderId) {
    if (!confirm('Bạn có chắc muốn xóa đơn hàng này? Hành động này không thể hoàn tác!')) {
        return;
    }
    
    const order = orders.find(o => o.id === orderId || String(o.id) === String(orderId));
    if (!order) {
        showToast('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    // Only allow deleting completed orders
    if (order.status !== 'completed') {
        showToast('Chỉ có thể xóa đơn hàng đã hoàn thành!', 'error');
        return;
    }
    
    // Generate and send PDF before deleting
    showLoading(true);
    try {
        await generateAndSendPDF(order);
        showToast('Đã gửi PDF vào Telegram!', 'success');
    } catch (error) {
        console.error('Error sending PDF:', error);
        showToast('Lỗi khi gửi PDF, nhưng vẫn tiếp tục xóa đơn hàng', 'warning');
    }
    showLoading(false);
    
    // Delete order
    orders = orders.filter(o => o.id !== orderId && String(o.id) !== String(orderId));
    safeSetItem('orders', orders);
    renderAdminOrders();
    loadOrders();
    updateStats();
    showToast('Đã xóa đơn hàng!', 'success');
}

// Generate PDF and send to Telegram
async function generateAndSendPDF(order) {
    try {
        if (typeof window.jspdf === 'undefined') {
            console.warn('jsPDF not loaded');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Header
        doc.setFontSize(20);
        doc.text('TXshop', 105, 20, { align: 'center' });
        doc.setFontSize(16);
        doc.text('HÓA ĐƠN BÁN HÀNG', 105, 30, { align: 'center' });
        
        // Order Info
        doc.setFontSize(12);
        let y = 45;
        doc.text(`Mã đơn: #${order.id || 'N/A'}`, 20, y);
        y += 7;
        doc.text(`Ngày đặt: ${order.date || 'N/A'}`, 20, y);
        y += 7;
        doc.text(`Khách hàng: ${order.name || 'N/A'}`, 20, y);
        y += 7;
        doc.text(`SĐT: ${order.phone || 'N/A'}`, 20, y);
        y += 7;
        doc.text(`Địa chỉ: ${order.address || 'N/A'}`, 20, y);
        y += 10;
        
        // Items Table
        doc.setFontSize(10);
        const items = order.items || [];
        items.forEach((item, index) => {
            if (y > 250) {
                doc.addPage();
                y = 20;
            }
            doc.text(`${item.name || 'Sản phẩm'}`, 20, y);
            doc.text(`x${item.quantity || 1}`, 100, y);
            doc.text(formatPrice(item.price || 0), 120, y);
            doc.text(formatPrice(item.total || 0), 170, y);
            y += 7;
        });
        
        y += 5;
        doc.setFontSize(12);
        doc.text(`Tạm tính: ${formatPrice(order.subtotal || 0)}`, 120, y);
        y += 7;
        doc.text(`Phí vận chuyển: ${formatPrice(order.shippingFee || 0)}`, 120, y);
        if (order.discount > 0) {
            y += 7;
            doc.text(`Giảm giá: -${formatPrice(order.discount)}`, 120, y);
        }
        y += 7;
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(`Tổng cộng: ${formatPrice(order.total || 0)}`, 120, y);
        
        // Convert to blob
        const pdfBlob = doc.output('blob');
        
        // Send to Telegram
        const formData = new FormData();
        formData.append('chat_id', settings.chatId);
        formData.append('document', pdfBlob, `invoice_${order.id}.pdf`);
        formData.append('caption', `📄 Hóa đơn đơn hàng #${order.id}`);
        
        const response = await fetch(`https://api.telegram.org/bot${settings.token}/sendDocument`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to send PDF');
        }
        
        console.log('PDF sent to Telegram successfully');
    } catch (error) {
        console.error('Error generating/sending PDF:', error);
    }
}

// Make functions global for onclick handlers
// This must be called after all functions are defined
function setupGlobalFunctions() {
    try {
        // Make all necessary functions global
        if (typeof addToCart !== 'undefined') window.addToCart = addToCart;
        if (typeof removeFromCart !== 'undefined') window.removeFromCart = removeFromCart;
        if (typeof updateQuantity !== 'undefined') window.updateQuantity = updateQuantity;
        if (typeof setQuantity !== 'undefined') window.setQuantity = setQuantity;
        if (typeof editProduct !== 'undefined') window.editProduct = editProduct;
        if (typeof deleteProduct !== 'undefined') window.deleteProduct = deleteProduct;
        if (typeof updateOrderStatus !== 'undefined') window.updateOrderStatus = updateOrderStatus;
        if (typeof toggleFavorite !== 'undefined') window.toggleFavorite = toggleFavorite;
        if (typeof showProductDetail !== 'undefined') window.showProductDetail = showProductDetail;
        if (typeof closeProductDetail !== 'undefined') window.closeProductDetail = closeProductDetail;
        if (typeof exportData !== 'undefined') window.exportData = exportData;
        if (typeof importData !== 'undefined') window.importData = importData;
        if (typeof printOrder !== 'undefined') window.printOrder = printOrder;
        if (typeof deleteOrder !== 'undefined') window.deleteOrder = deleteOrder;
        if (typeof deleteCoupon !== 'undefined') window.deleteCoupon = deleteCoupon;
        if (typeof openContactModal !== 'undefined') window.openContactModal = openContactModal;
        if (typeof closeContactModal !== 'undefined') window.closeContactModal = closeContactModal;
        if (typeof editCoupon !== 'undefined') window.editCoupon = editCoupon;
        if (typeof resetRevenue !== 'undefined') window.resetRevenue = resetRevenue;
        if (typeof clearAllOrders !== 'undefined') window.clearAllOrders = clearAllOrders;
        if (typeof exportAllData !== 'undefined') window.exportAllData = exportAllData;
        if (typeof backupData !== 'undefined') window.backupData = backupData;
        
        console.log('Global functions setup completed');
    } catch (error) {
        console.error('Error setting up global functions:', error);
    }
}

// Setup global functions immediately when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupGlobalFunctions);
} else {
    // DOM already loaded
    setTimeout(setupGlobalFunctions, 100);
}

// Also setup after all code loads
setupGlobalFunctions();

