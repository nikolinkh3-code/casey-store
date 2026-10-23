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
      "mms-goods-image/2026-08-12/51f9749a-ad86-436c-86e9-9442d83edcce.jpeg",
      "mms-goods-image/2026-08-12/ec287d4f-6381-4e2d-8660-dccdf0a15cee.jpeg",
      "mms-goods-image/2026-08-12/fe1574d2-5b06-401c-a9a2-b7763d1622e3.jpeg",
      "mms-goods-image/2026-08-12/ebcb44f1-4812-4fa8-8fe2-6c80ab8b90c3.jpeg",
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
      "mms-goods-image/2026-08-10/2ae019f0-6ac5-4be5-a46d-d077ba16d422.jpeg",
      "mms-goods-image/2026-08-10/93c6985b-2299-4c96-95c3-cf80ff7ddbbe.jpeg",
      "mms-goods-image/2026-08-10/c64fcd8d-16bc-45b0-b1ff-4c53f5194f3c.jpeg",
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
      "mms-goods-image/2026-04-23/e8820cb8-d90d-4250-9379-99d1429a3ca2.jpeg",
      "mms-goods-image/2026-04-23/87455160-c24e-4ed6-9dd5-a81609805f3b.jpeg",
      "mms-goods-image/2026-04-23/fe761bf3-2988-48f1-8ddd-0d30b5795900.jpeg",
    ],
  },
  {
    name: "Color Block Illustration Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Korean-style color block design with cute hand-drawn illustrations.",
    sizes: IPHONES_PRO,
    imgs: [
      "mms-goods-image/2026-03-02/0e63254e-bef7-40e5-8b1c-9d8c98a004fb.jpeg.a.jpeg",
      "mms-goods-image/2026-03-02/6928bb44-91b1-46ea-acfa-69c20d5d8ff5.jpeg.a.jpeg",
      "mms-goods-image/2026-03-02/3a10024f-968f-4c89-a68a-94bee0a0ceb2.jpeg.a.jpeg",
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
      "mms-goods-image/2026-08-28/09bf9c00-5042-4c30-bd1c-50679df0c4f5.jpeg",
      "mms-goods-image/2026-08-28/338b3214-e46a-49ee-b2e7-802f1cc34d01.jpeg",
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
      "mms-material-img/2023-05-26/c4e01e57-d92f-4cee-8791-c23a0d7a5be9.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/391a8042-0aa5-4abe-815b-c719d18dd749.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/9b18f7cd-f59f-4fa7-8761-c63a0a25caf2.jpeg.a.jpeg",
      "mms-material-img/2023-05-26/fee5be7a-89f5-426b-bdfc-254839352356.jpeg.a.jpeg",
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
      "mms-material-img/2025-05-06/fa41708e-2190-46b2-b9fb-18d13c48445b.jpeg",
      "mms-material-img/2025-05-06/d5a9ecd5-3f2f-4c90-881e-dc88612f2632.jpeg",
    ],
  },
  {
    name: "Line Art Puppy Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Simple line-drawn puppy on a glossy hard case. Clean and minimal.",
    sizes: IPHONES_PRO,
    imgs: [
      "open-gw/2025-07-03/ccff6a29-b9f4-465a-be81-12dff3a7308d.jpeg",
      "open-gw/2025-07-03/7f72461e-de07-4052-904b-ad2bdde3d47a.jpeg",
      "open-gw/2025-07-03/e7dad214-95e7-49c1-a0a8-7b1cbb138837.jpeg",
      "open-gw/2025-07-03/669990c0-a710-4e13-9e4a-8c1c1dc327f6.jpeg",
    ],
  },
  {
    name: "Hug Me Bear Case",
    category: "iPhone",
    yuan: 3.98,
    description: "Sweet hugging bear illustration on a glossy hard case.",
    sizes: IPHONES_PRO,
    imgs: [
      "open-gw/2025-05-21/7e3431ce-cb47-486a-8513-c42130e50f05.jpeg",
      "open-gw/2025-05-21/3096378a-8769-4eb2-9b7c-990154e834eb.jpeg",
      "open-gw/2025-05-21/502e890d-118f-4e81-b72b-5201ced6dd3d.jpeg",
      "open-gw/2025-05-21/371b7f53-f054-444d-8d5a-7d9dee9ead5f.jpeg",
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
      "open-gw/2025-01-16/9975622f-4aca-40e1-8d99-dc090dd8634c.jpeg",
      "open-gw/2025-01-16/6bc36552-f159-49b0-b150-fd90b504e8d6.jpeg",
      "open-gw/2025-01-16/a6021681-8f41-4530-b0c5-aa90386a0b2f.jpeg",
    ],
  },
  {
    name: "Cute Soft Couple Case",
    category: "Samsung",
    yuan: 4.98,
    description: "Cute cartoon soft case with full edge protection. Comes in matching couple designs.",
    sizes: ["Galaxy A55", ...GALAXY_S, "Galaxy S26"],
    imgs: [
      "open-gw/2025-05-15/f1491d39-833f-47df-82f9-5fa60bc459f2.jpeg",
      "open-gw/2025-05-15/8fdd2cd2-eb73-4037-97b5-5fca27cdbb58.jpeg",
      "open-gw/2025-05-15/93e38b85-28e5-4bb4-99f1-d21fb2a0d805.jpeg",
      "open-gw/2025-05-15/03cd9de2-818d-4718-8dde-b8ea139d58a3.jpeg",
    ],
  },
  {
    name: "Colorful Little Monster Case",
    category: "Samsung",
    yuan: 3.18,
    description: "Playful colorful monster doodles in a fun ins style.",
    sizes: GALAXY_S,
    imgs: [
      "open-gw/2025-12-24/10620b36-f4c4-400e-8265-7a85a85f575a.jpeg",
      "open-gw/2025-12-24/b6c1b6c2-e21f-4a24-ac7a-daeea26f6d23.jpeg",
      "open-gw/2025-12-24/de44d705-3f22-486c-9a0f-848781f8588c.jpeg",
      "open-gw/2025-12-24/89dacbc7-1c0f-4137-bda8-5fa5ad745e4f.jpeg",
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
      "open-gw/2025-12-04/699cf091-a7f7-4455-b9b3-4cedf3300f8c.jpeg",
      "open-gw/2025-12-04/c2748100-1bcb-4bf3-b060-809e26634e21.jpeg",
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
      "mms-material-img/2023-11-21/49b1237a-4e02-4295-9112-065b5f292cb7.jpeg",
      "mms-material-img/2023-11-21/eb47ad37-6e79-4fb0-964b-5810114391fb.jpeg",
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
      "mms-material-img/2023-11-21/49b1237a-4e02-4295-9112-065b5f292cb7.jpeg",
      "mms-material-img/2023-11-21/eb47ad37-6e79-4fb0-964b-5810114391fb.jpeg",
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
      "mms-material-img/2024-01-28/eb8aa8ef-94f7-478e-90a7-027f3ed78ced.jpeg",
      "mms-material-img/2024-01-28/3c088f8d-198e-4346-9b3f-fe343eae74ed.jpeg",
    ],
  },
  {
    name: "Bunny & Kitty Stand Case",
    category: "Samsung",
    yuan: 6.9,
    description: "Bunny and kitten cartoon soft case with a built-in stand.",
    sizes: ["Galaxy S24 Ultra"],
    imgs: [
      "mms-material-img/2024-04-27/40adf5d5-d830-4158-9458-5e0559626ffc.jpeg.a.jpeg",
      "mms-material-img/2024-04-27/90cd22b6-87fb-42d4-acb7-4940afc772f5.jpeg.a.jpeg",
      "mms-material-img/2024-04-27/bb4c5c5c-bab7-4155-8d48-427fdd04cf0e.jpeg.a.jpeg",
      "mms-material-img/2024-04-27/36215188-b41d-4480-b5b1-80ab2d2e7875.jpeg.a.jpeg",
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
