// Toggle navigation for hamburger menu
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// Product data for modal popups
const productsData = {
  small: {
    title: "Small Eggs (30pcs)",
    details: "Small Eggs: Perfect for baking and everyday use. Weight: 45-50g per egg. Freshly laid and refrigerated for optimal quality."
  },
  medium: {
    title: "Medium Eggs (30pcs)",
    details: "Medium Eggs: Ideal for most recipes. Weight: Approximately 50-55g per egg. Farm fresh and naturally produced."
  },
  large: {
    title: "Large Eggs (30pcs)",
    details: "Large Eggs: Great for cooking and baking. Weight: Around 60-65g per egg. Sourced from free-range hens."
  },
  xl: {
    title: "XL Eggs (30pcs)",
    details: "XL Eggs: Perfect for premium recipes. Weight: 55-60g per egg. Offers a richer flavor and texture."
  },
  jumbo: {
    title: "Jumbo Eggs (30pcs)",
    details: "Jumbo Eggs: Our top quality eggs. Weight: 60-65g per egg. Exceptionally fresh and nutritious."
  }
};

function showProductModal(key) {
  const data = productsData[key];
  if (data) {
    document.getElementById("modalProductTitle").textContent = data.title;
    document.getElementById("modalProductDetails").textContent = data.details;
    document.getElementById("productModal").style.display = "flex";
  }
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
}

// Gallery functionality: cycle images on click
const galleryImages = ['assets/images/gallery1.jpg', 'assets/images/gallery2.jpg', 'assets/images/gallery3.jpg', 'assets/images/gallery4.jpg', 'assets/images/gallery5.jpg'];
let currentIndex = 0;
const galleryImg = document.getElementById('gallery-image');
galleryImg.addEventListener('click', () => {
  galleryImg.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    galleryImg.src = galleryImages[currentIndex];
    galleryImg.style.opacity = 1;
  }, 400);
});

// Privacy Modal Handling (show only once)
function acceptPrivacy() {
  localStorage.setItem('privacyAccepted', 'true');
  document.getElementById('privacyModal').style.display = 'none';
}
function declinePrivacy() {
  window.location.href = 'https://www.google.com';
}
function showPrivacyModal() {
  document.getElementById('privacyModal').style.display = 'flex';
}
window.onload = function() {
  if (!localStorage.getItem('privacyAccepted')) {
    showPrivacyModal();
  }
};

// Close modals when clicking outside modal content
window.addEventListener("click", function(e) {
  const productModal = document.getElementById("productModal");
  const privacyModal = document.getElementById("privacyModal");
  if (e.target === productModal) {
    closeProductModal();
  }
  if (e.target === privacyModal) {
    privacyModal.style.display = "none";
  }
});
