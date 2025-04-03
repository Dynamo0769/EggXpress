class MyHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { 
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        header.main-header {
          background: var(--pure-white, #FFFFFF);
          padding: 0.5rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
          margin-left: auto;
        }

        .nav-link {
          color: var(--accent-black, #2D2D2D);
          text-decoration: none;
          font-weight: 600;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .nav-link.active {
          color: var(--primary-red);
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

        .hamburger {
          display: none;
          cursor: pointer;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background: var(--accent-black);
          margin: 5px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .header-content { padding: 0 1rem; }
          
          .main-nav {
            position: fixed;
            top: 70px;
            right: -100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            width: 100%;
            padding: 2rem;
            transition: right 0.3s ease;
            gap: 1.5rem;
          }

          .main-nav.active { right: 0; }
          .hamburger { display: block; }
          .nav-link { font-size: 1.2rem; }
        }
      </style>
      <header class="main-header">
        <div class="header-content">
          <a href="index.html">
            <img src="assets/images/logo.png" alt="EggXpress Logo" class="brand-logo">
          </a>
          <nav class="main-nav">
            <a href="index.html" class="nav-link">Home</a>
            <a href="products.html" class="nav-link">Products</a>
            <a href="about.html" class="nav-link">About</a>
            <a href="contact.html" class="nav-link">Contact</a>
          </nav>
          <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    `;

    const hamburger = shadow.querySelector('.hamburger');
    const navLinks = shadow.querySelector('.main-nav');
    const links = shadow.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath === linkPath) {
        link.classList.add('active');
      }
    });
  }
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { 
          display: block;
          margin-top: auto;
        }

        footer.main-footer {
          background: var(--pure-white, #FFFFFF);
          color: var(--accent-black, #2D2D2D);
          padding: 4rem 2rem 2rem;
          border-top: 3px solid var(--primary-red);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: flex-start;
          justify-content: space-between;
        }

        .footer-left {
          flex: 1;
          min-width: 250px;
        }

        .footer-right {
          flex: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .footer-logo { 
          width: 150px; 
          margin-bottom: 1.5rem;
        }

        .footer-section h3 {
          margin-bottom: 1.5rem;
          color: var(--primary-red);
          font-size: 1.25rem;
        }

        .footer-section p {
          line-height: 1.6;
          margin: 0.8rem 0;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .social-icon {
          width: 35px;
          height: 35px;
          transition: transform 0.3s ease;
        }

        .social-icon:hover { 
          transform: scale(1.5); 
        }

        .legal-links {
          margin-top: 3rem;
          text-align: center;
          width: 100%;
          padding: 1rem 0;
          border-top: 1px solid #eee;
        }

        .legal-links a {
          color: var(--accent-black);
          text-decoration: none;
          margin: 0 1.5rem;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .legal-links a:hover {
          color: var(--primary-red);
        }

        .copyright {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-container { 
            flex-direction: column; 
            align-items: center; 
            text-align: center;
          }
          
          .footer-right { 
            grid-template-columns: 1fr; 
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .legal-links a {
            display: block;
            margin: 1rem 0;
          }
        }
      </style>
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-left">
            <img src="assets/images/logo.png" alt="EggXpress Logo" class="footer-logo">
            <div class="footer-section">
              <h3>Contact Us</h3>
              <p>📞 (0966) 700-4825</p>
              <p>✉️ eggxpress4@gmail.com</p>
              <p>📍 Upper, Ground Floor, Alfredo Y. Lua Premises,<br> Sitio Suba Panas, Lapu-Lapu City, 6015 Cebu</p>
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="https://www.facebook.com/eggxpressfarms">
                  <img src="assets/images/facebook-logo.png" alt="Facebook" class="social-icon">
                </a>
                <a href="https://www.instagram.com/xpressegg/">
                  <img src="assets/images/instagram-logo.jpg" alt="Instagram" class="social-icon">
                </a>
                <a href="https://x.com/XpressEgg">
                  <img src="assets/images/twitter-logo.png" alt="Twitter" class="social-icon">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#safety">Food Safety</a>
          <a href="#returns">Returns Policy</a>
        </div>
        <div class="copyright">© 2025 EggXpress. All rights reserved.</div>
      </footer>
    `;
  }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
