# Casey — Phone Covers

Phone cover store website (React + Vite), made from the Minibee store.

## Run on your computer
```
npm install
npm run dev
```

## Publish (Cloudflare Pages)
- Build command: `npm run build`
- Output folder: `dist`

## Products
- Edit `src/data/products.js`, or
- Use a Google Sheet with columns: `name, category, price, images, description, available, models`
  (models separated by commas, e.g. `iPhone 13, iPhone 14`), publish it as CSV and paste the link in `src/data/useProducts.js` (`SHEET_CSV_URL`).
- Product photos go in `public/products/`.
