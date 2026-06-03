// ===== Product Data =====
const products = [
  { id:1, name:"Royal Kundan Necklace", category:"Necklace", emoji:"📿", price:599, original:1200, rating:"4.8 ★ (124)", badge:"50% OFF", desc:"Exquisite Kundan necklace with intricate gold-plated work. Perfect for weddings and festive occasions." },
  { id:2, name:"Pearl Drop Earrings", category:"Earring", emoji:"✨", price:199, original:399, rating:"4.9 ★ (89)", badge:"NEW", new:true, desc:"Classic pearl drop earrings with silver-tone finish. Lightweight and perfect for daily wear." },
  { id:3, name:"Meenakari Bangle Set", category:"Bangle", emoji:"💛", price:449, original:800, rating:"4.7 ★ (67)", badge:"44% OFF", desc:"Stunning set of 6 Meenakari bangles in vibrant colors. Traditional design with modern appeal." },
  { id:4, name:"Floral Finger Ring", category:"Ring", emoji:"💍", price:149, original:299, rating:"4.6 ★ (211)", badge:"50% OFF", desc:"Elegant floral design ring with CZ stones. Adjustable size fits all fingers." },
  { id:5, name:"Gold Charm Bracelet", category:"Bracelet", emoji:"🌸", price:299, original:599, rating:"4.8 ★ (143)", badge:"50% OFF", desc:"Delicate gold-plated charm bracelet with heart and star charms. Great gifting option." },
  { id:6, name:"Bridal Necklace Set", category:"Set", emoji:"🎁", price:1499, original:3000, rating:"5.0 ★ (56)", badge:"50% OFF", desc:"Complete bridal set including necklace, earrings and maang tikka. Perfect for your special day." },
  { id:7, name:"Oxidised Silver Choker", category:"Necklace", emoji:"🔗", price:349, original:699, rating:"4.7 ★ (98)", badge:"50% OFF", desc:"Trendy oxidised silver choker necklace with tribal design. Pairs well with kurtis and sarees." },
  { id:8, name:"Jhumka Earrings", category:"Earring", emoji:"🔔", price:249, original:499, rating:"4.9 ★ (178)", badge:"50% OFF", desc:"Traditional Jhumka earrings with gold polish and coloured stones. A wardrobe must-have." },
  { id:9, name:"Stone Studded Bangles", category:"Bangle", emoji:"💎", price:399, original:799, rating:"4.6 ★ (54)", badge:"50% OFF", desc:"Set of 4 beautiful bangles studded with multicolour stones. Lightweight and comfortable." },
  { id:10, name:"Butterfly Ring", category:"Ring", emoji:"🦋", price:129, original:249, rating:"4.8 ★ (92)", badge:"NEW", new:true, desc:"Cute butterfly design ring, gold plated. Perfect everyday accessory for young women." },
  { id:11, name:"Beaded Boho Bracelet", category:"Bracelet", emoji:"🌈", price:179, original:349, rating:"4.7 ★ (131)", badge:"NEW", new:true, desc:"Colorful beaded bracelet inspired by bohemian style. Stackable and fun to mix & match." },
  { id:12, name:"Polki Bridal Set", category:"Set", emoji:"👰", price:1999, original:3999, rating:"5.0 ★ (41)", badge:"50% OFF", desc:"Stunning Polki work bridal jewellery set with necklace, earrings, maang tikka and bajuband." },
];

let cart = [];
let wishlist = [];
let activeCategory = 'All';

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) { grid.innerHTML = '<p style="text-align:center;color:#aaa;padding:3rem;grid-column:1/-1">No products found.</p>'; return; }
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-img">
        ${p.badge ? `<span class="badge ${p.new?'new':''}">${p.badge}</span>` : ''}
        <span style="font-size:4.5rem">${p.emoji}</span>
        <button class="wishlist-icon ${wishlist.find(w=>w.id===p.id)?'active':''}" onclick="toggleWishlistItem(${p.id})" title="Add to Wishlist">
          ${wishlist.find(w=>w.id===p.id)?'❤️':'🤍'}
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">${p.rating}</div>
        <div class="product-price">
          <span class="price-current">₹${p.price}</span>
          <span class="price-original">₹${p.original}</span>
          <span class="price-discount">${Math.round((1-p.price/p.original)*100)}% off</span>
        </div>
        <div class="product-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
          <button class="btn-view" onclick="openModal(${p.id})">👁</button>
        </div>
      </div>
    </div>
  `).join('');
}

function setTab(btn, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = cat;
  renderProducts(cat === 'All' ? products : products.filter(p => p.category === cat));
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

function filterByCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    if (t.textContent.trim().toLowerCase().includes(cat.toLowerCase()) || (cat === 'Set' && t.textContent.includes('Set'))) t.classList.add('active');
  });
  renderProducts(products.filter(p => p.category === cat));
  document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI(); renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) { item.qty += delta; if (item.qty <= 0) removeFromCart(id); else { updateCartUI(); renderCart(); } }
}

function updateCartUI() {
  document.getElementById('cart-count').textContent = cart.reduce((s, c) => s + c.qty, 0);
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) { el.innerHTML = '<div class="empty-msg">🛒 Your cart is empty.<br/>Add some beautiful jewellery!</div>'; footer.style.display = 'none'; return; }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4><p>₹${item.price}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
    </div>
  `).join('');
  document.getElementById('cartTotal').textContent = cart.reduce((s, c) => s + c.price * c.qty, 0);
  footer.style.display = 'block';
}

function toggleCart() {
  renderCart();
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}

function checkout() {
  showToast('🎉 Order placed successfully! Thank you for shopping with Glamora!');
  cart = []; updateCartUI(); renderCart(); closeAll();
}

function toggleWishlistItem(id) {
  const product = products.find(p => p.id === id);
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) { wishlist.splice(idx, 1); showToast(`💔 Removed from wishlist`); }
  else { wishlist.push(product); showToast(`❤️ Added to wishlist!`); }
  document.getElementById('wishlist-count').textContent = wishlist.length;
  renderProducts(activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory));
  renderWishlist();
}

function renderWishlist() {
  const el = document.getElementById('wishlistItems');
  if (!wishlist.length) { el.innerHTML = '<div class="empty-msg">🤍 Your wishlist is empty.<br/>Save items you love!</div>'; return; }
  el.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info"><h4>${item.name}</h4><p>₹${item.price}</p></div>
      <button class="btn-cart" style="padding:0.4rem 0.8rem;font-size:0.8rem" onclick="addToCart(${item.id});toggleWishlist()">Add to Cart</button>
    </div>
  `).join('');
}

function toggleWishlist() {
  renderWishlist();
  document.getElementById('wishlistSidebar').classList.toggle('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}

function toggleSearch() {
  document.getElementById('searchBar').classList.toggle('open');
  if (document.getElementById('searchBar').classList.contains('open')) document.getElementById('searchInput').focus();
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img">${p.emoji}</div>
    <p style="font-size:0.75rem;color:#aaa;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.3rem">${p.category}</p>
    <h2 class="modal-name">${p.name}</h2>
    <div style="color:#f0a500;margin-bottom:0.75rem">${p.rating}</div>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-price">₹${p.price} <span style="font-size:0.9rem;color:#aaa;text-decoration:line-through;font-weight:400">₹${p.original}</span></div>
    <div style="display:flex;gap:0.75rem">
      <button class="btn-primary" style="flex:1" onclick="addToCart(${p.id});closeModal()">🛒 Add to Cart</button>
      <button class="btn-ghost" onclick="toggleWishlistItem(${p.id});closeModal()">🤍 Wishlist</button>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function submitForm(e) {
  e.preventDefault();
  showToast("✅ Message sent! We'll get back to you soon.");
  e.target.reset();
}

// Init
renderProducts(products);