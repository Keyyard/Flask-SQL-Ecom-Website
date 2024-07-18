// Navbar template
const navbarTemplate = `
<nav class="navbar navbar-expand-lg navbar-light bg-grey sticky-top border-bottom border-3">
<div class="container px-4 px-lg-5">
  <a class="navbar-brand" href="/index.html">
    <img src="/static/assets/logo-black.svg" alt="Logo" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-lg-0 ms-lg-4">
      <li class="nav-item">
        <a class="nav-link" href="/index.html">Home</a>
      </li>
      <li class="nav-item"><a class="nav-link" href="/about.html">About</a></li>
      <li class="nav-item"><a class="nav-link" href="/contact.html">Contact Us</a></li>
      <li class="nav-item"><a class="nav-link" href="/blog.html">Blog</a></li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
         
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Shop</a
        >
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#!">All Products</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#!">Popular Items</a></li>
          <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex borderless" id="search-bar">
      <input
        class="form-control borderless bg-white"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="borderless btn btn-outline bg-white" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <button class="btn btn-light position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#shoppingCart" aria-expanded="false" aria-controls="shoppingCart">
  <i class="fa-solid fa-cart-shopping"></i>
  <span id="cartNumber" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
</button>
</nav>
<div class="collapse bg-cream" id="shoppingCart"  style="position: -webkit-sticky; position: sticky ;top: 60px; z-index: 10;">
<div class="p-5">
  <div class="d-flex justify-content-between">
    <h5>Giỏ hàng</h5>
    <a href="checkout.html">Xem giỏ hàng</a>
  </div>
  <div class="d-flex justify-content-between">
    <div class="d-flex" id="cartItems">
    </div>
  </div>
  <p class="fw-bold" id="cartTotal">Tổng cộng: 0đ</p>
  <a class="btn btn-dark" href="checkout.html">Thanh toán</a>
</div>
`;

// Footer template
const footerTemplate = `
<footer class="bg-dark text-white">  
<div class="container">
    <div class="py-5">
      <div class="row justify-content-between text-start">
        <div class="col-4">
            <h5 class="">CAMELIA BRAND</h5>
            <ul class="nav flex-column text-start">
              <li class="nav-item"><a class="nav-link p-0 text-muted">Store 1: 633 Nguyễn Đình Chiểu, P.2, Q.3. HCM</a></li>
              <li class="nav-item"><a class="nav-link p-0 text-muted">Store 2: 71 Trần Quang Diệu, P14, Q3, HCM</a></li>
            <li class="nav-item"><a class="nav-link p-0 text-muted">Hotline : 19001052</a></li>
            <li class="nav-item"><a href="mailto:thecameliavn@gmail.com" class="nav-link p-0 text-muted">thecameliavn@gmail.com</a></li>

            </ul>
          </div>
        <div class="col-4 text-center">
          <form>
            <h5>ĐĂNG KÝ NHẬN TIN</h5>
            <div class="d-flex flex-column flex-sm-row w-100">
                <form>
                    <label for="newsletter1" class="borderless visually-hidden ">Nhập email của bạn..</label>
                    <input id="newsletter1" type="text" class="borderless form-control" placeholder="Email address">
                    <button class="borderless btn btn-light " type="button">    
                        <i class="fa-solid fa-paper-plane"></i>                    </button>
                </form>
            </div>
            </div>
            <div class="col-4">
                <h5 class="text-start">Bạn nên xem</h5>
                <ul class="nav flex-column text-start row">
                  <li class="nav-item"><a href="about.html" class="nav-link p-0 text-muted">Giới thiệu</a></li>
                  <li class="nav-item"><a class="nav-link p-0 text-muted">Phương thức giao hàng</a></li>
                  <li class="nav-item"><a class="nav-link p-0 text-muted">Phương thức thanh toán</a></li>
                  <li class="nav-item"><a class="nav-link p-0 text-muted">Chính sách bảo hành</a></li>
                  <li class="nav-item"><a class="nav-link p-0 text-muted">Chính sách đổi trả</a></li>
                  <li class="nav-item"><a class="nav-link p-0 text-muted">Chính sách bảo mật</a></li>
                  <li class="nav-item"><a href="faq.html" class="nav-link p-0 text-muted">Những câu hỏi thường gặp</a></li>
                  <li class="nav-item"><a href="career.html" class="nav-link p-0 text-muted">Công việc tại Camelia</a></li>
                </ul>
              </div>
        </div>
      </div>      
</div>
<section class="border-top">
      <div class="d-flex flex-column py-4">
        <p class="text-center ">
            Copyrights © 2022 by Camelia Brand <br/>Designed by Trinh Minh Hieu</p>
      </div>
    </div>
  </section>
</footer>  
<div id="messenger">
        <a href="https://m.me/camelia.vn" target="_blank"><svg width="60px" height="60px" viewBox="0 0 60 60"><svg x="0" y="0" width="60px" height="60px"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#00B2FF" offset="0%"></stop><stop stop-color="#006AFF" offset="100%"></stop></linearGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><circle fill="#FFFFFF" cx="30" cy="30" r="30"></circle><svg x="10" y="10"><g><rect id="container" x="0" y="0" width="40" height="40"></rect><g id="logo"><path d="M20,0 C8.7334,0 0,8.2528 0,19.4 C0,25.2307 2.3896,30.2691 6.2811,33.7492 C6.6078,34.0414 6.805,34.4513 6.8184,34.8894 L6.9273,38.4474 C6.9621,39.5819 8.1343,40.3205 9.1727,39.8621 L13.1424,38.1098 C13.4789,37.9612 13.856,37.9335 14.2106,38.0311 C16.0348,38.5327 17.9763,38.8 20,38.8 C31.2666,38.8 40,30.5472 40,19.4 C40,8.2528 31.2666,0 20,0" id="bubble" fill="url(#linearGradient-1)"></path><path d="M7.99009,25.07344 L13.86509,15.75264 C14.79959,14.26984 16.80079,13.90064 18.20299,14.95224 L22.87569,18.45674 C23.30439,18.77834 23.89429,18.77664 24.32119,18.45264 L30.63189,13.66324 C31.47419,13.02404 32.57369,14.03204 32.00999,14.92654 L26.13499,24.24744 C25.20039,25.73014 23.19919,26.09944 21.79709,25.04774 L17.12429,21.54314 C16.69559,21.22164 16.10569,21.22334 15.67879,21.54734 L9.36809,26.33674 C8.52579,26.97594 7.42629,25.96794 7.99009,25.07344" id="bolt" fill="#FFFFFF"></path></g></g></svg></g></g></svg></svg>
</a>
    </div>
`;

// Add navbar template right below the <body> open tag
document.body.insertAdjacentHTML('afterbegin', navbarTemplate);

// Add footer template just before the </body> close tag
document.body.insertAdjacentHTML('beforeend', footerTemplate);