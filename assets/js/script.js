document.addEventListener('DOMContentLoaded', () => {
  // Product Modal Functions
  const products = {
    small: {
      title: "Small Eggs (30pcs)",
      price: "₱210",
      image: "assets/images/small.jpg",
      details: [
        "Weight: 45-50g per egg",
        "Perfect for baking and everyday use",
        "Freshly laid and refrigerated",
        "30 eggs per tray"
      ]
    },
    medium: {
      title: "Medium Eggs (30pcs)",
      price: "₱220",
      image: "assets/images/medium.jpg",
      details: [
        "Weight: 50-55g per egg",
        "Ideal for most recipes",
        "Farm fresh and natural",
        "30 eggs per tray"
      ]
    },
    large: {
      title: "Large Eggs (30pcs)",
      price: "₱230",
      image: "assets/images/large.jpg",
      details: [
        "Weight: 55-60g per egg",
        "Great for cooking and baking",
        "Free-range hens",
        "30 eggs per tray"
      ]
    },
    xl: {
      title: "XL Eggs (30pcs)",
      price: "₱240",
      image: "assets/images/xl.jpg",
      details: [
        "Weight: 60-65g per egg",
        "Premium recipes quality",
        "Richer flavor and texture",
        "30 eggs per tray"
      ]
    },
    jumbo: {
      title: "Jumbo Eggs (30pcs)",
      price: "₱250",
      image: "assets/images/jumbo.jpg",
      details: [
        "Weight: 65-70g per egg",
        "Top quality selection",
        "Exceptionally fresh",
        "30 eggs per tray"
      ]
    }
  };

  // Modal handling
  const productModal = document.getElementById('productModal');
  
  window.showProductModal = (type) => {
    const product = products[type];
    if (!product) return;

    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductPrice').textContent = product.price;
    document.getElementById('modalProductImage').src = product.image;
    
    const detailsList = document.getElementById('modalProductDetails');
    detailsList.innerHTML = product.details.map(d => `<li>${d}</li>`).join('');
    
    productModal.style.display = 'flex';
  };

  window.closeProductModal = () => {
    productModal.style.display = 'none';
  };

  // Close modal when clicking outside
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
  });
});
