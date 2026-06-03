// ===== Product Data =====
const products = [
  // RINGS
  { id:1,  name:"Floral CZ Ring",         category:"Ring",      sub:"", emoji:"💍", price:149, original:299, rating:"4.7 ★ (211)", badge:"50% OFF", desc:"Elegant floral design ring with CZ stones. Adjustable size, fits all fingers. Lightweight for daily wear." },
  { id:2,  name:"Butterfly Ring",         category:"Ring",      sub:"", emoji:"🦋", price:129, original:249, rating:"4.8 ★ (92)",  badge:"NEW", new:true, desc:"Cute butterfly design ring, gold plated. Perfect everyday accessory for young women." },
  { id:3,  name:"Stone Cocktail Ring",    category:"Ring",      sub:"", emoji:"💎", price:179, original:349, rating:"4.6 ★ (74)",  badge:"HOT", hot:true, desc:"Bold stone-studded cocktail ring. Great for parties and festive occasions." },
  { id:4,  name:"Minimal Band Ring",      category:"Ring",      sub:"", emoji:"⭕", price:99,  original:199, rating:"4.9 ★ (163)", badge:"50% OFF", desc:"Simple, elegant gold-plated band ring. Perfect for stacking or wearing alone every day." },

  // BRACELETS
  { id:5,  name:"Gold Charm Bracelet",    category:"Bracelet",  sub:"", emoji:"🌸", price:249, original:499, rating:"4.8 ★ (143)", badge:"50% OFF", desc:"Delicate gold-plated charm bracelet with heart and star charms. Great gifting option." },
  { id:6,  name:"Beaded Boho Bracelet",   category:"Bracelet",  sub:"", emoji:"🌈", price:179, original:349, rating:"4.7 ★ (131)", badge:"NEW", new:true, desc:"Colorful beaded bracelet inspired by bohemian style. Stackable and fun to mix & match." },
  { id:7,  name:"Pearl Link Bracelet",    category:"Bracelet",  sub:"", emoji:"🤍", price:299, original:599, rating:"4.9 ★ (88)",  badge:"50% OFF", desc:"Elegant pearl link bracelet with gold-tone links. Beautiful for office and casual wear." },
  { id:8,  name:"Oxidised Cuff Bracelet", category:"Bracelet",  sub:"", emoji:"🖤", price:199, original:399, rating:"4.6 ★ (57)",  badge:"HOT", hot:true, desc:"Trendy oxidised silver cuff bracelet with tribal motif. Pairs perfectly with ethnic wear." },

  // EARRINGS – Regular
  { id:9,  name:"Pearl Stud Earrings",    category:"Earring", sub:"Regular",     emoji:"⚪", price:149, original:299, rating:"4.9 ★ (204)", badge:"50% OFF", desc:"Classic freshwater pearl studs. A wardrobe essential — light, elegant and timeless." },
  { id:10, name:"Crystal Hoop Earrings",  category:"Earring", sub:"Regular",     emoji:"⭕", price:179, original:349, rating:"4.7 ★ (119)", badge:"NEW", new:true, desc:"Medium-sized crystal hoops that go with everything. Easy clip-on style, very comfortable." },
  { id:11, name:"Gold Ball Studs",        category:"Earring", sub:"Regular",     emoji:"🟡", price:99,  original:199, rating:"4.8 ★ (176)", badge:"50% OFF", desc:"Simple gold ball studs. Everyday wear made effortlessly elegant." },

  // EARRINGS – Office/College
  { id:12, name:"Minimal Drop Earrings",  category:"Earring", sub:"Office",      emoji:"✨", price:199, original:399, rating:"4.8 ★ (98)",  badge:"OFFICE", desc:"Sleek minimal drop earrings with a delicate chain. Professional and stylish for office & college." },
  { id:13, name:"Rose Gold Studs",        category:"Earring", sub:"Office",      emoji:"🌸", price:149, original:299, rating:"4.9 ★ (134)", badge:"OFFICE", desc:"Subtle rose gold studs — the perfect understated accessory for your work or college look." },
  { id:14, name:"Geometric Bar Earrings", category:"Earring", sub:"Office",      emoji:"📐", price:169, original:329, rating:"4.7 ★ (72)",  badge:"NEW", new:true, desc:"Clean geometric bar drop earrings. Modern and minimal — ideal for professional settings." },

  // EARRINGS – Traditional
  { id:15, name:"Jhumka Earrings",        category:"Earring", sub:"Traditional", emoji:"🔔", price:249, original:499, rating:"4.9 ★ (178)", badge:"50% OFF", desc:"Traditional Jhumka earrings with gold polish and coloured stones. A wardrobe must-have." },
  { id:16, name:"Chandbali Earrings",     category:"Earring", sub:"Traditional", emoji:"🌙", price:299, original:599, rating:"4.8 ★ (91)",  badge:"HOT", hot:true, desc:"Stunning Chandbali earrings with intricate meenakari work. Perfect for festive and traditional occasions." },
  { id:17, name:"Kundan Stud Earrings",   category:"Earring", sub:"Traditional", emoji:"💛", price:219, original:429, rating:"4.7 ★ (63)",  badge:"50% OFF", desc:"Beautiful Kundan stone studs with gold polish. Adds a royal touch to any ethnic outfit." },

  // NECKPIECES
  { id:18, name:"Oxidised Silver Choker", category:"Neckpiece", sub:"", emoji:"📿", price:349, original:699, rating:"4.7 ★ (98)",  badge:"50% OFF", desc:"Trendy oxidised silver choker with tribal design. Pairs well with kurtis and sarees." },
  { id:19, name:"Layered Dainty Chain",   category:"Neckpiece", sub:"", emoji:"🔗", price:299, original:599, rating:"4.8 ★ (112)", badge:"NEW", new:true, desc:"Multi-layered delicate chain neckpiece in gold tone. Effortlessly elevates your daily outfit." },
  { id:20, name:"Simple Pendant Necklace",category:"Neckpiece", sub:"", emoji:"💫", price:249, original:499, rating:"4.9 ★ (87)",  badge:"50% OFF", desc:"Dainty star/moon pendant on a gold chain. Minimal and chic for everyday wear." },
  { id:21, name:"Kundan Pendant Set",     category:"Neckpiece", sub:"", emoji:"🌟", price:399, original:799, rating:"4.6 ★ (54)",  badge:"HOT", hot:true, desc:"Kundan pendant with matching chain. Lightweight yet looks stunning with ethnic and indo-western outfits." },

  // HAIR CLIPS
  { id:22, name:"Pearl Hair Clip",        category:"HairClip", sub:"", emoji:"🤍", price:129, original:249, rating:"4.8 ★ (143)", badge:"NEW", new:true, desc:"Elegant pearl embellished hair clip. Adds a graceful touch to any hairstyle." },
  { id:23, name:"Floral Hair Pin Set",    category:"HairClip", sub:"", emoji:"🌺", price:149, original:299, rating:"4.7 ★ (98)",  badge:"50% OFF", desc:"Set of 3 floral bobby pins with enamel detailing. Mix and match for a fun, pretty look." },
  { id:24, name:"Butterfly Hair Clip",    category:"HairClip", sub:"", emoji:"🦋", price:119, original:229, rating:"4.9 ★ (167)", badge:"HOT", hot:true, desc:"Shimmery butterfly clip — clips neatly and holds hair securely. Very lightweight." },
  { id:25, name:"Gold Leaf Hair Pin",     category:"HairClip", sub:"", emoji:"🍃", price:139, original:269, rating:"4.6 ★ (72)",  badge:"NEW", new:true, desc:"Delicate gold-tone leaf hair pin. Beautiful for functions or everyday wear." },
];

const giftBoxes = [
  { id:'g1', name:'Starter Box',  emoji:'🎀', price:799  },
  { id:'g2', name:'Classic Box',  emoji:'💝', price:1199 },
  { id:'g3', name:'Premium Box',  emoji:'👑', price:1999 },
];

let cart = [];
let wishlist = [];
let activeCategory = 'All';
let activeSubTab = 'all';

// ===== Render Products =====
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--muted);padding:2.5rem;grid-column:1/-1;font-size:0.9rem">No products found.</p>';
    return;
  }
  grid.innerHTML = list.map(p => {
    const inWish = wishlist.find(w => w.id === p.id);
    const badgeClass = p.new ? 'tag-new' : p.hot ? 'tag-hot' : '';
    const subLabel = p.sub ? `<p class="p-sub">${p.sub === 'Office' ? 'Office / College' : p.sub}</p>` : '';
    return `
    <div class="product-card">
      <div class="product-img">
        ${p.badge ? `<span class="badge ${badgeClass}">${p.badge}</span>` : ''}
        <span style="font-size:4rem">${p.emoji}</span>
        <button class="w-heart" onclick="toggleWish(${p.id})">${inWish ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-info">
        <p class="p-cat">${p.category === 'HairClip' ? 'Hair Clips' : p.category}</p>
        ${subLabel}
        <h3 class="p-name">${p.name}</h3>
        <div class="p-rating">${p.rating}</div>
        <div class="p-price">
          <span class="p-curr">₹${p.price}</span>
          <span class="p-orig">₹${p.original}</span>
          <span class="p-off">${Math.round((1 - p.price/p.original)*100)}% off</span>
        </div>
        <div class="p-actions">
          <button class="btn-add" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
          <button class="btn-eye" onclick="openModal(${p.id})">👁</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== Tabs =====
function setTab(btn, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = cat;
  activeSubTab = 'all';
  const subTabs = document.getElementById('earringSubTabs');
  if (cat === 'Earring') {
    subTabs.style.display = 'flex';
    document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.sub-tab').classList.add('active');
    renderProducts(products.filter(p => p.category === 'Earring'));
  } else {
    subTabs.style.display = 'none';
    renderProducts(cat === 'All' ? products : products.filter(p => p.category === cat));
  }
}

function setSubTab(btn, sub) {
  document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeSubTab = sub;
  renderProducts(sub === 'all'
    ? products.filter(p => p.category === 'Earring')
    : products.filter(p => p.category === 'Earring' && p.sub === sub)
  );
}

function filterByCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
    const map = { Ring:'ring', Bracelet:'bracelet', Earring:'earring', Neckpiece:'neckpiece', HairClip:'hair' };
    if (t.textContent.toLowerCase().includes(map[cat] || cat.toLowerCase())) t.classList.add('active');
  });
  const subTabs = document.getElementById('earringSubTabs');
  subTabs.style.display = cat === 'Earring' ? 'flex' : 'none';
  renderProducts(products.filter(p => p.category === cat));
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  renderProducts(!q ? products : products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.sub && p.sub.toLowerCase().includes(q))
  ));
}

function scrollToGift() {
  document.getElementById('giftbox').scrollIntoView({ behavior: 'smooth' });
}

// ===== Cart =====
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartBadge();
  showToast(`✅ ${p.name} added to cart!`);
}

function addGiftToCart(name, price) {
  const box = giftBoxes.find(g => g.name === name);
  const ex = cart.find(c => c.id === box.id);
  if (ex) ex.qty++;
  else cart.push({ id: box.id, name: box.name, emoji: box.emoji, price, qty: 1 });
  updateCartBadge();
  showToast(`🎁 ${name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge(); renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartBadge(); renderCart(); }
}

function updateCartBadge() {
  document.getElementById('cart-count').textContent = cart.reduce((s, c) => s + c.qty, 0);
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    el.innerHTML = '<div class="empty-msg">🛒 Your cart is empty.<br/>Explore our beautiful collection!</div>';
    footer.style.display = 'none';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-icon">${item.emoji}</div>
      <div class="ci-info">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="removeFromCart('${item.id}')">🗑</button>
    </div>
  `).join('');
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = total;
  document.getElementById('freeShipNote').textContent =
    total >= 499 ? '🎉 You qualify for FREE shipping!' : `Add ₹${499 - total} more for FREE shipping`;
  footer.style.display = 'block';
}

function toggleCart() {
  renderCart();
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}

function checkout() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  showToast(`🎉 Order ₹${total} placed! Shipping: ${total >= 499 ? 'FREE' : '₹49'}. Thank you!`);
  cart = []; updateCartBadge(); renderCart(); closeAll();
}

// ===== Wishlist =====
function toggleWish(id) {
  const p = products.find(x => x.id === id);
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) { wishlist.splice(idx, 1); showToast('💔 Removed from wishlist'); }
  else { wishlist.push(p); showToast('❤️ Added to wishlist!'); }
  document.getElementById('wishlist-count').textContent = wishlist.length;
  const list = activeCategory === 'All' ? products
    : activeCategory === 'Earring' && activeSubTab !== 'all'
      ? products.filter(p => p.category === 'Earring' && p.sub === activeSubTab)
      : products.filter(p => p.category === activeCategory);
  renderProducts(list);
  renderWishlist();
}

function renderWishlist() {
  const el = document.getElementById('wishlistItems');
  if (!wishlist.length) {
    el.innerHTML = '<div class="empty-msg">🤍 Your wishlist is empty.<br/>Save items you love!</div>';
    return;
  }
  el.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="ci-icon">${item.emoji}</div>
      <div class="ci-info"><h4>${item.name}</h4><p>₹${item.price}</p></div>
      <button class="btn-add" style="padding:0.35rem 0.7rem;font-size:0.78rem;border-radius:6px" onclick="addToCart(${item.id})">Add</button>
    </div>
  `).join('');
}

function toggleWishlist() {
  renderWishlist();
  document.getElementById('wishlistSidebar').classList.toggle('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}

// ===== Search =====
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
}

// ===== Modal =====
function openModal(id) {
  const p = products.find(x => x.id === id);
  const subLabel = p.sub ? `<span style="font-size:0.75rem;background:var(--cream);color:var(--gold);padding:0.2rem 0.6rem;border-radius:20px;font-weight:600;display:inline-block;margin-bottom:0.5rem">${p.sub === 'Office' ? 'Office / College' : p.sub}</span><br/>` : '';
  document.getElementById('modalContent').innerHTML = `
    <div class="m-img">${p.emoji}</div>
    <p style="font-size:0.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.3rem">${p.category === 'HairClip' ? 'Hair Clips' : p.category}</p>
    ${subLabel}
    <h2 class="m-name">${p.name}</h2>
    <div style="color:#d4a017;font-size:0.82rem;margin:0.4rem 0 0.75rem">${p.rating}</div>
    <p class="m-desc">${p.desc}</p>
    <div class="m-price">₹${p.price} <span style="font-size:0.9rem;color:#bbb;text-decoration:line-through;font-weight:400">₹${p.original}</span></div>
    <div class="m-actions">
      <button class="btn-primary" style="flex:1" onclick="addToCart(${p.id});closeModal()">🛒 Add to Cart</button>
      <button class="btn-ghost" onclick="toggleWish(${p.id});closeModal()">🤍</button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

// ===== Helpers =====
function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function submitForm(e) {
  e.preventDefault();
  showToast("✅ Message sent! We'll get back to you soon.");
  e.target.reset();
}

// ===== Init =====
renderProducts(products);