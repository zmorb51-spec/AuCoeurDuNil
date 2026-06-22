const products = [
  { id: 1, name: 'Nile Line Tee 01', category: 'Jersey', color: 'Ink / Papyrus', price: 2900, fabric: 'Compact cotton · 240 GSM', image: 'assets/nile-line-tee.png', tone: '' },
  { id: 2, name: 'River Trousers 01', category: 'Trousers', color: 'Ink', price: 5200, fabric: 'Cotton twill · 280 GSM', image: 'assets/papyrus-look.png', tone: 'tone-dark' },
  { id: 3, name: 'After Dusk Coat', category: 'Outerwear', color: 'Ink', price: 11800, fabric: 'Cotton–linen · 340 GSM', image: 'assets/nile-dusk-hero.png', tone: 'tone-dark' },
  { id: 4, name: 'Current Shirt', category: 'Shirts', color: 'Nile', price: 4300, fabric: 'Linen · 165 GSM', image: 'assets/atelier-still-life.png', tone: 'tone-blue' },
  { id: 5, name: 'Quiet Jersey 02', category: 'Jersey', color: 'Ink', price: 2400, fabric: 'Compact cotton · 240 GSM', image: 'assets/atelier-still-life.png', tone: 'tone-dark' },
  { id: 6, name: 'Nile Line Hoodie 01', category: 'Jersey', color: 'Papyrus / Nile', price: 5900, fabric: 'Loopback cotton · 420 GSM', image: 'assets/nile-line-hoodie.png', tone: '' },
  { id: 7, name: 'Delta Volume Trouser', category: 'Trousers', color: 'Silt', price: 5600, fabric: 'Cotton–Tencel · 245 GSM', image: 'assets/nile-dusk-hero.png', tone: '' },
  { id: 8, name: 'Bronze Line Brooch', category: 'Objects', color: 'Oxidised bronze', price: 1800, fabric: 'Hand-finished bronze', image: 'assets/atelier-still-life.png', tone: '' },
  { id: 9, name: 'Nile Line Abaya 01', category: 'Abayas', color: 'Ink / Papyrus', price: 8900, fabric: 'Fluid matte crepe · 210 GSM', image: 'assets/nile-line-abaya.png', tone: '' },
  { id: 10, name: 'Delta Fold Short Jacket', category: 'Outerwear', color: 'Charcoal / Papyrus', price: 7400, fabric: 'Linen–cotton twill · 280 GSM', image: 'assets/delta-fold-short-jacket-techpack.png', tone: '', board: true },
  { id: 11, name: 'Papyrus Current Tunic', category: 'Tunics', color: 'Papyrus / Nile', price: 6200, fabric: 'Linen–rayon · 230 GSM', image: 'assets/papyrus-current-layered-tunic-techpack.png', tone: '', board: true },
  { id: 12, name: 'Silt Volume River Trouser', category: 'Trousers', color: 'Silt / Nile', price: 5800, fabric: 'Cotton–Tencel twill · 285 GSM', image: 'assets/silt-volume-river-trouser-techpack.png', tone: '', board: true },
  { id: 13, name: 'Blue Hour Light Coat', category: 'Outerwear', color: 'Nile / Papyrus', price: 9600, fabric: 'Linen–nylon · 220 GSM', image: 'assets/blue-hour-light-coat-techpack.png', tone: '', board: true }
];

const state = {
  cart: JSON.parse(localStorage.getItem('acdn-cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('acdn-wishlist') || '[]'),
  filter: 'All'
};

const money = n => `EGP ${n.toLocaleString('en-US')}`;
const app = document.getElementById('app');
const heart = active => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></svg>`;

function productCard(p) {
  const active = state.wishlist.includes(p.id);
  return `<article class="product-card reveal" data-product="${p.id}">
    <div class="product-visual ${p.tone} ${p.board ? 'board' : ''}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <button class="wish-button ${active ? 'active' : ''}" data-wish="${p.id}" aria-label="${active ? 'Remove from' : 'Add to'} wishlist">${heart()}</button>
      <button class="quick-add" data-add="${p.id}">Quick add — one size</button>
    </div>
    <div class="product-info"><h3>${p.name}</h3><p>${p.color} · ${p.fabric}</p><p class="price">${money(p.price)}</p></div>
  </article>`;
}

const home = () => `
  <section class="hero">
    <div class="hero-media"><img src="assets/nile-dusk-hero.png" alt="Au Cœur du Nil After Dusk collection on the Nile"></div>
    <div class="hero-copy"><p class="eyebrow">Chapter I · SS 2026</p><h1 class="display">Where the river remembers.</h1><div class="hero-meta"><a class="button button-light" href="#/collections">Discover Chapter I</a><span class="hero-index">01 <i></i> 03</span></div></div>
  </section>
  <section class="intro"><div class="intro-inner reveal"><p class="eyebrow">Au Cœur du Nil</p><h2>Clothing shaped between <em>Cairo’s memory</em> and Parisian restraint.</h2><a class="underlink" href="#/about">Enter the maison</a></div></section>
  <section class="collection-feature">
    <div class="collection-image"><img src="assets/papyrus-look.png" alt="Papyrus look from Chapter I" loading="lazy"></div>
    <div class="collection-copy reveal"><div><p class="eyebrow">The first chapter</p><h2>River<br><em>Forms</em></h2></div><p>A study in movement: linen that holds the trace of a sail, trousers cut with the width of water, and shadow carried as colour.</p><a class="underlink" href="#/shop">Shop the collection</a></div>
  </section>
  <section><div class="section-head reveal"><div><p class="eyebrow">Selected forms</p><h2>The first edition</h2></div><a class="underlink" href="#/shop">View all pieces</a></div><div class="product-grid">${products.slice(0,4).map(productCard).join('')}</div></section>
  <section class="story-band"><div class="story-number">01</div><div class="reveal"><p class="eyebrow">Material note</p><h2>Made slowly.<br>Meant to move.</h2><p>Egyptian linen, compact cotton and oxidised metal are chosen for how they age—not how they appear for a moment. Each garment is cut in limited runs and finished in Cairo by specialist hands.</p><a class="underlink" href="#/journal">Read the material journal</a></div></section>
  <section class="design-note"><figure><img src="assets/nile-line-tee.png" alt="Nile Line T-shirt front and back design" loading="lazy"></figure><div class="design-note-copy reveal"><p class="eyebrow">Signature code · 01</p><h2>The river in front.<br>The embrace behind.</h2><p>A single papyrus line maps the Nile across the front. At the back neck, the two hands hold the river as a private signature—small, calm and immediately ours.</p><a class="underlink" href="#/shop">View signature pieces</a></div></section>
  <section class="image-break"><img src="assets/atelier-still-life.png" alt="Textiles and bronze object in the atelier" loading="lazy"></section>`;

const shop = () => `<section class="page-hero"><p class="eyebrow">Edition 01 / 2026</p><h1 class="display">The collection</h1><p>Architectural layers, quiet volume and tactile cloth. Designed in Cairo and produced in limited editions.</p></section>
  <div class="shop-toolbar"><div class="filter-group">${['All','Abayas','Outerwear','Tunics','Shirts','Trousers','Jersey','Objects'].map(x=>`<button class="filter-button ${state.filter===x?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><select class="sort-select" id="sort-select" aria-label="Sort products"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>
  <div class="product-grid collection-grid" id="shop-grid">${products.filter(p=>state.filter==='All'||p.category===state.filter).map(productCard).join('')}</div>`;

const collections = () => `<section class="page-hero dark"><p class="eyebrow">Seasonless chapters</p><h1 class="display">Collections</h1><p>Rather than seasons, we publish chapters: each one a precise exchange between place, material and movement.</p></section>
  <section class="maison-grid"><div class="maison-image"><img src="assets/nile-dusk-hero.png" alt="After dusk collection"></div><div class="maison-copy"><p class="eyebrow">Chapter I · Current</p><h2>River Forms</h2><p>Eight foundation pieces held between structure and flow. Ink, Nile, papyrus and silt become a wearable landscape.</p><a class="underlink" href="#/shop">Explore the chapter</a></div></section>
  <section class="maison-grid"><div class="maison-copy"><p class="eyebrow">Chapter II · Coming autumn 2026</p><h2>After the Flood</h2><p>A study in replenishment: dense indigo cloth, softened tailoring, and surfaces marked by hand.</p><span class="underlink">Preview by appointment</span></div><div class="maison-image"><img src="assets/atelier-still-life.png" alt="Materials for the next chapter"></div></section>`;

const lookbook = () => `<section class="page-hero dark"><p class="eyebrow">Lookbook · River Forms</p><h1 class="display">One river,<br>many silences.</h1></section><div class="editorial-grid"><figure class="look look-a"><img src="assets/nile-dusk-hero.png" alt="Look 01"><figcaption class="look-label">Look 01 · After Dusk</figcaption></figure><figure class="look look-b"><img src="assets/papyrus-look.png" alt="Look 02"><figcaption class="look-label">Look 02 · Papyrus</figcaption></figure><figure class="look look-c"><img src="assets/atelier-still-life.png" alt="Atelier detail"><figcaption class="look-label">Atelier note · Cloth and bronze</figcaption></figure></div>`;

const journal = () => `<section class="page-hero"><p class="eyebrow">Notes from the maison</p><h1 class="display">Journal</h1></section><div class="journal-grid"><article class="article-card"><img src="assets/atelier-still-life.png" alt="Linen and bronze"><p class="eyebrow">Materials · 06.06.26</p><h2>The intelligence of linen</h2><p>Why irregularity, breath and memory make linen our first language.</p><a class="underlink" href="#/article/linen">Read note</a></article><article class="article-card"><img src="assets/nile-dusk-hero.png" alt="The Nile at dusk"><p class="eyebrow">Places · 14.05.26</p><h2>Blue hour on the river</h2><p>A colour study made between the final light and the first shadow.</p><a class="underlink" href="#/article/blue-hour">Read note</a></article><article class="article-card"><img src="assets/papyrus-look.png" alt="Architectural tailoring"><p class="eyebrow">Process · 28.04.26</p><h2>Volume without noise</h2><p>Cutting generous shapes with economy, balance and human movement in mind.</p><a class="underlink" href="#/article/volume">Read note</a></article></div>`;

const about = () => `<section class="page-hero dark"><p class="eyebrow">The maison</p><h1 class="display">At the heart<br>of the Nile.</h1><p>Au Cœur du Nil is an independent Cairo fashion house connecting Egyptian material intelligence, French elegance and Japanese clarity.</p></section><section class="maison-grid"><div class="maison-image"><img src="assets/papyrus-look.png" alt="Au Coeur du Nil silhouette"></div><div class="maison-copy"><p class="eyebrow">Our point of view</p><h2>Not a motif.<br>A way of making.</h2><p>Egypt enters our work through proportion, light, craft and the emotional geography of the river—not through costume. France brings precision and sensual restraint. Japan brings space, quiet and respect for material.</p><p>The result is contemporary clothing with a long memory: fewer pieces, deeper character, and a life beyond one season.</p></div></section><section class="values-grid"><div class="value"><b>01</b><h3>Place</h3><p>Cairo is our working context, not a decorative reference.</p></div><div class="value"><b>02</b><h3>Material</h3><p>Natural cloth, honest weight and finishes that improve with wear.</p></div><div class="value"><b>03</b><h3>Restraint</h3><p>Meaning is held in cut, proportion and detail.</p></div><div class="value"><b>04</b><h3>Continuity</h3><p>Limited chapters designed to live together across years.</p></div></section>`;

const account = () => `<section class="account-shell"><form class="form-card" id="account-form"><p class="eyebrow">Client account</p><h1>Welcome back.</h1><p>Access private editions, saved pieces and order history.</p><div class="field"><label>Email</label><input type="email" required></div><div class="field"><label>Password</label><input type="password" required></div><button class="button button-dark" type="submit">Sign in</button><p class="center"><a class="underlink" href="#/register">Create an account</a></p></form></section>`;

const tracking = () => `<section class="tracking-shell"><form class="form-card" id="tracking-form"><p class="eyebrow">Client services</p><h1>Follow your order.</h1><p>Enter the order number and email address used at checkout.</p><div class="field"><label>Order number</label><input required placeholder="ACDN-0000"></div><div class="field"><label>Email address</label><input type="email" required></div><button class="button button-dark" type="submit">Track order</button><div class="tracking-result" id="tracking-result"><p class="eyebrow">ACDN · In transit</p><h2 class="serif">Your order is moving toward you.</h2><div class="tracking-line"></div><div class="tracking-dots"><i></i><i></i><i></i></div><p>Confirmed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In transit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delivered</p></div></form></section>`;

const checkout = () => {
  const total = state.cart.reduce((sum,id)=>sum+(products.find(p=>p.id===id)?.price||0),0);
  return `<section class="checkout-shell"><form id="checkout-form"><p class="eyebrow">Secure checkout</p><h1 class="checkout-title">Delivery details</h1><div class="field-row"><div class="field"><label>First name</label><input required></div><div class="field"><label>Last name</label><input required></div></div><div class="field"><label>Email address</label><input type="email" required></div><div class="field"><label>Street address</label><input required></div><div class="field-row"><div class="field"><label>City</label><input required></div><div class="field"><label>Country</label><select><option>Egypt</option><option>France</option><option>United Arab Emirates</option><option>United Kingdom</option></select></div></div><div class="field"><label>Payment method</label><select><option>Card payment</option><option>Cash on delivery — Cairo only</option></select></div><button class="button button-dark full" type="submit">Continue to secure payment</button></form><aside class="order-panel"><p class="eyebrow">Your order</p>${state.cart.length?state.cart.map(id=>{const p=products.find(x=>x.id===id);return `<div class="order-row"><span>${p.name}</span><span>${money(p.price)}</span></div>`}).join(''):'<p>Your bag is empty.</p>'}<div class="order-row"><span>Delivery</span><span>Complimentary</span></div><div class="order-row order-total"><strong>Total</strong><strong>${money(total)}</strong></div></aside></section>`;
};

const cartPage = () => `<section class="cart-page"><p class="eyebrow">Selection</p><h1>Your bag</h1>${state.cart.length?state.cart.map(id=>{const p=products.find(x=>x.id===id);return `<div class="cart-page-item"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${p.color} · One size</p></div><div><p>${money(p.price)}</p><button class="underlink remove-item" data-remove="${p.id}">Remove</button></div></div>`}).join('')+`<a class="button button-dark" href="#/checkout">Checkout</a>`:'<div class="wishlist-empty"><p class="serif" style="font-size:35px">Your bag is quiet.</p><a class="underlink" href="#/shop">Discover the collection</a></div>'}</section>`;

const wishlist = () => `<section class="page-hero"><p class="eyebrow">Saved selection</p><h1 class="display">Wishlist</h1></section>${state.wishlist.length?`<div class="product-grid">${products.filter(p=>state.wishlist.includes(p.id)).map(productCard).join('')}</div>`:'<div class="wishlist-empty"><p class="serif" style="font-size:35px">Nothing saved yet.</p><a class="underlink" href="#/shop">Discover the collection</a></div>'}`;

const simple = (title, text) => `<section class="simple-page"><p class="eyebrow">Au Cœur du Nil</p><h1>${title}</h1><p style="max-width:620px;line-height:1.9;color:#68635c">${text}</p><a class="underlink" href="#/">Return home</a></section>`;

const routes = {
  '/': home, '/shop': shop, '/collections': collections, '/lookbook': lookbook, '/journal': journal, '/about': about,
  '/account': account, '/tracking': tracking, '/checkout': checkout, '/cart': cartPage, '/wishlist': wishlist,
  '/shipping': () => simple('Delivery & returns', 'Egypt orders are delivered in 2–4 business days. International delivery is tracked and calculated at checkout. Unworn garments may be returned within 14 days in their original condition.'),
  '/care': () => simple('Garment care', 'Air garments between wears. Wash natural fibres cool and sparingly. Store knitwear folded and keep oxidised bronze away from moisture. Every piece includes a material-specific care card.'),
  '/contact': () => simple('Client services', 'Our Cairo client team is available Sunday–Thursday, 10:00–18:00 EET, at care@aucoeurdunil.com.'),
  '/responsibility': () => simple('Responsibility', 'We work in limited production runs, prefer traceable natural fibres and repair before replacement. Our first-year target is 85% order-based or tightly planned production.'),
  '/register': account
};

function currentPath() { return (location.hash.slice(1).split('?')[0] || '/').replace(/\/$/,'') || '/'; }
function render() {
  const path = currentPath();
  const route = routes[path] || (path.startsWith('/article/') ? () => simple('Journal note', 'A complete editorial archive will open with the first collection. This preview establishes the reading experience and content system.') : () => simple('Page not found', 'The page you are looking for has moved with the current.'));
  app.innerHTML = route();
  window.scrollTo(0,0);
  app.focus({preventScroll:true});
  bindDynamic();
  observeReveals();
}

function saveState() {
  localStorage.setItem('acdn-cart', JSON.stringify(state.cart));
  localStorage.setItem('acdn-wishlist', JSON.stringify(state.wishlist));
  updateChrome();
}
function addToCart(id) { state.cart.push(id); saveState(); toast('Added to your bag'); updateCartDrawer(); }
function removeFromCart(id) { const i=state.cart.indexOf(id); if(i>-1) state.cart.splice(i,1); saveState(); updateCartDrawer(); if(currentPath()==='/cart') render(); }
function toggleWish(id) { state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter(x=>x!==id) : [...state.wishlist,id]; saveState(); render(); toast(state.wishlist.includes(id)?'Saved to your wishlist':'Removed from wishlist'); }
function updateChrome() {
  document.getElementById('cart-count').textContent = state.cart.length;
  document.getElementById('wishlist-count').textContent = state.wishlist.length;
  document.getElementById('drawer-count').textContent = state.cart.length;
}
function updateCartDrawer() {
  const items = document.getElementById('cart-items'); const empty = document.getElementById('cart-empty'); const summary = document.getElementById('cart-summary');
  items.innerHTML = state.cart.map(id=>{const p=products.find(x=>x.id===id);return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${p.color} · One size</p><p style="margin-top:12px;color:inherit">${money(p.price)}</p></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name}">×</button></div>`}).join('');
  empty.hidden = !!state.cart.length; summary.hidden = !state.cart.length;
  document.getElementById('cart-total').textContent = money(state.cart.reduce((s,id)=>s+products.find(p=>p.id===id).price,0));
  items.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>removeFromCart(Number(b.dataset.remove)));
}
function toast(message) { const t=document.getElementById('toast'); t.textContent=message; t.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove('show'),2200); }

function togglePanel(name) {
  const el=document.getElementById(name); const overlay=document.getElementById('overlay'); const isOpen=el.classList.toggle('open'); el.setAttribute('aria-hidden',String(!isOpen)); overlay.hidden=!isOpen; document.body.classList.toggle('locked',isOpen); if(name==='cart-drawer') updateCartDrawer();
}
function bindDynamic() {
  app.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addToCart(Number(b.dataset.add)));
  app.querySelectorAll('[data-wish]').forEach(b=>b.onclick=()=>toggleWish(Number(b.dataset.wish)));
  app.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>removeFromCart(Number(b.dataset.remove)));
  app.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter; render();});
  const sort=document.getElementById('sort-select'); if(sort) sort.onchange=()=>{const list=[...products.filter(p=>state.filter==='All'||p.category===state.filter)]; if(sort.value==='low')list.sort((a,b)=>a.price-b.price);if(sort.value==='high')list.sort((a,b)=>b.price-a.price);document.getElementById('shop-grid').innerHTML=list.map(productCard).join('');bindDynamic();observeReveals();};
  const trackingForm=document.getElementById('tracking-form'); if(trackingForm)trackingForm.onsubmit=e=>{e.preventDefault();document.getElementById('tracking-result').classList.add('visible');};
  const accountForm=document.getElementById('account-form'); if(accountForm)accountForm.onsubmit=e=>{e.preventDefault();toast('Account preview — authentication connects at launch');};
  const checkoutForm=document.getElementById('checkout-form'); if(checkoutForm)checkoutForm.onsubmit=e=>{e.preventDefault();toast('Secure payment connects at launch');};
}
function observeReveals() { const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}); document.querySelectorAll('.reveal').forEach(x=>io.observe(x)); }

document.addEventListener('click', e => {
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='cart') togglePanel('cart-drawer');
  if(action==='search') { togglePanel('search-panel'); setTimeout(()=>document.getElementById('search-input')?.focus(),200); }
  if(action==='toggle-menu') { const menu=document.getElementById('mobile-menu'); const open=menu.classList.toggle('open'); menu.setAttribute('aria-hidden',String(!open)); document.body.classList.toggle('locked',open); }
});
document.getElementById('overlay').onclick=()=>{ if(document.getElementById('cart-drawer').classList.contains('open'))togglePanel('cart-drawer'); };
document.getElementById('search-input').addEventListener('input', e=>{const q=e.target.value.toLowerCase();document.getElementById('search-results').innerHTML=q?products.filter(p=>(p.name+p.category+p.color).toLowerCase().includes(q)).slice(0,4).map(p=>`<a class="search-result" href="#/shop" data-action="search"><img src="${p.image}" alt="${p.name}"><p>${p.name} — ${money(p.price)}</p></a>`).join(''):'';});
document.getElementById('newsletter-form').onsubmit=e=>{e.preventDefault();document.getElementById('newsletter-note').textContent='Thank you. Your first letter will arrive soon.';e.target.reset();};
document.getElementById('brand-logo').addEventListener('load',e=>{e.target.style.display='block';});
window.addEventListener('hashchange',render);
updateChrome(); updateCartDrawer(); render();
