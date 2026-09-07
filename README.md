# Abakhel Electronics — Website

Plain HTML, CSS and JavaScript. No build step, no server, no database —
open `index.html` in a browser, or upload the folder as-is to any static
web host (Hostinger, Netlify, GitHub Pages, cPanel, etc.).

## Structure

```
index.html          Homepage (hero, about, why-choose, categories, featured
                     products, brands, testimonials, stats, FAQ, contact)
products.html        Full catalog with category filters + sorting
css/base.css         Design tokens (colors, type, spacing), buttons, resets
css/layout.css       Header, nav, footer, mobile action bar
css/home.css         Homepage-specific sections
css/shop.css         Products page, quote modal, toast styles
js/data.js           Product catalog (edit this to add/remove real products)
js/main.js           Nav toggle, toast, quote modal → sends to WhatsApp
js/home.js           FAQ accordion, testimonial carousel, animated counters
js/shop.js           Product listing filters + sorting
robots.txt / sitemap.xml   Basic SEO files — update the domain before launch
```

## How ordering works — no cart, WhatsApp only

Per your request, there's **no cart or "Add to Cart" button anywhere** —
every product has a single **"Request Quote"** button. Clicking it opens a
small form (product, quantity, name, phone). Submitting it opens WhatsApp
with a message pre-filled, e.g.:

```
Hello Abakhel Electronics, I'd like a quote:
Product: 43" LED Television
Quantity: 1 unit
Name: Ahmad Khan
Phone: 0300-1234567
```

The customer just taps Send in WhatsApp. This matches a Cash-on-Delivery,
WhatsApp-order business model with no online payment step at all.

## ⚠️ Please double-check the WhatsApp number

The number you gave — `034600551` — is **9 digits**. Pakistani mobile
numbers are 11 digits (e.g. `0346-0055100`, 7 digits after the `0346`
prefix). I used `92346005510` as a placeholder in the code so the site
works end-to-end, but **this is very likely not your real number** — please
send me (or edit directly) the complete number.

It appears in one place: `WHATSAPP_NUMBER` near the top of `js/main.js`.
The topbar, footer, hero button, and mobile call/WhatsApp bar in both
`index.html` and `products.html` also link to it directly — update those
`wa.me/92346005510` and `tel:+92346005510` links to match once confirmed.

## About the product photos

You asked for actual photos of TVs, refrigerators, coolers, etc. — like the
marketplace listing you shared. I looked, but every real photo of these
specific products exists only on retailer/brand listings (Amazon, Daraz,
manufacturer sites), which are copyrighted to those sellers — copying them
here would be the same infringement risk, just from a different source.

What I did instead: replaced the small line icons with larger, full-color
custom illustrations for TV, fridge, cooler, and washing machine (see
`productIllustrationSvg()` in `js/main.js`) — original artwork, no license
risk, and closer in visual weight to a real product tile.

**To swap in your real photos** (recommended once you can photograph your
actual stock):
1. Take clear photos of your stock (square or 4:3 works best).
2. Drop the image files into the `images/` folder, e.g. `images/tv-43.jpg`.
3. In `js/shop.js` and `index.html`'s featured-products script, change
   `<div class="product-card__img">${productImageHtml(p)}</div>`
   to `<div class="product-card__img"><img src="images/tv-43.jpg" alt="43 inch LED TV"></div>`
   for each product you have a real photo for.
4. The `.cat-card` category tiles on the homepage use flat colors right
   now — swap `style="background-color:#..."` for
   `style="background-image:url('images/appliances.jpg')"` once you have a
   good wide photo for each category.

## Business details already updated

- Name: **Abakhel Electronics**
- Address: **Near National Bank, Swat Deolai, 19060, Pakistan**
  (used in the footer, contact section, and the Google Maps embed —
  the map currently searches for that address by text; if it doesn't
  pin the exact right spot, replace the iframe `src` in `index.html`
  with an exact Google Maps embed link for your shop)
- Email/phone shown are still placeholders (`info@abakhelelectronics.pk`,
  `0346-0055100`) — update these to your real ones in both HTML files.

## Notes on the design

Colors, type (Manrope for headings / Inter for body), and section
structure follow the original brief. The hero uses a subtle animated
circuit-line SVG rather than a stock photo.
