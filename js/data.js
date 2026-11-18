/**
 * ============================================================================
 * HAIR EXPRESSO SALON — CENTRAL CONTENT & DATA CONFIGURATION
 * ============================================================================
 *
 * [OWNER EDIT GUIDE]
 * Everything you may need to update later — phone number, hours, prices,
 * gallery photos, Instagram handle, and customer reviews — is stored right
 * here in this single file so you never have to dig through HTML or CSS.
 */

// ============================================================================
// 1. BUSINESS DETAILS (Verified details — edit opening hours below if needed)
// ============================================================================
export const BUSINESS_INFO = {
  name: "Hair Expresso Salon",
  shortName: "Hair Expresso",
  category: "Salon",
  tagline: "Premium styling at pocket-friendly prices.",
  phoneDisplay: "+91 9219311495",
  phoneHref: "tel:+919219311495",
  whatsappNumber: "919219311495", // Country code (91) without '+'
  instagramHandle: "@hairexpresso_salon",
  instagramUrl: "https://instagram.com/hairexpresso_salon",
  address:
    "Shop no. 22, Goyal Complex, opp. BBD University, near Crown Mall, Lucknow, Ganeshpur Rahmanpur, Uttar Pradesh 226028",
  addressShort: "Shop 22, Goyal Complex, opp. BBD University, Lucknow",
  ratingSummary: "5.0 ★ · 144 Google Reviews",
  ratingValue: "5.0",
  reviewCount: 144,

  // [OWNER EDIT - PLACEHOLDER]: Replace these opening hours with your exact schedule
  openingHours: [
    { days: "Monday – Friday", hours: "10:00 AM – 8:30 PM (Placeholder)" },
    { days: "Saturday – Sunday", hours: "9:30 AM – 9:00 PM (Placeholder)" },
    { days: "Appointments & Walk-Ins", hours: "Call or WhatsApp +91 9219311495" }
  ],

  socials: {
    instagram: "https://instagram.com/hairexpresso_salon",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Hair+Expresso+Salon,+Shop+no.+22,+Goyal+Complex,+opp.+BBD+University,+near+Crown+Mall,+Lucknow,+Ganeshpur+Rahmanpur,+Uttar+Pradesh+226028"
  }
};

// ============================================================================
// 2. CENTRALIZED LOCAL IMAGE PATHS
// [OWNER EDIT - PLACEHOLDER PHOTOS]: All 15 portfolio/section photos are saved
// as local WebP files in `/assets/images/`. Replace them with your real salon
// photos anytime. The original logo photo is saved at `/assets/brand/logo-original.jpg`.
// ============================================================================
export const IMAGES = {
  logoOriginal: "./assets/brand/logo-original.jpg",
  heroBg: "./assets/images/hero-salon.webp",
  aboutPrimary: "./assets/images/about-primary.webp",
  aboutSecondary: "./assets/images/about-secondary.webp",
  fallback: "./assets/images/placeholder-fallback.svg",

  gallery: {
    hair1: "./assets/images/gallery-hair-1.webp",
    hair2: "./assets/images/gallery-hair-2.webp",
    hair3: "./assets/images/gallery-hair-3.webp",
    beauty1: "./assets/images/gallery-beauty-1.webp",
    beauty2: "./assets/images/gallery-beauty-2.webp",
    beauty3: "./assets/images/gallery-beauty-3.webp",
    color1: "./assets/images/gallery-color-1.webp",
    color2: "./assets/images/gallery-color-2.webp",
    color3: "./assets/images/gallery-color-3.webp",
    salon1: "./assets/images/gallery-salon-1.webp",
    salon2: "./assets/images/gallery-salon-2.webp",
    salon3: "./assets/images/gallery-salon-3.webp"
  }
};

// ============================================================================
// 3. SERVICES (10 Core Offerings Built Strictly From the In-Store Menu)
// ============================================================================
export const SERVICES = [
  {
    id: "haircut-blow-dry",
    title: "Haircut & Blow Dry",
    tag: "From ₹99",
    description:
      "Precision haircuts (₹99) and refreshing hair wash & blow dry styling (₹199) tailored to your look.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="8" cy="24" r="3.5"/>
        <circle cx="8" cy="8" r="3.5"/>
        <path d="M11 10.2L27 23"/>
        <path d="M11 21.8L27 9"/>
        <path d="M23 16h4"/>
      </svg>
    `
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    tag: "₹499",
    description:
      "Deeply conditioning hair spa treatment that nourishes roots, restores softness, and revives natural shine.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 27c6-3 10-9 10-16-6 0-10 4-10 10 0-6-4-10-10-10 0 7 4 13 10 16Z"/>
        <path d="M16 27V15"/>
        <path d="M9 28h14"/>
      </svg>
    `
  },
  {
    id: "threading",
    title: "Threading",
    tag: "₹30",
    description:
      "Gentle, hygienic, and accurate eyebrow and facial threading for clean, well-defined shaping.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 20c5-6 15-6 20 0"/>
        <path d="M10 13l12 12"/>
        <path d="M22 13L10 25"/>
      </svg>
    `
  },
  {
    id: "waxing",
    title: "Waxing",
    tag: "From ₹149",
    description:
      "Hygienic waxing for underarms (₹149), half legs (₹249), hands (₹299), and full legs (₹499) for smooth skin.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M25 7C17 7 9 14 7 25c11-2 18-10 18-18Z"/>
        <path d="M7 25L18 14"/>
      </svg>
    `
  },
  {
    id: "clean-up-facial",
    title: "Clean Up & Facial",
    tag: "₹349 · ₹799",
    description:
      "Refreshing skin clean up (₹349) and soothing facial care (₹799) to cleanse pores and restore a healthy glow.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 4l2.4 6.6L25 13l-6.6 2.4L16 22l-2.4-6.6L7 13l6.6-2.4L16 4Z"/>
        <path d="M24 21l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1 1-2.8Z"/>
      </svg>
    `
  },
  {
    id: "d-tan",
    title: "D-Tan",
    tag: "₹149",
    description:
      "Brightening D-Tan care that gently removes sun tan and uneven dullness for visibly fresher skin.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="5"/>
        <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.2 2.2M22.3 22.3l2.2 2.2M24.5 7.5l-2.2 2.2M9.7 22.3l-2.2 2.2"/>
      </svg>
    `
  },
  {
    id: "keratin-smoothening",
    title: "Keratin & Smoothening",
    tag: "₹2,000 · ₹2,500",
    description:
      "Sleek smoothening (₹2,000) and protein-rich keratin treatment (₹2,500) to tame frizz and add lasting shine.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M8 6c4 4-4 8 0 12s-4 8 0 8"/>
        <path d="M16 6c4 4-4 8 0 12s-4 8 0 8"/>
        <path d="M24 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>
      </svg>
    `
  },
  {
    id: "botox-nanoplastia",
    title: "Botox & Nanoplastia",
    tag: "₹3,000 · ₹3,500",
    description:
      "Advanced Hair Botox (₹3,000) and Nanoplastia (₹3,500) treatments for deep repair and smooth manageability.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 3l3.2 8.8L28 15l-8.8 3.2L16 27l-3.2-8.8L4 15l8.8-3.2L16 3Z"/>
      </svg>
    `
  },
  {
    id: "hair-colour-highlights",
    title: "Hair Colour & Highlights",
    tag: "From ₹199",
    description:
      "Highlights per stick (₹199), root touch-up (₹999), global base colour (₹1,999), and fashion shades (₹2,499).",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 4C11 11 7 15.5 7 20.5A9 9 0 0 0 25 20.5C25 15.5 21 11 16 4Z"/>
        <path d="M12 21a4 4 0 0 0 4 4"/>
      </svg>
    `
  },
  {
    id: "balayage-ombre",
    title: "Balayage & Ombre",
    tag: "₹2,999",
    description:
      "Seamless, dimensional Balayage (₹2,999) and Ombre (₹2,999) colour transitions blended to complement your look.",
    iconSvg: `
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 26L25 8"/>
        <path d="M19 6l7 7"/>
        <path d="M6 21c0 3 2 5 5 5"/>
      </svg>
    `
  }
];

// ============================================================================
// 4. REAL IN-STORE PRICING MENU
// All prices match the official Hair Expresso Salon menu board.
// ============================================================================
export const PRICING_DATA = {
  disclaimer:
    "Prices as per in-store menu and may change. Call or WhatsApp to confirm.",

  // Starting Prices Highlight Card (Replaces unverified package card)
  startingPricesHighlight: {
    badge: "Starting Prices",
    title: "Pocket-Friendly Everyday Styling",
    summaryLine: "Haircut from ₹99 · Threading ₹30 · Hair Spa ₹499",
    description:
      "Enjoy a clean, welcoming salon experience opposite BBD University with transparent in-store pricing across hair, beauty, and colour treatments.",
    quickList: [
      { label: "Threading", price: "₹30" },
      { label: "Hair Cut", price: "₹99" },
      { label: "D-Tan / Underarms Wax", price: "₹149" },
      { label: "Hair Wash & Blow Dry", price: "₹199" },
      { label: "Highlights (per stick)", price: "₹199" },
      { label: "Hair Spa / Full Leg Wax", price: "₹499" }
    ]
  },

  // Three Official Pricing Tabs: Hair, Beauty, Treatments & Colour
  categories: [
    {
      id: "hair",
      label: "Hair",
      items: [
        {
          name: "Hair Cut",
          detail: "Precision haircut & finishing",
          price: "₹99"
        },
        {
          name: "Hair Wash & Blow Dry",
          detail: "Refreshing wash & styled blow dry",
          price: "₹199"
        },
        {
          name: "Hair Spa",
          detail: "Deep conditioning & nourishing spa care",
          price: "₹499"
        },
        {
          name: "Threading",
          detail: "Clean, gentle eyebrow & facial threading",
          price: "₹30"
        }
      ]
    },
    {
      id: "beauty",
      label: "Beauty",
      items: [
        {
          name: "D-Tan",
          detail: "Brightening tan-removal pack",
          price: "₹149"
        },
        {
          name: "Hand Wax",
          detail: "Smooth, hygienic arm waxing",
          price: "₹299"
        },
        {
          name: "Underarms Wax",
          detail: "Gentle underarm waxing",
          price: "₹149"
        },
        {
          name: "Half Leg Wax",
          detail: "Smooth lower-leg waxing",
          price: "₹249"
        },
        {
          name: "Full Leg Wax",
          detail: "Complete full-leg waxing",
          price: "₹499"
        },
        {
          name: "Clean Up",
          detail: "Pore-cleansing & refreshing skin clean up",
          price: "₹349"
        },
        {
          name: "Facial",
          detail: "Relaxing, glow-boosting facial care",
          price: "₹799"
        }
      ]
    },
    {
      id: "treatments-colour",
      label: "Treatments & Colour",
      items: [
        {
          name: "Botox",
          detail: "Deep-conditioning hair botox treatment",
          price: "₹3,000"
        },
        {
          name: "Nanoplastia",
          detail: "Advanced hair repair & smoothing therapy",
          price: "₹3,500"
        },
        {
          name: "Keratin",
          detail: "Frizz-control protein keratin treatment",
          price: "₹2,500"
        },
        {
          name: "Smoothening",
          detail: "Sleek, smooth hair transformation",
          price: "₹2,000"
        },
        {
          name: "Highlights (per stick)",
          detail: "Custom dimensional streak highlights",
          price: "₹199"
        },
        {
          name: "Global Colour (Base)",
          detail: "Full-head classic base colour",
          price: "₹1,999"
        },
        {
          name: "Global Colour (Fashion)",
          detail: "Full-head vibrant fashion shade",
          price: "₹2,499"
        },
        {
          name: "Root Touch-Up",
          detail: "Seamless root coverage",
          price: "₹999"
        },
        {
          name: "Balayage",
          detail: "Hand-painted dimensional balayage",
          price: "₹2,999"
        },
        {
          name: "Ombre",
          detail: "Seamless gradient ombre colour",
          price: "₹2,999"
        }
      ]
    }
  ]
};

// ============================================================================
// 5. ABOUT SECTION STATS (Animated Counters — Verified + Menu Counts)
// ============================================================================
export const ABOUT_STATS = [
  {
    value: 144,
    decimals: 0,
    suffix: "+",
    label: "Happy Google Reviews",
    isPlaceholder: false
  },
  {
    value: 5.0,
    decimals: 1,
    suffix: " ★",
    label: "Google Star Rating",
    isPlaceholder: false
  },
  {
    value: 21,
    decimals: 0,
    suffix: "",
    label: "In-Store Menu Services",
    isPlaceholder: false
  },
  {
    value: 99,
    decimals: 0,
    prefix: "₹",
    suffix: "",
    label: "Haircut Starting Price",
    isPlaceholder: false
  }
];

// ============================================================================
// 6. GALLERY ITEMS (12 Items — 3 per Category: "hair", "color", "beauty", "salon")
// All images served locally from /assets/images/*.webp
// ============================================================================
export const GALLERY_ITEMS = [
  {
    id: "gal-hair-1",
    category: "hair",
    categoryLabel: "Hair & Blow Dry",
    title: "Precision Cut & Layered Blow Dry",
    caption: "Bespoke movement and smooth finish crafted for everyday confidence.",
    image: IMAGES.gallery.hair1,
    aspect: "tall",
    alt: "Stylist finishing a voluminous layered blow dry on healthy dark hair"
  },
  {
    id: "gal-beauty-1",
    category: "beauty",
    categoryLabel: "Beauty & Skin",
    title: "Glow Facial & D-Tan Care",
    caption: "Soothing facial and brightening D-Tan care for refreshed, radiant skin.",
    image: IMAGES.gallery.beauty1,
    aspect: "standard",
    alt: "Woman enjoying a relaxing facial mask application at the salon"
  },
  {
    id: "gal-color-1",
    category: "color",
    categoryLabel: "Colour & Balayage",
    title: "Warm Auburn & Caramel Curls",
    caption: "Rich espresso and warm chestnut tones styled with soft dimensional curls.",
    image: IMAGES.gallery.color1,
    aspect: "tall",
    alt: "Stylist pinning warm auburn and caramel curls on a woman's hair"
  },
  {
    id: "gal-salon-1",
    category: "salon",
    categoryLabel: "Our Salon",
    title: "Clean, Welcoming Salon Space",
    caption: "Thoughtfully maintained styling stations opposite BBD University, Lucknow.",
    image: IMAGES.gallery.salon1,
    aspect: "standard",
    alt: "Modern salon interior with warm lighting, mirrors, and styling chairs"
  },
  {
    id: "gal-hair-2",
    category: "hair",
    categoryLabel: "Hair & Treatments",
    title: "Keratin & Smoothening Finish",
    caption: "Frizz-free silkiness and deep nourishment for smooth, manageable strands.",
    image: IMAGES.gallery.hair2,
    aspect: "standard",
    alt: "Healthy, glossy smoothed hair after a keratin and blow dry session"
  },
  {
    id: "gal-beauty-2",
    category: "beauty",
    categoryLabel: "Beauty & Skin",
    title: "Hygienic Skin & Waxing Essentials",
    caption: "Clean towels, gentle skin care lotions, and a calm environment for every guest.",
    image: IMAGES.gallery.beauty2,
    aspect: "tall",
    alt: "Fresh rolled spa towel, skincare lotion bottle, and soft candle setup"
  },
  {
    id: "gal-color-2",
    category: "color",
    categoryLabel: "Colour & Balayage",
    title: "Warm Honey Balayage & Ombre",
    caption: "Custom highlights and balayage blended for a seamless transition.",
    image: IMAGES.gallery.color2,
    aspect: "standard",
    alt: "Stylist curling long hair featuring warm honey and caramel balayage highlights"
  },
  {
    id: "gal-salon-2",
    category: "salon",
    categoryLabel: "Our Salon",
    title: "Bright Mirrors & Styling Stations",
    caption: "Every tool sanitized and every station prepared for a relaxing visit.",
    image: IMAGES.gallery.salon2,
    aspect: "standard",
    alt: "Modern salon interior with illuminated round mirrors and styling chairs"
  },
  {
    id: "gal-hair-3",
    category: "hair",
    categoryLabel: "Hair & Spa",
    title: "Nourishing Hair Spa & Volume",
    caption: "Weightless volume and healthy shine after a conditioning hair spa.",
    image: IMAGES.gallery.hair3,
    aspect: "tall",
    alt: "Woman with voluminous, textured waves and healthy shine"
  },
  {
    id: "gal-beauty-3",
    category: "beauty",
    categoryLabel: "Beauty & Skin",
    title: "Refreshing Clean Up & Facial",
    caption: "Deep pore cleansing and hydrating facial pack tailored to your skin type.",
    image: IMAGES.gallery.beauty3,
    aspect: "standard",
    alt: "Esthetician applying a hydrating white facial mask with a soft brush"
  },
  {
    id: "gal-color-3",
    category: "color",
    categoryLabel: "Colour & Highlights",
    title: "Precision Colour & Styling Craft",
    caption: "Professional brushes and colour tools for global colour and root touch-ups.",
    image: IMAGES.gallery.color3,
    aspect: "standard",
    alt: "Professional hair colour brushes, styling combs, and salon shears"
  },
  {
    id: "gal-salon-3",
    category: "salon",
    categoryLabel: "Our Salon",
    title: "Boutique Styling & Mirror Suite",
    caption: "A welcoming boutique setting near Crown Mall, Ganeshpur Rahmanpur.",
    image: IMAGES.gallery.salon3,
    aspect: "standard",
    alt: "Sleek dark and gold salon interior with round mirrors and styling chairs"
  }
];

// ============================================================================
// 7. INSTAGRAM STATIC 6-TILE FEED (@hairexpresso_salon)
// Links directly to https://instagram.com/hairexpresso_salon without heavy scripts
// ============================================================================
export const INSTAGRAM_TILES = [
  {
    image: IMAGES.gallery.hair1,
    caption: "Precision Haircut & Blow Dry · Hair Expresso Salon",
    alt: "Haircut and blow dry session at Hair Expresso Salon"
  },
  {
    image: IMAGES.gallery.color1,
    caption: "Dimensional Balayage & Global Colour",
    alt: "Warm caramel and auburn curls styled at Hair Expresso Salon"
  },
  {
    image: IMAGES.gallery.beauty1,
    caption: "Relaxing Facial, Clean Up & D-Tan Care",
    alt: "Soothing facial treatment at Hair Expresso Salon"
  },
  {
    image: IMAGES.gallery.hair2,
    caption: "Keratin, Smoothening, Botox & Nanoplastia",
    alt: "Sleek blow dry and keratin finish"
  },
  {
    image: IMAGES.gallery.color2,
    caption: "Highlights, Ombre & Root Touch-Up",
    alt: "Honey balayage and highlights transformation"
  },
  {
    image: IMAGES.gallery.salon3,
    caption: "Visit us at Goyal Complex, opp. BBD University, Lucknow",
    alt: "Hair Expresso Salon styling mirrors and chairs"
  }
];

// ============================================================================
// 8. TESTIMONIALS (PLACEHOLDER REVIEWS)
// [OWNER EDIT - PLACEHOLDER]: The 6 reviews below are sample placeholder reviews
// reflecting your 5.0 ★ (144 reviews) profile. Replace the quotes and author
// names below with real copy-pasted reviews from your Google Business Profile!
// ============================================================================
export const TESTIMONIALS = [
  {
    id: "rev-1",
    author: "Ananya Sharma (Placeholder Review)",
    service: "Keratin & Haircut",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "Loved my experience at Hair Expresso! My frizzy hair feels smooth and manageable after their keratin treatment, and the stylist took time to understand the exact cut I wanted."
  },
  {
    id: "rev-2",
    author: "Priya Verma (Placeholder Review)",
    service: "Hair Spa & Blow Dry",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "Such pocket-friendly prices for a really premium salon near BBD University. The hair spa and wash & blow dry left my hair super soft and shiny!"
  },
  {
    id: "rev-3",
    author: "Riya Srivastava (Placeholder Review)",
    service: "Balayage & Highlights",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "Hands down my favourite salon near Crown Mall and BBD. The ambiance is super clean and relaxing, and my caramel balayage turned out even better than my reference photo."
  },
  {
    id: "rev-4",
    author: "Neha Kapoor (Placeholder Review)",
    service: "Facial & D-Tan",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "A calm, hygienic space. The D-Tan and facial left my skin feeling completely refreshed. The staff is polite, attentive, and makes you feel welcome."
  },
  {
    id: "rev-5",
    author: "Sakshi Mishra (Placeholder Review)",
    service: "Nanoplastia & Trim",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "Got my Nanoplastia treatment done at Hair Expresso and the results are amazing. Honest advice, transparent pricing, and great service!"
  },
  {
    id: "rev-6",
    author: "Kavya Tiwari (Placeholder Review)",
    service: "Threading, Waxing & Clean Up",
    rating: 5,
    date: "Sample Google Review",
    quote:
      "You can tell why they have a 5.0 rating! Whether you go in for ₹30 threading, waxing, or a clean up, they treat every client with the same care."
  }
];
