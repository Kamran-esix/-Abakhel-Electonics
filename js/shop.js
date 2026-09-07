/* =========================================================
   PRODUCTS PAGE: render grid, category filters, sorting
   ========================================================= */

let activeCategories = [];
let activeSort = "featured";
let activeBudgetMin = null;
let activeBudgetMax = null;

function getUrlCategory() {
  const params = new URLSearchParams(window.location.search);
  return params.get("cat");
}

function productCardHtml(p) {
  const cat = CATEGORIES.find((c) => c.id === p.cat);
  return `
    <article class="product-card">
      <div class="product-card__img">${productImageHtml(p)}</div>
      <div class="product-card__body">
        <span class="product-card__cat">${cat ? cat.name : ""}</span>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="product-card__price">${formatPKR(p.price)} <small>/ ${p.unit}</small></div>
        <div class="product-card__actions">
          <button type="button" class="btn btn--primary btn--sm btn--full" data-request-quote="${p.name}">Request Quote</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countEl = document.getElementById("resultCount");
  if (!grid) return;

  let list = PRODUCTS.slice();

  if (activeCategories.length) {
    list = list.filter((p) => activeCategories.includes(p.cat));
  }

  if (activeBudgetMin != null) list = list.filter((p) => p.price >= activeBudgetMin);
  if (activeBudgetMax != null) list = list.filter((p) => p.price <= activeBudgetMax);

  if (activeSort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (activeSort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (activeSort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

  if (countEl) countEl.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;

  grid.innerHTML = list.length
    ? list.map(productCardHtml).join("")
    : `<div class="empty-state" style="grid-column:1/-1">
         <p>No products match these filters yet.</p>
         <button type="button" class="btn btn--outline btn--sm" id="clearFiltersBtn">Clear filters</button>
       </div>`;

  grid.querySelectorAll("[data-request-quote]").forEach((btn) =>
    btn.addEventListener("click", () => openQuoteModal(btn.getAttribute("data-request-quote")))
  );
  document.getElementById("clearFiltersBtn")?.addEventListener("click", clearFilters);
}

function clearFilters() {
  activeCategories = [];
  activeBudgetMin = null;
  activeBudgetMax = null;
  document.querySelectorAll(".filter-option input").forEach((cb) => (cb.checked = false));
  document.querySelectorAll(".budget-btn").forEach((b) => b.classList.remove("is-active"));
  const minInput = document.getElementById("budgetMin");
  const maxInput = document.getElementById("budgetMax");
  if (minInput) minInput.value = "";
  if (maxInput) maxInput.value = "";
  renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  const filterList = document.getElementById("categoryFilterList");
  if (filterList) {
    filterList.innerHTML = CATEGORIES.map(
      (c) => `
      <label class="filter-option">
        <input type="checkbox" value="${c.id}" data-cat-filter />
        ${c.name}
      </label>`
    ).join("");
  }

  const urlCat = getUrlCategory();
  if (urlCat) {
    activeCategories = [urlCat];
    const cb = document.querySelector(`[data-cat-filter][value="${urlCat}"]`);
    if (cb) cb.checked = true;
  }

  document.querySelectorAll("[data-cat-filter]").forEach((cb) =>
    cb.addEventListener("change", () => {
      activeCategories = Array.from(document.querySelectorAll("[data-cat-filter]:checked")).map((el) => el.value);
      renderProducts();
    })
  );

  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  document.getElementById("clearFiltersBtn")?.addEventListener("click", clearFilters);

  document.getElementById("filtersToggle")?.addEventListener("click", () => {
    document.getElementById("filtersPanel")?.classList.toggle("is-open");
  });

  // Budget: preset pill buttons (single-select)
  document.querySelectorAll(".budget-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const alreadyActive = btn.classList.contains("is-active");
      document.querySelectorAll(".budget-btn").forEach((b) => b.classList.remove("is-active"));
      document.getElementById("budgetMin").value = "";
      document.getElementById("budgetMax").value = "";

      if (alreadyActive) {
        activeBudgetMin = null;
        activeBudgetMax = null;
      } else {
        btn.classList.add("is-active");
        const min = btn.getAttribute("data-budget-min");
        const max = btn.getAttribute("data-budget-max");
        activeBudgetMin = min !== "" ? Number(min) : null;
        activeBudgetMax = max !== "" ? Number(max) : null;
      }
      renderProducts();
    });
  });

  // Budget: custom Min/Max + Apply
  document.getElementById("budgetApply")?.addEventListener("click", () => {
    const minVal = document.getElementById("budgetMin").value;
    const maxVal = document.getElementById("budgetMax").value;
    activeBudgetMin = minVal !== "" ? Number(minVal) : null;
    activeBudgetMax = maxVal !== "" ? Number(maxVal) : null;
    document.querySelectorAll(".budget-btn").forEach((b) => b.classList.remove("is-active"));
    renderProducts();
  });

  renderProducts();
});
