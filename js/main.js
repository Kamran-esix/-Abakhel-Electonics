/* =========================================================
   SHARED: mobile nav, toast, quote request modal (sends
   the request straight to WhatsApp — no cart, no online
   payment, matching a Cash-on-Delivery / WhatsApp-order
   business model).
   Loaded on every page.
   ========================================================= */

const WHATSAPP_NUMBER = "923449898449"; // Abakhel Electronics WhatsApp number

/* ---------- Category icon illustrations ---------- */
/* Simple original line-icons per category — swap for real product
   photos in product-card__img / cat-card backgrounds when available. */
function categoryIconSvg(cat) {
  const icons = {
    accessories: `<path d="M4 9h16v6H4zM8 9V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"/>`,
    switches: `<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M12 8v4l3 2"/>`,
    lighting: `<circle cx="12" cy="10" r="6"/><path d="M9 21h6M10 17h4M12 4V2"/>`,
    breakers: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>`,
    boards: `<rect x="3" y="4" width="18" height="14" rx="1"/><path d="M7 8h2M11 8h2M15 8h2M7 12h2M11 12h2M15 12h2"/>`,
    wires: `<path d="M4 6c4 0 4 12 8 12s4-12 8-12" /><circle cx="4" cy="6" r="1.4"/><circle cx="20" cy="6" r="1.4"/>`,
    fans: `<circle cx="12" cy="12" r="1.6"/><path d="M12 12c0-4 3-7 6-6-1 3-2 6-6 6ZM12 12c-4 0-7-3-6-6 3-1 6-2 6 6ZM12 12c0 4-3 7-6 6 1-3 2-6 6-6ZM12 12c4 0 7 3 6 6-3 1-6 2-6-6Z"/>`,
    appliances: `<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h.01M9 10h6"/><circle cx="9" cy="15" r="2.4"/>`,
    industrial: `<path d="M3 21V10l6 4v-4l6 4v-4l6 4v7Z"/><path d="M3 21h18"/>`,
    tools: `<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.3 2.3-2-2Z"/>`,
    safety: `<path d="m12 3 7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z"/><path d="m9.5 12 2 2 3.5-4"/>`,
    tv: `<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>`,
    fridge: `<rect x="6" y="2" width="12" height="20" rx="1.5"/><path d="M6 9h12M9 5v2M9 12v3"/>`,
    cooler: `<rect x="4" y="6" width="16" height="14" rx="1.5"/><path d="M8 6V4h8v2M7 11h10M7 15h10"/>`,
    washer: `<rect x="4" y="3" width="16" height="18" rx="1.5"/><circle cx="12" cy="13" r="5"/><path d="M12 13h3M7 6h.01M10 6h.01"/>`,
  };
  const inner = icons[cat] || icons.accessories;
  return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2f6fed" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

/* Picks the richer illustration for appliance products (p.icon set),
   falling back to the small category line-icon for everything else. */
function productImageHtml(p) {
  if (p.icon && productIllustrationSvg(p.icon)) return productIllustrationSvg(p.icon);
  return categoryIconSvg(p.cat);
}

/* ---------- Product illustration set (large, full-color) ---------- */
/* Original artwork — safe to use commercially. These are richer
   illustrations for the appliance product cards; categoryIconSvg()
   below covers the smaller electrical-parts category icons.
   Swap for real photos in product-card__img once available — see
   README.md for exactly where. */
function productIllustrationSvg(key) {
  const illustrations = {
    tv: `
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="20" width="92" height="58" rx="4" fill="#0f2a4a"/>
        <rect x="19" y="25" width="82" height="48" rx="2" fill="#163a63"/>
        <rect x="24" y="30" width="72" height="38" fill="#2f6fed" opacity="0.55"/>
        <path d="M40 40h30M40 48h20" stroke="#cfe0ff" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
        <rect x="53" y="78" width="14" height="10" fill="#0f2a4a"/>
        <rect x="36" y="88" width="48" height="5" rx="2.5" fill="#0f2a4a"/>
        <circle cx="60" cy="49" r="16" fill="#F4B400" opacity="0.15"/>
      </svg>`,
    fridge: `
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="34" y="10" width="52" height="98" rx="6" fill="#e9edf3"/>
        <rect x="34" y="10" width="52" height="34" rx="6" fill="#dfe4ea"/>
        <rect x="34" y="44" width="52" height="1.5" fill="#b9c2cf"/>
        <rect x="63" y="18" width="4" height="18" rx="2" fill="#0f2a4a"/>
        <rect x="63" y="52" width="4" height="48" rx="2" fill="#0f2a4a"/>
        <rect x="40" y="52" width="18" height="4" rx="2" fill="#2f6fed"/>
        <circle cx="41" cy="26" r="2" fill="#9aa6b4"/>
      </svg>`,
    cooler: `
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="26" width="72" height="66" rx="6" fill="#eef1f5"/>
        <rect x="24" y="26" width="72" height="16" rx="6" fill="#0f2a4a"/>
        <circle cx="34" cy="34" r="2.4" fill="#F4B400"/>
        <circle cx="42" cy="34" r="2.4" fill="#4c85f5"/>
        <rect x="32" y="50" width="56" height="6" rx="3" fill="#9aa6b4"/>
        <rect x="32" y="62" width="56" height="6" rx="3" fill="#9aa6b4"/>
        <rect x="32" y="74" width="56" height="6" rx="3" fill="#9aa6b4"/>
        <circle cx="38" cy="98" r="6" fill="#0f2a4a"/>
        <circle cx="82" cy="98" r="6" fill="#0f2a4a"/>
        <path d="M14 50c6 4 6 10 0 14M8 50c8 5 8 13 0 18" stroke="#4c85f5" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
      </svg>`,
    washer: `
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="14" width="68" height="92" rx="8" fill="#e9edf3"/>
        <rect x="26" y="14" width="68" height="16" rx="8" fill="#0f2a4a"/>
        <circle cx="36" cy="22" r="2" fill="#F4B400"/>
        <circle cx="60" cy="66" r="24" fill="#dfe4ea"/>
        <circle cx="60" cy="66" r="24" fill="none" stroke="#0f2a4a" stroke-width="3"/>
        <circle cx="60" cy="66" r="16" fill="none" stroke="#2f6fed" stroke-width="2.5" opacity="0.6"/>
        <path d="M50 60c3 6 14 6 18 0" stroke="#2f6fed" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`,
  };
  return illustrations[key] || "";
}

/* ---------- Toast ---------- */

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.querySelector("span").textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* ---------- Quote modal ---------- */

function openQuoteModal(productName) {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  const field = document.getElementById("quoteProductField");
  if (field) field.value = productName || "";
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}
function closeQuoteModal() {
  document.getElementById("quoteModal")?.classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ---------- WhatsApp helper ---------- */

function whatsappLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buildQuoteMessage({ product, name, phone, qty }) {
  const lines = [
    "Hello Abakhel Electronics, I'd like a quote:",
    product ? `Product: ${product}` : null,
    qty ? `Quantity: ${qty}` : null,
    `Name: ${name}`,
    `Phone: ${phone}`,
  ].filter(Boolean);
  return lines.join("\n");
}

/* ---------- Init on every page ---------- */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  navToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Request-a-quote buttons anywhere on the page
  document.querySelectorAll("[data-request-quote]").forEach((btn) =>
    btn.addEventListener("click", () => openQuoteModal(btn.getAttribute("data-request-quote")))
  );
  document.getElementById("quoteModalClose")?.addEventListener("click", closeQuoteModal);
  document.getElementById("quoteModal")?.addEventListener("click", (e) => {
    if (e.target.id === "quoteModal") closeQuoteModal();
  });

  const quoteForm = document.getElementById("quoteForm");
  quoteForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = document.getElementById("quoteProductField")?.value || "";
    const name = quoteForm.name.value.trim();
    const phone = quoteForm.phone.value.trim();
    const qty = quoteForm.qty.value.trim();

    const message = buildQuoteMessage({ product, name, phone, qty });
    window.open(whatsappLink(message), "_blank", "noopener");

    closeQuoteModal();
    quoteForm.reset();
    showToast("Opening WhatsApp to send your request…");
  });

  // Escape closes any open overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeQuoteModal();
  });
});
