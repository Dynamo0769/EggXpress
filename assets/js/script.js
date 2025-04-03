/* assets/js/script.js */

// Define custom header component
class MyHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo img {
          max-height: 50px;
        }
        nav {
          display: flex;
          align-items: center;
          position: relative;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          margin-right: 20px;
        }
        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 4px 0;
        }
        ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        li {
          margin: 0 10px;
        }
        a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
        }
        a.active {
          color: #ffcc00;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          ul {
            display: none;
            flex-direction: column;
            background-color: #fff;
            position: absolute;
            top: 60px;
            right: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          ul.show {
            display: flex;
          }
          li {
            margin: 10px 0;
          }
        }
      </style>
      <header>
        <div class="header-container">
          <div class="logo">
            <a href="index.html"><img src="assets/images/logo.png" alt="EggXpress Logo"></a>
          </div>
          <nav>
            <div class="hamburger" id="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul id="navLinks">
              <li><a href="index.html" class="active">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="javascript:void(0)" id="privacyLink">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    // Toggle navigation on hamburger click
    shadow.addEventListener('click', (e) => {
      if (e.composedPath().some(el => el.id === 'hamburger')) {
        const navLinks = shadow.getElementById('navLinks');
        navLinks.classList.toggle('show');
      }
    });

    // Dispatch event for Privacy Policy link
    shadow.addEventListener('click', (e) => {
      if (e.composedPath().some(el => el.id === 'privacyLink')) {
        window.dispatchEvent(new CustomEvent('openPrivacyModal'));
      }
    });
  }
}

// Define custom footer component
class MyFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        .footer-left, .footer-right {
          flex: 1;
          min-width: 250px;
        }
        .footer-logo {
          max-height: 50px;
        }
        .footer-section {
          margin-bottom: 20px;
        }
        .footer-section h3 {
          margin-top: 0;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin: 5px 0;
        }
        .footer-links a {
          color: #fff;
          text-decoration: none;
        }
        .social-links img {
          width: 24px;
          margin-right: 10px;
        }
        .copyright {
          background-color: #222;
          color: #ccc;
          text-align: center;
          padding: 10px;
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-left">
            <img src="assets/images/logo.png" alt="EggXpress Logo" class="footer-logo">
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
                <li><a href="javascript:void(0)" id="footerPrivacyLink">Privacy Policy &amp; Terms</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="https://www.facebook.com/eggxpressfarms"><img src="assets/images/facebook-logo.png" alt="Facebook"></a>
                <a href="https://www.instagram.com/xpressegg/"><img src="assets/images/instagram-logo.jpg" alt="Instagram"></a>
                <a href="https://x.com/XpressEgg"><img src="assets/images/twitter-logo.png" alt="Twitter"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">© 2025 EggXpress. All rights reserved.</div>
      </footer>
    `;

    // Dispatch event for footer Privacy Policy link
    shadow.addEventListener('click', (e) => {
      if (e.composedPath().some(el => el.id === 'footerPrivacyLink')) {
        window.dispatchEvent(new CustomEvent('openPrivacyModal'));
      }
    });
  }
}

// Register custom elements
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);

// Global modal functions (these assume that modal-related CSS is defined in your style.css)
function showProductModal(product) {
  const modal = document.getElementById('productModal');
  // Update modal content based on the product type as needed
  modal.style.display = 'block';
}

function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

function showPrivacyModal() {
  document.getElementById('privacyModal').style.display = 'block';
}

function declinePrivacy() {
  document.getElementById('privacyModal').style.display = 'none';
}

function acceptPrivacy() {
  document.getElementById('privacyModal').style.display = 'none';
}

// Listen for the custom event to open the privacy modal
window.addEventListener('openPrivacyModal', showPrivacyModal);

// Additional scripts (e.g., for the gallery, maps, etc.) can be added here.
