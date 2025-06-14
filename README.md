## Hi there 👋

<!--
**Bashmina/bashmina** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...[Uploading scripts.js…]()// Firebase Config (استبدل بالقيم الخاصة بك)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "bashmina.firebaseapp.com",
  projectId: "bashmina",
  storageBucket: "bashmina.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const firebaseConfig = {
    apiKey: "AIzaSyABCD...",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>باشمينا - متجر الشيلان ومستلزمات الرجال</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* CSS العام */
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #e74c3c;
            --light-color: #ecf0f1;
            --dark-color: #2c3e50;
            --success-color: #27ae60;
            --warning-color: #f39c12;
            --danger-color: #e74c3c;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Tahoma', Arial, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        
        /* رأس الصفحة */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 15px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo h1 {
            font-size: 24px;
            margin-right: 10px;
        }
        
        .logo-icon {
            font-size: 28px;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 20px;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        
        nav ul li a:hover {
            color: var(--secondary-color);
        }
        
        /* قسم تسجيل الدخول */
        .auth-section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            padding: 40px 0;
        }
        
        .auth-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 500px;
            padding: 30px;
        }
        
        .auth-tabs {
            display: flex;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
        }
        
        .auth-tab {
            padding: 10px 20px;
            cursor: pointer;
            font-weight: bold;
            color: #777;
        }
        
        .auth-tab.active {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
        }
        
        .auth-form {
            display: none;
        }
        
        .auth-form.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: var(--secondary-color);
        }
        
        .btn-block {
            display: block;
            width: 100%;
        }
        
        /* تذييل الصفحة */
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 30px 0;
            text-align: center;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 20px;
        }
        
        .footer-section h3 {
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section ul li {
            margin-bottom: 10px;
        }
        
        .footer-section ul li a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-section ul li a:hover {
            color: var(--secondary-color);
        }
        
        .copyright {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #444;
            font-size: 14px;
            color: #aaa;
        }
        
        /* الصفحة الرئيسية */
        .hero {
            background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://via.placeholder.com/1200x400');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 100px 0;
            text-align: center;
        }
        
        .hero h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 18px;
            margin-bottom: 30px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .categories {
            padding: 50px 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 28px;
            color: var(--primary-color);
        }
        
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .category-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .category-card:hover {
            transform: translateY(-5px);
        }
        
        .category-img {
            height: 200px;
            background-color: #eee;
            background-size: cover;
            background-position: center;
        }
        
        .category-info {
            padding: 15px;
            text-align: center;
        }
        
        .category-info h3 {
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        /* صفحة المنتجات */
        .products {
            padding: 50px 0;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
        }
        
        .product-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
        }
        
        .product-img {
            height: 250px;
            background-color: #eee;
            background-size: cover;
            background-position: center;
            position: relative;
        }
        
        .product-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: var(--secondary-color);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .product-info {
            padding: 15px;
        }
        
        .product-info h3 {
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        .product-price {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .current-price {
            font-size: 20px;
            font-weight: bold;
            color: var(--secondary-color);
            margin-right: 10px;
        }
        
        .old-price {
            font-size: 16px;
            color: #777;
            text-decoration: line-through;
        }
        
        .discount {
            background-color: var(--success-color);
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 12px;
            margin-left: 10px;
        }
        
        .product-actions {
            display: flex;
            justify-content: space-between;
        }
        
        .btn-sm {
            padding: 8px 15px;
            font-size: 14px;
        }
        
        /* سلة التسوق */
        .cart-icon {
            position: relative;
            font-size: 20px;
        }
        
        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--secondary-color);
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
        }
        
        /* لوحة التحكم */
        .dashboard {
            display: flex;
            min-height: 100vh;
        }
        
        .sidebar {
            width: 250px;
            background-color: var(--dark-color);
            color: white;
            padding: 20px 0;
        }
        
        .sidebar-header {
            padding: 0 20px 20px;
            border-bottom: 1px solid #444;
        }
        
        .sidebar-menu {
            padding: 20px 0;
        }
        
        .sidebar-menu ul {
            list-style: none;
        }
        
        .sidebar-menu ul li a {
            display: block;
            padding: 12px 20px;
            color: #ddd;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .sidebar-menu ul li a:hover, .sidebar-menu ul li a.active {
            background-color: rgba(255,255,255,0.1);
            color: white;
        }
        
        .sidebar-menu ul li a i {
            margin-left: 10px;
        }
        
        .main-content {
            flex: 1;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .table th, .table td {
            padding: 12px 15px;
            text-align: right;
            border-bottom: 1px solid #ddd;
        }
        
        .table th {
            background-color: #f5f5f5;
            font-weight: bold;
        }
        
        .status {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .status-pending {
            background-color: var(--warning-color);
            color: white;
        }
        
        .status-completed {
            background-color: var(--success-color);
            color: white;
        }
        
        .status-cancelled {
            background-color: var(--danger-color);
            color: white;
        }
        
        /* نموذج إضافة منتج */
        .form-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }
        
        .form-col {
            flex: 0 0 50%;
            padding: 0 15px;
            margin-bottom: 20px;
        }
        
        .form-col-full {
            flex: 0 0 100%;
        }
        
        textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            min-height: 100px;
        }
        
        /* صفحة الطلب */
        .order-summary {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .order-items {
            margin-bottom: 20px;
        }
        
        .order-item {
            display: flex;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }
        
        .order-item-img {
            width: 80px;
            height: 80px;
            background-color: #eee;
            background-size: cover;
            background-position: center;
            border-radius: 4px;
            margin-left: 15px;
        }
        
        .order-item-details {
            flex: 1;
        }
        
        .order-item-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .order-item-price {
            color: var(--secondary-color);
            font-weight: bold;
        }
        
        .order-totals {
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        
        .order-total-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        
        .order-total-label {
            font-weight: bold;
        }
        
        .order-total-value {
            font-weight: bold;
            color: var(--secondary-color);
        }
        
        /* صفحة الدفع */
        .payment-methods {
            margin-bottom: 30px;
        }
        
        .payment-method {
            display: flex;
            align-items: center;
            padding: 15px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .payment-method:hover {
            box-shadow: 0 0 15px rgba(0,0,0,0.15);
        }
        
        .payment-method.active {
            border: 2px solid var(--secondary-color);
        }
        
        .payment-method-icon {
            font-size: 24px;
            margin-left: 15px;
            color: var(--primary-color);
        }
        
        .payment-method-details {
            flex: 1;
        }
        
        .payment-method-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        /* رسائل التأكيد */
        .confirmation {
            text-align: center;
            padding: 50px 0;
        }
        
        .confirmation-icon {
            font-size: 60px;
            color: var(--success-color);
            margin-bottom: 20px;
        }
        
        .confirmation-title {
            font-size: 28px;
            margin-bottom: 15px;
            color: var(--primary-color);
        }
        
        .confirmation-message {
            font-size: 18px;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* رسائل الخطأ والنجاح */
        .alert {
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        
        .alert-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .alert-danger {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        /* صفحة البحث */
        .search-results {
            padding: 30px 0;
        }
        
        .search-header {
            margin-bottom: 30px;
        }
        
        .search-query {
            font-weight: bold;
            color: var(--secondary-color);
        }
        
        .search-count {
            color: #777;
        }
        
        /* صفحة 404 */
        .not-found {
            text-align: center;
            padding: 100px 0;
        }
        
        .not-found h1 {
            font-size: 100px;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }
        
        .not-found h2 {
            font-size: 30px;
            margin-bottom: 20px;
        }
        
        /* التكيف مع الشاشات الصغيرة */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                text-align: center;
            }
            
            nav ul {
                margin-top: 15px;
                justify-content: center;
            }
            
            .form-col {
                flex: 0 0 100%;
            }
            
            .dashboard {
                flex-direction: column;
            }
            
            .sidebar {
                width: 100%;
            }
            
            .order-item {
                flex-direction: column;
            }
            
            .order-item-img {
                margin-left: 0;
                margin-bottom: 15px;
            }
        }
    </style>
</head>
<body>
    <!-- رأس الصفحة -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>باشمينا</h1>
                    <span class="logo-icon">𐩢𐩣𐩫𐩺𐩦</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#" id="home-link">الرئيسية</a></li>
                        <li><a href="#" id="products-link">المنتجات</a></li>
                        <li><a href="#" id="categories-link">الأقسام</a></li>
                        <li><a href="#" id="cart-link"><i class="fas fa-shopping-cart cart-icon"><span class="cart-count">0</span></i></a></li>
                        <li><a href="#" id="login-link">تسجيل الدخول</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- قسم تسجيل الدخول -->
    <section class="auth-section" id="auth-section">
        <div class="container">
            <div class="auth-container">
                <div class="auth-tabs">
                    <div class="auth-tab active" data-tab="admin-login">تسجيل دخول المسؤول</div>
                    <div class="auth-tab" data-tab="new-customer">تسجيل جديد</div>
                    <div class="auth-tab" data-tab="existing-customer">لدي حساب</div>
                </div>
                
                <!-- تسجيل دخول المسؤول -->
                <div class="auth-form active" id="admin-login">
                    <h2>تسجيل دخول المسؤول</h2>
                    <form id="admin-login-form">
                        <div class="form-group">
                            <label for="admin-email">البريد الإلكتروني</label>
                            <input type="email" id="admin-email" required value="aa73618aa4351@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="admin-password">كلمة المرور</label>
                            <input type="password" id="admin-password" required value="aa73618aa4351aa">
                        </div>
                        <button type="submit" class="btn btn-block">تسجيل الدخول</button>
                    </form>
                </div>
                
                <!-- تسجيل جديد للعميل -->
                <div class="auth-form" id="new-customer">
                    <h2>تسجيل عميل جديد</h2>
                    <form id="new-customer-form">
                        <div class="form-group">
                            <label for="customer-name">الاسم الرباعي</label>
                            <input type="text" id="customer-name" required>
                        </div>
                        <div class="form-group">
                            <label for="customer-phone">رقم الهاتف</label>
                            <input type="tel" id="customer-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="verification-code">رمز التأكيد (سيتم إرساله عبر واتساب)</label>
                            <input type="text" id="verification-code" placeholder="12345" required>
                        </div>
                        <div class="form-group">
                            <label for="customer-country">الدولة</label>
                            <select id="customer-country" required>
                                <option value="">اختر الدولة</option>
                                <option value="Yemen">اليمن</option>
                                <option value="Saudi Arabia">السعودية</option>
                                <option value="UAE">الإمارات</option>
                                <option value="Oman">عمان</option>
                                <option value="Kuwait">الكويت</option>
                                <option value="Qatar">قطر</option>
                                <option value="Bahrain">البحرين</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="customer-region">المنطقة</label>
                            <select id="customer-region" required disabled>
                                <option value="">اختر الدولة أولاً</option>
                            </div>
                        <button type="submit" class="btn btn-block">تسجيل</button>
                    </form>
                </div>
                
                <!-- تسجيل دخول العميل الحالي -->
                <div class="auth-form" id="existing-customer">
                    <h2>تسجيل دخول العميل</h2>
                    <form id="existing-customer-form">
                        <div class="form-group">
                            <label for="existing-phone">رقم الهاتف</label>
                            <input type="tel" id="existing-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="existing-name">الاسم الرباعي</label>
                            <input type="text" id="existing-name" required>
                        </div>
                        <button type="submit" class="btn btn-block">تسجيل الدخول</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- الصفحة الرئيسية (ستظهر بعد تسجيل الدخول) -->
    <main id="main-content" style="display: none;">
        <!-- قسم البطل -->
        <section class="hero">
            <div class="container">
                <h2>مرحباً بكم في متجر باشمينا</h2>
                <p>أفضل تشكيلة من الشيلان ومستلزمات الرجال بجودة عالية وأسعار منافسة</p>
                <a href="#products" class="btn">تصفح المنتجات</a>
            </div>
        </section>

        <!-- الأقسام الرئيسية -->
        <section class="categories" id="categories">
            <div class="container">
                <h2 class="section-title">أقسام المتجر</h2>
                <div class="category-grid">
                    <!-- سيتم ملئ هذه الأقسام ديناميكياً باستخدام JavaScript -->
                </div>
            </div>
        </section>

        <!-- المنتجات المميزة -->
        <section class="products" id="products">
            <div class="container">
                <h2 class="section-title">منتجاتنا</h2>
                <div class="product-grid">
                    <!-- سيتم ملئ هذه المنتجات ديناميكياً باستخدام JavaScript -->
                </div>
            </div>
        </section>
    </main>

    <!-- لوحة تحكم المسؤول (ستظهر بعد تسجيل دخول المسؤول) -->
    <div id="admin-dashboard" style="display: none;">
        <div class="dashboard">
            <!-- الشريط الجانبي -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2>لوحة التحكم</h2>
                    <p>مرحباً، المسؤول</p>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li><a href="#" class="active" data-section="dashboard"><i class="fas fa-tachometer-alt"></i>اللوحة الرئيسية</a></li>
                        <li><a href="#" data-section="orders"><i class="fas fa-shopping-bag"></i>الطلبات</a></li>
                        <li><a href="#" data-section="products"><i class="fas fa-box-open"></i>المنتجات</a></li>
                        <li><a href="#" data-section="customers"><i class="fas fa-users"></i>العملاء</a></li>
                        <li><a href="#" data-section="add-product"><i class="fas fa-plus-circle"></i>إضافة منتج</a></li>
                        <li><a href="#" id="admin-logout"><i class="fas fa-sign-out-alt"></i>تسجيل الخروج</a></li>
                    </ul>
                </div>
            </div>

            <!-- المحتوى الرئيسي -->
            <div class="main-content">
                <!-- لوحة التحكم الرئيسية -->
                <div class="admin-section active" id="dashboard-section">
                    <h2>اللوحة الرئيسية</h2>
                    <div class="stats-row">
                        <div class="card">
                            <h3>إجمالي الطلبات</h3>
                            <p class="stat-number">0</p>
                        </div>
                        <div class="card">
                            <h3>طلبات جديدة</h3>
                            <p class="stat-number">0</p>
                        </div>
                        <div class="card">
                            <h3>عملاء جدد</h3>
                            <p class="stat-number">0</p>
                        </div>
                        <div class="card">
                            <h3>إجمالي الإيرادات</h3>
                            <p class="stat-number">0 ريال</p>
                        </div>
                    </div>

                    <div class="card">
                        <h3>آخر الطلبات</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>رقم الطلب</th>
                                    <th>العميل</th>
                                    <th>التاريخ</th>
                                    <th>المبلغ</th>
                                    <th>الحالة</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody id="recent-orders">
                                <!-- سيتم ملئها ديناميكياً -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- قسم الطلبات -->
                <div class="admin-section" id="orders-section">
                    <h2>إدارة الطلبات</h2>
                    <div class="order-tabs">
                        <button class="btn active" data-status="pending">الطلبات المنتظرة</button>
                        <button class="btn" data-status="completed">الطلبات المكتملة</button>
                        <button class="btn" data-status="cancelled">الطلبات الملغاة</button>
                    </div>
                    <div class="card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>رقم الطلب</th>
                                    <th>العميل</th>
                                    <th>التاريخ</th>
                                    <th>المبلغ</th>
                                    <th>الحالة</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody id="orders-list">
                                <!-- سيتم ملئها ديناميكياً -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- قسم المنتجات -->
                <div class="admin-section" id="products-section">
                    <h2>إدارة المنتجات</h2>
                    <div class="card">
                        <div class="search-box">
                            <input type="text" id="product-search" placeholder="ابحث عن منتج...">
                            <button class="btn">بحث</button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>الصورة</th>
                                    <th>اسم المنتج</th>
                                    <th>القسم</th>
                                    <th>السعر</th>
                                    <th>الكمية</th>
                                    <th>الحالة</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody id="products-list">
                                <!-- سيتم ملئها ديناميكياً -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- قسم العملاء -->
                <div class="admin-section" id="customers-section">
                    <h2>إدارة العملاء</h2>
                    <div class="card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>الاسم</th>
                                    <th>رقم الهاتف</th>
                                    <th>البلد</th>
                                    <th>المنطقة</th>
                                    <th>عدد الطلبات</th>
                                    <th>آخر زيارة</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody id="customers-list">
                                <!-- سيتم ملئها ديناميكياً -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- إضافة منتج جديد -->
                <div class="admin-section" id="add-product-section">
                    <h2>إضافة منتج جديد</h2>
                    <div class="card">
                        <form id="add-product-form">
                            <div class="form-row">
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-name">اسم المنتج</label>
                                        <input type="text" id="product-name" required>
                                    </div>
                                </div>
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-category">القسم</label>
                                        <select id="product-category" required>
                                            <option value="">اختر القسم</option>
                                            <!-- سيتم ملئها ديناميكياً -->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-price">السعر (ريال يمني)</label>
                                        <input type="number" id="product-price" required>
                                    </div>
                                </div>
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-old-price">السعر قبل الخصم (اختياري)</label>
                                        <input type="number" id="product-old-price">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-quantity">الكمية المتوفرة</label>
                                        <input type="number" id="product-quantity" required>
                                    </div>
                                </div>
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-type">نوع المنتج</label>
                                        <select id="product-type" required>
                                            <option value="normal">عادي</option>
                                            <option value="vip">VIP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-colors">الألوان المتاحة (افصل بفاصلة)</label>
                                        <input type="text" id="product-colors" placeholder="أبيض, أسود, أزرق">
                                    </div>
                                </div>
                                <div class="form-col">
                                    <div class="form-group">
                                        <label for="product-image">صورة المنتج</label>
                                        <input type="file" id="product-image" accept="image/*" required>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-col-full">
                                    <div class="form-group">
                                        <label for="product-description">وصف المنتج</label>
                                        <textarea id="product-description" required></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn">حفظ المنتج</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- سلة التسوق -->
    <div class="cart-modal" id="cart-modal" style="display: none;">
        <div class="cart-container">
            <div class="cart-header">
                <h2>سلة التسوق</h2>
                <button class="close-cart">&times;</button>
            </div>
            <div class="cart-body">
                <div class="cart-items">
                    <!-- سيتم ملئها ديناميكياً -->
                </div>
                <div class="cart-totals">
                    <div class="total-row">
                        <span>المجموع:</span>
                        <span class="total-amount">0 ريال</span>
                    </div>
                </div>
            </div>
            <div class="cart-footer">
                <button class="btn btn-checkout">إتمام الطلب</button>
            </div>
        </div>
    </div>

    <!-- صفحة إتمام الطلب -->
    <div class="checkout-page" id="checkout-page" style="display: none;">
        <div class="container">
            <h2>إتمام الطلب</h2>
            <div class="checkout-steps">
                <div class="step active" data-step="1">معلومات العميل</div>
                <div class="step" data-step="2">طريقة الدفع</div>
                <div class="step" data-step="3">تأكيد الطلب</div>
            </div>
            
            <!-- خطوة 1: معلومات العميل -->
            <div class="checkout-step active" id="step-1">
                <div class="card">
                    <h3>معلومات العميل</h3>
                    <form id="customer-info-form">
                        <div class="form-group">
                            <label for="checkout-name">الاسم الرباعي</label>
                            <input type="text" id="checkout-name" required>
                        </div>
                        <div class="form-group">
                            <label for="checkout-phone">رقم الهاتف</label>
                            <input type="tel" id="checkout-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="checkout-country">البلد</label>
                            <select id="checkout-country" required>
                                <option value="">اختر البلد</option>
                                <option value="Yemen">اليمن</option>
                                <option value="Saudi Arabia">السعودية</option>
                                <option value="UAE">الإمارات</option>
                                <option value="Oman">عمان</option>
                                <option value="Kuwait">الكويت</option>
                                <option value="Qatar">قطر</option>
                                <option value="Bahrain">البحرين</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="checkout-region">المنطقة</label>
                            <select id="checkout-region" required disabled>
                                <option value="">اختر البلد أولاً</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="checkout-address">العنوان التفصيلي</label>
                            <textarea id="checkout-address" required></textarea>
                        </div>
                        <button type="submit" class="btn">التالي</button>
                    </form>
                </div>
            </div>
            
            <!-- خطوة 2: طريقة الدفع -->
            <div class="checkout-step" id="step-2">
                <div class="card">
                    <h3>طريقة الدفع</h3>
                    <div class="payment-methods">
                        <div class="payment-method active" data-method="bank-transfer">
                            <div class="payment-method-icon">
                                <i class="fas fa-university"></i>
                            </div>
                            <div class="payment-method-details">
                                <h4 class="payment-method-title">تحويل بنكي</h4>
                                <p>تحويل إلى أحد الحسابات البنكية</p>
                            </div>
                        </div>
                        <div class="payment-method" data-method="name-transfer">
                            <div class="payment-method-icon">
                                <i class="fas fa-user-tag"></i>
                            </div>
                            <div class="payment-method-details">
                                <h4 class="payment-method-title">تحويل بالاسم الرباعي</h4>
                                <p>تحويل إلى الاسم الرباعي: عرفه حسين محمد حسين</p>
                            </div>
                        </div>
                        <div class="payment-method" data-method="whatsapp">
                            <div class="payment-method-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div class="payment-method-details">
                                <h4 class="payment-method-title">التواصل عبر واتساب</h4>
                                <p>التواصل عبر الرقم: +967717150140</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- تفاصيل التحويل البنكي -->
                    <div class="bank-details" id="bank-details" style="display: block;">
                        <h4>تفاصيل الحسابات البنكية</h4>
                        <div class="bank-account">
                            <h5>بنك الكريمي</h5>
                            <p>رقم حساب الريال اليمني: 3134087101</p>
                            <p>رقم حساب الريال السعودي: 3134201745</p>
                            <p>رقم حساب الدولار الأمريكي: 3134170815</p>
                        </div>
                    </div>
                    
                    <!-- تفاصيل التحويل بالاسم -->
                    <div class="name-details" id="name-details" style="display: none;">
                        <h4>الاسم الرباعي للتحويل</h4>
                        <p>عرفه حسين محمد حسين</p>
                    </div>
                    
                    <!-- تفاصيل التواصل عبر واتساب -->
                    <div class="whatsapp-details" id="whatsapp-details" style="display: none;">
                        <h4>التواصل عبر واتساب</h4>
                        <p>سيتم التواصل معك عبر واتساب على الرقم: +967717150140</p>
                    </div>
                    
                    <div class="form-group">
                        <label for="payment-proof">إثبات الدفع (صورة التحويل)</label>
                        <input type="file" id="payment-proof" accept="image/*">
                    </div>
                    
                    <div class="checkout-actions">
                        <button class="btn btn-prev">السابق</button>
                        <button class="btn btn-next">التالي</button>
                    </div>
                </div>
            </div>
            
            <!-- خطوة 3: تأكيد الطلب -->
            <div class="checkout-step" id="step-3">
                <div class="card">
                    <h3>تأكيد الطلب</h3>
                    <div class="order-summary">
                        <h4>ملخص الطلب</h4>
                        <div class="order-items" id="checkout-items">
                            <!-- سيتم ملئها ديناميكياً -->
                        </div>
                        <div class="order-totals">
                            <div class="order-total-row">
                                <span class="order-total-label">المجموع:</span>
                                <span class="order-total-value">0 ريال</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="customer-info-summary">
                        <h4>معلومات العميل</h4>
                        <p><strong>الاسم:</strong> <span id="summary-name"></span></p>
                        <p><strong>رقم الهاتف:</strong> <span id="summary-phone"></span></p>
                        <p><strong>العنوان:</strong> <span id="summary-address"></span></p>
                        <p><strong>طريقة الدفع:</strong> <span id="summary-payment"></span></p>
                    </div>
                    
                    <div class="form-group">
                        <label for="verification-code-checkout">رمز التأكيد (سيتم إرساله عبر واتساب)</label>
                        <input type="text" id="verification-code-checkout" placeholder="أدخل الرمز المكون من 5 أرقام" required>
                    </div>
                    
                    <div class="checkout-actions">
                        <button class="btn btn-prev">السابق</button>
                        <button class="btn btn-confirm">تأكيد الطلب</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- تأكيد الطلب الناجح -->
    <div class="confirmation" id="order-confirmation" style="display: none;">
        <div class="container">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2 class="confirmation-title">تم تأكيد طلبك بنجاح!</h2>
            <p class="confirmation-message">شكراً لثقتك بنا. تم استلام طلبك وسيتم التواصل معك قريباً لتأكيد التفاصيل. رقم طلبك هو: <strong id="order-number"></strong></p>
            <a href="#" class="btn" id="back-to-home">العودة إلى الصفحة الرئيسية</a>
        </div>
    </div>

    <!-- تذييل الصفحة -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>عن المتجر</h3>
                    <p>باشمينا متجر متخصص في بيع الشيلان ومستلزمات الرجال بجودة عالية وأسعار مناسبة.</p>
                </div>
                <div class="footer-section">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#">المنتجات</a></li>
                        <li><a href="#">الأقسام</a></li>
                        <li><a href="#">حسابي</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>اتصل بنا</h3>
                    <ul>
                        <li><i class="fas fa-phone"></i> +967717150140</li>
                        <li><i class="fab fa-whatsapp"></i> واتساب: +967717150140</li>
                        <li><i class="fas fa-envelope"></i> aa73618aa4351@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 باشمينا. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // بيانات المتجر
        const storeData = {
            name: "باشمينا",
            logo: "𐩢𐩣𐩫𐩺𐩦",
            whatsapp: "+967717150140",
            email: "aa73618aa4351@gmail.com",
            adminEmail: "aa73618aa4351@gmail.com",
            adminPassword: "aa73618aa4351aa",
            bankAccounts: {
                yemen: "3134087101",
                saudi: "3134201745",
                dollar: "3134170815"
            },
            ownerName: "عرفه حسين محمد حسين"
        };

        // بيانات الدول والمناطق
        const countries = {
            "Yemen": ["صنعاء", "عدن", "تعز", "حضرموت", "الحديدة", "إب", "ذمار", "المكلا", "سيئون", "شبوة", "حجة", "المحويت", "البيضاء", "الضالع", "مأرب", "الجوف", "عمران", "ريمة", "لحج", "أبين", "المهرة", "صعدة"],
            "Saudi Arabia": ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "الطائف", "تبوك", "بريدة", "خميس مشيط", "حائل", "الجبيل", "ضباء", "الأحساء", "ينبع", "نجران", "عرعر", "سكاكا"],
            "UAE": ["دبي", "أبو ظبي", "الشارقة", "عجمان", "أم القيوين", "رأس الخيمة", "الفجيرة"],
            "Oman": ["مسقط", "صلالة", "صحار", "نزوى", "صور", "البريمي", "السيب", "عبري", "الرستاق"],
            "Kuwait": ["الكويت", "حولي", "الفروانية", "الأحمدي", "الجهراء", "مبارك الكبير"],
            "Qatar": ["الدوحة", "الريان", "أم صلال", "الخور", "الوكرة", "الشمال", "الضعاين"],
            "Bahrain": ["المنامة", "المحرق", "الرفاع", "مدينة حمد", "جد حفص", "الدراز", "بوري"]
        };

        // بيانات الأقسام
        const categories = [
            {
                id: 1,
                name: "الشيلان",
                subcategories: [
                    { id: 101, name: "شيلان مصوف" },
                    { id: 102, name: "شيلان صوف" },
                    { id: 103, name: "شيلان نص صوف" },
                    { id: 104, name: "شيلان كشميري" }
                ]
            },
            {
                id: 2,
                name: "الاكسسوارات الرجالية",
                subcategories: [
                    { id: 201, name: "الساعات" },
                    { id: 202, name: "النظارات" },
                    { id: 203, name: "الحزمات" },
                    { id: 204, name: "لحف صوف" },
                    { id: 205, name: "لحف كشميري" },
                    { id: 206, name: "لحف عادي" },
                    { id: 207, name: "حبيه شبوني مركزيه" },
                    { id: 208, name: "طواقي عُمانيه" },
                    { id: 209, name: "كبات شبابي" }
                ]
            },
            {
                id: 3,
                name: "الاثواب",
                subcategories: [
                    { id: 301, name: "ولادي" },
                    { id: 302, name: "رجالي" },
                    { id: 303, name: "شبابي" }
                ]
            },
            {
                id: 4,
                name: "المعواز",
                subcategories: []
            },
            {
                id: 5,
                name: "الأكوات",
                subcategories: [
                    { id: 501, name: "شبابي" },
                    { id: 502, name: "ولادي" },
                    { id: 503, name: "رجالي" }
                ]
            },
            {
                id: 6,
                name: "البدلات الرسمية",
                subcategories: [
                    { id: 601, name: "رجالي" },
                    { id: 602, name: "شبابي" },
                    { id: 603, name: "ولادي" }
                ]
            },
            {
                id: 7,
                name: "الحذيه",
                subcategories: [
                    { id: 701, name: "رجالي" },
                    { id: 702, name: "ولادي" }
                ]
            },
            {
                id: 8,
                name: "ملابس داخلية",
                subcategories: [
                    { id: 801, name: "طقم ملابس هاف + فنيله ملوان وابيض" },
                    { id: 802, name: "هاف ملوان وابيض" },
                    { id: 803, name: "فنيله ملوان وابيض" },
                    { id: 804, name: "سروايل طويل وقصير = قماش او قطن" },
                    { id: 805, name: "بجام شتويه فنيله او بنطال او معى بعض" }
                ]
            },
            {
                id: 9,
                name: "الفئات السعرية",
                subcategories: [
                    { id: 901, name: "من 5 الف إلى 10 الف" },
                    { id: 902, name: "من 11 الف إلى 20 الف" },
                    { id: 903, name: "من 21 الف إلى 35 الف" },
                    { id: 904, name: "أكثر من 35 الف" }
                ]
            }
        ];

        // بيانات المنتجات (سيتم إضافتها من قبل المسؤول)
        let products = [
            // أمثلة على منتجات
            {
                id: 1,
                name: "شيلان كشميري فاخر",
                category: 104,
                price: 25000,
                oldPrice: 30000,
                description: "شيلان كشميري عالي الجودة، ناعم ومريح، مناسب لفصول السنة المختلفة.",
                colors: ["أبيض", "أسود", "أزرق", "بني"],
                quantity: 15,
                image: "https://via.placeholder.com/300",
                type: "vip"
            },
            {
                id: 2,
                name: "ساعة رجالية كلاسيكية",
                category: 201,
                price: 15000,
                oldPrice: 18000,
                description: "ساعة رجالية أنيقة بمينا أسود وسوار جلد طبيعي، مقاومة للماء.",
                colors: ["أسود", "بني"],
                quantity: 8,
                image: "https://via.placeholder.com/300",
                type: "normal"
            },
            {
                id: 3,
                name: "ثوب رجالي قطني",
                category: 302,
                price: 8000,
                description: "ثوب رجالي قطني خفيف ومريح، مناسب للصيف.",
                colors: ["أبيض", "أزرق", "أخضر"],
                quantity: 20,
                image: "https://via.placeholder.com/300",
                type: "normal"
            }
        ];

        // بيانات العملاء والطلبات (سيتم تخزينها في localStorage)
        let customers = JSON.parse(localStorage.getItem('customers')) || [];
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentUser = null;
        let isAdmin = false;

        // DOM Elements
        const authSection = document.getElementById('auth-section');
        const mainContent = document.getElementById('main-content');
        const adminDashboard = document.getElementById('admin-dashboard');
        const cartModal = document.getElementById('cart-modal');
        const checkoutPage = document.getElementById('checkout-page');
        const orderConfirmation = document.getElementById('order-confirmation');
        const cartCount = document.querySelector('.cart-count');

        // تحديث عربة التسوق
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // عرض رسالة
        function showAlert(message, type = 'success') {
            const alert = document.createElement('div');
            alert.className = `alert alert-${type}`;
            alert.textContent = message;
            document.body.prepend(alert);
            
            setTimeout(() => {
                alert.remove();
            }, 5000);
        }

        // تسجيل دخول المسؤول
        document.getElementById('admin-login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            
            if (email === storeData.adminEmail && password === storeData.adminPassword) {
                isAdmin = true;
                authSection.style.display = 'none';
                mainContent.style.display = 'none';
                adminDashboard.style.display = 'block';
                showAlert('تم تسجيل دخول المسؤول بنجاح');
            } else {
                showAlert('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'danger');
            }
        });

        // تسجيل عميل جديد
        document.getElementById('new-customer-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('customer-name').value;
            const phone = document.getElementById('customer-phone').value;
            const verificationCode = document.getElementById('verification-code').value;
            const country = document.getElementById('customer-country').value;
            const region = document.getElementById('customer-region').value;
            
            // التحقق من رمز التأكيد (في الواقع سيتم إرساله عبر واتساب)
            if (verificationCode.length !== 5 || !/^\d+$/.test(verificationCode)) {
                showAlert('رمز التأكيد يجب أن يتكون من 5 أرقام', 'danger');
                return;
            }
            
            // التحقق من عدم تسجيل العميل مسبقاً
            const existingCustomer = customers.find(c => c.phone === phone);
            if (existingCustomer) {
                showAlert('هذا الرقم مسجل مسبقاً، يرجى تسجيل الدخول', 'danger');
                return;
            }
            
            // إنشاء عميل جديد
            const newCustomer = {
                id: Date.now(),
                name,
                phone,
                country,
                region,
                orders: [],
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };
            
            customers.push(newCustomer);
            localStorage.setItem('customers', JSON.stringify(customers));
            
            // تسجيل دخول العميل
            currentUser = newCustomer;
            authSection.style.display = 'none';
            mainContent.style.display = 'block';
            
            showAlert('تم تسجيل حسابك بنجاح');
            
            // هنا يمكنك إضافة كود لإرسال البيانات عبر واتساب أو البريد الإلكتروني
        });

        // تسجيل دخول عميل موجود
        document.getElementById('existing-customer-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('existing-phone').value;
            const name = document.getElementById('existing-name').value;
            
            // البحث عن العميل
            const customer = customers.find(c => c.phone === phone && c.name === name);
            
            if (customer) {
                // تحديث آخر تسجيل دخول
                customer.lastLogin = new Date().toISOString();
                localStorage.setItem('customers', JSON.stringify(customers));
                
                currentUser = customer;
                authSection.style.display = 'none';
                mainContent.style.display = 'block';
                
                showAlert('تم تسجيل الدخول بنجاح');
            } else {
                showAlert('رقم الهاتف أو الاسم غير صحيح', 'danger');
            }
        });

        // تبديل بين تبويبات تسجيل الدخول
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // إزالة النشاط من جميع التبويبات
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
                
                // إضافة النشاط للتبويب المحدد
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // تحديث قائمة المناطق عند اختيار الدولة
        document.getElementById('customer-country').addEventListener('change', function() {
            const country = this.value;
            const regionSelect = document.getElementById('customer-region');
            
            regionSelect.innerHTML = '<option value="">اختر المنطقة</option>';
            
            if (country && countries[country]) {
                regionSelect.disabled = false;
                countries[country].forEach(region => {
                    const option = document.createElement('option');
                    option.value = region;
                    option.textContent = region;
                    regionSelect.appendChild(option);
                });
            } else {
                regionSelect.disabled = true;
            }
        });

        // عرض الأقسام في الصفحة الرئيسية
        function displayCategories() {
            const categoryGrid = document.querySelector('.category-grid');
            categoryGrid.innerHTML = '';
            
            categories.forEach(category => {
                if (category.subcategories.length === 0) return;
                
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                categoryCard.innerHTML = `
                    <div class="category-img" style="background-image: url('https://via.placeholder.com/300')"></div>
                    <div class="category-info">
                        <h3>${category.name}</h3>
                        <a href="#" class="btn btn-sm" data-category="${category.id}">عرض المنتجات</a>
                    </div>
                `;
                
                categoryGrid.appendChild(categoryCard);
            });
        }

        // عرض المنتجات
        function displayProducts(filteredProducts = products) {
            const productGrid = document.querySelector('.product-grid');
            productGrid.innerHTML = '';
            
            filteredProducts.forEach(product => {
                const category = categories.find(c => 
                    c.subcategories.some(sc => sc.id === product.category)
                );
                const subcategory = category?.subcategories.find(sc => sc.id === product.category);
                
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-img" style="background-image: url('${product.image}')">
                        ${product.type === 'vip' ? '<span class="product-badge">VIP</span>' : ''}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-price">
                            <span class="current-price">${product.price.toLocaleString()} ريال</span>
                            ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ريال</span>` : ''}
                            ${product.oldPrice ? `<span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ''}
                        </div>
                        <p>${subcategory?.name || ''}</p>
                        <div class="product-actions">
                            <button class="btn btn-sm" data-product="${product.id}">إضافة للسلة</button>
                            <button class="btn btn-sm">التفاصيل</button>
                        </div>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            });
        }

        // إضافة منتج إلى السلة
        document.addEventListener('click', function(e) {
            if (e.target.hasAttribute('data-product')) {
                const productId = parseInt(e.target.getAttribute('data-product'));
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    const existingItem = cart.find(item => item.id === productId);
                    
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity: 1
                        });
                    }
                    
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    showAlert('تمت إضافة المنتج إلى السلة');
                }
            }
        });

        // فتح سلة التسوق
        document.getElementById('cart-link').addEventListener('click', function(e) {
            e.preventDefault();
            displayCart();
            cartModal.style.display = 'block';
        });

        // عرض محتويات السلة
        function displayCart() {
            const cartItems = document.querySelector('.cart-items');
            cartItems.innerHTML = '';
            
            let total = 0;
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.price.toLocaleString()} ريال × ${item.quantity}</p>
                        <p>المجموع: ${(item.price * item.quantity).toLocaleString()} ريال</p>
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-times"></i></button>
                `;
                
                cartItems.appendChild(cartItem);
                total += item.price * item.quantity;
            });
            
            document.querySelector('.total-amount').textContent = `${total.toLocaleString()} ريال`;
        }

        // إزالة منتج من السلة
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
                const itemId = parseInt(e.target.getAttribute('data-id') || e.target.closest('.remove-item').getAttribute('data-id'));
                cart = cart.filter(item => item.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                displayCart();
                showAlert('تمت إزالة المنتج من السلة');
            }
        });

        // إغلاق سلة التسوق
        document.querySelector('.close-cart').addEventListener('click', function() {
            cartModal.style.display = 'none';
        });

        // الذهاب إلى صفحة الدفع
        document.querySelector('.btn-checkout').addEventListener('click', function() {
            if (!currentUser) {
                showAlert('يجب تسجيل الدخول أولاً', 'danger');
                return;
            }
            
            cartModal.style.display = 'none';
            checkoutPage.style.display = 'block';
            
            // تعبئة بيانات العميل إذا كان مسجلاً
            document.getElementById('checkout-name').value = currentUser.name;
            document.getElementById('checkout-phone').value = currentUser.phone;
            document.getElementById('checkout-country').value = currentUser.country || '';
            
            if (currentUser.country) {
                const regionSelect = document.getElementById('checkout-region');
                regionSelect.disabled = false;
                regionSelect.innerHTML = '<option value="">اختر المنطقة</option>';
                
                countries[currentUser.country].forEach(region => {
                    const option = document.createElement('option');
                    option.value = region;
                    option.textContent = region;
                    regionSelect.appendChild(option);
                });
                
                regionSelect.value = currentUser.region || '';
            }
            
            // عرض عناصر الطلب
            displayCheckoutItems();
        });

        // عرض عناصر الطلب في صفحة الدفع
        function displayCheckoutItems() {
            const checkoutItems = document.getElementById('checkout-items');
            checkoutItems.innerHTML = '';
            
            let subtotal = 0;
            
            cart.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <div class="order-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="order-item-details">
                        <h4 class="order-item-title">${item.name}</h4>
                        <p class="order-item-price">${item.price.toLocaleString()} ريال × ${item.quantity}</p>
                    </div>
                `;
                
                checkoutItems.appendChild(orderItem);
                subtotal += item.price * item.quantity;
            });
            
            document.querySelector('.order-total-value').textContent = `${subtotal.toLocaleString()} ريال`;
        }

        // التنقل بين خطوات الدفع
        document.querySelectorAll('.btn-next').forEach(btn => {
            btn.addEventListener('click', function() {
                const currentStep = document.querySelector('.checkout-step.active');
                const nextStepId = `step-${parseInt(currentStep.id.split('-')[1]) + 1}`;
                
                if (nextStepId === 'step-2') {
                    // التحقق من صحة معلومات العميل
                    const name = document.getElementById('checkout-name').value;
                    const phone = document.getElementById('checkout-phone').value;
                    const country = document.getElementById('checkout-country').value;
                    const region = document.getElementById('checkout-region').value;
                    const address = document.getElementById('checkout-address').value;
                    
                    if (!name || !phone || !country || !region || !address) {
                        showAlert('يجب تعبئة جميع الحقول', 'danger');
                        return;
                    }
                } else if (nextStepId === 'step-3') {
                    // تعبئة ملخص الطلب
                    document.getElementById('summary-name').textContent = document.getElementById('checkout-name').value;
                    document.getElementById('summary-phone').textContent = document.getElementById('checkout-phone').value;
                    document.getElementById('summary-address').textContent = `${document.getElementById('checkout-country').value} - ${document.getElementById('checkout-region').value} - ${document.getElementById('checkout-address').value}`;
                    
                    const paymentMethod = document.querySelector('.payment-method.active').getAttribute('data-method');
                    let paymentText = '';
                    
                    if (paymentMethod === 'bank-transfer') {
                        paymentText = 'تحويل بنكي';
                    } else if (paymentMethod === 'name-transfer') {
                        paymentText = 'تحويل بالاسم الرباعي';
                    } else {
                        paymentText = 'التواصل عبر واتساب';
                    }
                    
                    document.getElementById('summary-payment').textContent = paymentText;
                }
                
                currentStep.classList.remove('active');
                document.getElementById(nextStepId).classList.add('active');
                
                // تحديث خطوات التقدم
                document.querySelectorAll('.step').forEach(step => {
                    step.classList.remove('active');
                    if (parseInt(step.getAttribute('data-step')) <= parseInt(nextStepId.split('-')[1])) {
                        step.classList.add('active');
                    }
                });
            });
        });

        // العودة إلى الخطوة السابقة
        document.querySelectorAll('.btn-prev').forEach(btn => {
            btn.addEventListener('click', function() {
                const currentStep = document.querySelector('.checkout-step.active');
                const prevStepId = `step-${parseInt(currentStep.id.split('-')[1]) - 1}`;
                
                currentStep.classList.remove('active');
                document.getElementById(prevStepId).classList.add('active');
                
                // تحديث خطوات التقدم
                document.querySelectorAll('.step').forEach(step => {
                    step.classList.remove('active');
                    if (parseInt(step.getAttribute('data-step')) <= parseInt(prevStepId.split('-')[1])) {
                        step.classList.add('active');
                    }
                });
            });
        });

        // تغيير طريقة الدفع
        document.querySelectorAll('.payment-method').forEach(method => {
            method.addEventListener('click', function() {
                document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                
                // إظهار تفاصيل طريقة الدفع المختارة
                const methodType = this.getAttribute('data-method');
                document.getElementById('bank-details').style.display = 'none';
                document.getElementById('name-details').style.display = 'none';
                document.getElementById('whatsapp-details').style.display = 'none';
                
                if (methodType === 'bank-transfer') {
                    document.getElementById('bank-details').style.display = 'block';
                } else if (methodType === 'name-transfer') {
                    document.getElementById('name-details').style.display = 'block';
                } else {
                    document.getElementById('whatsapp-details').style.display = 'block';
                }
            });
        });

        // تأكيد الطلب
        document.querySelector('.btn-confirm').addEventListener('click', function() {
            const verificationCode = document.getElementById('verification-code-checkout').value;
            
            if (!verificationCode || verificationCode.length !== 5 || !/^\d+$/.test(verificationCode)) {
                showAlert('يجب إدخال رمز التأكيد المكون من 5 أرقام', 'danger');
                return;
            }
            
            // إنشاء الطلب
            const newOrder = {
                id: Date.now(),
                customerId: currentUser.id,
                customerName: document.getElementById('checkout-name').value,
                customerPhone: document.getElementById('checkout-phone').value,
                customerAddress: `${document.getElementById('checkout-country').value} - ${document.getElementById('checkout-region').value} - ${document.getElementById('checkout-address').value}`,
                items: [...cart],
                paymentMethod: document.querySelector('.payment-method.active').getAttribute('data-method'),
                status: 'pending',
                createdAt: new Date().toISOString(),
                verificationCode
            };
            
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // إرسال إشعار عبر واتساب (في الواقع سيتم إرساله عبر API)
            const whatsappMessage = `طلب جديد #${newOrder.id}\nالعميل: ${newOrder.customerName}\nرقم الهاتف: ${newOrder.customerPhone}\nالعنوان: ${newOrder.customerAddress}\nطريقة الدفع: ${newOrder.paymentMethod}\n\nالمنتجات:\n${newOrder.items.map(item => `${item.name} - ${item.quantity} × ${item.price} ريال`).join('\n')}\n\nالمجموع: ${newOrder.items.reduce((total, item) => total + (item.price * item.quantity), 0)} ريال`;
            
            console.log('إرسال رسالة واتساب إلى:', storeData.whatsapp, 'بالمحتوى:', whatsappMessage);
            
            // تفريغ السلة
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // عرض تأكيد الطلب
            checkoutPage.style.display = 'none';
            orderConfirmation.style.display = 'block';
            document.getElementById('order-number').textContent = newOrder.id;
        });

        // العودة إلى الصفحة الرئيسية بعد تأكيد الطلب
        document.getElementById('back-to-home').addEventListener('click', function(e) {
            e.preventDefault();
            orderConfirmation.style.display = 'none';
            mainContent.style.display = 'block';
        });

        // إدارة الطلبات في لوحة التحكم
        function displayOrders(status = 'pending') {
            const filteredOrders = orders.filter(order => order.status === status);
            const ordersList = document.getElementById('orders-list');
            ordersList.innerHTML = '';
            
            filteredOrders.forEach(order => {
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customerName}</td>
                    <td>${new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>${order.items.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()} ريال</td>
                    <td><span class="status status-${order.status}">${getStatusText(order.status)}</span></td>
                    <td>
                        <button class="btn btn-sm" data-order="${order.id}" data-action="view">عرض</button>
                        ${status === 'pending' ? `
                            <button class="btn btn-sm" data-order="${order.id}" data-action="complete">إكمال</button>
                            <button class="btn btn-sm" data-order="${order.id}" data-action="cancel">إلغاء</button>
                        ` : ''}
                    </td>
                `;
                
                ordersList.appendChild(orderRow);
            });
        }

        // الحصول على نص حالة الطلب
        function getStatusText(status) {
            const statuses = {
                'pending': 'قيد الانتظار',
                'completed': 'مكتمل',
                'cancelled': 'ملغى'
            };
            
            return statuses[status] || status;
        }

        // إدارة المنتجات في لوحة التحكم
        function displayAdminProducts() {
            const productsList = document.getElementById('products-list');
            productsList.innerHTML = '';
            
            products.forEach(product => {
                const category = categories.find(c => 
                    c.subcategories.some(sc => sc.id === product.category)
                );
                const subcategory = category?.subcategories.find(sc => sc.id === product.category);
                
                const productRow = document.createElement('tr');
                productRow.innerHTML = `
                    <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
                    <td>${product.name}</td>
                    <td>${subcategory?.name || ''}</td>
                    <td>${product.price.toLocaleString()} ريال</td>
                    <td>${product.quantity}</td>
                    <td>${product.quantity > 0 ? 'متوفر' : 'غير متوفر'}</td>
                    <td>
                        <button class="btn btn-sm" data-product="${product.id}" data-action="edit">تعديل</button>
                        <button class="btn btn-sm" data-product="${product.id}" data-action="delete">حذف</button>
                    </td>
                `;
                
                productsList.appendChild(productRow);
            });
        }

        // إدارة العملاء في لوحة التحكم
        function displayCustomers() {
            const customersList = document.getElementById('customers-list');
            customersList.innerHTML = '';
            
            customers.forEach(customer => {
                const customerRow = document.createElement('tr');
                customerRow.innerHTML = `
                    <td>${customer.name}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.country}</td>
                    <td>${customer.region}</td>
                    <td>${customer.orders.length}</td>
                    <td>${new Date(customer.lastLogin).toLocaleDateString()}</td>
                    <td>
                        <button class="btn btn-sm" data-customer="${customer.id}" data-action="view">عرض</button>
                    </td>
                `;
                
                customersList.appendChild(customerRow);
            });
        }

        // تبديل بين أقسام لوحة التحكم
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const sectionId = this.getAttribute('data-section') + '-section';
                
                // إزالة النشاط من جميع الروابط والأقسام
                document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
                document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
                
                // إضافة النشاط للرابط والقسم المحدد
                this.classList.add('active');
                document.getElementById(sectionId).classList.add('active');
                
                // تحميل البيانات عند الحاجة
                if (sectionId === 'orders-section') {
                    displayOrders();
                } else if (sectionId === 'products-section') {
                    displayAdminProducts();
                } else if (sectionId === 'customers-section') {
                    displayCustomers();
                }
            });
        });

        // تصفية الطلبات حسب الحالة
        document.querySelectorAll('.order-tabs .btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const status = this.getAttribute('data-status');
                
                document.querySelectorAll('.order-tabs .btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                displayOrders(status);
            });
        });

        // إضافة منتج جديد
        document.getElementById('add-product-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('product-name').value;
            const category = parseInt(document.getElementById('product-category').value);
            const price = parseInt(document.getElementById('product-price').value);
            const oldPrice = parseInt(document.getElementById('product-old-price').value) || null;
            const quantity = parseInt(document.getElementById('product-quantity').value);
            const type = document.getElementById('product-type').value;
            const colors = document.getElementById('product-colors').value.split(',').map(c => c.trim()).filter(c => c);
            const description = document.getElementById('product-description').value;
            const imageInput = document.getElementById('product-image');
            
            // في الواقع، يجب تحميل الصورة إلى الخادم والحصول على رابطها
            // هنا سنستخدم صورة افتراضية للتبسيط
            const image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : 'https://via.placeholder.com/300';
            
            const newProduct = {
                id: Date.now(),
                name,
                category,
                price,
                oldPrice,
                description,
                colors,
                quantity,
                image,
                type
            };
            
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            
            showAlert('تمت إضافة المنتج بنجاح');
            this.reset();
            
            // عرض المنتجات المحدثة
            displayAdminProducts();
        });

        // تعبئة قائمة الأقسام في نموذج إضافة منتج
        function populateCategories() {
            const categorySelect = document.getElementById('product-category');
            categorySelect.innerHTML = '<option value="">اختر القسم</option>';
            
            categories.forEach(category => {
                if (category.subcategories.length > 0) {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = category.name;
                    
                    category.subcategories.forEach(subcategory => {
                        const option = document.createElement('option');
                        option.value = subcategory.id;
                        option.textContent = subcategory.name;
                        optgroup.appendChild(option);
                    });
                    
                    categorySelect.appendChild(optgroup);
                }
            });
        }

        // تسجيل خروج المسؤول
        document.getElementById('admin-logout').addEventListener('click', function(e) {
            e.preventDefault();
            
            isAdmin = false;
            adminDashboard.style.display = 'none';
            authSection.style.display = 'block';
            
            // إظهار تبويب تسجيل دخول المسؤول
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            
            document.querySelector('[data-tab="admin-login"]').classList.add('active');
            document.getElementById('admin-login').classList.add('active');
        });

        // تهيئة الصفحة عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            // التحقق من وجود مستخدم مسجل
            const loggedInUser = localStorage.getItem('loggedInUser');
            if (loggedInUser) {
                currentUser = JSON.parse(loggedInUser);
                authSection.style.display = 'none';
                mainContent.style.display = 'block';
            }
            
            // التحقق من وجود مسؤول مسجل
            const adminLoggedIn = localStorage.getItem('adminLoggedIn');
            if (adminLoggedIn) {
                isAdmin = true;
                authSection.style.display = 'none';
                mainContent.style.display = 'none';
                adminDashboard.style.display = 'block';
            }
            
            // تعبئة قائمة المناطق
            document.getElementById('checkout-country').addEventListener('change', function() {
                const country = this.value;
                const regionSelect = document.getElementById('checkout-region');
                
                regionSelect.innerHTML = '<option value="">اختر المنطقة</option>';
                
                if (country && countries[country]) {
                    regionSelect.disabled = false;
                    countries[country].forEach(region => {
                        const option = document.createElement('option');
                        option.value = region;
                        option.textContent = region;
                        regionSelect.appendChild(option);
                    });
                } else {
                    regionSelect.disabled = true;
                }
            });
            
            // تعبئة قائمة الأقسام
            populateCategories();
            
            // عرض الأقسام والمنتجات
            displayCategories();
            displayProducts();
            
            // تحديث عداد السلة
            updateCartCount();
        });
    </script>
</body>
</html>

- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
