export interface Category {
  id: string;
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  title: { en: string; ar: string };
  price: number;
  originalPrice?: number;
  store: string;
  category: string;
  color: 'clay' | 'teal' | 'sand' | 'ink' | 'gold';
  imageLabel: string;
  tags: { en: string[]; ar: string[] };
  rating: number;
  reviews: number;
  story?: { en: string; ar: string };
  materials?: { en: string; ar: string };
  dimensions?: string;
}

export interface Store {
  name: { en: string; ar: string };
  location: { en: string; ar: string };
  followers: number;
  yearOpen: number;
  color: 'clay' | 'teal' | 'sand' | 'ink' | 'gold';
}

export interface Collection {
  id: string;
  en: string;
  ar: string;
  sub: { en: string; ar: string };
  color: 'clay' | 'teal' | 'sand' | 'ink' | 'gold';
  kind: 'hero' | 'medium';
}

export const CATEGORIES: Category[] = [
  { id: 'textiles', en: 'Textiles', ar: 'منسوجات' },
  { id: 'ceramics', en: 'Ceramics', ar: 'خزف' },
  { id: 'leather', en: 'Leather', ar: 'جلود' },
  { id: 'jewelry', en: 'Jewelry', ar: 'مجوهرات' },
  { id: 'home', en: 'Home', ar: 'منزل' },
  { id: 'paper', en: 'Paper & Print', ar: 'ورق وطباعة' },
  { id: 'copper', en: 'Copper', ar: 'نحاس' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: { en: 'Hand-loomed Saidi Wool Throw', ar: 'بطانية صوف صعيدي منسوجة يدويًا' },
    price: 1850,
    store: 's1',
    category: 'textiles',
    color: 'clay',
    imageLabel: 'wool throw · naqada',
    tags: { en: ['Handwoven', 'Naqada'], ar: ['نسيج يدوي', 'نقادة'] },
    rating: 4.9,
    reviews: 128,
    story: {
      en: 'Woven on a four-pedal loom in Naqada by Um Sayed, a third-generation weaver. Each piece takes 11 days.',
      ar: 'تنسج على نول ذي أربعة دواسات في نقادة على يد أم سيد، نساجة من الجيل الثالث. تستغرق كل قطعة 11 يومًا.',
    },
    materials: { en: 'Hand-spun wool, natural indigo', ar: 'صوف مغزول يدويًا، نيلة طبيعية' },
    dimensions: '140 × 200 cm',
  },
  {
    id: 'p2',
    title: { en: 'Fustat Ceramic Serving Bowl', ar: 'صحن تقديم فسطاط خزفي' },
    price: 680,
    store: 's2',
    category: 'ceramics',
    color: 'teal',
    imageLabel: 'glazed bowl · fustat',
    tags: { en: ['Glazed', 'Food-safe'], ar: ['مفرغة', 'آمن للطعام'] },
    rating: 4.8,
    reviews: 64,
  },
  {
    id: 'p3',
    title: { en: 'Moulid Sugar Doll Print – A2', ar: 'طبعة عروسة المولد – A2' },
    price: 320,
    store: 's3',
    category: 'paper',
    color: 'sand',
    imageLabel: 'risograph print',
    tags: { en: ['Risograph', 'Ed. of 50'], ar: ['ريزوغراف', 'إصدار 50'] },
    rating: 5.0,
    reviews: 42,
  },
  {
    id: 'p4',
    title: { en: 'Stitched Leather Passport Sleeve', ar: 'جراب جواز سفر جلدي مخيط' },
    price: 540,
    store: 's4',
    category: 'leather',
    color: 'ink',
    imageLabel: 'leather sleeve',
    tags: { en: ['Full-grain', 'Monogram'], ar: ['جلد طبيعي', 'مونوغرام'] },
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 'p5',
    title: { en: 'Filigree Silver Earrings – Lotus', ar: 'أقراط فضة مشغولة – زهرة اللوتس' },
    price: 1420,
    store: 's5',
    category: 'jewelry',
    color: 'gold',
    imageLabel: 'silver filigree',
    tags: { en: ['925 silver', 'Handmade'], ar: ['فضة 925', 'صناعة يدوية'] },
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 'p6',
    title: { en: 'Aswan Palm-Leaf Basket', ar: 'سلة من سعف نخيل أسوان' },
    price: 240,
    store: 's6',
    category: 'home',
    color: 'sand',
    imageLabel: 'palm basket',
    tags: { en: ['Natural fiber'], ar: ['ألياف طبيعية'] },
    rating: 4.6,
    reviews: 51,
  },
  {
    id: 'p7',
    title: { en: 'Hammered Copper Tea Tray', ar: 'صينية شاي نحاس مطروق' },
    price: 1290,
    store: 's7',
    category: 'copper',
    color: 'clay',
    imageLabel: 'copper tray · khan',
    tags: { en: ['Khan el-Khalili'], ar: ['خان الخليلي'] },
    rating: 4.9,
    reviews: 94,
  },
  {
    id: 'p8',
    title: { en: 'Khayamiya Appliqué Cushion', ar: 'وسادة خيامية مطرزة' },
    price: 780,
    store: 's8',
    category: 'textiles',
    color: 'teal',
    imageLabel: 'khayamiya cushion',
    tags: { en: ['Tentmaker St.'], ar: ['شارع الخيامية'] },
    rating: 4.8,
    reviews: 38,
  },
];

export const STORES: Record<string, Store> = {
  s1: {
    name: { en: 'Beit el-Nassag', ar: 'بيت الناسّاج' },
    location: { en: 'Naqada, Qena', ar: 'نقادة، قنا' },
    followers: 1248,
    yearOpen: 2019,
    color: 'clay',
  },
  s2: {
    name: { en: 'Fustat Clay Studio', ar: 'استوديو طين الفسطاط' },
    location: { en: 'Old Cairo', ar: 'مصر القديمة' },
    followers: 892,
    yearOpen: 2021,
    color: 'teal',
  },
  s3: {
    name: { en: 'Riso Tahrir', ar: 'ريزو التحرير' },
    location: { en: 'Downtown Cairo', ar: 'وسط البلد، القاهرة' },
    followers: 2104,
    yearOpen: 2020,
    color: 'sand',
  },
  s4: {
    name: { en: 'Qasab Leatherworks', ar: 'قصب للأعمال الجلدية' },
    location: { en: 'Alexandria', ar: 'الإسكندرية' },
    followers: 3410,
    yearOpen: 2017,
    color: 'ink',
  },
  s5: {
    name: { en: 'Noor Silver Atelier', ar: 'أتيليه نور للفضة' },
    location: { en: 'Zamalek, Cairo', ar: 'الزمالك، القاهرة' },
    followers: 5620,
    yearOpen: 2015,
    color: 'gold',
  },
  s6: {
    name: { en: 'Saff Nile', ar: 'صف النيل' },
    location: { en: 'Aswan', ar: 'أسوان' },
    followers: 740,
    yearOpen: 2022,
    color: 'sand',
  },
  s7: {
    name: { en: 'Naḥas Workshop', ar: 'ورشة نحّاس' },
    location: { en: 'Khan el-Khalili', ar: 'خان الخليلي' },
    followers: 4180,
    yearOpen: 2018,
    color: 'clay',
  },
  s8: {
    name: { en: 'Khayamiya Twelve', ar: 'خيامية ١٢' },
    location: { en: 'Cairo', ar: 'القاهرة' },
    followers: 1980,
    yearOpen: 2020,
    color: 'teal',
  },
};

export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    en: 'Voices of Upper Egypt',
    ar: 'أصوات الصعيد',
    sub: { en: 'Ten weavers, one valley', ar: 'عشر نساجات، وادٍ واحد' },
    color: 'clay',
    kind: 'hero',
  },
  {
    id: 'c2',
    en: 'The Tentmakers of Cairo',
    ar: 'خيامية القاهرة',
    sub: { en: 'A 400-year-old stitch', ar: 'غرزة عمرها ٤ ٠٠ عام' },
    color: 'teal',
    kind: 'medium',
  },
  {
    id: 'c3',
    en: 'Clay from the Delta',
    ar: 'طين الدلتا',
    sub: { en: 'Potters reviving old forms', ar: 'خزافون يحيون أشكالًا قديمة' },
    color: 'sand',
    kind: 'medium',
  },
];

export const STRINGS = {
  en: {
    appName: 'Bazzar',
    tagline: 'Handmade, in Egypt.',
    search: 'Search makers, crafts, cities…',
    home: 'Home',
    shop: 'Shop',
    messages: 'Messages',
    favorites: 'Saved',
    account: 'Me',
    addToCart: 'Add to cart',
    buyNow: 'Buy now',
    follow: 'Follow store',
    following: 'Following',
    message: 'Message',
    share: 'Share',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    placeOrder: 'Place order',
    trackOrder: 'Track order',
    freeShippingOver: 'Free shipping over EGP 2,000',
    story: 'The story',
    materials: 'Materials',
    dimensions: 'Dimensions',
    madeIn: 'Made in',
    editorial: 'Editorial',
    reviews: 'reviews',
  },
  ar: {
    appName: 'بازار',
    tagline: 'صنع في مصر، بأيدٍ مصرية.',
    search: 'ابحث عن حرفي، حرفة، مدينة…',
    home: 'الرئيسية',
    shop: 'تسوّق',
    messages: 'الرسائل',
    favorites: 'المحفوظات',
    account: 'حسابي',
    addToCart: 'أضف إلى السلة',
    buyNow: 'اشترِ الآن',
    follow: 'تابع المتجر',
    following: 'متابع',
    message: 'راسل',
    share: 'مشاركة',
    cart: 'السلة',
    checkout: 'إتمام الطلب',
    total: 'الإجمالي',
    placeOrder: 'تأكيد الطلب',
    trackOrder: 'تتبع الطلب',
    freeShippingOver: 'شحن مجاني للطلبات فوق ٢ ٠٠٠ ج.م',
    story: 'الحكاية',
    materials: 'الخامات',
    dimensions: 'المقاس',
    madeIn: 'صنع في',
    editorial: 'مقال',
    reviews: 'مراجعة',
  },
};

export const t = (lang: string, key: string): string => {
  return (STRINGS[lang as keyof typeof STRINGS] as any)?.[key] || key;
};

export const bi = (obj: any, lang: string): string => {
  return (obj && (obj[lang] || obj.en)) || '';
};

export const fmtEGP = (v: number, lang: string): string => {
  const num = v.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
  return lang === 'ar' ? `${num} ج.م` : `EGP ${num}`;
};
