# Hair Expresso Salon — Official Website

A luxury, high-converting, single-page website built for **Hair Expresso Salon** (*Shop no. 22, Goyal Complex, opp. BBD University, near Crown Mall, Lucknow, Ganeshpur Rahmanpur, Uttar Pradesh 226028*).

- **Positioning:** *Premium styling at pocket-friendly prices.*
- **Phone & WhatsApp:** `+91 9219311495` (`tel:+919219311495`, `https://wa.me/919219311495`)
- **Instagram:** [`@hairexpresso_salon`](https://instagram.com/hairexpresso_salon)
- **Google Rating:** `5.0 ★ · 144 Google Reviews`

---

## 1. Project Structure

```text
├── index.html                        # Semantic HTML5 page + HairSalon LocalBusiness JSON-LD schema
├── favicon.svg                       # Custom gold "HE" monogram SVG favicon
├── css/
│   └── styles.css                    # Brand palette, Cinzel/Playfair/Inter typography, layouts & animations
├── js/
│   ├── data.js                       # SINGLE SOURCE OF TRUTH for real menu prices, hours, gallery, reviews & links
│   └── main.js                       # Interactive tabs, masonry filter, lightbox, carousel, IG grid & WhatsApp form
└── assets/
    ├── brand/
    │   └── logo-original.jpg         # Official door emblem logo photo (used in About & Footer)
    └── images/                       # All 15 local optimized WebP photos + placeholder-fallback.svg
```

---

## 2. How to Run Locally

Because the project uses standard ES Modules (`<script type="module">`), serve the folder with any static HTTP server:

### Option A: Using Python
```bash
python -m http.server 8123
```
Then open **[http://localhost:8123](http://localhost:8123)** in your browser.

### Option B: Using Node.js (`npx`)
```bash
npx serve . -l 3000
```
Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option C: Using VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 3. Verified Live Content vs. Remaining `[PLACEHOLDER]` Items

All real in-store prices (21 services across **Hair**, **Beauty**, and **Treatments & Colour**), the official Instagram handle (`@hairexpresso_salon`), phone (`+91 9219311495`), address, and logo (`assets/brand/logo-original.jpg`) are now live on the website.

Only **3 remaining placeholder categories** need to be updated by the owner before or after launch:

### A. Opening Hours (`js/data.js` → `BUSINESS_INFO.openingHours`)
- `Monday – Friday`: Currently `"10:00 AM – 8:30 PM (Placeholder)"`
- `Saturday – Sunday`: Currently `"9:30 AM – 9:00 PM (Placeholder)"`
- Once updated in `js/data.js`, you can also remove `<span class="badge-placeholder">Placeholder</span>` in `index.html` (Contact section).

### B. Customer Testimonials (`js/data.js` → `TESTIMONIALS`)
Replace the 6 sample review objects (`rev-1` through `rev-6`) in `js/data.js` with real customer quotes and names from your 144 Google Reviews:
1. `Ananya Sharma (Placeholder Review)` — *Keratin & Haircut*
2. `Priya Verma (Placeholder Review)` — *Hair Spa & Blow Dry*
3. `Riya Srivastava (Placeholder Review)` — *Balayage & Highlights*
4. `Neha Kapoor (Placeholder Review)` — *Facial & D-Tan*
5. `Sakshi Mishra (Placeholder Review)` — *Nanoplastia & Trim*
6. `Kavya Tiwari (Placeholder Review)` — *Threading, Waxing & Clean Up*

### C. Portfolio & Section Photographs (`/assets/images/*.webp` & `js/data.js` → `IMAGES`)
All 15 WebP images in `/assets/images/` are high-resolution royalty-free salon/hair/beauty placeholders. Swap them with real photos of Hair Expresso Salon and your client transformations (keeping the same filenames or updating `IMAGES` in `js/data.js`):
- `assets/images/hero-salon.webp` — Full-viewport hero background photo
- `assets/images/about-primary.webp` & `about-secondary.webp` — About section photos
- `assets/images/gallery-hair-1.webp` .. `gallery-hair-3.webp` — Hair category photos
- `assets/images/gallery-beauty-1.webp` .. `gallery-beauty-3.webp` — Beauty (Facial / D-Tan / Waxing) category photos
- `assets/images/gallery-color-1.webp` .. `gallery-color-3.webp` — Colour & Balayage category photos
- `assets/images/gallery-salon-1.webp` .. `gallery-salon-3.webp` — Salon interior category photos
- *(Optional)* When a transparent PNG version of your logo is ready, place it in `assets/brand/` and update `IMAGES.logoOriginal` in `js/data.js`.

---

## 4. Pre-Launch Checklist for the Owner

- [ ] **1. Confirm Opening Hours:** Edit `BUSINESS_INFO.openingHours` in `js/data.js` with your exact daily timings and remove the `"Placeholder"` badge from the Opening Hours heading in `index.html`.
- [ ] **2. Paste Real Google Reviews:** Copy 6 real 5-star customer reviews from your Google Business Profile into `TESTIMONIALS` in `js/data.js`, and remove `(Placeholder Review)` from the author names and the footnote in `index.html`.
- [ ] **3. Swap in Real Salon & Work Photos:** Export your real salon interior, haircut, balayage, keratin/nanoplastia, and facial photos as `.webp` (`800px–1600px` wide) and replace the files in `assets/images/`.
- [ ] **4. Test WhatsApp Booking & Click-to-Call:** Submit a test booking on your phone to confirm the pre-filled WhatsApp message opens cleanly to `+91 9219311495`, and tap the floating Call button to verify `tel:+919219311495`.
- [ ] **5. Verify Instagram Links:** Click the header Instagram icon, the 6-tile `@hairexpresso_salon` grid, and the footer link to confirm they open `https://instagram.com/hairexpresso_salon`.

---

## 5. How to Deploy (Free Static Hosting)

This website is 100% static HTML, CSS, and vanilla JS—no build step is required.

### Deploy to Netlify (Fastest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder into the browser window.
3. Your site will be live immediately with HTTPS. Connect your custom domain under **Domain Management**.

### Deploy to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push this folder to a GitHub repository.
2. Run `vercel --prod` from this directory (or import the repository on [vercel.com](https://vercel.com)).
3. Framework Preset: **Other** (no build command needed, Output Directory: `.`).

### Deploy to GitHub Pages
1. Push all files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch** → select `main` and `/ (root)` → click **Save**.
