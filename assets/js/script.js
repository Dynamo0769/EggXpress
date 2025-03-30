// Modal functionality for product details
function showModal(title, details) {
  document.getElementById("modalProductTitle").textContent = title;
  document.getElementById("modalProductDetails").textContent = details;
  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Privacy Policy Modal functionality
function openPrivacyModal() {
  document.getElementById("privacyModal").style.display = "flex";
}

function closePrivacyModal() {
  document.getElementById("privacyModal").style.display = "none";
}

// Add event listeners for all privacy policy links
document.querySelectorAll("#privacyPolicyLink, #privacyPolicyLink2, #privacyPolicyLink3, #privacyPolicyLink4").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    openPrivacyModal();
  });
});

document.getElementById("closePrivacy")?.addEventListener("click", closePrivacyModal);

// Close modal when clicking outside modal content
window.addEventListener("click", function(e) {
  const productModal = document.getElementById("productModal");
  const privacyModal = document.getElementById("privacyModal");
  if (e.target === productModal) {
    closeModal();
  }
  if (e.target === privacyModal) {
    closePrivacyModal();
  }
});
