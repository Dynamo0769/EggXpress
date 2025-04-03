// assets/js/script.js

// Toggle navigation for the hamburger menu
function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Show the product info modal and update its content as needed
function showProductModal(product) {
  const modal = document.getElementById('productModal');
  // You can customize modal content based on the 'product' parameter here
  modal.style.display = 'flex';
}

// Close the product modal
function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Show the Privacy Policy modal
function showPrivacyModal() {
  document.getElementById('privacyModal').style.display = 'flex';
}

// Close the Privacy Policy modal (decline)
function declinePrivacy() {
  document.getElementById('privacyModal').style.display = 'none';
}

// Close the Privacy Policy modal (agree)
function acceptPrivacy() {
  document.getElementById('privacyModal').style.display = 'none';
}

// Close modals if the user clicks outside of the modal content
window.onclick = function(event) {
  const productModal = document.getElementById('productModal');
  const privacyModal = document.getElementById('privacyModal');
  if (event.target === productModal) {
    productModal.style.display = 'none';
  }
  if (event.target === privacyModal) {
    privacyModal.style.display = 'none';
  }
}
