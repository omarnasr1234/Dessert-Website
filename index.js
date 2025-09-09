<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>معرض السيارات</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0; padding: 0;
      background: #f4f4f4;
    }
    header {
      background: #222;
      color: #fff;
      padding: 15px;
      text-align: center;
    }
    nav {
      background: #444;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      color: #ff9800;
    }
    .cars {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .car {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      overflow: hidden;
      text-align: center;
      transition: transform 0.2s;
    }
    .car:hover {
      transform: scale(1.05);
    }
    .car img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .car h3 {
      margin: 10px 0;
    }
    .price {
      color: green;
      font-weight: bold;
      margin-bottom: 10px;
    }
    footer {
      background: #222;
      color: white;
      text-align: center;
      padding: 10px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>معرض السيارات</h1>
  </header>
  <nav>
    <a href="#">الرئيسية</a>
    <a href="#">السيارات</a>
    <a href="#">الأسعار</a>
    <a href="#">تواصل معنا</a>
  </nav>

  <section class="cars">
    <div class="car">
      <img src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" alt="سيارة 1">
      <h3>BMW X5</h3>
      <p class="price">500,000 جنيه</p>
      <a href="https://www.bmw.com">المزيد</a>
    </div>
    <div class="car">
      <img src="https://cdn.pixabay.com/photo/2014/07/31/22/50/car-407549_1280.jpg" alt="سيارة 2">
      <h3>Audi A6</h3>
      <p class="price">450,000 جنيه</p>
      <a href="https://www.audi.com">المزيد</a>
    </div>
    <div class="car">
      <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg" alt="سيارة 3">
      <h3>Mercedes C200</h3>
      <p class="price">600,000 جنيه</p>
      <a href="https://www.mercedes-benz.com">المزيد</a>
    </div>
  </section>

  <footer>
    <p>© 2025 جميع الحقوق محفوظة</p>
  </footer>
</body>
</html>
