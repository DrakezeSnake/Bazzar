# Bazzar – Egyptian Handmade Marketplace

A modern, bilingual (English/Arabic) e-commerce platform for Egyptian handmade crafts, built with the design specifications from the Souq Yadawi handoff bundle.

## Design System

The project implements a complete design system with:

### Colors
- **Sand**: `#F3EADB` (primary light background)
- **Clay**: `#C97A50` (accent, warm)
- **Teal**: `#1F4A47` (accent, cool)
- **Gold**: `#C9A24A` (accent, premium)
- **Ink**: `#2A2520` (primary text)
- **Paper**: `#FBF6EC` (card backgrounds)

### Typography
- **Display**: Fraunces (serif, Egyptian/Amiri for Arabic)
- **Body**: Inter (sans-serif, Readex Pro for Arabic)
- **Mono**: JetBrains Mono

### Components
- Buttons (primary, secondary, ghost)
- Cards
- Icons (20+ SVG icons)
- Ratings
- Store avatars
- Placeholders
- Product cards

### Features
- Light/dark theme support
- RTL (right-to-left) support for Arabic
- Responsive design
- State management (cart, favorites, follows, language, theme)

## Project Structure

```
/home/user/Bazzar/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card component
│   ├── Icon.tsx             # Icon system
│   ├── Placeholder.tsx       # Image placeholder
│   ├── Rating.tsx           # Rating display
│   └── StoreAvatar.tsx      # Store avatar
├── lib/
│   ├── data.ts              # Products, stores, translations
│   └── store.ts             # Zustand state management
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
└── README.md               # This file
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build

```bash
npm run build
npm start
```

## Implemented Features

### Mobile Screens (from design)
- [x] Home feed (featured products, collections, makers)
- [ ] Product page (detail, reviews, related items)
- [ ] Shopping cart (items, quantities, totals)
- [ ] Checkout (shipping, payment methods)
- [ ] Order tracking (status timeline, delivery info)

### Desktop Screens (from design)
- [ ] Seller dashboard (stats, orders, revenue)
- [ ] Add product (form, preview, AI suggestions)
- [ ] Analytics (charts, top products, visitor locations)
- [ ] Storefront (store hero, products, stats)

### Features
- ✅ Bilingual support (English/Arabic)
- ✅ RTL layout support
- ✅ Theme switcher (light/dark)
- ✅ Product catalog (8 products, 8 stores, 7 categories)
- ✅ State management (cart, favorites, follows, language, theme)
- ✅ Responsive design
- ✅ Complete design system

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint
- `npm run type-check` – Run TypeScript type checking

## Data

The application includes sample data:

### Products
- 8 handmade Egyptian products across 7 categories
- Each with pricing, reviews, stories, materials, and dimensions
- Real Egyptian artisans and locations

### Stores
- 8 makers with follower counts, locations, and founding years
- Color-coded (clay, teal, sand, ink, gold)

### Collections
- Editorial collections with themes like "Voices of Upper Egypt"
- Bilingual descriptions and story context

### Translations
- English and Arabic UI strings
- Proper number formatting for Egyptian pounds (EGP)
- RTL-aware layout

## Theming

The design system supports:

1. **Color Themes**: Light and dark modes
2. **Type Pairing**: Classic, editorial, crafted (extensible)
3. **Language**: English and Arabic with full RTL support

Switch themes using the UI toggle or programmatically:

```typescript
const { theme, toggleTheme } = useAppStore();
```

## State Management

Global state is managed with Zustand:

```typescript
import { useAppStore } from '@/lib/store';

const { lang, toggleLang, cart, addToCart } = useAppStore();
```

## Next Steps

To complete the design implementation:

1. Create mobile screens (Product, Cart, Checkout, Tracking)
2. Create desktop screens (Dashboard, Analytics, Add Product, Storefront)
3. Add product pages with navigation
4. Implement checkout flow
5. Add API integration
6. Deploy to production

## Technologies

- **Next.js 14** – React framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **Zustand** – State management
- **React 18** – UI library

## Notes

- The design system is fully CSS custom property compatible
- All components are responsive and accessible
- RTL support is built-in for all components
- Dark mode uses CSS classes (can be extended with prefers-color-scheme)
- Icons use inline SVG for better performance and customization

## License

Private project for Bazzar Egyptian Crafts Marketplace.
