// Price = (¥ × YUAN_TO_BDT) + cargo + China buyer fee + profit, rounded to the nearest 10.
const YUAN_TO_BDT = 20;
const CARGO_BDT = 51; // 850 tk/kg × ~60 g per cover
const BUYER_FEE_BDT = 50; // small item
const PROFIT_BDT = 80;

const toBDT = (yuan) =>
  Math.round((yuan * YUAN_TO_BDT + CARGO_BDT + BUYER_FEE_BDT + PROFIT_BDT) / 10) * 10;

// "sizes" here = phone models the customer can choose.
const IPHONES_ALL = [
  "iPhone XR", "iPhone XS", "iPhone 11", "iPhone 12", "iPhone 13",
  "iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17",
];

const items = [
  {
    name: "Liquid Silicone Straight-Edge Soft Case",
    category: "Samsung",
    yuan: 2.99,
    description: "Full-cover liquid silicone case with straight edges. Soft, shockproof and comfortable to hold.",
    sizes: ["Galaxy S23 Ultra"],
  },
  {
    name: "Spider-Man Comic Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Bold comic-style Spider-Man print with protective edges.",
    sizes: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16 Pro"],
  },
  {
    name: "Minimalist 2-in-1 Solid Color Case",
    category: "Samsung",
    yuan: 5.99,
    description: "Double-layer hard case in clean solid colors. Slim look with strong drop protection.",
    sizes: ["Galaxy A55", "Galaxy S23 Ultra", "Galaxy S24", "Galaxy S25"],
  },
  {
    name: "Fun Mario Clear Case",
    category: "Samsung",
    yuan: 4.83,
    description: "Clear case with a playful Mario print and full camera lens protection.",
    sizes: ["Galaxy S23+", "Galaxy S24", "Galaxy S25", "Galaxy S26"],
  },
  {
    name: "Magnetic Frosted Semi-Clear Case",
    category: "Samsung",
    yuan: 8.8,
    description: "Semi-transparent soft-touch matte case with built-in magnets for magnetic chargers and mounts.",
    sizes: ["Galaxy S23 Ultra", "Galaxy S24 Ultra", "Galaxy S25"],
  },
  {
    name: "Frosted Anti-Fingerprint Hard Case",
    category: "Samsung",
    yuan: 5.95,
    description: "Full-cover frosted hard case that resists fingerprints and protects against drops.",
    sizes: ["Galaxy S23 Ultra"],
  },
  {
    name: "Liquid Silicone Full Lens Soft Case",
    category: "Samsung",
    yuan: 4.65,
    description: "Liquid silicone case with full camera lens cover and shockproof soft edges.",
    sizes: ["Galaxy S23", "Galaxy S23 Plus", "Galaxy S24", "Galaxy S24 Ultra"],
  },
  {
    name: "Cartoon Spider-Man Soft Case",
    category: "iPhone",
    yuan: 1.98,
    description: "Cute cartoon Spider-Man print on a shockproof soft case.",
    sizes: ["iPhone 8 Plus", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"],
  },
  {
    name: "Comic Spider-Man Magnetic Case",
    category: "iPhone",
    yuan: 3.88,
    description: "Comic-art Spider-Man hard case with magnetic support.",
    sizes: ["iPhone XR", "iPhone 11", "iPhone 12", "iPhone 15", "iPhone 16", "iPhone 17"],
  },
  {
    name: "Spider-Man Case",
    category: "iPhone",
    yuan: 1.99,
    description: "Classic Spider-Man design, available for every iPhone model.",
    sizes: IPHONES_ALL,
  },
  {
    name: "Dopamine Macaron Pudding Case",
    category: "Samsung",
    yuan: 5.98,
    description: "Bright macaron-color case with a smooth, minimal finish.",
    sizes: ["Galaxy A56", "Galaxy S23 Ultra", "Galaxy S24", "Galaxy S25"],
  },
  {
    name: "Spider-Man Shockproof Case",
    category: "iPhone",
    yuan: 3.99,
    description: "Spider-Man print case with shockproof protection.",
    sizes: ["iPhone 11", "iPhone 12", "iPhone 13 Pro", "iPhone 14 Pro Max", "iPhone 15", "iPhone 16 Pro"],
  },
  {
    name: "Pleated Road Pattern Soft Case",
    category: "iPhone",
    yuan: 2.9,
    description: "Premium pleated texture with a road-pattern design. Soft and shockproof.",
    sizes: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15 Pro", "iPhone 16 Pro Max"],
  },
  {
    name: "Spider-Man Poster 2-in-1 Case",
    category: "iPhone",
    yuan: 4.77,
    description: "Illustrated Spider-Man poster art on a sturdy 2-in-1 hard case.",
    sizes: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15 Pro", "iPhone 16 Pro"],
  },
  {
    name: "Ribbed Ultra-Thin Frosted Case",
    category: "Samsung",
    yuan: 4.9,
    description: "Ultra-thin ribbed hard case with a soft frosted feel and full coverage.",
    sizes: ["Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra"],
  },
  {
    name: "Polka Dot Bear & Bunny Case",
    category: "Samsung",
    yuan: 2.68,
    description: "Cute polka dot bear and bunny design on a soft silicone straight-edge case.",
    sizes: ["Galaxy A14"],
  },
  {
    name: "SpongeBob Lychee Texture Case",
    category: "iPhone",
    yuan: 2.96,
    description: "SpongeBob design on a grippy lychee-texture case with drop protection.",
    sizes: ["iPhone XS", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15 Pro", "iPhone 16"],
  },
  {
    name: "Bow Leopard Airbag Soft Case",
    category: "iPhone",
    yuan: 1.92,
    description: "Chic bow and leopard print soft case with airbag corners.",
    sizes: ["iPhone 12", "iPhone 15", "iPhone 16 Pro Max", "iPhone 17"],
  },
  {
    name: "Magnetic Clear Full-Edge Case",
    category: "Samsung",
    yuan: 4.42,
    description: "Clear magnetic case with full edge protection.",
    sizes: ["Galaxy S22+", "Galaxy S23+", "Galaxy S24 FE", "Galaxy S25 Ultra", "Galaxy S26+"],
  },
  {
    name: "Trendy Minimal Spider Case",
    category: "iPhone",
    yuan: 1.1,
    description: "Trendy minimal spider design, available for every iPhone model.",
    sizes: IPHONES_ALL,
  },
];

// Main photo of each product, in the same order as items (served through /img, see functions/img).
const IMAGES = [
  "/img/mms-material-img/2024-01-29/aa4b8cb2-f8fb-4605-b96e-ff6bc085a765.jpeg",
  "/img/open-gw/2024-12-18/a80b93e4-8f6e-445b-a35e-23a997d32837.jpeg",
  "/img/mms-material-img/2025-08-08/aec64a5c-932f-410e-9768-966b7bb270aa.jpeg",
  "/img/open-gw/2026-04-13/be16fbe7-ea8c-4b99-b038-1a9b14d2d447.jpeg",
  "/img/mms-material-img/2025-04-05/0b96dc6b-53da-4a32-9682-86c94bd61d08.jpeg.a.jpeg",
  "/img/mms-material-img/2024-01-10/8ddd4c46-809c-4a29-b216-42b14cbb9b0d.jpeg",
  "/img/mms-material-img/2024-09-12/3a8cffbd-11ec-4cc0-a91b-2c33cb13751f.jpeg",
  "/img/mms-material-img/2024-09-20/1516568a-16bb-4f0e-8a34-487a05431917.jpeg",
  "/img/open-gw/2025-11-26/d3d14b2f-8ae0-4e43-9393-9d47eb8387b8.jpeg",
  "/img/mms-material-img/2026-08-06/61db9044-b79f-484f-a2e7-99186363610e.jpeg.a.jpeg",
  "/img/mms-goods-image/2026-09-19/5e16cecf-158a-489f-bce3-ba64cc6cd21d.jpeg",
  "/img/open-gw/2024-11-01/5d1acb80-ea37-4b9d-b8a7-aea5e2831528.jpeg",
  "/img/mms-material-img/2025-01-03/c43ecc15-9546-4c22-bdf6-b3c6feb12473.jpeg",
  "/img/mms-material-img/2025-08-03/137b011e-f901-40f6-b8ee-e7b5a1b5a8ff.jpeg.a.jpeg",
  "/img/mms-material-img/2023-09-22/eded35c7-7acc-4599-a372-33419dc16f2a.jpeg",
  "/img/open-gw/2026-04-11/4e987735-ead1-47cb-926a-dd59cbf63df8.jpeg",
  "/img/open-gw/2025-03-11/9332e29e-793b-4b9e-b56e-e77c9cc047c2.jpeg",
  "/img/mms-goods-image/2025-12-24/00348fd6-b3fb-46a0-b884-7d8ad04431a4.jpeg.a.jpeg",
  "/img/mms-goods-image/2026-07-08/fd2a2728-8653-4895-bd5a-4b31a8c2f681.jpeg.a.jpeg",
  "/img/mms-goods-image/2026-08-06/a6b2635f-9fd8-4de9-ac28-7d1cf31eaf91.jpeg.a.jpeg",
];

const products = items.map(({ yuan, ...item }, i) => {
  const image = IMAGES[i];
  return {
    id: i + 1,
    ...item,
    price: toBDT(yuan),
    image,
    images: [image],
    available: false,
  };
});

export default products;
