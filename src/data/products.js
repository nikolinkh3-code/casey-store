// Price = (¥ × YUAN_TO_BDT) + cargo + China buyer fee + profit, rounded to the nearest 10,
// and never below MIN_PRICE_BDT.
const YUAN_TO_BDT = 20;
const CARGO_BDT = 51; // 850 tk/kg × ~60 g per cover
const BUYER_FEE_BDT = 50; // small item
const PROFIT_BDT = 80;
const MIN_PRICE_BDT = 350;

const toBDT = (yuan) =>
  Math.max(
    MIN_PRICE_BDT,
    Math.round((yuan * YUAN_TO_BDT + CARGO_BDT + BUYER_FEE_BDT + PROFIT_BDT) / 10) * 10
  );

// "sizes" here = phone models the customer can choose.
const IPHONES = ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17"];
const IPHONES_PRO = [...IPHONES, "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 17 Pro Max"];
const GALAXY_S = ["Galaxy S23 Ultra", "Galaxy S24", "Galaxy S24 Ultra", "Galaxy S25", "Galaxy S25 Ultra"];

// imgs = photo paths on Pinduoduo's image CDN, served through /img (see functions/img).
const items = [
  {
    name: "Schnauzer Puppy Heart Stand Case",
    category: "iPhone",
    yuan: 4.27,
    description: "Cute schnauzer puppy with a heart-shaped stand. Watch videos hands-free.",
    sizes: IPHONES,
    imgs: [
      "mms-goods-image/2026-08-12/c8f4200f-5090-421e-b52d-f30054270dde.jpeg",
      "mms-goods-image/2026-08-12/df620bf0-57c5-4250-aaef-95bb6407da1f.jpeg",
    ],
  },
  {
    name: "Sleepy Tiger Stand Case",
    category: "iPhone",
    yuan: 4.7,
    description: "A lazy little tiger lying on your phone, with a built-in stand.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-08-10/ac608a09-566d-4030-8e32-2f18b7c80aad.jpeg",
      "mms-goods-image/2026-08-10/ab7146b2-b453-469d-b3fb-174f224ed746.jpeg",
      "mms-goods-image/2026-08-10/ff644d93-caf1-492d-bd19-3c204a1a53d5.jpeg",
    ],
  },
  {
    name: "Strawberry Polka Dot Melody Case",
    category: "iPhone",
    yuan: 3.73,
    description: "Soft pink polka dots and strawberries with My Melody. Sweet and girly.",
    sizes: IPHONES,
    imgs: [
      "mms-goods-image/2026-09-10/b646ed92-d048-462c-9311-b72ff973ba0a.jpeg",
      "mms-goods-image/2026-09-10/741e919e-1f42-4b86-b940-a839b0d6fc3d.jpeg",
      "mms-goods-image/2026-09-10/93f80443-8e5b-4d84-b144-06edd3fbcd36.jpeg",
      "mms-goods-image/2026-09-10/8609965d-55a6-4904-b0aa-161721cbacf1.jpeg",
    ],
  },
  {
    name: "Polka Dot Bear Couple Case",
    category: "iPhone",
    yuan: 2.6,
    description: "Matching polka dot bear design. Perfect for couples and best friends.",
    sizes: ["iPhone XR", "iPhone XS", ...IPHONES_PRO],
    imgs: [
      "mms-goods-image/2026-05-31/ced2843c-65df-4eb2-b861-8a00fb729fec.jpeg",
      "mms-goods-image/2026-05-31/8547ca1e-7d5e-4d2e-8d1f-d077300361a9.jpeg",
      "mms-goods-image/2026-05-31/bce3e3c1-38b8-4dbd-a57f-024afe25f58c.jpeg",
    ],
  },
  {
    name: "3D Puppy Silicone Case",
    category: "iPhone",
    yuan: 4.8,
    description: "Squishy 3D puppy on a soft silicone case with shockproof edges.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-04-23/14624f8f-361f-4f02-83a5-8aeb156d2bd8.jpeg",
      "mms-goods-image/2026-04-23/fe761bf3-2988-48f1-8ddd-0d30b5795900.jpeg",
      "mms-goods-image/2026-04-23/7c078dea-b0f6-452b-866b-4083fa87c7e0.jpeg",
      "mms-goods-image/2026-04-23/e8820cb8-d90d-4250-9379-99d1429a3ca2.jpeg",
    ],
  },
  {
    name: "Color Block Illustration Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Korean-style color block design with cute hand-drawn illustrations.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-03-02/3a10024f-968f-4c89-a68a-94bee0a0ceb2.jpeg.a.jpeg",
      "mms-goods-image/2026-03-02/0e63254e-bef7-40e5-8b1c-9d8c98a004fb.jpeg.a.jpeg",
      "mms-goods-image/2026-03-02/6928bb44-91b1-46ea-acfa-69c20d5d8ff5.jpeg.a.jpeg",
    ],
  },
  {
    name: "Angel Kitty Stand Case",
    category: "iPhone",
    yuan: 5.8,
    description: "Dreamy angel kitten design with a fold-out stand. Soft and protective.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-08-28/86077146-0f67-47dc-9ba3-f0135825cc4e.jpeg",
      "mms-goods-image/2026-08-28/ef49b6b8-55f3-441c-afa6-df72f3bb7bae.jpeg",
      "mms-goods-image/2026-08-28/bf61a5e3-104a-431c-ab38-d44bdab4fb51.jpeg",
      "mms-goods-image/2026-08-28/52d3e553-7348-4dfe-8947-382ab06045ce.jpeg",
    ],
  },
  {
    name: "Fresh Lily Leather Case",
    category: "iPhone",
    yuan: 4.98,
    description: "Soft lambskin-feel case with a fresh white lily print. Elegant and minimal.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-05-12/3c8c8c68-995f-4825-83b6-ebf39c3cfcbc.png.a.jpeg",
      "mms-goods-image/2026-05-12/440b3f5c-65ce-4cfe-a7de-4a8fb97789f2.png.a.jpeg",
      "mms-goods-image/2026-05-12/f8be959f-1033-4f47-a2a4-55550a633534.png.a.jpeg",
      "mms-goods-image/2026-05-12/759a580c-9ec2-43d3-ac7e-fa49dd70537b.png.a.jpeg",
    ],
  },
  {
    name: "Retro Daisy Art Case",
    category: "iPhone",
    yuan: 5.99,
    description: "Vintage daisy illustration on a glossy hard case. Artsy and aesthetic.",
    sizes: ["iPhone 11", ...IPHONES],
    imgs: [
      "mms-material-img/2023-05-26/391a8042-0aa5-4abe-815b-c719d18dd749.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/c8787b57-48f7-49d4-9138-efbd04c53a00.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/7920b4e7-ec09-4f79-81ba-e75147f84ab9.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/9b18f7cd-f59f-4fa7-8761-c63a0a25caf2.jpeg.a.jpeg",
    ],
  },
  {
    name: "Oil Painting Kitty Case",
    category: "iPhone",
    yuan: 4.69,
    description: "Cute cat in an oil painting style on a glossy full-cover hard case.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-material-img/2025-05-06/c6e84625-3365-4265-89ae-e8391c4f9b0a.jpeg",
      "mms-material-img/2025-05-06/a96b8ad6-e17b-4876-a995-623969972cef.jpeg",
      "mms-material-img/2025-05-06/e299674c-5278-4960-bdee-ca25ea0d9401.jpeg",
      "mms-material-img/2025-05-06/966dc748-8b96-462c-96fa-c118e8e7b94e.jpeg",
    ],
  },
  {
    name: "Red Puppy Doodle Case",
    category: "iPhone",
    yuan: 3.98,
    description: "White cartoon puppies on a bold red glossy hard case.",
    sizes: IPHONES_PRO,
    imgs: [
      "open-gw/2025-07-03/ccff6a29-b9f4-465a-be81-12dff3a7308d.jpeg",
      "open-gw/2025-07-03/ffd3f9f9-18f6-4519-9f7d-7d92901c003f.jpeg",
      "open-gw/2025-07-03/d7d3bed9-f677-433e-ad89-590d97622d09.jpeg",
      "open-gw/2025-07-03/122e6861-227a-4292-8df2-727f44128245.jpeg",
    ],
  },
  {
    name: "Lavender Flower Frame Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Lavender case with a cute cartoon portrait framed by little flowers.",
    sizes: IPHONES_PRO,
    imgs: [
      "open-gw/2025-05-21/c0ba2f11-5c5c-43c3-b391-996d6d53e29b.jpeg",
      "open-gw/2025-05-21/c8bed091-3b53-4551-b5bc-c512d25ce6ae.jpeg",
      "open-gw/2025-05-21/9c33eba1-d52f-4cf8-95ec-723c3a3a3e2e.jpeg",
      "open-gw/2025-05-21/50d811f4-8815-49e6-bfc3-cb500b3ad26d.jpeg",
    ],
  },
  {
    name: "Chibi Maruko Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Classic Chibi Maruko-chan cartoon on a glossy hard case.",
    sizes: IPHONES_PRO,
    imgs: [
      "open-gw/2025-01-16/4fb762d2-b1cd-4d5b-94f1-216f802ef8f5.jpeg",
      "open-gw/2025-01-16/6bc36552-f159-49b0-b150-fd90b504e8d6.jpeg",
      "open-gw/2025-01-16/2a082b71-98df-4413-80bd-a24311edb205.jpeg",
      "open-gw/2025-01-16/d5cea2d8-e332-4ab4-a320-5f2efd87dc99.jpeg",
    ],
  },
  {
    name: "Clear Little Monster Case",
    category: "Samsung",
    yuan: 3.18,
    description: "Clear case with playful colorful monster doodles.",
    sizes: GALAXY_S,
    imgs: [
      "open-gw/2025-12-24/10620b36-f4c4-400e-8265-7a85a85f575a.jpeg",
      "open-gw/2025-12-24/fedcef13-1096-442f-9253-c97c8bd92be5.jpeg",
      "open-gw/2025-12-24/7dcf35d3-b8c1-48ff-b1e3-8d04b674d473.jpeg",
    ],
  },
  {
    name: "Happy Puppy Case",
    category: "Samsung",
    yuan: 3.99,
    description: "Smiling puppy on a shockproof hard case.",
    sizes: GALAXY_S,
    imgs: [
      "open-gw/2025-12-04/7f0a21eb-6462-4b2e-8230-71406716c9ad.jpeg",
      "open-gw/2025-12-04/09bf0076-bb21-446e-b333-41c20c4df965.jpeg",
      "open-gw/2025-12-04/c2748100-1bcb-4bf3-b060-809e26634e21.jpeg",
      "open-gw/2025-12-04/6d39baa6-dd48-4a1a-9e32-cf4472fe327a.jpeg",
    ],
  },
  {
    name: "Cute Bear Clear Case",
    category: "Samsung",
    yuan: 9.78,
    description: "Clear case with an adorable bear design that shows off your phone's color.",
    sizes: ["Galaxy S23 Ultra", "Galaxy S24 Ultra"],
    imgs: [
      "mms-material-img/2024-01-21/b54caf39-2085-4b4c-8293-2d3ad8ef95a9.png",
      "mms-material-img/2024-01-21/c40b888d-7038-4d8b-ab3e-63604bc52628.png",
      "mms-material-img/2024-01-21/abebd46a-8f86-4218-a096-6b6cbf7b6c66.png",
      "mms-material-img/2024-01-21/0b32e6a6-e7b7-4d24-9e03-701b93890262.png",
    ],
  },
  {
    name: "Capybara Clear Case",
    category: "Samsung",
    yuan: 9.78,
    description: "Clear case with a chill capybara design.",
    sizes: ["Galaxy S23 Ultra", "Galaxy S24 Ultra"],
    imgs: [
      "mms-material-img/2024-01-21/3521d975-ca34-44e4-8dc5-61294289e65a.png",
      "mms-material-img/2024-01-21/8bca205c-50b5-4eb8-8f6e-17a9f17e38c9.png",
      "mms-material-img/2024-01-21/23298705-a02c-4e61-b3e5-5df9e5015009.png",
      "mms-material-img/2024-01-21/53141fc8-6156-44f6-945a-34d7df1d9cb9.png",
    ],
  },
  {
    name: "Colorful Stripes Glossy Case",
    category: "Samsung",
    yuan: 8.9,
    description: "Cheerful rainbow stripes on a glossy full-edge hard case.",
    sizes: ["Galaxy S24 Ultra"],
    imgs: [
      "mms-material-img/2024-01-28/dcf7b83c-f58e-4f94-94dd-4d33f1b80967.jpeg",
      "mms-material-img/2024-01-28/7345096c-4489-4f11-a490-a3f30bcb37a4.jpeg",
      "mms-material-img/2024-01-28/3c088f8d-198e-4346-9b3f-fe343eae74ed.jpeg",
      "mms-material-img/2024-01-28/5cdbf070-3258-4fab-9cbe-031cc3dd138a.jpeg",
    ],
  },
  {
    name: "Plaid Bear Stand Case",
    category: "Samsung",
    yuan: 6.9,
    description: "Gingham plaid soft case with a cute bear and a built-in stand.",
    sizes: ["Galaxy S24 Ultra"],
    imgs: [
      "mms-material-img/2024-04-27/90cd22b6-87fb-42d4-acb7-4940afc772f5.jpeg.a.jpeg",
      "mms-material-img/2024-04-27/36215188-b41d-4480-b5b1-80ab2d2e7875.jpeg.a.jpeg",
      "mms-material-img/2024-04-27/6e9cf56a-956d-4e4d-b25f-27f8db184556.jpeg.a.jpeg",
    ],
  },
];

const products = items.map(({ yuan, imgs, ...item }, i) => {
  const images = imgs.map((path) => `/img/${path}`);
  return {
    id: i + 1,
    ...item,
    price: toBDT(yuan),
    image: images[0],
    images,
    available: false,
  };
});

export default products;
