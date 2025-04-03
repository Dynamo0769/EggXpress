// assets/js/components.js

// Header Component
class MyHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; }
        header.main-header {
          background: var(--pure-white, #FFFFFF);
          padding: 0.1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 3px solid var(--primary-red, #D40511);
          animation: fadeInDown 0.8s ease-out;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          width: 110px;
          transition: transform 0.3s ease;
        }
        .brand-logo:hover { transform: scale(1.1); }
        .main-nav {
          display: flex;
          gap: 2.5rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .nav-link {
          color: var(--accent-black, #2D2D2D);
          text-decoration: none;
          font-weight: 750;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: #e6a200; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-red, #D40511);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1.5rem;
          }
          .main-nav {
            position: static;
            transform: none;
            justify-content: center;
          }
        }
      </style>
      <header class="main-header">
        <div class="header-content">
          <a href="index.html">
            <img src="logo.png" alt="eggxpress logo" class="brand-logo">
          </a>
          <nav class="main-nav">
            <a href="index.html" class="nav-link">Home</a>
            <a href="products.html" class="nav-link">Products</a>
            <a href="about.html" class="nav-link">About</a>
            <a href="contact.html" class="nav-link">Contact</a>
          </nav>
        </div>
      </header>
    `;
  }
}

// Footer Component
class MyFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; }
        footer.main-footer {
          background: var(--pure-white, #FFFFFF);
          color: var(--accent-black, #2D2D2D);
          padding: 4rem 2rem 2rem;
          margin-top: 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: flex-start;
        }
        .footer-left {
          flex: 1;
          min-width: 150px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .footer-right {
          flex: 3;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo { width: 150px; }
        .footer-section h3 {
          margin-bottom: 1.5rem;
          color: var(--primary-red, #D40511);
        }
        .footer-links { list-style: none; }
        .footer-links li { margin-bottom: 0.8rem; }
        .footer-links a {
          color: var(--accent-black, #2D2D2D);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover { color: var(--primary-red, #D40511); }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          justify-content: center;
        }
        .social-icon {
          width: 35px;
          height: 35px;
          transition: transform 0.3s ease;
        }
        .social-icon:hover { transform: scale(1.5); }
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }
          .footer-left, .footer-right {
            width: 100%;
            text-align: center;
          }
          .footer-right { grid-template-columns: 1fr; }
        }
      </style>
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-left">
            <img src="logo.png" alt="eggxpress logo" class="footer-logo">
          </div>
          <div class="footer-right">
            <div class="footer-section">
              <h3>Contact Us</h3>
              <p>📞 (0966) 700-4825</p>
              <p>✉️ eggxpress4@gmail.com</p>
              <p>📍 Upper, Ground Floor, Alfredo Y. Lua (AYL) Premises,<br> Sitio Suba Panas, Lapu-Lapu City, 6015 Cebu</p>
            </div>
            <div class="footer-section">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="https://www.facebook.com/eggxpressfarms"><img src="facebook-logo.png" alt="Facebook" class="social-icon"></a>
                <a href="https://www.instagram.com/xpressegg/"><img src="instagram-logo.jpg" alt="Instagram" class="social-icon"></a>
                <a href="https://x.com/XpressEgg"><img src="twitter-logo.png" alt="Twitter" class="social-icon"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

// Register the components
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
